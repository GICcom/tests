var numProblems = 10;
var currentProblem = 0;
var correctAnswers = 0;

function generateProblem() {
  var operand1 = Math.floor(Math.random() * 21);
  var operand2 = Math.floor(Math.random() * 21);
  var operator = '<div class="operator"></div>';

  var problemElement = document.getElementById('problem');
  problemElement.innerHTML = operand1 + ' ' + operator + ' ' + operand2;
}

function checkAnswer(userAnswer) {
  var problemElement = document.getElementById('problem');
  var userAnswerElement = document.getElementById('user-answer');

  var operands = problemElement.textContent.split(' ');
  var operand1 = parseInt(operands[0]);
  var operand2 = parseInt(operands[2]);

  var isCorrect;
  if (userAnswer === 'равно') {
    isCorrect = operand1 === operand2;
  } else if (userAnswer === 'меньше') {
    isCorrect = operand1 < operand2;
  } else if (userAnswer === 'больше') {
    isCorrect = operand1 > operand2;
  }

  if (isCorrect) {
    correctAnswers++;
    userAnswerElement.textContent = 'Правильно!';
  } else {
    userAnswerElement.textContent = 'Неправильно! Правильный ответ: ';
    if (operand1 === operand2) {
      userAnswerElement.textContent += 'равно "="';
    } else if (operand1 < operand2) {
      userAnswerElement.textContent += 'меньше "<"';
    } else if (operand1 > operand2) {
      userAnswerElement.textContent += 'больше ">"';
    }
  }

  currentProblem++;

  if (currentProblem === numProblems) {
    problemElement.textContent = 'Количество правильных ответов: ' + correctAnswers;
    document.getElementById('answer-buttons').style.display = 'none';
    document.getElementById('dscr').style.display = 'none'
    userAnswerElement.textContent = '';
    document.getElementById('restart').style.display = 'block';
  } else {
    generateProblem();
  }
}

function restart() {
  currentProblem = 0;
  correctAnswers = 0;


  var problemElement = document.getElementById('problem');
  var userAnswerElement = document.getElementById('user-answer');

  problemElement.textContent = '';
  userAnswerElement.textContent = '';

  generateProblem();

  document.getElementById('answer-buttons').style.display = 'flex';
  document.getElementById('dscr').style.display = 'flex'
}

generateProblem();