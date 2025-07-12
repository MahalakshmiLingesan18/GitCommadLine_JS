/*Assignment:
let input="Learn String and Function"
Split word 
print reverse order
output : Function and String Learn*/

//Using split method
let input = "Learn String and Function"
let reversedString = input.split(" ").reverse().join(" ")
console.log("Using split method: " +reversedString)

//Using for loop
let reversedString1 = ""
let splitedString = input.split(' ')
console.log(splitedString)
for (i=splitedString.length-1; i>=0; i--) {
    reversedString1=reversedString1+splitedString[i]+" "
}

console.log("Using for loop: " +reversedString1)