/* ClassRoom 1

let data=[23,56,32,45,56,78,89,40,78]
find length
find duplicate value (nested for loop)

let value-[23,true,'a','r','test',57]
unshift -> 34
push ->'js'
shift
pop */

let data=[23,56,32,45,56,78,89,40,78];
console.log(data.length);

for (let i=0; i<data.length; i++) {
    for (let j=i+1; j<data.length; j++) {
        if (data[j]===data[i]) {
            console.log("The duplicate value is: "+data[j]);;
        }
    } 
}

let value = [23,true,'a','r','test',57];

value.unshift(34);
console.log(`After unshift: ${value}`);
value.push('js');
console.log(`After push: ${value}`);
value.shift();
console.log(`After shift: ${value}`);
value.pop();
console.log(`After pop: ${value}`);