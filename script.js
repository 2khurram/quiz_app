// script.js
const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = "";
    
    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", checkAnswer);
        choicesElement.appendChild(button);
    });
}

function checkAnswer(event) {
    const userAnswer = event.target.textContent;
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
    
    if (userAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        // Quiz is over
        questionElement.textContent = "Quiz Complete!";
        choicesElement.innerHTML = "";
        scoreElement.textContent = `Final Score: ${score} out of ${quizData.length}`;
        nextButton.style.display = "none";
    }
}

nextButton.addEventListener("click", loadQuestion);
loadQuestion();