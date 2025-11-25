let buttons = document.querySelectorAll("button")
let humanScore = 0;
let computerScore = 0;
buttons.forEach(button => {
button.addEventListener("click", () => {
    humanChoice = getHumanChoice(button.id)
    computerSelection = getComputerChoice()
    score = playRound(humanChoice,computerSelection)
    getScore(score)
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
        document.querySelector(".roundWinner").textContent = "Same Selection, no score to both players"
        return 2
    }
    if (humanChoice == "ROCK"){
        if (computerChoice == "PAPER"){
            document.querySelector(".roundWinner").textContent = "Computer chose paper, You Lose the round"
            return 0
        }
        else {
            document.querySelector(".roundWinner").textContent = "Computer chose scissors, You Win the round"
            return 1
        }
    } else if (humanChoice == "PAPER"){
        if (computerChoice == "ROCK"){
            document.querySelector(".roundWinner").textContent = "Computer chose rock, You Win the round"
            return 1
        }
        else {
            document.querySelector(".roundWinner").textContent = "Computer chose scissors, You Lose the round"
            return 0
        }
    } else{
        if (computerChoice == "ROCK"){
            document.querySelector(".roundWinner").textContent = "Computer chose rock, You Lose the round"
            return 0
        }else{
            document.querySelector(".roundWinner").textContent = "Computer chose paper, You Win the round"
            return 1
        } 
    }
}
function getScore(score){
    if (score == 1 ){
        humanScore += 1
    } else if (score == 0 )computerScore +=1
    else {
        humanScore += 0
        computerScore += 0
    }
    updateGui(humanScore,computerScore)
}
function updateGui(humanScore, computerScore){
    document.querySelector(".playerScore").textContent = humanScore
    document.querySelector(".computerScore").textContent = computerScore
}
