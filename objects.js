let options = {
  width: 1024,
  heigh: 1024,
  name: "test"
};
console.log(options);
//console.log(options.name);
options.bool = false;

options.bool = true;
options.width = 1920;
options.heigh = 1080;
//<<<<<<< HEAD
//console.log(options);

//some comments
//=======
options.color = {
  border: "black",
  bgcol: 'red',
};

options.num = 31;
console.log(options);
//>>>>>>> 1dcfc5a0e0093fa74890097cea00443afa2bb101

delete options.bool
console.log(options);

for (let key in options) {
  console.log(`Key ${key} has value: ${options[key]}`);
}

console.log(Object.keys(options).length);
//console.log(options.length); // undefined


