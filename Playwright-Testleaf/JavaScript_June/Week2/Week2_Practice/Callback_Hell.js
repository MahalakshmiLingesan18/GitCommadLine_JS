/*Callback Hell: It refers to a situation where multiple nested callback functions are used to perform asynchronous tasks.

---> Callback hell occurs in asynchronous programming, where the completion 
of one operation depends on the other.
---> Functions are passed as the arguments in the other functions.
---> Handling errors becomes complicated because we have to manage multiple callback errors.*/

function fetchData(callback) {
    console.log("Data is fetched")
    callback()
} 

function processData(callback) {
    console.log("Data is processed")
    callback()
}

function displayData() {
    console.log("Data is displayed")
}

fetchData(function() {
    processData(function() {
        displayData()
    })
})

/*Disadvantages:
---> Hard to read
---> Hard to maintain
---> Hard to handle errors*/