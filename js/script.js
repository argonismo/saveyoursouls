document.getElementById('spot').addEventListener('click', function() {
    let url="page1.html";
    // Переходим на выбранную страницу
    window.location.href = url;
});

document.getElementById('id кнопки').addEventListener('click', function() {
    // Генерируем случайное число от 1 до 3
    var randomNum = Math.floor(Math.random() * 3) + 1;

    // Формируем URL в зависимости от случайного числа
    var url;
    switch (randomNum) {
        case 1:
            url = 'первая ссылка';
            break;
        case 2:
            url = 'вторая ссылка';
            break;
        case 3:
            url = 'третья ссылка';
            break;
        default:
            break;
    }

    // Переходим на выбранную страницу
    window.location.href = url;
});