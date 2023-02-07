let questions = {
    questionOne: {
        question: 'This producer made the hit song Wishing Well:',
        answers: [
            'Nick Mira',
            'Young Chop',
            'Chopsquad DJ',
            'Hitboy'
        ],
        correctIndex: 2
    },
}

let questionIndex = 0
let currentQuestion = questions[questionIndex]

let submitButton = document.querySelector('#question-submit')
let form = document.querySelector

submitButton.addEventListener('click', () => {
    let options = document.querySelectorAll ('option')
    let choseCorrect = false
    let i = 0

    options.forEach(element => {
        if(element.checked = true && currentQuestion.correctIndex == [i]) {
            //This is where we figure out if user is correct
            choseCorrect = true
        }
        i++
    });

    if(!choseCorrect) {
        //score doesnt move
    }
    questionIndex += 1
    currentQuestion = questions[questionIndex]
})










//Need a play button and a next button

//const playButton

//const nextQuestion

//need an array of questions and answers with only one answer = true and the rest = false

//let questions = []

//need a function to start the game on click

//need a function to check the array for the correct answer on click

//need a function to display the next question on click



