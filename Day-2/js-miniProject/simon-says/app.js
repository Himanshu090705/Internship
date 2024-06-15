let gameseq = [];
let userseq = [];
let colors = ["red", "green", "blue", "yellow"];

let started = false;
let level = 0;
let highestScore=0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game started");
        started = true;

        levelup();
    }
});

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = colors[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameseq.push(randColor);
    console.log(gameseq);

    gameFlash(randBtn);
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 200);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function btnPress() {
    let btn = this;
    let color = btn.getAttribute("id");
    userseq.push(color);

    checkAns(userseq.length - 1);
    userFlash(btn);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 200);
}

function checkAns(idx) {
    if (gameseq[idx] === userseq[idx]) {
        if (gameseq.length == userseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        highScore(level);
        h2.innerHTML = `Game over! Your Score was <b> ${level - 1} </b> <br>High Score:${highestScore} <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor= "white";
        }, 250);
        resetGame();
    }
}

function highScore(){
    if(highestScore<level){
        highestScore=level-1;
    }
}

function resetGame() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}