// Инициализация Web App API Telegram
const tg = window.Telegram.WebApp;

// Расширение приложения на весь экран
tg.expand();

// Получение данных пользователя
const user = tg.initDataUnsafe.user;

console.log(`Привет, ${user.first_name}!`);

// Пример: добавить взаимодействие с Telegram кнопками
tg.MainButton.text = "Запустить майнинг";
tg.MainButton.show();

tg.MainButton.onClick(() => {
    startMining(); // Функция запуска майнинга
    tg.MainButton.hide();
});

function startMining() {
    // Ваш код для старта майнинга
    alert("Майнинг начался!");
}
