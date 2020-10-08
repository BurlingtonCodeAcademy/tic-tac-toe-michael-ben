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

// Global Variables*********************************

let currentPlayer = 'x'
let playerXToken = 'X'
let playerOToken = 'O'

//let win-1 = []  cells 0, 1, 2
//let win-2 = []  cells 3, 4, 5
//let win-3 = []  cells 6, 7, 8
//let win-4 = []  cells 0, 3, 6
//let win-5 = []  cells 1, 4, 7
//let win-6 = []  cells 2, 5, 8
//let win-7 = []  cells 0, 4, 8
//let win-8 = []  cells 2, 4, 6

// Game play logic ********************************
function checkForWin() {
    console.log('checkForWin fired')
    console.log(playCell)


}


startButton.addEventListener('click', function () {
    startButton.style.display = 'none'
    currentStatus.textContent = 'Player X turn'

    playCell.forEach((move) => {
        move.addEventListener('click', () => {
            if (move.textContent !== '') {
                alert('Please select an Empty Cell')
            } else {
                if (currentPlayer === 'x') {
                    move.textContent = playerXToken //drops token
                    currentPlayer = 'o' // change player
                    currentStatus.textContent = 'Player O turn' // displays current player
                } else {
                    move.textContent = playerOToken
                    currentPlayer = 'x'
                    currentStatus.textContent = 'Player X turn'
                }
            }
        })
        checkForWin()
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

    // if (cell0.textContent === cell1.textContent && cell0.textContent === cell2.textContent) {
    //     currentStatus.textContent = `Player ${cell0.textContent} WINS!`
    // }

    // if (cell3.textContent === cell4.textContent === cell5.textContent) {
    //     currentStatus.textContent = `Player ${cell3.textContent} WINS!`
    // }

    // if (cell6.textContent === cell7.textContent === cell8.textContent) {
    //     currentStatus.textContent = `Player ${cell6.textContent} WINS!`
    // }

    // if (cell0.textContent === cell3.textContent === cell6.textContent) {
    //     currentStatus.textContent = `Player ${cell0.textContent} WINS!`
    // }

    // if (cell1.textContent === cell4.textContent === cell7.textContent) {
    //     currentStatus.textContent = `Player ${cell1.textContent} WINS!`
    // }

    // if (cell2.textContent === cell5.textContent === cell8.textContent) {
    //     currentStatus.textContent = `Player ${cell2.textContent} WINS!`
    // }

    // if (cell0.textContent === cell4.textContent === cell8.textContent) {
    //     currentStatus.textContent = `Player ${cell0.textContent} WINS!`
    // }

    // if (cell6.textContent === cell4.textContent === cell2.textContent) {
    //     currentStatus.textContent = `Player ${cell6.textContent} WINS!`
    // }