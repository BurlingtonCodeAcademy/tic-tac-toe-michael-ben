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

let moves = ['c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8']
let moveMap = {
    'c0': 0,
    'c1': 1,
    'c2': 2,
    'c3': 3,
    'c4': 4,
    'c5': 5,
    'c6': 6,
    'c7': 7,
    'c8': 8
}

playCell.forEach((move) => {
    move.addEventListener('click', () => {  //this function may be moved outside eventually
        if (currentPlayer === 'x') {
            move.textContent = playerXToken
            currentPlayer = 'o'
            currentStatus.textContent = 'Player O turn'
        } else {
            move.textContent = playerOToken
            currentPlayer = 'x'
            currentStatus.textContent = 'Player X turn'
        }
    })
})


startButton.addEventListener('click', function () {
    startButton.disabled = true
    currentStatus.textContent = 'Player X turn'
})