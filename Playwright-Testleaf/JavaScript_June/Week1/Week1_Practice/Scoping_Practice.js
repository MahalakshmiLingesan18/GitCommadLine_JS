/* Global variables:
Global variables in JavaScript are those declared outside of any function or block scope. 
They are accessible from anywhere within the script, including inside functions and blocks.
Automatic Global Variables: 
If a variable is declared inside a function without var, let, or const, it automatically 
becomes a global variable.
Local Variables:
Limited to the function or block in which they are declared.
Each function can have its own local variables, even if they share the same name.*/

//Example for Global and Local variables
let empName = "Mahalakshmi" //Global Variable
empDetails() //Hoisting function

function empDetails() {
    information = "Employee Details"
    var phoneNumber = 1234567890
    // console.log("Employee phone number: "+phoneNumber)
    let empDep = "Finance"
    // console.log("Employee department: "+empDep)
}

console.log(information)
console.log("Employee name: "+empName)
console.log("Employee phone number: "+phoneNumber)
console.log("Employee department: "+empDep)

/* Keyword:
var - Function Scope
let and Const - block scope*/

//Example for keyword scoping
var actorName = 'Ajith'
actorList()

function actorList() {
    if (actorName==='Vijay') {
        let hitMovie = 'Theri'
        console.log(actorName+ " hit movie is " +hitMovie)
        var notBlockVar = "I am not block scoped - 1" //---> This 'var' gets executed when if block is true
    } else {
        const hitMovie = 'GBU'
        console.log(actorName+ " hit movie is " +hitMovie)
        var notBlockVar = "I am not block scoped - 2" //---> This 'var' gets executed with else block 
    }
   console.log("var keyword: " +notBlockVar) //--->Showing that 'var' keyword is function level scoping
}

//21-Jun-2025 Assignment
/*Assignment Requirements:
1. Declare a const name as browserVersion (global)
2. Assign value as Chrome
3. Create a function by name getBrowserVersion
4. Create if condition inside function to check if browser is chrome, then
5. Declare a local variable (browserVersion) and print that variable inside function (outside block)
6. Call that function from the javascript
Hints to Solve:
- Use 'var' first as block variable and then convert that as 'let'
- Confirm how it works*/

const browserVersion = 'Chrome'
getBrowserVersion()

function getBrowserVersion() {
    if (browserVersion==='Chrome') {
        //var browser = "Chrome Browser version 13.1"  //--->O/P as Chrome Browser version 13.1
        //var browserVersion = "Chrome Browser version 13.1" //--->O/P as undefined because the variable has 2 values which is from Global variable 'const' and local variable 'var'
        let browserVersion = "Chrome Browser version 13.2"
        console.log("Version used: " +browserVersion)
    } 
    //console.log("Version used: " +browserVersion)
    //console.log("Version used: " +browser)
}