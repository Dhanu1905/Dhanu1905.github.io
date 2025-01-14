// Play a celebration sound when the page loads
window.addEventListener('load', () => {
    const celebrationSound = new Audio('sounds/celebration.mp3');
    celebrationSound.play();
});

// Floating balloons logic
const animationContainer = document.querySelector('.animation-container');
function generateBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.animationDuration = `${Math.random() * 3 + 3}s`;
    animationContainer.appendChild(balloon);

    setTimeout(() => balloon.remove(), 6000); // Remove balloons after animation
}
setInterval(generateBalloon, 1000); // Generate balloons every second

// Confetti burst on button click
const button = document.querySelector('.btn');
button.addEventListener('click', () => {
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        animationContainer.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000); // Remove confetti after animation
    }
    const buttonSound = new Audio('sounds/click.mp3');
    buttonSound.play();
});
