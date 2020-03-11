function hello() {
    console.log('Hello world!');
}

hello();

function hi() {
    console.log('Hi World!');
}

hi();

let arr = [1, 15, 4, 30, 42],
    i = arr.sort(comparenum);

function comparenum(a, b) {
    return a - b;
}

console.log(arr);