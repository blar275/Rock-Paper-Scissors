//const rounds = 5
let playerScore = 0
let rounds = 0

// sets up scoreboard objects
let playerP = document.querySelector(".player-score .score")
let computerP = document.querySelector(".computer-score .score")
let currentGame = document.querySelector(".current-game")

// the computer chooses which sign to play
function computerPlay() {
    let rand = Math.random()

    if (rand > 2/3) return("Rock")
    if (rand < 1/3) return("Paper")
    return("Scissors")
}

// returns who won and who gets points
function playGame(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase()
    let computer = computerSelection.toLowerCase()

    if((player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper")) {
        // goes through all cases where the player wins
        return[`You won! ${player} beats ${computer}`, 1]
    } else if(player === computer) {
        // where they tie
        return['Tie!', 2]
    } else {
        // where the computer wins
        return[`You lose. ${computer} beats ${player}`, 0]
    }
}

function updateScoreboard() {
    playerP.textContent = playerScore
    computerP.textContent = rounds-playerScore
}

// used to recive input from the buttons
function makeSelection(selection) {
    let result = playGame(selection, computerPlay())
    // tells user who won
    currentGame.textContent = result[0]

    // totals scores
    if (result[1] !== 2) {
        playerScore += result[1]
        rounds ++
        updateScoreboard()
    }
}

// sets all values to 0
function reset() {
    playerScore = 0
    rounds = 0
    currentGame.textContent = "waiting for player"
    updateScoreboard()
}