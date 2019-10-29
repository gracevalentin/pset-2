const readlineSync = require ("readline-sync")

const BoardSA= 48*24
let Radius=6/2
let SqRadius= Radius*Radius
let PiSqRadius= 3.1415*SqRadius
let Sa=BoardSA-PiSqRadius
Sa=Sa.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})

console.log ("\nThe surface area of a standard Cornhole board is "+Sa+" square inch(es).\n")
