// singleton
/*A singleton is a design pattern that ensures a class or object has only one instance and provides global access to that instance. */

// Object.create
// using constructor -> singleton
// object literals -> not singleton

const mySym = Symbol("key1")

const JsUser = {
    name: "Tanya",
    "full name": "Tanya Batra",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "tanya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  // no further changes are done on this object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());