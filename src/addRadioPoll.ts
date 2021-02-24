import {
  addInputListenner,
  addDeleteBtnListenner,
  addBorderColor,
  addDragColor,
} from "./utils";
import {addAnswerBtnListenner} from "./addAnswerBtnListenner";

const pollTemplateContent: DocumentFragment = (<HTMLTemplateElement>(
  document.querySelector("#poll")
)).content;
const pollContainer: HTMLElement = document.querySelector(
  ".create-poll__questions"
);

export function addRadioPoll(): void {
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