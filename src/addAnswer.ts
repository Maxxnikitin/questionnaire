import {
  addInputListenner,
  addDeleteBtnListenner,
  addDragColor,
} from "./utils.js";

import { dragColorClassName, elementOnPage } from "./enums/enums.js";

const answerTemplateContent: DocumentFragment = (<HTMLTemplateElement>(
  document.querySelector("#answer")
)).content;

export function addAnswer(
  btn: HTMLButtonElement,
  pollType: string,
  answer?: string
): void {
  const answerElement: HTMLElement = <HTMLElement>(
    answerTemplateContent.querySelector(elementOnPage.answer).cloneNode(true)
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

  addDragColor(answerElement, dragColorClassName[pollType]);

  addInputListenner(input, label);

  addDeleteBtnListenner(closeBtn, elementOnPage.answer);

  // находим нужный контейнер для вставки через ближайшего родителя
  const answerContainer: HTMLElement = btn
    .closest(".create-poll__form")
    .querySelector(".create-poll__answers");

  if (answer) {
    input.value = answer;
    label.classList.add("on-focus");
  }

  // добавляем вариант ответа на страницу
  answerContainer.append(answerElement);
  //dragPolls(answerContainer);
}
