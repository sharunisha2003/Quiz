function checkAnswer(element, answer) {
    const correctAnswer = 'D';
    const options = document.querySelectorAll('.option');
    
    options.forEach(option => {
        option.classList.remove('correct', 'wrong');
        if (option.textContent.trim().startsWith(correctAnswer)) {
            option.classList.add('correct');
        }
    });

    if (answer === correctAnswer) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}