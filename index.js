//Дано масив з елементами різних типів. 
//Створити функцію яка вираховує середнє арифметичне 
//лише числових елементів даного масиву.
let myArr = ["d", 4, "-", 3, 6, 9, 8];

function arefmeticMean(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") arr.splice(i, 1); {
            sum += arr[i];
        }
    }
    console.log(sum / arr.length);
}

arefmeticMean(myArr);

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

// Створити функцію, яка прибирає з рядка всі символи, 
// які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач.

let argumentOne = prompt('Напиши сюда например "Hello" или любое другое слово.')
let argumentTwo = prompt('напиши еще одно любое слово.')

function removeItemFromArray(arr, n) {
    const newArray = [];

    for ( let i = 0; i < arr.length; i++) {
        if(arr[i] !== n) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
alert(`${argumentOne} ${argumentTwo}`);

let splitWord = prompt('Какую букву ты бы хотел удалить?')

const result = removeItemFromArray(argumentTwo, splitWord);

alert(`${argumentOne} ${result}`);

