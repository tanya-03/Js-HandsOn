// this ko object ke andr access kr paa rhe hai direct function mei vo undefined return kr rha hai

const user = {
    username: "tanya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "tanya"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "tanya"
//     console.log(this.username);
// }

// Arrow Function
const chai =  () => {
    let username = "tanya"
    console.log(this);   // undefined
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "tanya"}) // obj ko return krne ke liye () lgani padegi


console.log(addTwo(3, 4))

