/* function first() {
    setTimeout (function () {
        console.log(1);
    }, 2000); // hold 2 sec
}

function second() {
    console.log(2);
}

first();
second(); */

// -----------------------------------

/* function learnJS(lang, callback) {
    console.log("I learn " + lang);
    callback();
}

learnJS("JavaScript", function () {
    console.log("I have passed callback.")
}) */

// -----------------------------------

/* function learnJS(lang, callback) {
    console.log("I learn " + lang);
    callback();
}

function done() {
    console.log("I have passed callback.");
}

learnJS("JavaScript", done); */

// -----------------------------------

/* let logCall = () => {
    console.log("logCall was called back.");
}

setTimeout(logCall, 3000); // hold 3 sec */

// -----------------------------------

/* setTimeout(function() {
    console.log("Anonymous function was called back for 4sec.");
} ,4000);
 */

// -----------------------------------

/* let students = [{ name: "Mary", score: 90, school: "East" },
{ name: "Alex", score: 40, school: "West" },
{ name: "Olga", score: 60, school: "East" },
{ name: "Stev", score: 20, school: "West" },
{ name: "Gabe", score: 70, school: "East" }];

let processStudents = function (data, callback) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].school.toLowerCase() === "east") {
            if (typeof callback === "function") {
                callback(data[i]);
            }
        }
    }
}

processStudents(students, function (obj) {
    if (obj.score > 60) {
        console.log(obj.name + " passed.");
    }
});

function determineTotal() {
    let total = 0,
        count = 0;

    processStudents(students, function (obj) {
        total += obj.score;
        count++;
    });
    console.log("Total score: " + total +
        " - Total Count: " + count);
};

determineTotal(); */

// -----------------------------------

/* function showMsg(name, status, callback) {
    if (callback && typeof callback === 'function') {
        callback();
    } else {
        console.log(`Hello ${name}, your status is ${status}.`);
    }
}

showMsg("John", "Admin", () => {
    console.log('Callback passed.');
}); */

//showMsg("Alex", "User");

// -----------------------------------

let drink = 0;

function shoot(arrow, headshot, fail) {
    console.log("Shoot done...");

    setTimeout(function () {
        Math.random() > 0.5 ? headshot({}) : fail("Missed");
    }, 3000)
};

function win() {
    console.log("You win!");
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log("Your present is beer.");
}

function giveMoney() {
    console.log("You receive money.");
}

function loose() {
    console.log("You lost!");
}

shoot({},
    function (mark) {
        console.log("You got it.");
        win(mark, buyBeer, giveMoney);
    },
    function (miss) {
        console.error(miss);
        loose();
    }
)

