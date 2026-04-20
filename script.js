const tg = window.Telegram.WebApp;
const btn = document.getElementById('cookie-btn');
const scoreDisplay = document.getElementById('score');
let score = 0;

tg.expand(); // Makes the app full screen

btn.addEventListener('click', () => {
    score++;
    scoreDisplay.innerText = score;
    tg.HapticFeedback.impactOccurred('medium'); // Vibrate on click!
});