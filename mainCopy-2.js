// DOM Elements*******************************
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
let winConditions = [
    win1 = [],  /* cells 0, 1, 2 */
    win2 = [],  /* cells 3, 4, 5 */
    win3 = [],  /* cells 6, 7, 8 */
    win4 = [],  /* cells 0, 3, 6 */
    win5 = [],  /* cells 1, 4, 7 */
    win6 = [],  /* cells 2, 5, 8 */
    win7 = [],  /* cells 0, 4, 8 */
    win8 = [],  /* cells 2, 4, 6 */
]
let rowsFull = 0
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

function calcRowsFull() {
    // Set counter and check how many win-row arrays are full
    rowsFull = 0
    winConditions.forEach((condition) => {
        if (condition.length === 3) {
            rowsFull = rowsFull + 1
        }
    })
}



let winArray = (event) => {
    console.log('event is ' + event)
    let total1 = (event.target.reduce(function (arrayTotal, nextNum) {
        return arrayTotal + nextNum
    }, 0
    ))

    if (win.length === 3 && total1 % 3 === 0) {
        console.log(winArray)
        return winArray
    }
}



function checkForWin() {
    calcRowsFull()
    // for every win-row array, calculate total of contents and length of array
    winConditions.forEach((win) => {
        console.log(winConditions)
        console.log('win is ' + (win))
        // winArray(win)

        // if the number of win-row arrays full = 8 and the game has not been won, it is a Draw
        if (rowsFull === 8 && gameWon === false) {
            currentStatus.textContent = 'Draw!'
            gameWon = true
            turnOffBoard()
        }



        // id any soecific win-row array is full and the total is 3 or 6 then check the player code and show who won

        if (winConditions.findIndex(win)) {
            // console.log({winArray})

            // if (win[0] === 1) {
            //     currentStatus.textContent = capitalize(xPlayer.value) + ' Wins!'
            //     gameWon = true
            //     turnOffBoard()
            // } else if (win[0] === 2) {

            //     currentStatus.textContent = capitalize(oPlayer.value) + ' Wins!'
            //     gameWon = true
            //     turnOffBoard()
            // }
        }
    })
}

function updateArrays(player, cell) {

    if (player === 'x') {
        arrayValue = 1
    } else {
        arrayValue = 2
    }

    if (cell === 'cell-0') {
        win1.push(arrayValue)
        win4.push(arrayValue)
        win7.push(arrayValue)
        // checkForWin()

    } else if (cell === 'cell-1') {
        win1.push(arrayValue)
        win5.push(arrayValue)
        // checkForWin()

    } else if (cell === 'cell-2') {
        win1.push(arrayValue)
        win6.push(arrayValue)
        win8.push(arrayValue)
        // checkForWin()

    } else if (cell === 'cell-3') {
        win2.push(arrayValue)
        win4.push(arrayValue)
        // checkForWin()

    } else if (cell === 'cell-4') {
        win2.push(arrayValue)
        win5.push(arrayValue)
        win7.push(arrayValue)
        win8.push(arrayValue)
        // checkForWin()

    } else if (cell === 'cell-5') {
        win2.push(arrayValue)
        win6.push(arrayValue)
        // checkForWin()

    } else if (cell === 'cell-6') {
        win3.push(arrayValue)
        win4.push(arrayValue)
        win8.push(arrayValue)
        // checkForWin()

    } else if (cell === 'cell-7') {
        win3.push(arrayValue)
        win5.push(arrayValue)
        // checkForWin()

    } else if (cell === 'cell-8') {
        win3.push(arrayValue)
        win6.push(arrayValue)
        win7.push(arrayValue)
        // checkForWin()
    }

}

function gamePlay(event) {

    if (event.target.textContent !== '') {
        alert('Please select an Empty Cell')
    } else {
        if (currentPlayer === 'x') {
            updateArrays(currentPlayer, event.target.id)
            checkForWin()
            event.target.textContent = playerXToken //drops token
            if (gameWon === false) {
                currentPlayer = 'o' // change player
                currentStatus.textContent = capitalize(oPlayer.value) + ": GO!" // displays current player
            }
        } else {
            updateArrays(currentPlayer, event.target.id)
            checkForWin()
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

    playCell.forEach((square) => {
        square.addEventListener('click', gamePlay)
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