document.getElementById('generateButton').addEventListener('click', async () => {
    const response = await fetch('/generateQuiz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rubrique: 'HTML' }) // Vous pouvez changer la rubrique ici
    });

    const data = await response.json();
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    data.questions.forEach((question, index) => {
        const questionElement = document.createElement('p');
        questionElement.textContent = `Question ${index + 1}: ${question}`;
        quizContainer.appendChild(questionElement);
    });
});
