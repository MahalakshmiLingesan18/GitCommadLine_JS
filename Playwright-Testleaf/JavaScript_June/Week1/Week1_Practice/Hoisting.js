/*Hoisting - A mechanism where the variable and function declarations are moved 
to the top of their scope during the compile phase, before the code is executed.

---> applies to variable and function declarations.
---> Initializations are not hoisted; they are only declarations.

* Function declaration are fully hoisted.
* var variables are hoisted but initilized to undefined.
* 'let' and 'const' are hoisted but remain in the Temporal Dead Zone until initialized.

What is Temporal Dead Zone (TDZ)?
It is the period between the entering of a scope and the actual initialization of a variable 
declared with let or const. During this time, any reference to the variable before its 
initialization will throw a Reference Error.*/

//Variable hoisting
console.log(empName)
var empName = "Mahalakshmi"
console.log(empName)

console.log(empAge) //Cannot access 'empAge' before initialization, remains in TDZ
let empAge = 28
console.log(empAge) 

console.log(number) //Cannot access 'empAge' before initialization, remains in TDZ
const number = 123456
console.log(number)

//Function hoisting
empAge()
function empAge() {
    console.log(empAge)
    var empAge = 28 
}

//same condition for let and const
empName() 
function empName() {
    console.log(name);
    let name = "Maha"
}
