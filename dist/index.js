const pollTemplateContent = (document.querySelector("#poll")).content;
const pollContainer = document.querySelector(".create-poll__questions");
const answerTemplateContent = (document.querySelector("#answer")).content;
const resultTemplateContent = (document.querySelector("#result")).content;
const resultContainer = document.querySelector(".result-polls");
const optionTemplateContent = (document.querySelector("#option")).content;
const templateRadio = document.querySelector("#template-radio");
const templateCheckbox = document.querySelector("#template-checkbox");
const testBtn = document.querySelector("#btn-test");
const content = document.querySelector(".content");
const result = document.querySelector(".result");
function addAnswerBtnListenner(btn, colorClass) {
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
        Utils.addDragColor(answerElement, colorClass);
        Utils.addInputListenner(input, label);
        Utils.addDeleteBtnListenner(closeBtn, ".create-poll__answer");
        // находим нужный контейнер для вставки через ближайшего родителя
        const answerContainer = btn
            .closest(".create-poll__form")
            .querySelector(".create-poll__answers");
        // добавляем вариант ответа на страницу
        answerContainer.append(answerElement);
    });
}
function addRadioPoll() {
    const pollElement = (pollTemplateContent.querySelector(".create-poll__question").cloneNode(true));
    // находим текстовый инпут
    const input = pollElement.querySelector(".create-poll__form-input");
    // находим его label
    const label = pollElement.querySelector(".create-poll__form-label");
    // находим кнопку закрытия
    const closeBtn = pollElement.querySelector("#close");
    // находим кнопку добавления строчки с вариантом ответа
    const addAnswerBtn = pollElement.querySelector("#add-answer");
    Utils.addInputListenner(input, label);
    Utils.addBorderColor(pollElement, "add-border-blue");
    Utils.addDragColor(pollElement, "add-bgcolor-blue");
    Utils.addDeleteBtnListenner(closeBtn, ".create-poll__question");
    addAnswerBtnListenner(addAnswerBtn, "add-bgcolor-blue");
    // добавляем элемент на страницу
    pollContainer.append(pollElement);
}
function addCheckboxPoll() {
    const pollElement = (pollTemplateContent.querySelector(".create-poll__question").cloneNode(true));
    // находим текстовый инпут
    const input = pollElement.querySelector(".create-poll__form-input");
    // находим его label
    const label = pollElement.querySelector(".create-poll__form-label");
    // находим кнопку закрытия
    const closeBtn = pollElement.querySelector("#close");
    // находим кнопку добавления строчки с вариантом ответа
    const addAnswerBtn = pollElement.querySelector("#add-answer");
    Utils.addBorderColor(pollElement, "add-border-purple");
    Utils.addDragColor(pollElement, "add-bgcolor-purple");
    Utils.addInputListenner(input, label);
    Utils.addDeleteBtnListenner(closeBtn, ".create-poll__question");
    addAnswerBtnListenner(addAnswerBtn, "add-bgcolor-purple");
    // добавляем элемент на страницу
    pollContainer.append(pollElement);
}
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
    const data = Utils.createPollsData();
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
            resultContainer.append(resultElement);
        }
    }
    result.classList.remove("disabled");
    content.classList.add("disabled");
}
templateRadio.addEventListener("click", addRadioPoll);
templateCheckbox.addEventListener("click", addCheckboxPoll);
testBtn.addEventListener("click", setPolls);
