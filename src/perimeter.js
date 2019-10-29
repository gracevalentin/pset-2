const readlineSync = require ("readline-sync")

let A=readlineSync.question("\nWidth: ")
let B=readlineSync.question("Length: ")
const W= A*2.54
const L= B*2.54
let Perimeter= 2*W+2*L
Perimeter=Perimeter.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})

console.log ("\nA(n) " + A + "-by-"+ B + "-inch sheet of paper has a perimeter of " + Perimeter + " centimeter(s).\n")
