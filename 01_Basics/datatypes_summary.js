// Primitive and Non-Primitive datatype

//Primitive -> call by value  -> changes in copy
//String, Number, Null, Undefined, Symbol, BigInt, Boolean

//Non-Primitive -> call by reference -> direct change in original
// Array, Objects, Functions

//JavaScript is a dynamically typed language.
//You can assign different types of values to a variable
//let x = 10; // x is now a number
//x = "Hello"; // x is now a string
//x = true; // x is now a boolean. Languages like Java, C++, and TypeScript are statically typed
//int x = 10; // x is a variable of type int
//String name = "John"; // name is a variable of type String

const id= Symbol('123')
const anotherId= Symbol('123')
console.log(id===anotherId)  // notice the output

const bigNumber = 4598n    // append n to make it as bigint
console.log(typeof (bigNumber))
console.log(typeof null) //object

// Non-Primitive (Reference)
// Arrays, Objects, Functions -> all non-primitive have datatype as Object 
const heros=["shaktiman","doora","bhem"]
let myObj={
    name:"Tanya",
    age:22
}

const myFunction = function(){
    console.log("Hello World")
}
console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myFunction) //object function

//https://262.ecma-international.org/5.1/#sec-11.4.3

// ********* Stack And Heap Memory ***************
// stack(primitive)  and heap(Non-Primitive)

// example of stack memory -> copy pass
let name="tanya"
let anotherName=name
anotherName="batra"
console.log(name)
console.log(anotherName)

//example of heap memory
let usr1={
    email:"abc@gmail.com",
    age:22
}

let usr2=usr1
usr2.age=30
console.log(usr1.age)
console.log(usr2.age)

