import {
  addInputListenner,
  addDeleteBtnListenner,
  addBorderColor,
  addDragColor,
} from "./utils";
import { createPollsData } from "./createPollsData";

const pollTemplateContent: DocumentFragment = (<HTMLTemplateElement>(
  document.querySelector("#poll")
)).content;
const pollContainer: HTMLElement = document.querySelector(
  ".create-poll__questions"
);

const answerTemplateContent: DocumentFragment = (<HTMLTemplateElement>(
  document.querySelector("#answer")
)).content;

const resultTemplateContent: DocumentFragment = (<HTMLTemplateElement>(
  document.querySelector("#result")
)).content;
const resultContainer: HTMLElement = document.querySelector(".result-polls");

const optionTemplateContent: DocumentFragment = (<HTMLTemplateElement>(
  document.querySelector("#option")
)).content;

const templateRadio: HTMLElement = document.querySelector("#template-radio");
const templateCheckbox: HTMLElement = document.querySelector(
  "#template-checkbox"
);

const testBtn: HTMLButtonElement = document.querySelector("#btn-test");

const content: HTMLElement = document.querySelector(".content");
const result: HTMLElement = document.querySelector(".result");

function addAnswerBtnListenner(
  btn: HTMLButtonElement,
  colorClass: string
): void {
  btn.addEventListener("click", () => {
    const answerElement: HTMLElement = <HTMLElement>(
      answerTemplateContent
        .querySelector(".create-poll__answer")
        .cloneNode(true)
    );

    // находим текстовый инпут
    const input: HTMLInputElement = answerElement.querySelector(
      ".create-poll__form-input"
    );
    // находим его label
    const label: HTMLElement = answerElement.querySelector(
      ".create-poll__form-label"
    );

    // находим input, чтобы сделать его radio или checkbox
    const answerBox: HTMLInputElement = answerElement.querySelector(
      "#answer-box"
    );
    answerBox.setAttribute("type", "radio");

    // находим кнопку закрытия
    const closeBtn: HTMLButtonElement = answerElement.querySelector(
      ".create-poll__button"
    );

    addDragColor(answerElement, colorClass);

    addInputListenner(input, label);

    addDeleteBtnListenner(closeBtn, ".create-poll__answer");

    // находим нужный контейнер для вставки через ближайшего родителя
    const answerContainer: HTMLElement = btn
      .closest(".create-poll__form")
      .querySelector(".create-poll__answers");

    // добавляем вариант ответа на страницу
    answerContainer.append(answerElement);
  });
}

function addRadioPoll(): void {
  const pollElement: HTMLElement = <HTMLElement>(
    pollTemplateContent.querySelector(".create-poll__question").cloneNode(true)
  );

  // находим текстовый инпут
  const input: HTMLInputElement = pollElement.querySelector(
    ".create-poll__form-input"
  );
  // находим его label
  const label: HTMLElement = pollElement.querySelector(
    ".create-poll__form-label"
  );

  // находим кнопку закрытия
  const closeBtn: HTMLButtonElement = pollElement.querySelector("#close");

  // находим кнопку добавления строчки с вариантом ответа
  const addAnswerBtn: HTMLButtonElement = pollElement.querySelector(
    "#add-answer"
  );

  addInputListenner(input, label);

  addBorderColor(pollElement, "add-border-blue");
  addDragColor(pollElement, "add-bgcolor-blue");

  addDeleteBtnListenner(closeBtn, ".create-poll__question");

  addAnswerBtnListenner(addAnswerBtn, "add-bgcolor-blue");

  // добавляем элемент на страницу
  pollContainer.append(pollElement);
}

function addCheckboxPoll(): void {
  const pollElement: HTMLElement = <HTMLElement>(
    pollTemplateContent.querySelector(".create-poll__question").cloneNode(true)
  );

  // находим текстовый инпут
  const input: HTMLInputElement = pollElement.querySelector(
    ".create-poll__form-input"
  );
  // находим его label
  const label: HTMLElement = pollElement.querySelector(
    ".create-poll__form-label"
  );

  // находим кнопку закрытия
  const closeBtn: HTMLButtonElement = pollElement.querySelector("#close");

  // находим кнопку добавления строчки с вариантом ответа
  const addAnswerBtn: HTMLButtonElement = pollElement.querySelector(
    "#add-answer"
  );

  addBorderColor(pollElement, "add-border-purple");
  addDragColor(pollElement, "add-bgcolor-purple");

  addInputListenner(input, label);

  addDeleteBtnListenner(closeBtn, ".create-poll__question");

  addAnswerBtnListenner(addAnswerBtn, "add-bgcolor-purple");

  // добавляем элемент на страницу
  pollContainer.append(pollElement);
}

// функция отправки данных в превью
function setPolls(): void {
  if (content.classList.contains("disabled")) {
    content.classList.remove("disabled");
    result.classList.add("disabled");

    Array.from(resultContainer.querySelectorAll(".result-poll")).forEach(
      (poll) => {
        poll.remove();
      }
    );
    return;
  }

  // забираем объект с данными
  const data: Object = createPollsData();

  // проходим циклом по данным и вставляем в разметку
  for (let num in data) {
    const resultElement: HTMLElement = <HTMLElement>(
      resultTemplateContent.querySelector(".result-poll").cloneNode(true)
    );

    // находим номер вопроса по порядку
    const index: HTMLElement = resultElement.querySelector(
      ".result__form-index"
    );

    // находим текст вопроса
    const text: HTMLElement = resultElement.querySelector(".result__form-text");

    const poll: Object = data[num];
    text.textContent = poll["title"];
    const pollIndex: number = +num;
    index.textContent = (pollIndex + 1).toString();
    const optionContainer: HTMLElement = resultElement.querySelector(
      ".result__form-options"
    );

    const inputType: string = poll["type"];

    for (let elem in poll) {
      if (elem === "title" || elem === "type") {
        continue;
      }
      const optionElement: HTMLElement = <HTMLElement>(
        optionTemplateContent
          .querySelector(".result__form-option")
          .cloneNode(true)
      );

      // находим input, чтобы менять тип на radio или checkbox
      const input: HTMLInputElement = optionElement.querySelector(
        ".result__form-input"
      );

      // находим текст ответа
      const answer: HTMLElement = optionElement.querySelector("#answer");

      answer.textContent = poll[elem];
      input.setAttribute("type", inputType);
      optionContainer.append(optionElement);

      resultContainer.append(resultElement);
    }
  }

  result.classList.remove("disabled");
  content.classList.add("disabled");
}

templateRadio.addEventListener("click", addRadioPoll);

templateCheckbox.addEventListener("click", addCheckboxPoll);

testBtn.addEventListener("click", setPolls);
