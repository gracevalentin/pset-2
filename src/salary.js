const readlineSync = require ("readline-sync")

let Salary=readlineSync.question("\nAnnual salary: ")
const BiMonthlySalary=Salary/24
const PreTax=BiMonthlySalary*.93
const Tax=PreTax*.2782
let Takehome=PreTax-Tax
Takehome=Takehome.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})
console.log ("\nYour take-home pay each check will be $"+Takehome+".\n")
