function computerPlay(){
    let gameOptions = ["Rock","Paper","Scissor"];
    let a = Math.floor(Math.random()*3);
    console.log(gameOptions[a]);
    return gameOptions[a];
}
let score = 0;

function playRound(playerSelection,computerSelection){
    if(playerSelection==computerSelection){
        console.log("It's a Tie!");
        return "It's a Tie!";
    }
    else if((playerSelection == "Rock" && computerSelection == "Paper")
        || (playerSelection == "Paper" && computerSelection == "Scissor") ||
        (playerSelection == "Scissor" && computerSelection == "Rock") ){
            
            console.log("You Lost! Try again")
            return "You Lost! Try again";
        }
    else{
        console.log("Congratulations! You won!!");
        score++;
        return "Congratulations! You won!!";
        
    }    
    
}
computerSelection = computerPlay();
playerSelection = "Scissor"


function game(){
  for(i=0;i<5;i++){
     playRound(playerSelection,computerSelection);
    
  }
  console.log(score);
   if(score>5-score){
       return "You won the game";
   }
   else{
       return "You lost the game!"
   }
}


