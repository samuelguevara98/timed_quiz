const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex +1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What does <p> stand for?',
        answers: [
            { text: 'Paragraph', correct: true },
            { text: 'Parenthesis', correct: false }
        ]
    },
    {
        question: 'Inside which HTML element do we put javascript?',
        answers: [
            { text: '<js>', correct: false },
            { text: '<script>', correct: true },
            { text: '<javascript>', correct: false },
            { text: '<scripting>', correct: false }
        ]
    },
    {
        question: 'What is the correct syntax for reffering to an external script called "xx.js"?',
        answers: [
            { text: '<script src="xx.js">', correct: true },
            { text: '<script name="xx.js">', correct: false },
            { text: '<script href="xx.js">', correct: false },
            { text: '<script value="xx.js">', correct: false }
        ]
    },
    {
        question: 'How do you add a comment in Javascript?',
        answers: [
            { text: '<!--This is a comment-->', correct: false },
            { text: '#This is a comment', correct: false },
            { text: '//This is a comment', correct: true },
            { text: '(This is a comment)', correct: false }
        ]
    },
    {
        question: 'How do you round the number 2.75, to the nearest whole number?',
        answers: [
            { text: 'Math.rnd(2.75)', correct: false },
            { text: 'round(2.75', correct: false },
            { text: 'Math.round(2.75)', correct: true },
            { text: 'rnd(2.75)', correct: false },
        ]
    },
    {
        question: 'The Web security issues are involved in',
        answers: [
            { text: 'Server', correct: false },
            { text: 'CGI Script', correct: false },
            { text: 'Client', correct: false },
            { text: 'All are correct', correct: true }
        ]
    },
    {
        question: 'In JavaScript, the symbols + - * and / are:',
        answers: [
            { text: 'expressions.', correct: false },
            { text: 'operators.', correct: true },
            { text: 'comparison operators.', correct: false },
            { text: 'None are correct.', correct: false }
        ]
    }
]
