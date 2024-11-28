//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "tanya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);

     two()

}

// one()

if (true) {
    const username = "tanya"
    if (username === "tanya") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);
//In short nested functions mei child parent ke variables ko access kr skta hai

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))  // works fine call kiya phle and function niche bna hua hai 

function addone(num){
    return num + 1
}



addTwo(5)           // not works fine because of hoisting 
const addTwo = function(num){
    return num + 2
}