const readlineSync = require ("readline-sync")

let A=readlineSync.question("Width: ")
let B=readlineSync.question("Length: ")
let Diagonal= Math.sqrt(A*A + B*B)
Diagonal=Diagonal.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})

console.log ("A(n) " + A + "-by-"+ B + "-inch sheet of paper has a diagonal of " + Diagonal + " inch(es).")
