import { DATA } from "./data.js";

let localResult = {};
const endResult = document.querySelector(".end-result");
const quiz = document.getElementById("quiz");
const questions = document.getElementById("questions");
const indicator = document.getElementById("indicator");
const results = document.getElementById("results");
const btnNext = document.getElementById("btn-next");
const btnRestart = document.getElementById("btn-restart");

const renderQuestions = (index) => {
  renderIndicator(index + 1);
  questions.dataset.currentStep = index;
  const renderAnswers = () =>
    DATA[index].answers
      .map(
        (answer) => `
    <li>
        <label>
                <input class="answer-input" type="radio" name=${index} value=${answer.id}>
              ${answer.value}
        </label>
    </li>
    `
      )
      .join("");

  questions.innerHTML = `
    <div class="quiz-question-item">
    <div class="quiz-question-item__question">${DATA[index].question}</div>
    <ul class="quiz-question-item__answers">${renderAnswers()}</ul>
    </div>
    
    `;
  return renderAnswers();
};
const renderResults = () => {
  let content = "";
let trueInd=0;
  const getClassName = (answer, questionIndex) => {
    let classname = "";

    if (!answer.correct && answer.id === localResult[questionIndex]) {
      classname = "answer--invalid";
    } else if (answer.correct) {
      classname = "answer--valid";
    }
    if (answer.correct && answer.id === localResult[questionIndex]) {
      trueInd += 1;
    }
    endResult.innerHTML = `${trueInd} из ${DATA.length} правильно`;
    return classname;
  };

  const getAnswers = (questionIndex) =>
    DATA[questionIndex].answers
      .map(
        (answer) =>
          `<li class=${getClassName(answer, questionIndex)}>${
            answer.value
          }</li>`
      )
      .join("");

  DATA.forEach((questionItem, index) => {
    content += `
       ${index + 1 + " " + "Вопрос"}
         <div class="quiz-results-item">
          <div class="quiz-results-item__question">${
            questionItem.question
          }</div>
          <ul class="quiz-results-item__answers">${getAnswers(index)}</ul>
        </div>
`;
  });

  results.innerHTML = content;
};
const renderIndicator = (currentStep) => {
  indicator.innerHTML = `${currentStep}/${DATA.length}`;
};

quiz.addEventListener("change", (event) => {
  if (event.target.classList.contains("answer-input")) {
    localResult[event.target.name] = event.target.value;
    btnNext.disabled = false;
  }
  //   if( localResult[event.target.name])
  console.log(localResult);
});

quiz.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-next")) {
    const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;

    if (DATA.length === nextQuestionIndex) {
      questions.classList.add("questions--hidden");
      indicator.classList.add("indicator--hidden");
      results.classList.add("results--visible");
      btnNext.classList.add("btn-bext--hidden");
      btnRestart.classList.add("btn-restart--visible");
      endResult.style.display="block";
     
      renderResults();
    } else {
      renderQuestions(nextQuestionIndex);
    }

    btnNext.disabled = true;
  }
  if (event.target.classList.contains("btn-restart")) {
    localResult = {};
    results.innerHTML = "";
    questions.classList.remove("questions--hidden");
    indicator.classList.remove("indicator--hidden");
    results.classList.remove("results--visible");
    btnNext.classList.remove("btn-bext--hidden");
    btnRestart.classList.remove("btn-restart--visible");
    endResult.style.display="none";

    renderQuestions(0);
  }
});

renderQuestions(0);


