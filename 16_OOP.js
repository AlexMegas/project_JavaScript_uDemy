let soldier = {
    health: 400,
    armor: 100,
    alive: true
};

let john = {
    health: 200
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);
console.log(john.alive);