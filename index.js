let questions = [
        [
            "Which of the following producer was responsible for Juice Wrld's hit song, Wishing Well?",
            [
                'Nick Mira',
                'Young Chop',
                'Chopsquad DJ',
                'Hitboy'
            ],
            2
        ],
        [
            "With Chopsquad DJ being a major influence in modern rap music, which city was he born?",
            [
                'Chicago',
                'Atlanta',
                'New York',
                'St. Louis'
            ],
            3 
        ],
        [
            "Chopsquad DJ has been playing piano for over a decade now and has earned himself which nickname?",
            [
                'Glory Boy',
                'The Melody',
                'Chop the Great',
                'Hit Man'
            ],
            1
        ],
        [
            "This producer group involves Chopsquad DJ, DP Beats, Young Chop, and Andy Milonakis:",
            [
                'Wicked Money Family',
                'Internet Money',
                'Working on Dying',
                'Glo Gang Productions (GGP)'
            ],
            3
        ],
        [
            "Chopsquad DJ is sponsored by this hardware company:",
            [
                'Arturia',
                'Roland',
                'Akai',
                'Yamaha'
            ],
            1
        ]
    ]
let questionIndex = 0
let submitButton = document.querySelector('#submit-button')
let scoreElement = document.querySelector('#score')
let score = 0
let scoreBoard = document.querySelector('#scoreboard')


submitButton.addEventListener("click", () => {
    if(questionIndex != questions.length-1) {
        let correct = false
        let options = document.querySelectorAll(".option")
        let labels = document.querySelectorAll(".oLabel")
        let optIndex = 0
        let question = document.querySelector("#question")
        let checkedOpt

        options.forEach(opt => {
            if(opt.checked) {
                checkedOpt = opt
                if(opt.dataset.index == questions[questionIndex][2]) {
                    correct = true
                    score += 20
                    scoreElement.innerHTML = score
                }
            }
        })

        questionIndex++
        
        question.innerHTML = questions[questionIndex][0]

        labels.forEach(label => {
                        //    questions array[this gives the question array][]
            label.innerHTML = questions[questionIndex][1][optIndex]
            optIndex++
        })

        checkedOpt.checked = false
    }
})















// submitButton.addEventListener('click', () => {
//     event.preventDefault()

//     let options = document.querySelectorAll('option')
//     let choseCorrect = false
//     let i = 0

//     for(let j = 0; j < questions[questionIndex].length; j++) {
//         if(questionIndex == 1) {
//             index = "B"
//         }
//         else if(questionIndex == 2) {
//             index = "C"
//         }
//         else if(questionIndex == 3) {
//             index = "D"
//         }
//         else {
//             index = "E"
//         }
//         let query = index + j
//         console.log("Query: " + query)
//         element = document.querySelector("#" + index + j)

//         if(element == null) {
//             console.log('element is null')
//         }
//         if(element.value == questions[questionIndex][2]) {
//             console.log('correct')
//             //This is where we figure out if user is correct
//             choseCorrect = true
//         }
//         i++
//     }
    
//     if(choseCorrect) {
//         console.log("Correct")
//         score += 1
//         let scoreBoard = document.querySelector('#score')
//         scoreBoard.innerHTML = "score" + score
//     }


//     if(!choseCorrect) {
//         score += 0
//         console.log('Wrong')
//     }

//     questionIndex += 1
//     currentQuestion = questions[questionIndex]
//     let questionText = document.querySelector('#question')
//     let k = 0
//     options.forEach(opt => {
//         for(let k = 0; j < questions[j].answers.length; k++) {
//             opt.innerHTML = questions[k].answers[j]
//         }
//         k += 1
//     })
// })
// let elementTwo = document.querySelector("#A0")
//     console.log(elementTwo)








