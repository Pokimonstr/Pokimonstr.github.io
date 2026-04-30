// ===== API CONFIGURATION =====
const DICTIONARY_API = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

// ===== DOM ELEMENTS =====
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const wordResult = document.getElementById('wordResult');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const favoritesList = document.getElementById('favoritesList');
const noFavorites = document.getElementById('noFavorites');
const favoritesSearch = document.getElementById('favoritesSearch');
const favoritesSearchBtn = document.getElementById('favoritesSearchBtn');

// ===== STATE =====
let favorites = JSON.parse(localStorage.getItem('dictionaryFavorites')) || [];

// ===== EVENT LISTENERS =====
searchBtn.addEventListener('click', searchWord);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchWord();
});

document.getElementById('audioBtn').addEventListener('click', playAudio);
document.getElementById('favoriteBtn').addEventListener('click', toggleFavorite);

favoritesSearch.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') filterFavorites();
});
favoritesSearchBtn.addEventListener('click', filterFavorites);

// Mobile menu
document.querySelector('.mobile-menu-btn')?.addEventListener('click', function() {
    document.querySelector('.nav-right').classList.toggle('mobile-active');
});

// ===== FUNCTIONS =====

async function searchWord() {
    const word = searchInput.value.trim().toLowerCase();
    if (!word) return;

    // Show loading
    wordResult.classList.add('hidden');
    error.classList.add('hidden');
    loading.classList.remove('hidden');

    try {
        const response = await fetch(`${DICTIONARY_API}${word}`);
        
        if (!response.ok) {
            throw new Error('Word not found');
        }

        const data = await response.json();
        displayWord(data[0]);
        
    } catch (err) {
        error.classList.remove('hidden');
        console.error('Error:', err);
    } finally {
        loading.classList.add('hidden');
    }
}

function displayWord(data) {
    const wordTitle = document.getElementById('wordTitle');
    const wordTranslation = document.getElementById('wordTranslation');
    const wordDefinition = document.getElementById('wordDefinition');
    const wordPhonetic = document.getElementById('wordPhonetic');
    const phoneticBlock = document.getElementById('phoneticBlock');
    const favoriteBtn = document.getElementById('favoriteBtn');

    // Get first meaning
    const meaning = data.meanings[0];
    const definition = meaning.definitions[0].definition;
    const phonetic = data.phonetic || (data.phonetics.find(p => p.text)?.text) || '';

    // Update UI
    wordTitle.textContent = data.word;
    wordTranslation.textContent = getRussianTranslation(data.word);
    wordDefinition.textContent = definition;
    
    if (phonetic) {
        wordPhonetic.textContent = phonetic;
        phoneticBlock.classList.remove('hidden');
    } else {
        phoneticBlock.classList.add('hidden');
    }

    // Update favorite button state
    updateFavoriteButton(data.word);

    // Show result
    wordResult.classList.remove('hidden');
}

// Глобальная переменная для словаря
let dictionaryCache = {};

// Загрузка словаря при старте
async function loadDictionary() {
    try {
        const response = await fetch('dictionary-ru.json');
        if (!response.ok) throw new Error('Файл не найден');
        dictionaryCache = await response.json();
        console.log(`✅ Загружено ${Object.keys(dictionaryCache).length} слов`);
    } catch (err) {
        console.warn('⚠️ Не удалось загрузить словарь:', err);
        dictionaryCache = {}; // Пустой словарь как запасной вариант
    }
}

function getRussianTranslation(word) {
    const lowerWord = word.toLowerCase();
    
    // 1. Проверяем локальный кэш
    if (dictionaryCache[lowerWord]) {
        return dictionaryCache[lowerWord];
    }
    
    // 2. Пытаемся получить через MyMemory API (резерв)
    fetch(`https://api.mymemory.translated.net/get?q=${lowerWord}&langpair=en|ru`)
        .then(res => res.json())
        .then(data => {
            if (data.responseData?.translatedText) {
                const translation = data.responseData.translatedText;
                // Обновляем интерфейс, если слово сейчас отображается
                const currentWord = document.getElementById('wordTitle')?.textContent;
                if (currentWord?.toLowerCase() === lowerWord) {
                    document.getElementById('wordTranslation').textContent = translation;
                }
                // Кэшируем для будущих запросов
                dictionaryCache[lowerWord] = translation;
            }
        })
        .catch(err => console.log('Translation API error:', err));
    
    return 'перевод не найден';
}

// Вызов загрузки при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    loadDictionary();
    // ...остальной код инициализации
});

function playAudio() {
    const word = document.getElementById('wordTitle').textContent;
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
}

function toggleFavorite() {
    const word = document.getElementById('wordTitle').textContent;
    const translation = document.getElementById('wordTranslation').textContent;
    const definition = document.getElementById('wordDefinition').textContent;
    
    const index = favorites.findIndex(f => f.word.toLowerCase() === word.toLowerCase());
    
    if (index === -1) {
        // Add to favorites
        favorites.push({ word, translation, definition });
        showNotification('Добавлено в избранное ⭐');
    } else {
        // Remove from favorites
        favorites.splice(index, 1);
        showNotification('Удалено из избранного');
    }
    
    saveFavorites();
    updateFavoriteButton(word);
    renderFavorites();
}

function updateFavoriteButton(word) {
    const btn = document.getElementById('favoriteBtn');
    const icon = btn.querySelector('i');
    const isFavorite = favorites.some(f => f.word.toLowerCase() === word.toLowerCase());
    
    if (isFavorite) {
        btn.classList.add('active');
        icon.classList.remove('far');
        icon.classList.add('fas');
    } else {
        btn.classList.remove('active');
        icon.classList.remove('fas');
        icon.classList.add('far');
    }
}

function saveFavorites() {
    localStorage.setItem('dictionaryFavorites', JSON.stringify(favorites));
}

function renderFavorites(filter = '') {
    const filtered = favorites.filter(f => 
        f.word.toLowerCase().includes(filter.toLowerCase()) ||
        f.translation.toLowerCase().includes(filter.toLowerCase())
    );

    if (filtered.length === 0) {
        favoritesList.innerHTML = '';
        noFavorites.classList.remove('hidden');
        return;
    }

    noFavorites.classList.add('hidden');
    favoritesList.innerHTML = filtered.map(item => `
        <div class="favorite-item" data-word="${item.word}">
            <div class="favorite-word">
                <h4>${item.word}</h4>
                <p>${item.translation}</p>
            </div>
            <div class="favorite-actions">
                <button class="btn-small btn-small-audio" onclick="playFavoriteAudio('${item.word}')">
                    <i class="fas fa-volume-up"></i>
                </button>
                <button class="btn-small btn-small-delete" onclick="removeFavorite('${item.word}')">
                    <i class="fas fa-trash"></i> Удалить
                </button>
            </div>
        </div>
    `).join('');
}

function filterFavorites() {
    const filter = favoritesSearch.value.trim();
    renderFavorites(filter);
}

// Global functions for onclick handlers
window.playFavoriteAudio = function(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
};

window.removeFavorite = function(word) {
    favorites = favorites.filter(f => f.word.toLowerCase() !== word.toLowerCase());
    saveFavorites();
    renderFavorites(favoritesSearch.value.trim());
    
    // Update button if this word is currently displayed
    const currentWord = document.getElementById('wordTitle').textContent;
    if (currentWord.toLowerCase() === word.toLowerCase()) {
        updateFavoriteButton(word);
    }
};

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    renderFavorites();
    
    // Load example word on first visit
    if (favorites.length === 0) {
        searchInput.value = 'carpet';
        searchWord();
    }
});