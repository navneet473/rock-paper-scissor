const computerWin = "computerWin";
const userWin = "you win";
const tie = "tie"


function computerPlay(){
    let option = ["Rock", "Paper", "Scissors"];
    return option[Math.floor(Math.random()*option.length)]
}


function playRound(playerSelection, computerSelection) {
    
    while (computerSelection == "Rock" ){
        if (playerSelection == "paper"){
            return userWin
        }
        else if (playerSelection == "scissors"){
            return computerWin
        }
        else {
            return tie
        }
    }
    while (computerSelection == "Paper" ){
        if (playerSelection == "scissors"){
            return userWin
        }
        else if (playerSelection == "rock"){
            return computerWin
        }
        else {
            return tie
        }
    }
        while (computerSelection == "Scissors" ){
        if (playerSelection == "rock"){
            return userWin
        }
        else if (playerSelection == "rock"){
            return computerWin
        }
        else {
            return tie
        }
    }
    
}

function game() {
    let count = 0;

    for (let i = 1; i<=5; i++){
        let playerSelection = prompt("enter you choice")

        const computerSelection = computerPlay();
        let result = playRound(playerSelection.toLowerCase, computerSelection);
        console.log(result)
        if (result == userWin){
            count = count + 1;  
            }
        else if (result == computerWin){
            count = count - 1; 
            }
    }
    if (count >0){
        console.log("you won this round");
        }
    if (count <0 ){
        console.log("computer won this round")
    }
    if(count == 0){
        console.log("It's a Tie");
        }

}



game();