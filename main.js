let startButton = document.getElementById('start')
startButton.addEventListener('click', function () {
    startButton.disabled = true
    document.getElementById('status').textContent = 'Player X turn'
})