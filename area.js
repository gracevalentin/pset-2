const readlineSync = require ("readline-sync")

let A=readlineSync.question("Width: ")
let B=readlineSync.question("Length: ")
const W= A*25.4
const L= B*25.4
let Area= W*L
Area=Area.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})

console.log ("A(n) " + A + "-by-"+ B + "-inch sheet of paper has an area of " + Area + " square millimeter(s).")
