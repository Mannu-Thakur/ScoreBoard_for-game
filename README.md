# ScoreBoard_for-game

//code below
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="sc.css">
    <title>ScoreKeeperPt</title>
</head>
<body>
    <div class="container">
        <h1>00:00</h1>
        <p id="para">Use buttons below to keep score</p>
        <h3>Playing to</h3>
        <section id="container">
            <button id="btn1" style="--clr:#0000FF"> Player-1</button>
            <button id="btn2" style="--clr:#0000FF">Player-2</button>
            <button id="btn3" style="--clr:#FF0000">Reset</button>
        </section>
    </div>
    <script src="sc.js"></script>
</body>
</html>


* {
    margin: 0;
    padding: 0;
    border-radius: 4px;
}

body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

h1 {
    font-size: 48px;
    margin-bottom: 13px;
}

#btn1, #btn2, #btn3 {
    padding: 8px 8px;
    margin: 2px;
    background-color: var(--clr);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
    color: white;
    cursor: pointer;
    border: none;
}

#btn3 {
    color: #f0eceb;
}

#container {
    border-radius: 7px;
    margin: 8px 10px;
}

#btn1:hover, #btn2:hover, #btn3:hover {
    filter: brightness(0.9);
}

#btn1:active, #btn2:active, #btn3:active {
    transform: scale(0.95);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}


let score1 = 0;
let score2 = 0;
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

btn1.addEventListener('click', function() {
    score1++;
    updateScore();
});

btn2.addEventListener('click', function() {
    score2++;
    updateScore();
});

btn3.addEventListener('click', function() {
    score1 = 0;
    score2 = 0;
    updateScore();
});

function updateScore() {
    document.querySelector('h1').textContent = `${score1.toString().padStart(2, '0')}.${score2.toString().padStart(2, '0')}`;
}
