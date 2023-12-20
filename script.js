//questions to be included in quiz
var quizQuestions = [
    {
        question: "The condition in an if/else statement is enclosed with?",
        options: ["A. quotes", "B. curly brackets", "C. parenthesis", "D. square brackets"],
        correctAnswer: 2
    },
    {
        question: "Commonly used data types do NOT include?",
        options: ["A. strings", "B. booleans", "C. alerts", "D. numbers"],
        correctAnswer: 2
    },
    {
        question: "Arrays in JavaScipt can be used to store?",
        options: ["A. numbers and strings", "B. other arrays", "C. booleans", "D. all the above"],
        correctAnswer: 3
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is?",
        options: ["A. JavaScript", "B. terminal/bash", "C. for loops", "D. console.log"],
        correctAnswer: 3
    },
    {
        question: "In HTML, the H stands for what?",
        options: ["A. hyper", "B. hippo", "C. hypo", "D. hello"],
        correctAnswer: 0
    },
]

var startQuiz = document.querySelector('#start');
var timerCountdown = document.querySelector('#timer-count');
var currentQuestionIndex = 0;
var intervalId;
var counter = 75;

//help was obtained utilizing askBCS Learning Assistant "jarmstrong"
//checks for right or wrong answer
function checkAnswer(selectedIndex, correctAnswer){ 
    if (selectedIndex == correctAnswer) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
        subtractTime();
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        setTimeout(function(){
        displayQuestion(quizQuestions[currentQuestionIndex]);
    }, 1000);
    } else {
    clearInterval(intervalId);
    alert("quiz completed!");
    }
}

//help was obtained utilizing askBCS Learning Assistant "jarmstrong"
//should subtract 10 seconds for incorrect answers
function subtractTime() {
    counter -= 10;
}

//help was obtained utilizing askBCS Learning Assistant "jarmstrong"
//displays the question after start button pressed
function displayQuestion(questionObj){
    var quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";

    var questionElement = document.createElement("p");
    questionElement.textContent = questionObj.question;
    quizContainer.appendChild(questionElement);

    questionObj.options.forEach(function(option, index) {
        var optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.classList.add("option");
        optionButton.setAttribute("data-index", index);
        quizContainer.appendChild(optionButton);

        optionButton.addEventListener("click", function(event){
            var selectedOptionIndex = event.target.getAttribute("data-index");
            checkAnswer(selectedOptionIndex, questionObj.correctAnswer);
        });
    });
}

//starts the 75 second timer
function startTimer(){
    var interval = setInterval(function() {
      counter--;
      timerCountdown.textContent = counter;

      if (counter === 0 || currentQuestionIndex >= quizQuestions.length) {
        clearInterval(interval);
        alert('Game Over! Save your score by clicking the top left "High Scores" link!');
      }
    }, 1000);
}

function start(){
      displayQuestion(quizQuestions[0]);
      startTimer();
}
