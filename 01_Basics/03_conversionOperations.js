let name =true
console.log(typeof name);
console.log(typeof (name));

let valueInNumber= Number(name)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//conversion of any datatype to number
//"44"  -> 44
//"4abs" -> NaN
//true -> 1 ; false -> 0

let isLoggedIn = undefined
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// Conversion of any datatype to Boolean
// "Tanya"  -> true
// "" -> false
// 1 -> true ; 0 -> false
// null -> false
// undefined -> false

let someNumber = "33abc"
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// **************Operations******************
let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2) // add
console.log(2-2) //substract
console.log(2*2) //multiply
console.log(4/2) //Divide
console.log(2**3) // 2 power 3
console.log(5%2)  // reminder

let str1= "hello"
let str2= "Tanya"
let str3= str1 + " " + str2
console.log(str3);
console.log("1"+2)
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

// Prefix and postfix
let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

