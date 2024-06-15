// Callback Hell -> Callback Nesting

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     setTimeout(() => {
//         h1.style.color = color;
//     }, delay);
// }

// changeColor("red",1000);
// changeColor("green",2000);
// changeColor("blue",3000);

// function changeColor(color, delay, nextColor) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColor) nextColor();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("green", 1000, () => {
//         changeColor("blue", 1000, () => {
//             changeColor("orange", 1000);
//         });
//     });
// });

// Above phenomenon is known as Callback Hell/Callback Nesting
// To prevent callback hell -> promises, async and await keywords is used

// Promises -> The promise object represents the eventual completion(or failure) of an asynchronous operation and its resulting value

// function saveToDB(data, success, failure) {
//     let speed = Math.floor(Math.random() * 10) + 1;
//     if (speed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// saveToDB(
//     "Unknown",
//     () => {
//         console.log("Success: Data1 saved succesfully");
//         saveToDB(
//             "Unknown2",
//             () => {
//                 console.log("Success2: Data2 saved succesfully");
//                 saveToDB(
//                     "Unknown3",
//                     () => {
//                         console.log("Success3: Data3 saved succesfully");
//                     },
//                     () => {
//                         console.log("Failure3: Data3 not saved");
//                     }
//                 );
//             },
//             () => {
//                 console.log("Failure2: Data2 not saved");
//             }
//         );
//     },
//     () => {
//         console.log("Failure: Data1 not saved");
//     }
// );

// Promise is an object which containes two value: 1)Resolve(success) and 2)Reject(failure)

// function saveToDB(data) {
//     return new Promise((resolve, reject) => {
//         let speed = Math.floor(Math.random() * 10) + 1;
//         if (speed > 5) {
//             resolve("Success: Data saved"); // There is no any neccesity of passing args in bracket
//         } else {
//             reject("Failure: Data Not saved");
//         }
//     });
// }

// Promise states -> 1)pending 2)rejected(error) 3)fulfilled(resolved)
// Promises have two methods -> 1)then() - when fulfilled and 2)catch() - when rejected

// let req = saveToDB("Unknown"); // Promise object
// console.log(req);
// req.then(() => {
// saveToDB("Unknown")
//     .then(() => {
//         console.log("Promise was resovled");
//     })
//     .catch(() => {
//         console.log("Promise was rejected");
//     });

// Promise chaining
// saveToDB("unknown")
//     .then((result) => {     // here result will store whatever argument is passed in promise return
//         console.log("Result: ",result);
//         console.log("Data1 saved.");
//         return saveToDB("unknown2");
//     })
//     .then((result) => {
//         console.log("Result: ",result);
//         console.log("Data2 saved.");
//         return saveToDB("unknown3");
//     })
//     .then((result) => {
//         console.log("Result: ",result);
//         console.log("Data3 saved.");
//     })
//     .catch((error) => {
//         console.log("Error: ",error);
//         console.log("Promise was rejected");
//     });

// Promises are resoved and rejected with some data(valid results or errors)

// Previous color changing example using promises

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("Color Changed!");
        }, delay);
    });
}

changeColor("red", 1000)
    .then(() => {
        console.log("Changed into Red ");
        return changeColor("blue", 1000);
    })
    .then(() => {
        console.log("Changed into Blue ");
        return changeColor("orange", 1000);
    })
    .then(() => {
        console.log("Changed into Orange ");
    })
    .catch(()=>{
        console.log("Error");
    });
