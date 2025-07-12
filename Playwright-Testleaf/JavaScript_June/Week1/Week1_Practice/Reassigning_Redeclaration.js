/*Var - Reassigning & Redeclaration possible
let - Only reassigning possible
const - Reassigning & Redeclaration not possible*/

//Reassigning
var personName = "Mahalakshmi"
personName = "Pragadesh"
console.log(personName)

let phoneNumber = 1234567890
phoneNumber = 2345678901
console.log(phoneNumber)

const age = 28
age = 29
console.log(age) //TypeError: Assignment to constant variable.

//Redeclaration
var empName = "Mahalakshmi"
var empName = "Pragadesh"
console.log(empName)

let empNumber = 1234567890 
//let empNumber = 2345678901 --->throws reference error
console.log(empNumber)

const empAge = 28 
//const empAge = 29 --->throws reference error
console.log(empAge)

/*In addition to this:
'var' & 'let' variables can be declared without initalisation
'cont' variables can be declared without initalisation */

var a;
console.log(a)
let b;
console.log(b)
//const c; --->throws reference error ('const' declarations must be initialized.)

