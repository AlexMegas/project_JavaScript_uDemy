/* async function foo(a, b) {
    console.log('1 print');
    let promise = Promise.resolve(a * b);
    console.log('2 print');
    let result = await promise;
    console.log('3 print');
    return result;
}
foo(2, 3).then(console.log);
console.log('4 print');
console.log(foo(4, 5)); */

// ------------------------------------------------------

// let drink = 0;

// function shoot(arrow) {
//     console.log("Shoot done...");

//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             Math.random() > 0.5 ? resolve({}) : reject("Missed.");
//         }, 3000);
//     });

//     return promise;
// };

// function win() {
//     console.log("You win!");
//     (drink == 1) ? buyBeer() : giveMoney();
// }

// function buyBeer() {
//     console.log("Your present is beer.");
// }

// function giveMoney() {
//     console.log("You receive money.");
// }

// function loose() {
//     console.log("You lost!");
// }

// shoot({})
//     .then(mark => console.log("You got it."))
//     .then(win)
//     .catch(loose)

// ------------------------------------------------------

function fun(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num === 6) {
                reject('6 not alloved')
            }
            resolve(num + 10000);
        }, 500)
    })
}

for (let i = 0; i < 10; i++) {
    fun(i)
        .then(n => console.log(n))
        .catch(err => console.log(err))
        .finally(() => console.log('fin'))

}

