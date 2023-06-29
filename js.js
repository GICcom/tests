var numProblems = 10;
    var currentProblem = 0;
    var correctAnswers = 0;

    function generateProblem() {
      var operand1 = Math.floor(Math.random() * 11);
      var operand2 = Math.floor(Math.random() * 11);
      var operator = Math.random() < 0.5 ? '+' : '-';

      if (operator === '-' && operand1 < operand2) {
        // Исключаем примеры с отрицательным ответом
        var temp = operand1;
        operand1 = operand2;
        operand2 = temp;
      }

      var problemElement = document.getElementById('problem');
      problemElement.textContent = operand1 + ' ' + operator + ' ' + operand2;
    }

    function checkAnswer() {
      var answerElement = document.getElementById('answer');
      var userAnswer = parseInt(answerElement.value);
      var problemElement = document.getElementById('problem');
        let answerBtn = document.getElementById('answer-btn')
        var userAnswerElement = document.getElementById('user-answer');

      var operands = problemElement.textContent.split(' ');
      var operand1 = parseInt(operands[0]);
      var operator = operands[1];
      var operand2 = parseInt(operands[2]);

      var correctAnswer;
      if (operator === '+') {
        correctAnswer = operand1 + operand2;
      } else {
        correctAnswer = operand1 - operand2;
      }

      if (userAnswer === correctAnswer) {
        correctAnswers++;
        userAnswerElement.textContent = 'Правильно!';
      } 
      else {
        userAnswerElement.textContent  = 'Неправильно! Правильный ответ: ' + correctAnswer;
      }

      currentProblem++;

      // Проверяем, достигнут ли конец списка примеров
      if (currentProblem === numProblems) {
        // Показываем общее количество правильных ответов
        problemElement.textContent = 'Количество правильных ответов: ' + correctAnswers;
        answerElement.style.display = 'none'; // Скрываем поле ввода ответа
        answerBtn.style.display = 'none'; // Скрываем поле ввода ответа
        userAnswerElement.textContent = ''; // Очищаем результат
        document.getElementById('restart').style.display = 'block'; // Показываем кнопку "Рестарт"
      } 
      else {
        // Генерируем следующий пример
        generateProblem();
        answerElement.value = ''; // Очищаем поле ввода ответа
      }
    }

    function restart() {
        currentProblem = 0;
        correctAnswers = 0;
      
        var problemElement = document.getElementById('problem');
        var answerElement = document.getElementById('answer');
        var userAnswerElement = document.getElementById('user-answer');
        let answerBtn = document.getElementById('answer-btn')
      
        problemElement.textContent = '';
        answerElement.value = '';
        userAnswerElement.textContent = '';
      
        generateProblem();
      
        answerElement.style.display = 'flex'; // Показываем поле ввода ответа
        answerBtn.style.display = 'flex'; // Показываем поле ввода ответа
      }

    // Генерируем первый пример при загрузке страницы
    generateProblem();