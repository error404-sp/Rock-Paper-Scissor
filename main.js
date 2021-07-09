//ui
const startButton = document.querySelector('.startgame');
const introText = document.querySelector(".pre-text");
const mainGame = document.querySelector(".maingame");
const scoreplayer = document.querySelector(".scoreplayer");
const scorecomputer = document.querySelector(".scorecomputer");
const roundwinner = document.querySelector(".roundwinner");
const endGame = document.querySelector(".endGame");
const winOrLose = document.querySelector('.winorlose');
const score = document.querySelector('.score');

endGame.style.display = "none";


startButton.addEventListener('click',e=>{
    introText.style.display = "none";
    endGame.style.display = "none";
    mainGame.style.display = "block";
    

});
const rock = document.querySelector(".displaychoiceplayer .rock");
const scissor = document.querySelector(".displaychoiceplayer .scissor");
const paper = document.querySelector(".displaychoiceplayer .paper");
const buttons = document.querySelectorAll(".options button");
const displayplayer = document.querySelector(".displayplayer");

buttons.forEach(button =>{
button.addEventListener('click',playerChoice);
function playerChoice(){
    let player = this.getAttribute('class');
    const playerSign = document.getElementById("player-sign");
    playerSign.classList.add("active");
    const playerSignClassName = `fa-hand-${this.getAttribute('class').toLowerCase()}`;
    playerSign.classList = `fas ${playerSignClassName} active`;
    let computer = computerChoice();
    scoreUpdate(computer,player);
    GameOver();
    return this.getAttribute('class');
}

}
);

function computerPlay(){   //to generate random choices as Computer
    let gameOptions = ["rock","paper","scissors"];
    let a = Math.floor(Math.random()*3);
    console.log(gameOptions[a]);
    return gameOptions[a];
}



function computerChoice(){
    let computer = computerPlay();
    const computerSign = document.getElementById("computer-sign");
    computerSign.classList.add("active");
    const computerSignClassName = `fa-hand-${computer.toLowerCase()}`;
    computerSign.classList = `fas ${computerSignClassName} active`;
    return computer;
}
let scorePlayer = 0;
let scoreComputer = 0;
function scoreUpdate(computerSelection,playerSelection){
 if(playerSelection == computerSelection){
     roundwinner.textContent = "Tie";
     
 }
 else if((playerSelection == "ROCK".toLowerCase() && computerSelection == "PAPER".toLowerCase())||(playerSelection == "SCISSORS".toLowerCase() && computerSelection == "ROCK".toLowerCase()) || (playerSelection == "PAPER".toLowerCase() && computerSelection == "SCISSORS".toLowerCase())){
    scoreComputer++;
    console.log(scoreComputer);
    scorecomputer.textContent = `Score:${scoreComputer}`;
    roundwinner.textContent = "Alien wins!"

 }
 else if((playerSelection == "PAPER".toLowerCase() && computerSelection == "ROCK".toLowerCase())||(playerSelection == "ROCK".toLowerCase() && computerSelection == "SCISSORS".toLowerCase()) || (playerSelection == "SCISSORS".toLowerCase() && computerSelection == "PAPER".toLowerCase())){
 scorePlayer++ ;
  scoreplayer.textContent = `Score:${scorePlayer}`;
  roundwinner.textContent = "Man wins!"

}
}
function GameOver(){
    if(scorePlayer == 5 || scoreComputer == 5){
        mainGame.style.display = "none";
        endGame.style.display = "block";
     if(scorePlayer == 5){
         score.textContent = `${scorePlayer} : ${scoreComputer}`;
         winOrLose.textContent = "Congratulations! You saved the planet!You won";
     }
     else{
        score.textContent = `${scorePlayer} : ${scoreComputer}`;
         winOrLose.textContent = "Unfortunately! You lost :(";
     }
    }
}



