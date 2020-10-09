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

let win1 = []  /* cells 0, 1, 2 */
let win2 = []  /* cells 3, 4, 5 */
let win3 = []  /* cells 6, 7, 8 */
let win4 = []  /* cells 0, 3, 6 */
let win5 = []  /* cells 1, 4, 7 */
let win6 = []  /* cells 2, 5, 8 */
let win7 = []  /* cells 0, 4, 8 */
let win8 = []  /* cells 2, 4, 6 */

// Game play logic ********************************
function checkForWin(player, cell) {

    if (player === 'x') {
        arrayValue = 1
    } else {
        arrayValue = 2
    }

    if (cell === 'cell-0') {
        win1.push(arrayValue)
        win4.push(arrayValue)
        win7.push(arrayValue)



        let total1 = (win1.reduce(function (arrayTotal, nextNum) {
            return arrayTotal + nextNum
        }, 0
        ))
        let length1 = (win1.length)

        if (length1 === 3 && total1 % 3 === 0) {
            if (win1[0] === 1) {
                console.log(' X WINS')
            } else {
                console.log('O WINS')
            }
        }



    } else if (cell === 'cell-1') {
        win1.push(arrayValue)
        win5.push(arrayValue)
    } else if (cell === 'cell-2') {
        win1.push(arrayValue)
        win6.push(arrayValue)
        win8.push(arrayValue)
    } else if (cell === 'cell-3') {
        win2.push(arrayValue)
        win4.push(arrayValue)
    } else if (cell === 'cell-4') {
        win2.push(arrayValue)
        win5.push(arrayValue)
        win7.push(arrayValue)
        win8.push(arrayValue)
    } else if (cell === 'cell-5') {
        win2.push(arrayValue)
        win6.push(arrayValue)
    } else if (cell === 'cell-6') {
        win3.push(arrayValue)
        win4.push(arrayValue)
        win8.push(arrayValue)
    } else if (cell === 'cell-7') {
        win3.push(arrayValue)
        win5.push(arrayValue)
    } else if (cell === 'cell-8') {
        win3.push(arrayValue)
        win6.push(arrayValue)
        win7.push(arrayValue)
    }






    // console.log('1 - ' + win1)
    // console.log('2 - ' + win2)
    // console.log('3 - ' + win3)
    // console.log('4 - ' + win4)
    // console.log('5 - ' + win5)
    // console.log('6 - ' + win6)
    // console.log('7 - ' + win7)
    // console.log('8 - ' + win8)
}


startButton.addEventListener('click', function () {
    startButton.style.display = 'none'
    currentStatus.style.display = 'block'
    currentStatus.textContent = 'Player X: GO!'

    playCell.forEach((move) => {
        move.addEventListener('click', () => {
            if (move.textContent !== '') {
                alert('Please select an Empty Cell')
            } else {
                if (currentPlayer === 'x') {
                    checkForWin(currentPlayer, move.id)
                    move.textContent = playerXToken //drops token
                    currentPlayer = 'o' // change player
                    currentStatus.textContent = "Player O: GO!" // displays current player
                } else {
                    checkForWin(currentPlayer, move.id)
                    move.textContent = playerOToken
                    currentPlayer = 'x'
                    currentStatus.textContent = "Player X: GO!"
                }
            }
            // console.log(currentPlayer, move.id)




        })

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