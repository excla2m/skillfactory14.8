// Принятие входных данных
let minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
// Массивы сообщений для пользователя

var incorrectNumber = [
    "Вы загадали неправильное число!\n\u{1F914}",
    `Я сдаюсь...\n\u{1F92F}`,
    'Кажется, вы ошиблись...;'
];
var answerSentence = [
    'Ваше число - ' + answerNumber,
    'Вы загадали число - ' + answerNumber,
    'Это легко! Число - ' + answerNumber,
];

var answerToZero = [
    'Это число - 0',
    'Легко! Число - 0',
    'Ноль!'
];

var equalAnswer = [
    'Легко!',
    'Я всегда угадываю!',
    'Мои предсказанья - всегда правда!'
]

// Первоначальные сообщения
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

//Первоначальные действия
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

//Кнопка "Больше"
document.getElementById('btnOver').addEventListener('click', function OverFunc() {
    if (gameRun) {
        if (minValue >= maxValue) {
            const answerPhrase = incorrectNumber[Math.floor(Math.random() * 3)];
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber}?`;
        }
    }
})

//Кнопка "Меньше"
document.getElementById('btnLess').addEventListener('click', function LessFunc() {
    if (gameRun) {
        if (maxValue <= minValue) {

            const answerPhrase = incorrectNumber[Math.floor(Math.random() * 3)];

            answerField.innerText = answerPhrase;
            gameRun = false;

        } else {
            maxValue = answerNumber
            answerNumber = Math.floor((maxValue + minValue) / 2);
            if (answerNumber === 0) {
                answerField.innerText = answerToZero[Math.floor(Math.random() * 3)];;
                gameRun = false;
            } else {
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                answerField.innerText = `Вы загадали число ${answerNumber}?`;
            }
        }
    }
})

//Кнопка "Равно"
document.getElementById('btnEqual').addEventListener ('click', function EqualFunc () {
    if (gameRun) {
        answerField.innerText = equalAnswer[Math.floor(Math.random() * 3)];
        gameRun = false;
    }
})

//Кнопка "Потворить"
document.getElementById('btnRetry').addEventListener('click', function RetryFunc () {
    minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    let answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
})