var humanScore = 0
var computerScore = 0

var computerOptions = ["rock", "paper", "scissors"]

function getComputerChoice(){
    return computerOptions[Math.floor(Math.random() * 3)]   
}

function getHumanChoice(){
    let humanChoice = prompt("Enter one option( rock, paper or scissors)")
    return humanChoice.toLowerCase()
}

function playRound(humanChoice, computerChoice){
    switch (humanChoice){
        case "paper":
            if(computerChoice == "rock")
                return "You win! Paper beats Rock"
            if(computerChoice == "scissors")
                return "You lose! Scissors beats paper"
            if(computerChoice == "paper")
                return "it's a tight"
        case "scissors":
            if(computerChoice == "rock")
                return "You lose! Rock beats Scissors"
            if(computerChoice == "paper")
                return "You win! Scissors beats paper"
            if(computerChoice == "scissors")
                return "it's a tight"
        case "rock":
                if(computerChoice == "rock")
                    return "it's a tight"
                if(computerChoice == "scissors")
                    return "You win! rock beats scissors"
                if(computerChoice == "paper")
                    return "you lose! paper beats rock"
    }
}

function playgame(){
    for(var i=0; i<5; i++ ){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        console.log(playRound(humanSelection, computerSelection))
    }
}

playgame()


