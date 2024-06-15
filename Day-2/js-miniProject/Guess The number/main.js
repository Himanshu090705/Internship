// const min = 1;
// const max = 100;

// const num = Math.floor(Math.random() * (max - min + 1));
// const form = document.querySelector("form");
// const val = parseInt(document.getElementById("guessField").value);
// const field = document.getElementById("guessField");
// const lowOrHi = document.getElementsByClassName("lowOrHi");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const remattemp = 10;
//     if (val === num) {
//         const addtext=document.createTextNode("Congratulations, You won!")
//         field.appendChild(addtext);
//     } else if (val < num) {
//         const addText = document.createTextNode("Your value is less than number");
//         low.appendChild(addText);
//         remattemp--;
//     } else if (val > num) {
//         const addText = document.createTextNode("Your value is higher than number");
//         hi.appendChild(addText);
//         remattemp--;
//     }
//     if (remattemp === 0) {
//         field.innerHTML = "Oh no,Your limit is exhuasted ";
//     }
// });

const randomnum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Enter a valid number");
    } else if (guess < 1) {
        alert("Enter value more than 1");
    } else if (guess > 100) {
        alert("Enter value less than 100");
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game over.The random number was ${randomnum}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomnum) {
        displayMessage("You guessed it right");
        endGame();
    } else if (guess < randomnum) {
        displayMessage("Your number is TOOOO low");
    } else if (guess > randomnum) {
        displayMessage("Your number is TOOOO High");
    }
}

function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
}
function newGame() {}
