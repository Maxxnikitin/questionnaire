import { addInputListenner, addDeleteBtnListenner, addBorderColor, addDragColor, } from "./utils.js";
import { addAnswerBtnListenner } from "./addAnswerBtnListenner.js";
const pollTemplateContent = (document.querySelector("#poll")).content;
const pollContainer = document.querySelector(".create-poll__questions");
export function addRadioPoll() {
    const pollElement = (pollTemplateContent.querySelector(".create-poll__question").cloneNode(true));
    // находим текстовый инпут
    const input = pollElement.querySelector(".create-poll__form-input");
    // находим его label
    const label = pollElement.querySelector(".create-poll__form-label");
    // находим кнопку закрытия
    const closeBtn = pollElement.querySelector("#close");
    // находим кнопку добавления строчки с вариантом ответа
    const addAnswerBtn = pollElement.querySelector("#add-answer");
    addInputListenner(input, label);
    addBorderColor(pollElement, "add-border-blue");
    addDragColor(pollElement, "add-bgcolor-blue");
    addDeleteBtnListenner(closeBtn, ".create-poll__question");
    addAnswerBtnListenner(addAnswerBtn, "add-bgcolor-blue");
    // добавляем элемент на страницу
    pollContainer.append(pollElement);
}
