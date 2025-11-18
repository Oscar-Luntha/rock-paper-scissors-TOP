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
console.log(getComputerChoice())