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
  elementOnPage,
} from "./enums/enums.js";
import { addAnswer } from "./addAnswer.js";
import { pollObject } from "interfaces.js";
import { AddCopyPollListenner } from "./addCopyPollListenner.js";
import { dragPoll } from "./dragPoll.js";

const pollTemplateContent: DocumentFragment = (<HTMLTemplateElement>(
  document.querySelector("#poll")
)).content;

const pollContainer: HTMLElement = document.querySelector(
  ".create-poll__questions"
);

export function addCheckboxPoll(data?: pollObject): HTMLElement {
  const pollElement: HTMLElement = <HTMLElement>(
    pollTemplateContent.querySelector(".create-poll__question").cloneNode(true)
  );

  // устанавливаем тип опроса как со множественным выбором
  const pollType: string = inputType.checkbox;

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

  // находим кнопку копирования
  const copyBtn: HTMLButtonElement = pollElement.querySelector("#copy");

  // находим кнопку добавления строчки с вариантом ответа
  const addAnswerBtn: HTMLButtonElement = pollElement.querySelector(
    "#add-answer"
  );

  // находим кнопку для перетягивания
  let drag: HTMLElement = pollElement.querySelector("#drag");

  drag.addEventListener("mousedown", (evt: MouseEvent) => {
    dragPoll(evt, drag, pollElement);
  });

  if (data) {
    input.value = data.title;
    input.value !== "" && label.classList.add("on-focus");
    for (let elem in data) {
      if (elem === "title" || elem === "type") {
        continue;
      }
      addAnswer(
        addAnswerBtn,
        dragColorClassName.checkbox,
        pollType,
        data[elem]
      );
    }
  }

  addBorderColor(pollElement, borderColorClassName.checkbox);
  addDragColor(pollElement, dragColorClassName.checkbox);

  addInputListenner(input, label);

  addDeleteBtnListenner(closeBtn, elementOnPage.poll);

  AddCopyPollListenner(copyBtn, elementOnPage.poll, pollType);

  addAnswerBtnListenner(addAnswerBtn, dragColorClassName.checkbox, pollType);

  return pollElement;
}
