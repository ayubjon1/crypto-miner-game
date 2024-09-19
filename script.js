// Инициализация Telegram Web App API
const tg = window.Telegram.WebApp;

// Расширение Web App на весь экран
tg.expand();

// Получение данных пользователя Telegram
const user = tg.initDataUnsafe.user;

// Отображение имени пользователя на экране
document.addEventListener("DOMContentLoaded", () => {
    const statusText = document.getElementById('statusText');
    const balanceText = document.getElementById('balance');
    
    if (user) {
        statusText.textContent = `Привет, ${user.first_name}! Добро пожаловать в Крипто-майнер!`;
    } else {
        statusText.textContent = 'Добро пожаловать в Крипто-майнер!';
    }

    // Стартовый баланс
    let balance = 0;
    balanceText.textContent = `Ваш баланс: ${balance.toFixed(8)} BTC`;
});

// Эмуляция майнинга криптовалюты
function mineCrypto() {
    const statusText = document.getElementById('statusText');
    const balanceText = document.getElementById('balance');

    statusText.textContent = 'Майнинг...';

    // Имитация процесса майнинга с задержкой в 2 секунды
    setTimeout(() => {
        const minedAmount = Math.random().toFixed(8); // Случайное число с 8 знаками после запятой
        balance += parseFloat(minedAmount);
        statusText.textContent = `Вы намайнили: ${minedAmount} BTC`;
        balanceText.textContent = `Ваш баланс: ${balance.toFixed(8)} BTC`;
    }, 2000);
}

// Обработка нажатия кнопки "Начать майнинг"
document.getElementById('mineBtn').addEventListener('click', mineCrypto);
