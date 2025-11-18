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
function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        console.log("same selection! no score to both players")
    }
    if (humanChoice == "ROCK"){
        if (computerChoice == "PAPER"){
            console.log ( "you lose, paper beats rock")
        }
        else console.log("you win")
    } else if (humanChoice == "PAPER"){
        if (computerChoice == "ROCK"){
            console.log ("you win")
        }
        else console.log("You lose, scissors beat paper")
    } else{
        if (computerChoice == "ROCK"){
            console.log("You lose!. scissors beat rock")
        }else console.log("You win")

    }
}
const computerSelection =getComputerChoice()
const humanSelection = getHumanChoice()

playRound (humanSelection, computerSelection)
