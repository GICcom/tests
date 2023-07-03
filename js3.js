let questions = [
  {
    question: "Сколько углов у фигуры?",
    imagePath: "img/1.jpg",
    correctAnswer: "7"
  },
  {
    question: "Сколько квадратов на картинке?",
    imagePath: "img/2.jpg",
    correctAnswer: "16"
  },
  {
    question: "Сколько треугольников на картинке?",
    imagePath: "img/3.jpg",
    correctAnswer: "4"
  },
  {
    question: "Сколько прямоугольников на картинке?",
    imagePath: "img/4.jpg",
    correctAnswer: "3"
  },
  {
    question: "Сколько кругов на картинке?",
    imagePath: "img/5.jpg",
    correctAnswer: "5"
  },
  {
    question: "Сколько фигур у которых больше 3 углов ты видишь?",
    imagePath: "img/6.jpg",
    correctAnswer: "4"
  }
];

let currentQuestion = 0;
let correctAnswers = 0;

function showQuestion() {
  let questionElement = document.getElementById('question');
  let imageElement = document.getElementById('image');
  let userAnswerElement = document.getElementById('user-answer');
  let correctAnswerElement = document.getElementById('correct-answer');
  let nextButton = document.getElementById('next');

  questionElement.textContent = questions[currentQuestion].question;
  imageElement.src = questions[currentQuestion].imagePath;
  userAnswerElement.value = '';
  correctAnswerElement.textContent = '';
  nextButton.style.display = 'none';
  document.getElementById('inp').style.display = 'flex';

  document.getElementById('submit').disabled = false;
}

function checkAnswer() {
  let userAnswerElement = document.getElementById('user-answer');
  let correctAnswerElement = document.getElementById('correct-answer');
  let nextButton = document.getElementById('next');

  let userAnswer = userAnswerElement.value.trim().toLowerCase();
  let correctAnswer = questions[currentQuestion].correctAnswer.toLowerCase();

  if (userAnswer === correctAnswer) {
    correctAnswers++;
    correctAnswerElement.textContent = 'Правильно!';
  } else {
    correctAnswerElement.textContent = 'Неправильно! Правильный ответ: ' + questions[currentQuestion].correctAnswer;
  }

  document.getElementById('inp').style.display = 'none';
  nextButton.style.display = 'block';
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}
  
function showResult() {
  let resultElement = document.getElementById('result');
  resultElement.textContent = 'Количество правильных ответов: ' + correctAnswers;

  document.getElementById('questions').style.display = 'none';
  document.getElementById('result-section').style.display = 'block';
}
  
function restart() {
  currentQuestion = 0;
  correctAnswers = 0;

  document.getElementById('questions').style.display = 'block';
  document.getElementById('result-section').style.display = 'none';

  showQuestion();
}
  
showQuestion();