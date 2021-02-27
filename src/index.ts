import { createPollsData } from "./createPollsData.js";
import { addPoll } from "./addPoll.js";
import { pollsData, pollObject } from "./types/interfaces";
import { dragPoll } from "./dragPoll.js";
import { dragPolls } from "./dragPolls.js";
import { inputType } from "./enums/enums.js";

const resultTemplateContent: DocumentFragment = (<HTMLTemplateElement>(
  document.querySelector("#result")
)).content;
const resultContainer: HTMLElement = document.querySelector(".result-polls");

const optionTemplateContent: DocumentFragment = (<HTMLTemplateElement>(
  document.querySelector("#option")
)).content;

let templateRadio: HTMLElement = document.querySelector("#template-radio");
const templateCheckbox: HTMLElement = document.querySelector(
  "#template-checkbox"
);

let pollContainers: HTMLElement[] = Array.from(
  document.querySelectorAll(".cont")
);

const testBtn: HTMLButtonElement = document.querySelector("#btn-test");

const content: HTMLElement = document.querySelector(".content");
const result: HTMLElement = document.querySelector(".result");

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
  const data: pollsData = createPollsData();

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

    const poll: pollObject = data[num];
    text.textContent = poll["title"];
    const pollIndex: number = +num;
    index.textContent = (pollIndex + 1).toString();
    const optionContainer: HTMLElement = resultElement.querySelector(
      ".result__form-options"
    );

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
      input.setAttribute("type", poll["type"]);
      optionContainer.append(optionElement);
    }
    resultContainer.append(resultElement);
  }

  result.classList.remove("disabled");
  content.classList.add("disabled");
}

templateRadio.addEventListener("mousedown", (evt: MouseEvent) => {
  dragPoll(evt, templateRadio, addPoll(inputType.radio));
});

templateCheckbox.addEventListener("mousedown", (evt: MouseEvent) => {
  dragPoll(evt, templateCheckbox, addPoll(inputType.checkbox));
});
testBtn.addEventListener("click", setPolls);

pollContainers.forEach((poll) => {
  dragPolls(poll);
});
