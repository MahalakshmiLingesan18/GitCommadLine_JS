/*foreach and while loops depend on which increment type we use. 
With for loops, it makes no difference as we're not using the return value of i*/

let age = 5
for (let i=0; i<=age; i++) {
    console.log("Post-increment "+i)
}

for (let j=0; j<=age; ++j) {
    console.log("Pre-increment "+j)
}