
let redPoints = 771;
let bluePoints = 771;
const redSide = document.getElementById('redSide');
const blueSide = document.getElementById('blueSide');
const winnerVideo = document.getElementById('winner-video');
const trumpVideo = document.getElementById('trump-video');
const kamalaVideo = document.getElementById('kamala-video');

function moveToBlue() {
    if (parseInt(getComputedStyle(redSide).marginLeft) < 150) {
        redSide.style.marginLeft = (parseInt(getComputedStyle(redSide).marginLeft) || 0) + 50 + 'px';
    } else {
        declareWinner('trump');
    }
}

function moveToRed() {
    if (parseInt(getComputedStyle(blueSide).marginRight) < 150) {
        blueSide.style.marginRight = (parseInt(getComputedStyle(blueSide).marginRight) || 0) + 50 + 'px';
    } else {
        declareWinner('kamala');
    }
}

function declareWinner(winner) {
    if (winner === 'trump') {
        trumpVideo.src = 'trump-winner.mp4';
        winnerVideo.style.display = 'block';
        winnerVideo.play();
    } else if (winner === 'kamala') {
        kamalaVideo.src = 'kamala-winner.mp4';
        winnerVideo.style.display = 'block';
        winnerVideo.play();
    }
}
