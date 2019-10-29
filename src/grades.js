const readlineSync = require ("readline-sync")

let Hw1=readlineSync.question("\nEnter three homework grades.\n")
let Hw2=readlineSync.question("")
let Hw3=readlineSync.question("")
let Quiz1=readlineSync.question("\nEnter three quiz grades.\n")
let Quiz2=readlineSync.question("")
let Quiz3=readlineSync.question("")
let Test1=readlineSync.question("\nEnter three test grades.\n")
let Test2=readlineSync.question("")
let Test3=readlineSync.question("")
const H1Wt=Hw1*.15
const H2Wt=Hw2*.15
const H3Wt=Hw3*.15
const Q1Wt=Quiz1*.35
const Q2Wt=Quiz2*.35
const Q3Wt=Quiz3*.35
const T1Wt=Test1*.5
const T2Wt=Test2*.5
const T3Wt=Test3*.5
const HAvg= (H1Wt+H2Wt+H3Wt)/3
const QAvg= (Q1Wt+Q2Wt+Q3Wt)/3
const TAvg= (T1Wt+T2Wt+T3Wt)/3
let Grade= (HAvg+QAvg+TAvg)
Grade=Grade.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})
console.log ("\nYour marking period grade is "+Grade+"%.\n")
