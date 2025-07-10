// synchronous  = Executes line by line consecutively in a sequential manner 
//                             Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be performed 
//                               concurrently without waiting. Doesn't block the execution 
//                               flow and allows the program to continue.
//                               (I/O operations, network requests, fetching data)
//                               Handled with: Callbacks, Promises, Async/Await

// console.log('1')
// console.log('2')
// console.log('3')

function greet (){
    console.log("Hi");
}

console.log('1')
setTimeout(greet, 5000)
console.log('3')