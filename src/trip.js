const readlineSync = require ("readline-sync")

const Students=readlineSync.question("\nStudents: ")
const Teachers=readlineSync.question("Teachers: ")
const BusCapacity=readlineSync.question("Bus Capacity: ")
let Passengers=Students+Teachers
let Buses=(Passengers/BusCapacity)
let BusesNeeded=Math.ceil(Buses)
var Remainder=(Passengers) % BusCapacity
console.log("\n"+BusesNeeded+" bus(es) is (are) needed with "+Remainder+" passenger(s) on the last bus.\n")
