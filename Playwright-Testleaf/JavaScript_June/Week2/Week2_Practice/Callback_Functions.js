/* Callback Function: It is a function which is passed as an argument to another function 
and executed later*/

function intro(name, callback) {
    console.log("Hi, I am "+name)
    callback;
}

function age() {
    console.log("I am 28")
}

intro("Maha", age()) //prints the age first and the name

/*function intro(name, callback) {
    return ("Hi, I am "+name)
    callback()
}

function age() {
    return ("I am 28")
}

console.log(intro("Maha", age)) */

function browserlaunch( callback){
    console.log("Chrome Browser")
    callback()
}

function loadUrl(){
    console.log("www.google.com")
}

browserlaunch(loadUrl) //prints the browser first and then load url

//Callbacks for Asynchronous Execution

console.log("Start")

setTimeout(function () {
    console.log("Inside Timeout")
}, 2000)

console.log("End")