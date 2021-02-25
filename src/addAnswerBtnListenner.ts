import {
  addInputListenner,
  addDeleteBtnListenner,
  addDragColor,
} from "./utils.js";

import { elementToDel } from "./enums/enums.js";

const answerTemplateContent: DocumentFragment = (<HTMLTemplateElement>(
  document.querySelector("#answer")
)).content;

export function addAnswerBtnListenner(
  btn: HTMLButtonElement,
  colorClass: string,
  pollType: string
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

    // добавляем в разметку тип инпута
    answerBox.setAttribute("type", pollType);

    // находим кнопку закрытия
    const closeBtn: HTMLButtonElement = answerElement.querySelector(
      ".create-poll__button"
    );

    addDragColor(answerElement, colorClass);

    addInputListenner(input, label);

    addDeleteBtnListenner(closeBtn, elementToDel.answer);

    // находим нужный контейнер для вставки через ближайшего родителя
    const answerContainer: HTMLElement = btn
      .closest(".create-poll__form")
      .querySelector(".create-poll__answers");

    // добавляем вариант ответа на страницу
    answerContainer.append(answerElement);
  });
}
