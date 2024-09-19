// Telegram Web App API и инициализация
let user = null;  // Переменная для хранения данных пользователя

if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.expand();

    // Получение данных пользователя Telegram
    user = tg.initDataUnsafe.user;

    if (user) {
        console.log("Данные пользователя получены:", user);
    } else {
        console.log("Данные пользователя не получены. Возможно, Web App не открыт в Telegram.");
    }
} else {
    console.error("Telegram Web App API не доступен. Запустите игру в Telegram.");
}

// Стартовый баланс игрока
let balance = 0;

document.addEventListener("DOMContentLoaded", () => {
    const statusText = document.getElementById('statusText');
    const balanceText = document.getElementById('balance');
    const mineBtn = document.getElementById('mineBtn');

    // Элементы для разделов
    const farmBtn = document.getElementById('farmBtn');
    const shopBtn = document.getElementById('shopBtn');
    const gamesBtn = document.getElementById('gamesBtn');
    const profileBtn = document.getElementById('profileBtn');

    // Логика кнопки "Начать майнинг"
    mineBtn.addEventListener('click', () => {
        statusText.textContent = 'Майнинг...';
        setTimeout(() => {
            const minedAmount = Math.random().toFixed(8);
            balance += parseFloat(minedAmount);
            statusText.textContent = `Вы намайнили: ${minedAmount} BTC`;
            balanceText.textContent = `Ваш баланс: ${balance.toFixed(8)} BTC`;
        }, 2000);
    });

    // Логика для раздела "Профиль"
    profileBtn.addEventListener('click', () => {
        // Проверка наличия данных пользователя
        if (user) {
            console.log("Отображение профиля для пользователя:", user);
            const userProfile = `
                Имя: ${user.first_name || 'Неизвестно'}
                Фамилия: ${user.last_name || 'Неизвестно'}
                Username: ${user.username || 'Нет'}
                Telegram ID: ${user.id}
                Баланс: ${balance.toFixed(8)} BTC
            `;
            statusText.textContent = `Профиль игрока:\n${userProfile}`;
        } else {
            statusText.textContent = 'Профиль не доступен. Запустите игру через Telegram.';
            console.error("Профиль недоступен. Данные пользователя не получены.");
        }
    });
});
