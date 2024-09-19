// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;
tg.expand(); // Расширяем на весь экран

let balance = 0;
const mineBtn = document.getElementById('mineBtn');
const statusText = document.getElementById('statusText');
const balanceText = document.getElementById('balance');

// Функция эмуляции майнинга
function mineCrypto() {
    statusText.textContent = 'Майнинг...';
    
    // Имитация процесса майнинга (например, через setTimeout)
    setTimeout(() => {
        const minedAmount = Math.random().toFixed(8); // Имитация случайного заработка
        balance += parseFloat(minedAmount);
        statusText.textContent = `Намайнено: ${minedAmount} BTC`;
        balanceText.textContent = `Ваш баланс: ${balance.toFixed(8)} BTC`;
    }, 2000);
}

// Обработка нажатия кнопки "Начать майнинг"
mineBtn.addEventListener('click', mineCrypto);
