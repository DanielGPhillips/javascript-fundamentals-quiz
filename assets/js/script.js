var startButton = document.getElementById('start-btn')
var quizContainerElement = document.getElementById('quiz-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var nextButton = document.getElementById('next-btn')
let questionsMixed, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide');
    quizContainerElement.classList.remove('hide');
    questionsMixed = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    setNextQuestion();

}

function setNextQuestion() {
    resetState()
    showQuestion(questionsMixed[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        };
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button) 
    })
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (questionsMixed.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong')
}

var questions = [
    {
        question: 'What is JavaScript?', 
        answers: [
            {text: 'The programming language of the World Wide Web.', correct: true }, 
            {text: 'A part of the Java programming language.', correct: false },
            {text: 'The programming language used for Operating Systems.', correct: false },
            {text: 'A type-font based off the writings of monks from Java.', correct: false }
        ] 
    }, 
    {
        question: 'Who uses JavaScript?', 
        answers: [
            {text: 'Monks from Java.', correct: false }, 
            {text: 'Dogs.', correct: false },
            {text: 'Web Developers.', correct: true },
            {text: 'Cats.', correct: false }
        ] 
    },
    {
        question: 'Is Java the same as JavaScript?', 
        answers: [
            {text: 'Yes.', correct: false }, 
            {text: 'No.', correct: true },
            {text: 'Absolutely the same.', correct: false },
            {text: 'Obviously it is.', correct: false }
        ] 
    },
    {
        question: 'Who owns the trademark for JavaScript?', 
        answers: [
            {text: 'Oracle.', correct: true }, 
            {text: 'Weyland Yutani Corp.', correct: false },
            {text: 'Square Enix.', correct: false },
            {text: 'Microsoft.', correct: false }
        ] 
    },
    {
        question: 'What percentage of websites use third-party JavaScript libraries or web framework?', 
        answers: [
            {text: '75%.', correct: false }, 
            {text: '70.', correct: false },
            {text: '85%.', correct: false },
            {text: '80%.', correct: true }
        ] 
    },
    {
        question: 'What is the most popular JavaScript library?', 
        answers: [
            {text: 'Vanilla.', correct: false }, 
            {text: 'React.', correct: false },
            {text: 'jQuery.', correct: true },
            {text: 'Angular.', correct: false }
        ] 
    },   
]