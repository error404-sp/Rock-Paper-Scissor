function computerPlay(){   //to generate random choices as Computer
    let gameOptions = ["Rock","Paper","Scissor"];
    let a = Math.floor(Math.random()*3);
  
    return gameOptions[a];
}
let score = 0;

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

// to play 5 rounds
for(i=0;i<5;i++){
    playRound(prompt("Rock,Paper or Scissor??","Rock"),computerPlay()); 
   
 }
 console.log(score);

function game(){  //to determine result of game
  
  
   if(score>5-score){
       return "You won the game";
   }
   else{
       return "You lost the game!";
   }
}
console.log(game());

