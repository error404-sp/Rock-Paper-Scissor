//ui
const startButton = document.querySelector('.startgame');
const introText = document.querySelector(".pre-text");
const mainGame = document.querySelector(".maingame");
startButton.addEventListener('click',e=>{
    introText.style.display = "none";
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
    console.log(this.getAttribute('class'));
    const playerSign = document.getElementById("player-sign");
    playerSign.classList.add("active");
    const playerSignClassName = `fa-hand-${this.getAttribute('class').toLowerCase()}`;
    playerSign.classList = `fas ${playerSignClassName} active`;
    computerChoice();
    return this.getAttribute('class');
}

}
);

function computerPlay(){   //to generate random choices as Computer
    let gameOptions = ["Rock","Paper","Scissors"];
    let a = Math.floor(Math.random()*3);
    console.log(gameOptions[a]);
    return gameOptions[a];
}



function computerChoice(){
    const computerSign = document.getElementById("computer-sign");
    computerSign.classList.add("active");
    const computerSignClassName = `fa-hand-${computerPlay().toLowerCase()}`;
    computerSign.classList = `fas ${computerSignClassName} active`;
}



function playRound(playerSelection,computerSelection){   //to determine result of the round
   
    if(playerSelection==computerSelection){
        console.log("It's a Tie!");
        return "It's a Tie!";
    }
    else if((playerSelection.toLowerCase() == "Rock".toLowerCase()  && computerSelection.toLowerCase() == "Paper".toLowerCase())
        || (playerSelection.toLowerCase() == "Paper".toLowerCase() && computerSelection.toLowerCase() == "Scissor".toLowerCase()) ||
        (playerSelection == "Scissor".toLowerCase() && computerSelection == "Rock".toLowerCase()) ){
            
            console.log("You Lost! Try again")
            return "You Lost! Try again";
        }
    else{
        console.log("Congratulations! You won!!");
        score++;
        return "Congratulations! You won!!";
        
    }    
    
}

  
