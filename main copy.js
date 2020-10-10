// DOM Elements*******************************
let cell0 = document.getElementById('cell-0')
let cell1 = document.getElementById('cell-1')
let cell2 = document.getElementById('cell-2')
let cell3 = document.getElementById('cell-3')
let cell4 = document.getElementById('cell-4')
let cell5 = document.getElementById('cell-5')
let cell6 = document.getElementById('cell-6')
let cell7 = document.getElementById('cell-7')
let cell8 = document.getElementById('cell-8')

let playCell = Array.from(document.getElementsByClassName('play-Cell'))
let startButton = document.getElementById('start')
let currentStatus = document.getElementById('status')
let nameForm = document.getElementById('name-form')
let xPlayer = document.getElementById('playerX')
let oPlayer = document.getElementById('playerO')
let submit = document.getElementById('submit')
let rows = document.getElementsByClassName = ('row')
// Global Variables*********************************

let currentPlayer = 'x'
let playerXToken = 'X'
let playerOToken = 'O'
let winArrays = [
  win1 = [],  /* cells 0, 1, 2 */
  win2 = [],  /* cells 3, 4, 5 */
  win3 = [],  /* cells 6, 7, 8 */
  win4 = [],  /* cells 0, 3, 6 */
  win5 = [],  /* cells 1, 4, 7 */
  win6 = [],  /* cells 2, 5, 8 */
  win7 = [],  /* cells 0, 4, 8 */
  win8 = [],  /* cells 2, 4, 6 */
]
let gameWon = false

// Global functions  **********************
function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase().trim()
}

function turnOffBoard() {
   playCell.forEach((square) => {
        square.removeEventListener('click', gamePlay
          )
    })
}

function checkForWin(square) {
    winArrays.forEach((condition) => {
        if (condition[0] === condition[1] && condition[0] === condition[2]) {console.log(condition)

        }
    })
}

function updateArrays(player, cell) {
// console.log(player, cell)
    if (cell === 'cell-0') {
        win1.push(player)
        win4.push(player)
        win7.push(player)
        checkForWin(cell)

    } else if (cell === 'cell-1') {
        win1.push(player)
        win5.push(player)
        checkForWin(cell)

    } else if (cell === 'cell-2') {
        win1.push(player)
        win6.push(player)
        win8.push(player)
        checkForWin(cell)

    } else if (cell === 'cell-3') {
        win2.push(player)
        win4.push(player)
        checkForWin(cell)

    } else if (cell === 'cell-4') {
        win2.push(player)
        win5.push(player)
        win7.push(player)
        win8.push(player)
        checkForWin(cell)

    } else if (cell === 'cell-5') {
        win2.push(player)
        win6.push(player)
        checkForWin(cell)

    } else if (cell === 'cell-6') {
        win3.push(player)
        win4.push(player)
        win8.push(player)
        checkForWin(cell)

    } else if (cell === 'cell-7') {
        win3.push(player)
        win5.push(player)
        checkForWin(cell)

    } else if (cell === 'cell-8') {
        win3.push(player)
        win6.push(player)
        win7.push(player)
        checkForWin(cell)
    }

}

function gamePlay(event) {

    if (event.target.textContent !== '') {
        alert('Please select an Empty Cell')
    } else {
        if (currentPlayer === 'x') {
            updateArrays(currentPlayer, event.target.id)
            event.target.textContent = playerXToken //drops token
            if (gameWon === false) {
                currentPlayer = 'o' // change player
                currentStatus.textContent = capitalize(oPlayer.value) + ": GO!" // displays current player
            }
        } else {
            updateArrays(currentPlayer, event.target.id)
            event.target.textContent = playerOToken
            if (gameWon === false) {
                currentPlayer = 'x'
                currentStatus.textContent = capitalize(xPlayer.value) + ": GO!"
            }
        }
    }
}



// Game play logic ********************************

nameForm.style.display = 'none'

startButton.addEventListener('click', function () {
    startButton.style.display = 'none'
    currentStatus.style.display = 'block'
    currentStatus.textContent = 'Enter player names below'
    nameForm.style.display = 'block'
    nameForm.addEventListener('submit', (evt) => {
        evt.preventDefault()

        nameForm.style.display = 'none'
        currentStatus.textContent = capitalize(xPlayer.value) + ': Go!'
    })

    playCell.forEach((move) => {
        move.addEventListener('click', gamePlay  )
    })
})


// let moves = ['c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8']
// let moveMap = {
//     'c0': 0,
//     'c1': 1,
//     'c2': 2,
//     'c3': 3,
//     'c4': 4,
//     'c5': 5,
//     'c6': 6,
//     'c7': 7,
//     'c8': 8
// }