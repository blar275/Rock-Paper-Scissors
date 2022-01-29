const rounds = 5

function computerPlay() {
    let rand = Math.trunc(Math.random() * 3)

    if (rand === 1) return("Rock")
    if (rand === 2) return("Paper")
    return("Scissors")
}

function playGame(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase()
    let computer = computerSelection.toLowerCase()

    if((player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper")) {
        return[`You won! ${player} beats ${computer}`, 1]
    } else if(player === computer) {
        return['Tie!', 2]
    } else {
        return[`You lose. ${computer} beats ${player}`, 0]
    }
}

function game() {
    let playerScore = 0;

    for (let i=0; i<rounds; i++) {
        let playerSelection = window.prompt("Enter Rock, Paper, or Scissors")
        let computerSelection = computerPlay()
        let outcome = playGame(playerSelection, computerSelection)
        console.log(outcome[0])

        if (outcome[1] === 2) {i--}
        else {playerScore = playerScore + outcome[1]}
    }

    if (playerScore < 3) return(`You lose! player: ${playerScore} computer: ${rounds-playerScore}`)
}

console.log(game())