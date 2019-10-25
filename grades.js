const readlineSync = require ("readline-sync")

let A=readlineSync.question("Enter three homework grades.")
let B=readlineSync.question("Enter three quiz grades.")
let C=readlineSync.question("Enter three test grades.")
const D= A*.15
const E= B*.35
const F= C*.50
let Grade= D+E+F
Area=Area.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})

console.log ("Your marking period grade is "+Grade+"%")


//NEEDS TO AVERAGE THE VARIABLES FOR A B AND C
