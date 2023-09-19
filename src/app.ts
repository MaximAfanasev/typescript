let test: string = 'it works';
alert(test);

let test2: string;
test2 = 'abc';

let test3: number = 123;
let test4: string = 'abc';
console.log(test3 + test4);

let arr: string[] = ['a', 'b', 'c', 'd', 'e'];


/// Объект
let user = {name: 'john', age: 30};
user = {name: 'eric', age: 40, salary: 300}; // ошибка
user.name = 123; // ошибка


/// Циклы

for (let i: number = 0; i <= 10; i++) {
    console.log(i);
}

let arr2: number[] = [1, 2, 3, 4, 5];

for (let elem of arr2) {
    console.log(elem);
}

let obj = {a: 1, b: 2, c: 3};

for (let key in obj) {
    console.log(key);
}

/// functions

function func(a: number, b: number): number {
    return a + b;
}


/// Кортежи
let user3: [string, number] = ['john', 31];


/// Перечисления

enum Season { Winter, Spring, Summer, Autumn };
let current: string = Season[0];
console.log(current); // 'Winter'

let current2: Season;
let current3: Season = Season.Winter;
let current4: Season = 3;

enum Season2 { Winter = 1, Spring = 2, Summer = 3, Autumn = 4 };
let current5: Season = Season.Winter;
console.log(current); // выведет 1

enum Season3 { Winter = 1, Spring, Summer, Autumn };

enum Season4 {
    Winter = 'Зима',
    Spring = 'Весна',
    Summer = 'Лето',
    Autumn = 'Осень'
};

let test: any;

// Объединение типов
let test: string | number;

// Псевдонимы типов
type str = string;
type stumber = string | number;
let test5: stumber;
test5 = 123;
test5 = 'abc';

// Тип строкового литерала
let str: 'success' | 'error';
str = 'success';
str = 'error';

// Встроенные типы

let date1: Date;
let date2: Date = new Date;
let date3: Date = new Date(2030, 11, 31);

let reg1: RegExp = /.+?/;
let reg2: RegExp = new RegExp('.+?');

let elem1: HTMLElement;
let elem2: HTMLElement = document.querySelector('div');
let elem3: HTMLDivElement = document.querySelector('div');
let lst: NodeList = document.querySelectorAll('div');

// Структура объекта
let user4: {name: string, age: number} = {name: 'john', age: 30};
let user5: {name: string, age?: number};

// Интерфейсы

interface User {
    name: string,
    age: number
}
let user6: User = {name: 'john', age: 30};


// Массивы в объектах

let prod = {
    name: 'notebook',
    colors: ['red', 'black', 'gray']
}

interface Product {
    name: string,
    colors: string[]
};

let prod2: Product = {
    name: 'notebook',
    colors: ['red', 'black', 'gray']
}


// Сложные объекты

let user7: User = {
    name: 'john',
    age: 30,
    parents: {
        mother: 'jane',
        father: 'eric'
    }
}

let user: User = {
    name: 'john',
    age: 30,
    city: {name: 'london'}
};


// Массивы объектов

interface User {
    name: string,
    age: number
}
let arr: User[] = [];
arr.push({name: 'john', age: 30});
arr.push({name: 'eric', age: 40});


// Количество параметров функции
function func(first: string, last: string) {
    return first + ' ' + last;
}
func('john');               // ошибка, мало параметров
func('john', 'smit', 'xx'); // ошибка, много параметров


// Необязательные параметры
function func(first: string, last?: string) {
    return first + ' ' + last;
}

// Значения параметров по умолчанию
function func(first: string, last: string = 'snow') {
    return first + ' ' + last;
}

// Rest параметры
function func(...rest: number[]): number {
    console.log(rest);
}

// сигнатура функции
let func: (x: number, y: number) => number;


// Функции-коллбэки
function make(num: number, func: (num: number) => number): number {
    return func(num);
}