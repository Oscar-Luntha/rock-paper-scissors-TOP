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

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        console.log("same selection! no score to both players")
        return 2
    }
    if (humanChoice == "ROCK"){
        if (computerChoice == "PAPER"){
            console.log ( "you lose, paper beats rock")
            return 0
        }
        else {
            console.log("you win")
            return 1
        }
    } else if (humanChoice == "PAPER"){
        if (computerChoice == "ROCK"){
            console.log ("you win")
            return 1
        }
        else {
            console.log("You lose, scissors beat paper")
            return 0
        }
    } else{
        if (computerChoice == "ROCK"){
            console.log("You lose!. rock beats scissors")
            return 0
        }else{
            console.log("You win")
            return 1
        } 

    }
}
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let i = 0;
    while(i <= 4){
        const computerSelection =getComputerChoice()
        const humanSelection = getHumanChoice()
        score = playRound(humanSelection, computerSelection)
        if (score == 1 ){
            humanScore += 1
        } else if (score == 0 )computerScore +=1
        else {
            humanScore += 0
            computerScore += 0
        }
        i+=1;
    }
    alert(`Your score ${humanScore} : ${computerScore} Computer score`)
}
playGame()


