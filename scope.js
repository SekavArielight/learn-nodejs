// Global scope
let globalVar = "I am global";

function myFunction() {
  // Local scope
  let localVar = "I am local";
  console.log(globalVar); // Accessing global variable inside a function
  console.log(localVar); // Accessing local variable inside the function
}

// myFunction();

// console.log(localVar);


console.log(globalVar); // Accessing global variable outside the function
// console.log(localVar); // This will cause an error because localVar is not accessible outside the function

function outerFunction() {
    let outerVar = "I am from outer";
    function innerFunction() {
        console.log(outerVar); // Accessing outer variable from inner function (closure)
    }
    return innerFunction
}

const closureExample = outerFunction();
closureExample();

function printMyFirstName(){
    const myName = "James";
    console.log(myName);
}

function printMyLastName(){
    const myName = "Jude";
    console.log(myName);
}

// printMyFirstName();
// printMyLastName();
