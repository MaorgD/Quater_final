let json = [{
        q: ' All the products in the bakery are home Made?',
        answers: [
            'Yes',
            'Just the bread',
            'No',
            'Just the cakes'
        ],
        currentAns: 'Yes'
    },
    {
        q: `When does the bakery open for the first time?`,
        answers: [
            'June 22',
            'December 21',
            'August 12',
            'October 31'
        ],
        currentAns: 'June 22'
    },
    {
        q: `How many places we have in the bakery?`,
        answers: [
            '30',
            '50',
            '70',
            '90'
        ],
        currentAns: '70'
    },

    {
        q: ' Does the bakery is kosher?',
        answers: [
            'No',
            'Yes',
            'What is kosher?',
            'All answers are fail'
        ],
        currentAns: 'Yes'
    },
    {
        q: 'Who create the bakery?',
        answers: [
            'Maor',
            'Dad',
            'Mom',
            'Grendfuther'
        ],
        currentAns: 'Grendfuther'
    }
]


let t = new Trivia('#parent', json)
t.render()