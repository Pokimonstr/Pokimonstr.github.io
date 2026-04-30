// DOM Elements
const avatarWrapper = document.getElementById('avatarWrapper');
const avatarInput = document.getElementById('avatarInput');
const avatarPreview = document.getElementById('avatarPreview');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const saveBtn = document.getElementById('saveBtn');
const displayName = document.getElementById('displayName');
const displayEmail = document.getElementById('displayEmail');

// 1. Клик по аватарке открывает выбор файла
avatarWrapper.addEventListener('click', () => {
    avatarInput.click();
});

// 2. Обработка загрузки нового фото
avatarInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageData = event.target.result;
            avatarPreview.src = imageData;
            
            // Сохраняем фото в LocalStorage
            localStorage.setItem('userAvatar', imageData);
            showNotification('Аватарка обновлена!');
        };
        reader.readAsDataURL(file);
    }
});

// 3. Загрузка данных при старте
window.addEventListener('load', () => {
    // Загрузка аватара
    const savedAvatar = localStorage.getItem('userAvatar');
    if (savedAvatar) {
        avatarPreview.src = savedAvatar;
    }

    // Загрузка имени и email
    const savedName = localStorage.getItem('userName');
    const savedEmail = localStorage.getItem('userEmail');

    if (savedName) {
        nameInput.value = savedName;
        displayName.textContent = savedName;
    }
    if (savedEmail) {
        emailInput.value = savedEmail;
        displayEmail.textContent = savedEmail;
    }
});

// 4. Сохранение настроек
saveBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name) {
        localStorage.setItem('userName', name);
        displayName.textContent = name;
    }
    if (email) {
        localStorage.setItem('userEmail', email);
        displayEmail.textContent = email;
    }

    showNotification('Данные сохранены!');
});

// Уведомление
function showNotification(msg) {
    const div = document.createElement('div');
    div.textContent = msg;
    div.style.cssText = `
        position: fixed; top: 100px; right: 20px;
        background: var(--primary); color: white;
        padding: 15px 25px; border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 9999; animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 2500);
}

// Мобильное меню
document.querySelector('.mobile-menu-btn')?.addEventListener('click', function() {
    document.querySelector('.nav-right').classList.toggle('mobile-active');
});