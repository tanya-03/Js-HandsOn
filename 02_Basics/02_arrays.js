const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // array inside array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// Two ways to resolve array inside array
// 1) Concat
const allHeros = marvel_heros.concat(dc_heros)    
// console.log(allHeros);

// 2) Spread Operator
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

//********************/
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)   // to break nested and allign all elements in a single array use flat
// console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))  // make array from Hitesh
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); 