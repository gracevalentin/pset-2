const readlineSync = require ("readline-sync")

const Students=readlineSync.question("\nStudents: ")
const Teachers=readlineSync.question("Teachers: ")
const BusCapacity=readlineSync.question("Bus Capacity: ")
let Passengers=parseInt(Students)+parseInt(Teachers)
let Buses=(Passengers/BusCapacity)
let LastBusPassengers=Math.ceil(Buses)
var Remainder=(Passengers) % BusCapacity
console.log("\n"+LastBusPassengers+" bus(es) is (are) needed with "+Remainder+" passenger(s) on the last bus.\n")
