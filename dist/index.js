import { createPollsData } from "./createPollsData.js";
import { addRadioPoll } from "./addRadioPoll.js";
import { addCheckboxPoll } from "./addCheckboxPoll.js";
const resultTemplateContent = (document.querySelector("#result")).content;
const resultContainer = document.querySelector(".result-polls");
const optionTemplateContent = (document.querySelector("#option")).content;
const templateRadio = document.querySelector("#template-radio");
const templateCheckbox = document.querySelector("#template-checkbox");
const testBtn = document.querySelector("#btn-test");
const content = document.querySelector(".content");
const result = document.querySelector(".result");
// функция отправки данных в превью
function setPolls() {
    if (content.classList.contains("disabled")) {
        content.classList.remove("disabled");
        result.classList.add("disabled");
        Array.from(resultContainer.querySelectorAll(".result-poll")).forEach((poll) => {
            poll.remove();
        });
        return;
    }
    // забираем объект с данными
    const data = createPollsData();
    // проходим циклом по данным и вставляем в разметку
    for (let num in data) {
        const resultElement = (resultTemplateContent.querySelector(".result-poll").cloneNode(true));
        // находим номер вопроса по порядку
        const index = resultElement.querySelector(".result__form-index");
        // находим текст вопроса
        const text = resultElement.querySelector(".result__form-text");
        const poll = data[num];
        text.textContent = poll["title"];
        const pollIndex = +num;
        index.textContent = (pollIndex + 1).toString();
        const optionContainer = resultElement.querySelector(".result__form-options");
        const inputType = poll["type"];
        for (let elem in poll) {
            if (elem === "title" || elem === "type") {
                continue;
            }
            const optionElement = (optionTemplateContent
                .querySelector(".result__form-option")
                .cloneNode(true));
            // находим input, чтобы менять тип на radio или checkbox
            const input = optionElement.querySelector(".result__form-input");
            // находим текст ответа
            const answer = optionElement.querySelector("#answer");
            answer.textContent = poll[elem];
            input.setAttribute("type", inputType);
            optionContainer.append(optionElement);
        }
        resultContainer.append(resultElement);
    }
    result.classList.remove("disabled");
    content.classList.add("disabled");
}
templateRadio.addEventListener("click", addRadioPoll);
templateCheckbox.addEventListener("click", addCheckboxPoll);
testBtn.addEventListener("click", setPolls);
