function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) + 1 
    if(computerChoice === 1){
        computerChoice = "ROCK"
    }else if(computerChoice === 2) {
        computerChoice = "PAPER"
    }
    else{
        computerChoice = "SCISSORS"
    }
    return computerChoice
}
function getHumanChoice(){
    let humanChoice = prompt("Rock , Paper , Scissors").toUpperCase()
    return humanChoice
}
let humanScore = 0;
let computerScore = 0;
console.log(getComputerChoice())
console.log(getHumanChoice())