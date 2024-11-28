// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

myArr.push(6)  // append at last
myArr.push(7)  
myArr.pop()    // delete from last

myArr.unshift(9)  // append from front
myArr.shift()     // delete from front
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()     // join convert array to a string

console.log(myArr);
console.log( newArr);
console.log(typeof newArr);

// slice, splice

 console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // last index not included , original array remain same

 console.log(myn1);
 console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  // last index included but original array is also affected
console.log("C ", myArr);
console.log(myn2);