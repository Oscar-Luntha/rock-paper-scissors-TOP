let buttons = document.querySelectorAll("button")
let humanScore = 0;
let computerScore = 0;
buttons.forEach(button => {
button.addEventListener("click", () => {
    humanChoice = getHumanChoice(button.id)
    computerSelection = getComputerChoice()
    score = playRound(humanChoice,computerSelection)
    })
})
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
function getHumanChoice(choice){
    return choice.toUpperCase()
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
function playGame(humanSelection){
    let winner = false
    while(!winner){
        const computerSelection = getComputerChoice()
        console.log(computerSelection)
        console.log(humanSelection)
        document.querySelector(".playerScore").textContent = humanScore
        document.querySelector(".computerScore").textContent = computerScore
        if(humanScore == 5 || computerScore == 5){
            winner = true
        }
    }
    alert(`Your score ${humanScore} : ${computerScore} Computer score`)
}
function getScore(roundScore){
        if (score == 1 ){
            humanScore += 1
        } else if (score == 0 )computerScore +=1
        else {
            humanScore += 0
            computerScore += 0
        }
}

