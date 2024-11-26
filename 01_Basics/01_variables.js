const accountId = 12345
let accountEmail = "tanya@google.com"
var accountPassword = "t562@er"
accountCity = "Mumbai"
let accountState;
// accountId = 123  //not allowed to change const
accountEmail="abc@gmail.com"
accountPassword="67Y@ft"
accountCity="Jaipur"

/*
Prefered not to use var 
because of issue in block scope and functional scope


We can declare same variable_name using var but not with let
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

