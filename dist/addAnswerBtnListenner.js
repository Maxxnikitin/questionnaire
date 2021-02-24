import { addInputListenner, addDeleteBtnListenner, addDragColor, } from "./utils.js";
const answerTemplateContent = (document.querySelector("#answer")).content;
export function addAnswerBtnListenner(btn, colorClass) {
    btn.addEventListener("click", () => {
        const answerElement = (answerTemplateContent
            .querySelector(".create-poll__answer")
            .cloneNode(true));
        // находим текстовый инпут
        const input = answerElement.querySelector(".create-poll__form-input");
        // находим его label
        const label = answerElement.querySelector(".create-poll__form-label");
        // находим input, чтобы сделать его radio или checkbox
        const answerBox = answerElement.querySelector("#answer-box");
        answerBox.setAttribute("type", "radio");
        // находим кнопку закрытия
        const closeBtn = answerElement.querySelector(".create-poll__button");
        addDragColor(answerElement, colorClass);
        addInputListenner(input, label);
        addDeleteBtnListenner(closeBtn, ".create-poll__answer");
        // находим нужный контейнер для вставки через ближайшего родителя
        const answerContainer = btn
            .closest(".create-poll__form")
            .querySelector(".create-poll__answers");
        // добавляем вариант ответа на страницу
        answerContainer.append(answerElement);
    });
}
