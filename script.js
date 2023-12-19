var quizQuestions = [
    {
        question: "The condition in an if/else statement is enclosed with?",
        options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        correctAnswer: "parenthesis"
    },
    {
        question: "Commonly used data types do NOT include?",
        options: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts"
    },
    {
        question: "Arrays in JavaScipt can be used to store?",
        options: ["numbers and strings", "other arrays", "booleans", "all the above"],
        correctAnswer: "all the above"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is?",
        options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correctAnswer: "console.log"
    },
    {
        question: "In HTML, the H stands for what?",
        options: ["hyper", "hippo", "hypo", "hello"],
        correctAnswer: "hyper"
    },
]

var startQuiz = document.querySelector('#start');
var timerCountdown = document.querySelector('#timer-count');
var timerId;

function startTimer(){
    var counter = 75;
    setInterval(function() {
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;
      }
      if (counter === 0) {
          alert('sorry, out of time');
          clearInterval(counter);
      }
    }, 1000);
  }
  function start()
  {
      document.getElementById("count");
      startTimer();
  };