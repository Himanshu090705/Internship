// Async functions -> async and await keyword

// Async keyword -> creates an async function (async func by defalts returns promise whether it was written or not)

// async function greet() {
//     throw "404 Page not found"; // used to throw error
//     return "Hello!"; // returns promise whether return is there or not
// }

// let hello = async () => {}; // returns promise

// greet()
//     .then((result) => {
//         console.log("Success");
//         console.log("Result: ",result);
//     })
//     .catch((err) => {
//         console.log("Error: ",err);
//         console.log("Failure");
//     });

// Await Keyword -> pauses the execution of its surroundings async function until the promise is settled (resolve or rejected), await keyword is only used when there is a async function

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
// }

// demo();

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 3) {
                reject("Error");
            }
            h1.style.color = color;
            console.log(`Color changed to ${color}`);
            resolve("Color Changed!");
        }, delay);
    });
}

async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
        await changeColor("yellow", 1000);
        await changeColor("orange", 1000);
    } catch (error) {
        console.log("Error caught!");
        console.log(error);
    }
    let a = 5;
    console.log(a);
    console.log(a + 3);
}

demo();

// There is some situation where some code is there which is not associated with promise but due to promise rejection whole code execution is stopped to handle this below code is given
// Handling error with await
