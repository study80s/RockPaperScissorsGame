let img = document.getElementById("img");
let scissors = document.getElementById("scissors");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let user_score = document.getElementById("user_score");
let computer_score = document.getElementById("computer_score");
let reset_btn = document.getElementById("reset-btn");
let end_btn = document.getElementById("end_btn");

let imgArray = new Array();
imgArray[0] = "paper.png";
imgArray[1] = "rock.png";
imgArray[2] = "scissors.png";
let a;
let userscore = 0;
let computerscore = 0;

function imagetime() {
    //1 0~2까지 숫자가 나와여함
    a = Math.floor(Math.random() * 3);
    img.src = imgArray[a];
}

setInterval(imagetime, 100);
scissors.onclick = () => {
    console.log("가위 누름");
    clearInterval();
    if (a == 0) {
        userVictory();
    } else if (a == 2) {
        tie();
    } else {
      computerVictory();
    }
}
rock.onclick = () => {
    console.log("바위 누름");
    clearInterval();
    if (a == 2) {
       userVictory();
    } else if (a == 1) {
        tie();
    } else {
       computerVictory();
    }
}
paper.onclick = () => {
    console.log("보 누름");
    clearInterval();
    if (a == 1) {
        userVictory();
    } else if (a == 0) {
        tie();
    } else {
        computerVictory();
    }
}
reset_btn.onclick=()=>
{
    let check=confirm("다시시작?");
    if(check) location.reload();
}

function userVictory() {
    alert("승리");
        userscore++;
        user_score.textContent = userscore;
}
function computerVictory() {
    alert("패배");
    computerscore++;
    computer_score.textContent = computerscore;
}
function tie() {
    alert(" 비김");
}