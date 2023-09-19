var questions = [
    {
        numb: 1,
        question: "which is a coding language?",
        answer: "JavaScript",
        options: [
            "https",
            "French",
            "JavaScript",
            "Anaconda"
        ]
    },
    {
        numb: 2,
        question: "Which is a part of the box model?",
        answer: "Padding",
        options: [
            "Padding",
            "Margarine",
            "Body",
            "Borders"
        ]
    },

    {
        numb: 3,
        question: "What is a code block?",
        answer: "Any code that's between the curly brackets",
        options: [
            "code written in JavaScript",
            "Any code that's between the curly brackets",
            "Any code in the Script file",
            "Any code after an object"
        ]
    },
    {
    numb: 4,
    question: "what does HTML stand for?" ,
    answer: "Hyper Text Markup Language",
    options: [
        "Hypertext marked language",
        "Hyper Text Markup Language",
        "Hypo Test Masked Language",
        "Hypertext Markedup Lineage"
    ]
    },
]


var start_button = document.querySelector(".start_button button");
var quiz_rules = document.querySelector("quiz_rules");
var exit = quiz_rules.querySelector(".buttons .quit");
var resume = quiz_rules.querySelector(".buttons .restart");
var quiz = document.querySelector(".quiz");
