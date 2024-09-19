// Telegram Web App API и инициализация
if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.expand();

    const user = tg.initDataUnsafe.user;

    if (user) {
        console.log(`Пользователь Telegram: ${user.first_name}`);
    } else {
        console.log("Пользователь Telegram не обнаружен.");
    }
} else {
    console.error("Telegram Web App API не доступен. Запустите игру в Telegram.");
}

let balance = 0; // Стартовый баланс игрока

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

    // Логика для кнопок разделов
    farmBtn.addEventListener('click', () => {
        statusText.textContent = 'Вы открыли раздел "Ферма". Здесь можно управлять вашей криптофермой.';
    });

    shopBtn.addEventListener('click', () => {
        statusText.textContent = 'Вы открыли раздел "Магазин". Здесь можно покупать улучшения.';
    });

    gamesBtn.addEventListener('click', () => {
        statusText.textContent = 'Вы открыли раздел "Игры". Здесь можно играть в мини-игры.';
    });

    profileBtn.addEventListener('click', () => {
        // Проверка наличия данных пользователя
        if (tg.initDataUnsafe.user) {
            const user = tg.initDataUnsafe.user;
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
        }
    });
});
