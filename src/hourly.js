const readlineSync = require ("readline-sync")

const HW=readlineSync.question("\nHourly wage: ")
let Mo=readlineSync.question("\nMonday: ")
let Tu=readlineSync.question("Tuesday: ")
let We=readlineSync.question("Wednesday: ")
let Th=readlineSync.question("Thursday: ")
let Fr=readlineSync.question("Friday: ")
let Sa=readlineSync.question("Saturday: ")
let Su=readlineSync.question("Sunday: ")
let Earnings=HW*Mo+HW*Tu+HW*We+HW*Th+HW*Fr+HW*Sa+HW*Su
Earnings=Earnings.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})
console.log ("\nYou'll make $"+Earnings+" this week.\n")
