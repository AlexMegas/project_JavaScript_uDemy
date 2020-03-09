let arr = [1, 2, '3d', 4, 5];
console.log(arr);

arr.pop();
console.log(arr);

arr.push('5');
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift("1");
console.log(arr);

arr[10] = 10;
console.log(arr);
console.log('length =', arr.length); //quantity+1

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

arr.forEach(function (item, i, mas) {
    console.log(i + ': ' + item + ' in our array [' + mas + ']');

});

let mass = [1, 3, 4, 6, 7];
for (let key of mass) { //key in mass: 0 1 2 3 4.... as indexes
    console.log(key);
}

let ans = "2,5,9,1,7,0" //prompt("", ""),
arr = [];

arr = ans.split(',');
console.log(arr);

let newArr = ['caaa', "abb", `dccc`, 'bd'],
    i = newArr.join(',');
console.log(i);
console.log(newArr.sort()); //a b c ... A B C


// ---------------------
let ar = [1, 15, 4, 2, 23],
    j = ar.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}
console.log(j);