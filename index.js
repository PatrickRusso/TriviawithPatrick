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
        0          
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
let currentQuestion = questions[questionIndex]

let submitButton = document.querySelector('#submit-button')

submitButton.addEventListener('click', () => {
    console.log('We made it !!!')
    let options = document.querySelectorAll ('option')
    console.log(options)
    let choseCorrect = false
    let i = 0

    for(let j = 0; j < questions[questionIndex].options; j++) {
        console.log([j])
        let element = document.querySelector('#Q' + toString[j])

        console.log(element)
        if(element.value = true) {
            console.log(element)
            //This is where we figure out if user is correct
            choseCorrect = true
        }
        i++
    }

    if(!choseCorrect) {
        score += 1
        let scoreBoard = document.querySelector('#score')
        scoreBoard.innerHTML = "score" + score
    }
    questionIndex += 1
    currentQuestion = questions[questionIndex]
    let questionText = document.querySelector('#question')
    let k = 0
    options.forEach(opt => {
        for(let j = 0; j < questions[k].answers.length; j++) {
            opt.innerHTML = questions[k].answers[j]
        }
        k += 1
    })
})








