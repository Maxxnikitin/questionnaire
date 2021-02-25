import {
  addInputListenner,
  addDeleteBtnListenner,
  addBorderColor,
  addDragColor,
} from "./utils.js";
import { addAnswerBtnListenner } from "./addAnswerBtnListenner.js";
import {
  inputType,
  borderColorClassName,
  dragColorClassName,
  elementToDel,
} from "./enums/enums.js";

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
  // устанавливаем тип опроса как с единичным выбором
  const pollType: string = inputType.radio;

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

  addBorderColor(pollElement, borderColorClassName.radio);
  addDragColor(pollElement, dragColorClassName.radio);

  addDeleteBtnListenner(closeBtn, elementToDel.poll);

  addAnswerBtnListenner(addAnswerBtn, dragColorClassName.radio, pollType);

  // добавляем элемент на страницу
  pollContainer.append(pollElement);
}
