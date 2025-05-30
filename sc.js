// Initialize scores
let score1 = 0;
let score2 = 0;
let isGameOver = false;
let winningScore = 5;

// DOM elements
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const scoreDisplay = document.querySelector('h1');
const playToSelect = document.getElementById('playTo');

// Winner display (optional)
const winnerDisplay = document.createElement('p');
winnerDisplay.style.color = '#00FFAB';
winnerDisplay.style.fontWeight = 'bold';
winnerDisplay.style.marginTop = '10px';
document.querySelector('.container').appendChild(winnerDisplay);

// Format score as MM:SS
function formatScore(p1, p2) {
    const left = String(p1).padStart(2, '0');
    const right = String(p2).padStart(2, '0');
    return `${left}:${right}`;
}

// Update the score display
function updateScore() {
    scoreDisplay.textContent = formatScore(score1, score2);

    if (score1 === winningScore) {
        isGameOver = true;
        winnerDisplay.textContent = '🎉 Player 1 Wins!';
        disableButtons();
    } else if (score2 === winningScore) {
        isGameOver = true;
        winnerDisplay.textContent = '🎉 Player 2 Wins!';
        disableButtons();
    }
}

// Disable player buttons
function disableButtons() {
    btn1.disabled = true;
    btn2.disabled = true;
    btn1.style.opacity = '0.6';
    btn2.style.opacity = '0.6';
}

// Enable player buttons
function enableButtons() {
    btn1.disabled = false;
    btn2.disabled = false;
    btn1.style.opacity = '1';
    btn2.style.opacity = '1';
}

// Reset scores and UI
function resetScores() {
    score1 = 0;
    score2 = 0;
    isGameOver = false;
    updateScore();
    winnerDisplay.textContent = '';
    enableButtons();
}

// Event Listeners
btn1.addEventListener('click', function () {
    if (!isGameOver) {
        score1++;
        updateScore();
    }
});

btn2.addEventListener('click', function () {
    if (!isGameOver) {
        score2++;
        updateScore();
    }
});

btn3.addEventListener('click', resetScores);

// Update winning score when dropdown changes
playToSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetScores(); // Optional: Reset when game type changes
});
