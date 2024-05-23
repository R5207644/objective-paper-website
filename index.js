fetch('/data/generalQuestions.json')
  .then(response => response.json())
  .then(data => {
    const questions = data.questions;
    for(let i = 0; i < questions.length; i++) {
      const questionString = `
        <div class="question">
          <p><b>${i + 1}</b> . ${questions[i].question}</p>
        <div class="option">
          <input type="radio" name="question${i}" value="a">
          <label for="a">${questions[i].options[0]}</label>

          <input type="radio" name="question${i}" value="b">
          <label for="b">${questions[i].options[1]}</label>

          <input type="radio" name="question${i}" value="c">
          <label for="c">${questions[i].options[2]}</label>

          <input type="radio" name="question${i}" value="d">
          <label for="d">${questions[i].options[3]}</label>
        </div>
        </div>
        `;
      const questionsContainer = document.getElementById("questionsContainer");
      questionsContainer.innerHTML += questionString;

      const answerString = `
      <div class="question">
        <em>${i + 1} . <b>${questions[i].answer}</b></em>
      </div>
      `;
      const answersContainer = document.getElementById("answersContainer");
      answersContainer.innerHTML += answerString;
    }
  });
