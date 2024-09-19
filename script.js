// Проверяем, загружается ли скрипт
console.log("Script loaded!");

// Инициализация Telegram Web App API
const tg = window.Telegram.WebApp;
console.log("Telegram Web App API initialized");

// Расширение Web App на весь экран
tg.expand();
console.log("Web App expanded");

// Получение данных пользователя Telegram
const user = tg.initDataUnsafe.user;

// Переменная для хранения баланса
let balance = 0;

// Убедимся, что DOM загружен перед тем, как запускать код
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    const statusText = document.getElementById('statusText');
    const balanceText = document.getElementById('balance');
    const mineBtn = document.getElementById('mineBtn');

    if (!statusText || !balanceText || !mineBtn) {
        console.error("Один из элементов не найден: статус, баланс или кнопка");
        return;
    }

    // Проверка наличия пользователя и отображение приветствия
    if (user) {
        statusText.textContent = `Привет, ${user.first_name}! Добро пожаловать в Крипто-майнер!`;
    } else {
        statusText.textContent = 'Добро пожаловать в Крипто-майнер!';
    }

    // Стартовый баланс
    balanceText.textContent = `Ваш баланс: ${balance.toFixed(8)} BTC`;

    // Логируем добавление обработчика события на кнопку
    console.log("Adding event listener to 'mineBtn'");

    // Обработка нажатия кнопки "Начать майнинг"
    mineBtn.addEventListener('click', () => {
        console.log("Mine button clicked");

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
