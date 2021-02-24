import {
  addInputListenner,
  addDeleteBtnListenner,
  addDragColor,
} from "./utils.js";

const answerTemplateContent: DocumentFragment = (<HTMLTemplateElement>(
  document.querySelector("#answer")
)).content;

export function addAnswerBtnListenner(
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
    
    // определяем нужный тип
    const inputType: string = colorClass === "add-bgcolor-blue" ? "radio" : "checkbox";

    // и добавляем в разметку
    answerBox.setAttribute("type", inputType);

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