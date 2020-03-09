let options = {
  width: 1024,
  heigh: 1024,
  name: "test"
};

console.log(options.name);
options.bool = false;

console.log(options);

options.bool = true;
options.width = 1920;
options.heigh = 1080;
console.log(options);