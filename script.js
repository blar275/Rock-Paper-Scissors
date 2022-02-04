//const rounds = 5
let playerScore = 0
let rounds = 0

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

function makeSelection(selection) {
    let result = playGame(selection, computerPlay())
    console.log(selection)
    if(result[1] !== 2) updateScoreboard()
}

function reset() {
    playerScore = 0
    rounds = 0
    updateScoreboard()
}