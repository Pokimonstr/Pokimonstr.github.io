// ===== МОБИЛЬНОЕ МЕНЮ =====
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav-right');

mobileMenuBtn?.addEventListener('click', () => {
    nav.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

const questions = [
    {
        id: 1,
        text: "She ___ to work every day.",
        options: [
            { value: "go", correct: false },
            { value: "goes", correct: true },
            { value: "going", correct: false }
        ]
    },
    {
        id: 2,
        text: "They ___ students.",
        options: [
            { value: "is", correct: false },
            { value: "are", correct: true },
            { value: "am", correct: false }
        ]
    },
    {
        id: 3,
        text: "Yesterday I ___ to the park.",
        options: [
            { value: "go", correct: false },
            { value: "gone", correct: false },
            { value: "went", correct: true }
        ]
    },
    {
        id: 4,
        text: "She ___ call you tomorrow.",
        options: [
            { value: "will", correct: true },
            { value: "would", correct: false },
            { value: "is", correct: false }
        ]
    },
    {
        id: 5,
        text: "You ___ smoke here.",
        options: [
            { value: "must", correct: false },
            { value: "mustn't", correct: true },
            { value: "can", correct: false }
        ]
    },
    {
        id: 6,
        text: "I want ___ learn English.",
        options: [
            { value: "to", correct: true },
            { value: "for", correct: false },
            { value: "of", correct: false }
        ]
    },
    {
        id: 7,
        text: "If I ___ rich, I would travel.",
        options: [
            { value: "am", correct: false },
            { value: "was", correct: false },
            { value: "were", correct: true }
        ]
    },
    {
        id: 8,
        text: "This book ___ by Tolstoy.",
        options: [
            { value: "wrote", correct: false },
            { value: "was written", correct: true },
            { value: "written", correct: false }
        ]
    },
    {
        id: 9,
        text: "I look forward ___ you.",
        options: [
            { value: "to see", correct: false },
            { value: "to seeing", correct: true },
            { value: "seeing", correct: false }
        ]
    },
    {
        id: 10,
        text: "By next year I ___ this course.",
        options: [
            { value: "will finish", correct: false },
            { value: "will have finished", correct: true },
            { value: "finish", correct: false }
        ]
    }
];

// ===== ИНИЦИАЛИЗАЦИЯ ТЕСТА =====
const testContainer = document.getElementById('testContainer');
let currentQuestion = 0;
let userAnswers = {};
let testCompleted = false;

function renderQuestion(index) {
    if (index >= questions.length) {
        showResults();
        return;
    }
    
    const q = questions[index];
    const selected = userAnswers[q.id] || '';
    
    testContainer.innerHTML = `
        <div class="test-question">
            <div class="question-number">${q.id}.</div>
            <div class="question-text">${q.text}</div>
            <div class="answers">
                ${q.options.map(opt => `
                    <label class="answer-option ${selected === opt.value ? 'selected' : ''}">
                        <input type="radio" name="q${q.id}" value="${opt.value}" ${selected === opt.value ? 'checked' : ''}>
                        <span>${opt.value}</span>
                    </label>
                `).join('')}
            </div>
            <button class="btn btn-next" id="nextBtn">
                ${index === questions.length - 1 ? 'Завершить тест' : 'Далее →'}
            </button>
        </div>
    `;
    
    // Обработчики выбора ответа
    document.querySelectorAll('.answer-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const radio = option.querySelector('input');
            radio.checked = true;
            userAnswers[q.id] = radio.value;
            
            document.querySelectorAll('.answer-option').forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
    
    // Кнопка "Далее"
    document.getElementById('nextBtn').addEventListener('click', () => {
        if (!userAnswers[q.id]) {
            alert('Пожалуйста, выберите ответ!');
            return;
        }
        currentQuestion++;
        renderQuestion(currentQuestion);
    });
}

function showResults() {
    // Подсчёт результатов
    let score = 0;
    questions.forEach(q => {
        if (userAnswers[q.id] === q.options.find(o => o.correct)?.value) {
            score++;
        }
    });
    
    // Определение уровня
    let level, levelText;
    if (score <= 3) {
        level = 'A1'; levelText = 'Beginner — Начальный уровень';
    } else if (score <= 5) {
        level = 'A2'; levelText = 'Elementary — Элементарный уровень';
    } else if (score <= 7) {
        level = 'B1'; levelText = 'Intermediate — Средний уровень';
    } else if (score <= 9) {
        level = 'B2'; levelText = 'Upper Intermediate — Выше среднего';
    } else {
        level = 'C1+'; levelText = 'Advanced — Продвинутый уровень';
    }
    
    testContainer.innerHTML = `
        <div class="test-results">
            <img src="fff.jpg" alt="Результат" class="result-image" onerror="this.style.display='none'">
            <h3>✨ Ваш результат:</h3>
            <div class="score">${score} / ${questions.length}</div>
            <div class="level-result">
                <strong>${level}</strong><br>
                ${levelText}
            </div>
            <button class="btn btn-primary btn-large" id="restartBtn">Пройти ещё раз</button>
        </div>
    `;
    
    document.getElementById('restartBtn').addEventListener('click', restartTest);
    testCompleted = true;
}

function restartTest() {
    currentQuestion = 0;
    userAnswers = {};
    testCompleted = false;
    renderQuestion(0);
}

// Запуск теста при загрузке
document.addEventListener('DOMContentLoaded', () => {
    renderQuestion(0);
});

// ===== СКРОЛЛ УРОВНЕЙ =====
const levelsScroll = document.getElementById('levelsScroll');
const scrollLeft = document.getElementById('scrollLeft');
const scrollRight = document.getElementById('scrollRight');

scrollLeft?.addEventListener('click', () => {
    levelsScroll.scrollBy({ left: -300, behavior: 'smooth' });
});

scrollRight?.addEventListener('click', () => {
    levelsScroll.scrollBy({ left: 300, behavior: 'smooth' });
});

// ===== ПЛАВНЫЙ СКРОЛЛ ДЛЯ ЯКОРЕЙ =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

