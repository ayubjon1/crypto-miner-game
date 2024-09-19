// Инициализация Telegram Web App API
const tg = window.Telegram.WebApp;

// Расширение Web App на весь экран
tg.expand();

// Получение данных пользователя Telegram
const user = tg.initDataUnsafe.user;

// Переменная для хранения баланса
let balance = 0;

// Убедимся, что DOM загружен перед тем, как запускать код
document.addEventListener("DOMContentLoaded", () => {
    const statusText = document.getElementById('statusText');
    const balanceText = document.getElementById('balance');
    const mineBtn = document.getElementById('mineBtn');

    // Проверка наличия пользователя и отображение приветствия
    if (user) {
        statusText.textContent = `Привет, ${user.first_name}! Добро пожаловать в Крипто-майнер!`;
    } else {
        statusText.textContent = 'Добро пожаловать в Крипто-майнер!';
    }

    // Стартовый баланс
    balanceText.textContent = `Ваш баланс: ${balance.toFixed(8)} BTC`;

    // Обработка нажатия кнопки "Начать майнинг"
    mineBtn.addEventListener('click', () => {
        statusText.textContent = 'Майнинг...';

        // Имитация процесса майнинга с задержкой в 2 секунды
        setTimeout(() => {
            const minedAmount = Math.random().toFixed(8); // Случайное число с 8 знаками после запятой
            balance += parseFloat(minedAmount);
            statusText.textContent = `Вы намайнили: ${minedAmount} BTC`;
            balanceText.textContent = `Ваш баланс: ${balance.toFixed(8)} BTC`;
        }, 2000);
    });
});
