// Buttons
let p1Btn = document.querySelector('#p1Button');
let p2Btn = document.querySelector('#p2Button');
let reset = document.querySelector('#reset');
let winningScoreSelector = document.querySelector("#playto");

// Scores
let p1Dip = document.querySelector("#p1Display");
let p2Dip = document.querySelector("#p2Display");

// Status
let winningScore = 3;
let isGameOver = false;

p1Btn.addEventListener('click', function (e) {
    let score = parseInt(p1Dip.innerText);

    if (!isGameOver && score !== winningScore) {
        p1Dip.innerText = `${score + 1}`;
    }
    else {
        isGameOver = true;
    }
});

p2Btn.addEventListener('click', function (e) {
    let score = parseInt(p2Dip.innerText);

    if (!isGameOver && score !== winningScore) {
        p2Dip.innerText = `${score + 1}`;
    }
    else {
        isGameOver = true;
    }
});

function resetGame() {
    p1Dip.innerText = 0;
    p2Dip.innerText = 0;
    isGameOver = false;
}

reset.addEventListener('click', resetGame);

winningScoreSelector.addEventListener('change', function (e) {
    winningScore = parseInt(this.value);
    resetGame();
});