const name="Tanya"
const repoCount=1;
console.log(`My name is ${name} and repo count is ${repoCount}`);

const name1 = new String("Shweta-Sharma-kumar")
console.log(name1[1]);
console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.charAt(2));
console.log(name1.indexOf('e'));

const newString=name1.substring(0,8)
console.log(newString);

const anotherString=name1.slice(-8,10)  // slice accept negative index
console.log(anotherString);

const newStringOne="       Tanya       "
console.log(newStringOne);
console.log(newStringOne.trim()); // Remove extra spaces

const url="https://tanya.com/tanya%20batra"
console.log(url.replace('%20','-'))
console.log(url.includes('tanya'))

console.log(name1.split('-'))


