// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "tanya",
            lastname: "batra"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  // object inside object
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h0@gmail.com"
    },
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 1,
        email: "h2@gmail.com"
    },
]

console.log(users[1].email)
console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser).length);
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// destructuring of object
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "tanya"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);