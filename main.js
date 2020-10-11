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
let rows = document.getElementsByClassName('row')
let timeNow = document.getElementById('time-now')
let gameChoice = document.getElementById('gameChoice')
let vsPlayer = document.getElementById('vs-player')
let vsComputer = document.getElementById('vs-computer')

// Global Variables*********************************
let gameVersion = ''
let timer;
let interval = 0
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
let optionArray = []
let gameWon = false

// Global functions  **********************

function highlightWinnerRow(index) {
    if (index == 0) {
        cell0.style.backgroundColor = 'yellow'
        cell1.style.backgroundColor = 'yellow'
        cell2.style.backgroundColor = 'yellow'
    }
    if (index == 1) {
        cell3.style.backgroundColor = 'yellow'
        cell4.style.backgroundColor = 'yellow'
        cell5.style.backgroundColor = 'yellow'
    }
    if (index == 2) {
        cell6.style.backgroundColor = 'yellow'
        cell7.style.backgroundColor = 'yellow'
        cell8.style.backgroundColor = 'yellow'
    }
    if (index == 3) {
        cell0.style.backgroundColor = 'yellow'
        cell3.style.backgroundColor = 'yellow'
        cell6.style.backgroundColor = 'yellow'
    }
    if (index == 4) {
        cell1.style.backgroundColor = 'yellow'
        cell4.style.backgroundColor = 'yellow'
        cell7.style.backgroundColor = 'yellow'
    }
    if (index == 5) {
        cell2.style.backgroundColor = 'yellow'
        cell5.style.backgroundColor = 'yellow'
        cell8.style.backgroundColor = 'yellow'
    }
    if (index == 6) {
        cell0.style.backgroundColor = 'yellow'
        cell4.style.backgroundColor = 'yellow'
        cell8.style.backgroundColor = 'yellow'
    }
    if (index == 7) {
        cell6.style.backgroundColor = 'yellow'
        cell4.style.backgroundColor = 'yellow'
        cell2.style.backgroundColor = 'yellow'
    }
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase().trim()
}

function countUp() {
    interval += 1
    timeNow.textContent = 'Elapsed time: ' + interval + ' seconds'
    console.log(interval)
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

function checkForWin() {
    calcRowsFull()

    winConditions.forEach((win) => {
        // for every win-row array, calculate total of contents and length of array
        let total1 = (win.reduce(function (arrayTotal, nextNum) {
            return arrayTotal + nextNum
        }, 0
        ))
        let length1 = (win.length)
        // if the number of win-row arrays full = 8 and the game has not been won, it is a Draw
        if (rowsFull === 8 && gameWon === false) {
            console.log(rowsFull)
            currentStatus.textContent = 'Draw!'
            gameWon = true
            turnOffBoard()
        }
        // id any soecific win-row array is full and the total is 3 or 6 then check the player code and show who won
        if (length1 === 3 && total1 % 3 === 0) {
            let wIndex = winConditions.indexOf(win)
            highlightWinnerRow(wIndex)
            console.log(wIndex)
            if (win[0] === 1) {
                clearInterval(timer)
                currentStatus.textContent = capitalize(xPlayer.value) + ' Wins!'
                gameWon = true
                turnOffBoard()
            } else if (win[0] === 2) {
                clearInterval(timer)
                currentStatus.textContent = capitalize(oPlayer.value) + ' Wins!'
                gameWon = true
                turnOffBoard()
            }
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
        checkForWin()

    } else if (cell === 'cell-1') {
        win1.push(arrayValue)
        win5.push(arrayValue)
        checkForWin()

    } else if (cell === 'cell-2') {
        win1.push(arrayValue)
        win6.push(arrayValue)
        win8.push(arrayValue)
        checkForWin()

    } else if (cell === 'cell-3') {
        win2.push(arrayValue)
        win4.push(arrayValue)
        checkForWin()

    } else if (cell === 'cell-4') {
        win2.push(arrayValue)
        win5.push(arrayValue)
        win7.push(arrayValue)
        win8.push(arrayValue)
        checkForWin()

    } else if (cell === 'cell-5') {
        win2.push(arrayValue)
        win6.push(arrayValue)
        checkForWin()

    } else if (cell === 'cell-6') {
        win3.push(arrayValue)
        win4.push(arrayValue)
        win8.push(arrayValue)
        checkForWin()

    } else if (cell === 'cell-7') {
        win3.push(arrayValue)
        win5.push(arrayValue)
        checkForWin()

    } else if (cell === 'cell-8') {
        win3.push(arrayValue)
        win6.push(arrayValue)
        win7.push(arrayValue)
        checkForWin()
    }
}

function computerPlays() {
    optionArray = []
    playCell.forEach((option) => {
        if (option.textContent === '') {
            optionArray.push(option)
        }
    })
    let compMove = Math.floor(Math.random() * optionArray.length)
    optionArray[compMove].click()
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
                computerPlays()
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

function gameChooser() {
    if (vsPlayer.checked === true) {
        gameVersion = 'player'
    } else if (vsComputer.checked === true) {
        gameVersion = 'computer'
    } else {
        alert('Please select a game format.')
    }
}

function nameChooser() {
    if (gameVersion === 'computer') {
        oPlayer.value = 'computer'
        oPlayer.inputMode = 'none' // need to deny input
    }
}

// Game play logic ********************************

nameForm.style.display = 'none'
timeNow.style.display = 'none'

startButton.addEventListener('click', function () {
    gameChooser()
    gameChoice.style.display = 'none'
    startButton.style.display = 'none'
    currentStatus.style.display = 'block'


    currentStatus.textContent = 'Enter player names:'
    nameForm.style.display = 'block'
    nameChooser()




    nameForm.addEventListener('submit', (evt) => {
        evt.preventDefault()
        nameForm.style.display = 'none'
        currentStatus.textContent = capitalize(xPlayer.value) + ': Go!'
        timer = setInterval(countUp, 1000)
        timeNow.style.display = 'block'

    })

    playCell.forEach((move) => {
        move.addEventListener('click', gamePlay)
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