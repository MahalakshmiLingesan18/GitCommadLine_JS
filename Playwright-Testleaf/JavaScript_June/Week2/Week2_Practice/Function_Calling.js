/*Syntax:
function name(arguments)
{
   javascript statements
}*/

//Function calling types
//Type:1 --->Non-parameterised
function intro() {
    console.log("Hi, I am Maha")
}
intro()

//Type:2 --->Parameterised
function age(a,b) {
    console.log("My age is: " +(a+b))
}
age(20,8)

//Type:3 --->Return value
function profession(msg) {
    return ("I am working as "+msg)
}
console.log(profession("Quality Analyst"))