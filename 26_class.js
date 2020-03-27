// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
//     this.hello = () => console.log('Hello: ' + this.name);
//     this.bye = () => console.log('Bye: ' + this.name);
// };

// User.prototype.exit = function (name) {
//     console.log('Current user ' + this.name + ' exit!');
// };

// let ivan = new User('Ivan', 25);
// let alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.hello();
// alex.bye();
// alex.exit();
// =====================================================

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.human = true;
//     }
//     hello = () => console.log(`Hello: ${this.name}`);
//     bye = () => console.log(`Bye: ${this.name}`);
//     exit() {
//         console.log(`Current user ${this.name} exit!`);
//     }
// };

// let ivan = new User('Ivanko', 25);
// let alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.hello();
// alex.bye();
// alex.exit();
// =====================================================

//'use strict';
// function showThis(a, b) {
//     console.log(this);

//     function sum() {
//         console.log(this);
//         return a + b; // Zamykannia funkcii
//     }
//     console.log(sum());
// }
// showThis(4, 5);
// showThis(5, 5);
// =====================================================

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);

//         function shout() {
//             console.log(this)
//         }
//         shout();
//     }
// };
// obj.sum();
// =====================================================


// let user = {
//     name: 'John '
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// console.log(sayName.call(user, 'Smith')); // string only
// console.log(sayName.apply(user, ['Snow'])); // array

// function count(number) {
//     return this * number;
// }
// let double = count.bind(2); // kontekst vyzova = 2
// console.log(double(3)); // parametr number
// console.log(double(10)); // parametr number


// 1) prosto vyzov funkcii - window/undefined
// 2) metod objekta - this = object
// 3) konstruktor (new) - this = novyi sozdannyi objekt
// 4) ukazanie konkretnogo kontesta - call, apply, bind
// =====================================================


// function calcOrDouble(number, basis = 2) { //ES6
//     //basis = basis || 2; // ES5
//     console.log(number * basis);
// }
// calcOrDouble(3, 4);
// calcOrDouble(5);
// =====================================================


// class Rectangle { // roditel class
//     constructor(height, width = 20) {
//         this.height = height;
//         this.width = width;
//     }
//     calcArea() {
//         return this.height * this.width
//     }
// }

// const square = new Rectangle(10, 10); // potomok ot roditelia
// const square1 = new Rectangle(30); // potomok ot roditelia

// console.log(square.calcArea()); // 10*10=100
// console.log(square1.calcArea()); // 30*20=600
// =====================================================


let video = ['youtube', 'vimeo', 'zoom'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'fb']; //spread

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}

let numbers = [2, 5, 7];
log(...numbers);