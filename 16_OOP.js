let soldier = { // prototype
    health: 400,
    armor: 100,
    alive: true
};

let john = { // prototypom ye soldier
    health: 200
};

john.__proto__ = soldier; // unasliduvannia

console.log(john);
console.log(john.armor);
console.log(john.alive);