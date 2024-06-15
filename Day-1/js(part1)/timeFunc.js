// setTimeout(function,timeOut(in ms))

// setTimeOut does not stop the execution of program

// setTimeout(() => {
//     console.log("Unknown");
//     }, 4000);

// console.log("Hello ");


// setInterval(function,timeOut(in ms))
// Does not work for node ,used only in browser
// To stop this clearInterval(id) func is used,in which we have to define setinterval func as id var.

// const id = setInterval(() => {
//     console.log("Unknown");
// }, 2000);

// console.log("Hello ");

// clearInterval(id);

// Practice Question -> write a function that prints "Hello world" 5 times at interval of 2 second.

const id = setInterval(() => {
    console.log("Hello world");
},2000);

setTimeout(() => {
    clearInterval(id);
}, 10000);