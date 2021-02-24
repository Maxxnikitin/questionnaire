import { addInputListenner, addDeleteBtnListenner, addBorderColor, addDragColor, } from "./utils.js";
import { addAnswerBtnListenner } from "./addAnswerBtnListenner.js";
const pollTemplateContent = (document.querySelector("#poll")).content;
const pollContainer = document.querySelector(".create-poll__questions");
export function addCheckboxPoll() {
    const pollElement = (pollTemplateContent.querySelector(".create-poll__question").cloneNode(true));
    // находим текстовый инпут
    const input = pollElement.querySelector(".create-poll__form-input");
    // находим его label
    const label = pollElement.querySelector(".create-poll__form-label");
    // находим кнопку закрытия
    const closeBtn = pollElement.querySelector("#close");
    // находим кнопку добавления строчки с вариантом ответа
    const addAnswerBtn = pollElement.querySelector("#add-answer");
    addBorderColor(pollElement, "add-border-purple");
    addDragColor(pollElement, "add-bgcolor-purple");
    addInputListenner(input, label);
    addDeleteBtnListenner(closeBtn, ".create-poll__question");
    addAnswerBtnListenner(addAnswerBtn, "add-bgcolor-purple");
    // добавляем элемент на страницу
    pollContainer.append(pollElement);
}
