// Buttons
let p1Btn = document.querySelector('#p1Button');
let p2Btn = document.querySelector('#p2Button');
let reset = document.querySelector('#reset');
let winningScoreSelector = document.querySelector("#playto");

// Scores
let p1Dip = document.querySelector("#p1Display");
let p2Dip = document.querySelector("#p2Display");

let p1Score = 0;
let p2Score = 0;

// Status
let winningScore = 3;
let isGameOver = false;

p1Btn.addEventListener('click', function (e) {
    if (!isGameOver) {
        p1Score++;
        p1Dip.innerText = p1Score;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Dip.classList.add("has-text-success");
            p2Dip.classList.add("has-text-danger");
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
    }
});

p2Btn.addEventListener('click', function (e) {
    if (!isGameOver) {
        p2Score++;
        p2Dip.innerText = p2Score;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Dip.classList.add("has-text-success");
            p1Dip.classList.add("has-text-danger");
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
    }
});

function resetGame() {
    p1Score = 0;
    p2Score = 0;
    p1Dip.innerText = 0;
    p2Dip.innerText = 0;
    isGameOver = false;
    p1Dip.classList.remove("has-text-success", "has-text-danger");
    p2Dip.classList.remove("has-text-success", "has-text-danger");
    p1Btn.disabled = false;
    p2Btn.disabled = false;
}

reset.addEventListener('click', resetGame);

winningScoreSelector.addEventListener('change', function (e) {
    winningScore = parseInt(this.value);
    resetGame();
});