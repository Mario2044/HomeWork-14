//Дано масив з елементами різних типів. 
//Створити функцію яка вираховує середнє арифметичне 
//лише числових елементів даного масиву.
/*
let myArr = ["d", "f", 4, "-", 3, 6, 9, 8, "f", 8, 9, 1, 3];
var numbers = myArr.filter(item => +item);
console.log(numbers);

function arefmeticMean(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}

console.log(arefmeticMean(numbers));


//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: 
//числа x і y, рядок znak. У змінній znak може бути: 
//+, -, *, /, %, ^ (ступінь ).
//Вивести результат математичної дії, вказаної в змінній znak.
//Обидва числа і знак виходять від користувача.

const x = prompt('Введите x');
const y = prompt('Введите y');
const znak = prompt('Введите знак');

function doMath(x, y, znak) {
    let sum = 0;

    if (znak === "+") {
        sum = +x + +y;
        return (`${x} + ${y} = ${sum}`);
    } else if (znak === "-") {
        sum = +x - +y;
        return (`${x} - ${y} = ${sum}`);
    } else if (znak === "/") {
        sum = +x / +y;
        return (`${x} / ${y} = ${sum}`);
    } else if (znak === "*") {
        sum = +x * +y;
        return (`${x} * ${y} = ${sum}`);
    } else if (znak === "%") {
        sum = +x % +y;
        return (`${x} % ${y} = ${sum}`);   
    } else if (znak === "**") {
        sum = x ** y;
        return (`${x} ** ${y} = ${sum}`);   
    }
}

alert(doMath(x, y, znak)); 


//Написати функцію заповнення даними користувача двомірного масиву. 
//Довжину основного масиву і внутрішніх масивів задає користувач. 
//Значення всіх елементів всіх масивів задає користувач.

function arrAdd() {
    let arr = [];
    let amount = +prompt("Введите количество массивов в первом массиве");

    for(let i = 0; i < amount; i++) {
        arr.push([]);

        let amount2 = prompt("Введите количество елементов" + (i + 1));

        for(let j = 0; j < amount2; j++) {
            let elem = prompt("Введите текст" + (j + 1));
            arr[i].push(elem);
        }
    }
    console.log(arr);
}

let functionResult = arrAdd(); 
*/

// Створити функцію, яка прибирає з рядка всі символи, 
// які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач.


let argument = prompt('Напиши сюда "Hello world" или любую другую фразу.');

alert(argument);

let splitWord = prompt('Какие буквы вы хотите удалить?');

function remove(text, symbols) {
    const words = symbols.split(', ')
    let newString = []
    for(let letter = 0; letter < text.length; letter++) {
        if(words.includes(text[letter])) {
            continue;
        } else {
            newString.push(text[letter])
        }
    }
    return newString.join('')
}

let result = remove(argument, splitWord);
console.log(result);


