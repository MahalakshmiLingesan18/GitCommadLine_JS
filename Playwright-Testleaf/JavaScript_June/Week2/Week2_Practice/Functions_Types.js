//Types Of Functions
//1.Named Function
function sub(c,d) {
    return c-d
}
console.log(sub(10,1))

//2.Anonymous Function
let add = function(e,f){
    return e+f
}
console.log(add(5,4))

//3.Arrow Function
//Single line of code
let multiply = (g,h) => (g*h)
console.log(multiply(3,3))

//Multi-line of code
const less = (i,j) => {
    if (i<j) {
        return(i+" is lesser than "+j)
    } else {
        return(i+" is greater than "+j)
    }
}
console.log(less(50, 40))
