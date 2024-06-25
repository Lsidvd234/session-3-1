const targetNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const feedback = document.getElementById('feedback');

    if (userGuess < targetNumber) {
        feedback.textContent = 'Too low! Try again.';
        feedback.style.color = 'blue';
    } else if (userGuess > targetNumber) {
        feedback.textContent = 'Too high! Try again.';
        feedback.style.color = 'red';
    } else if (userGuess === targetNumber) {
        feedback.textContent = 'Congratulations! You guessed the correct number.';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Please enter a valid number.';
        feedback.style.color = 'orange';
    }
}
