var Utils;
(function (Utils) {
    function addInputListenner(input, label) {
        // добавляем слушателя на input, чтобы сдвигать label при фокусе
        input.addEventListener("focus", () => {
            label.classList.add("on-focus");
        });
        // добавляем слушателя на input, чтобы сдвигать label обратно при блюре
        input.addEventListener("blur", () => {
            input.value === "" && label.classList.remove("on-focus");
        });
    }
    Utils.addInputListenner = addInputListenner;
    function addDeleteBtnListenner(btn, className) {
        function del() {
            const element = btn.closest(className);
            element.remove();
        }
        // добавляем слушателя на удаление
        btn.addEventListener("click", del);
    }
    Utils.addDeleteBtnListenner = addDeleteBtnListenner;
    function addBorderColor(element, borderColor) {
        // добавляем цветную рамку
        element.querySelector(".create-poll__form").classList.add(borderColor);
    }
    Utils.addBorderColor = addBorderColor;
    function addDragColor(element, dragColor) {
        // добавляем цвет в фон левой части опроса
        element.querySelector(".create-poll__drag-button").classList.add(dragColor);
    }
    Utils.addDragColor = addDragColor;
    // функция сбора данных для превью
    function createPollsData() {
        const pollsData = {};
        const allPolls = Array.from(document.querySelectorAll(".create-poll__question"));
        allPolls.forEach((poll, index) => {
            const pollObj = {};
            const pollInput = poll.querySelector("#title");
            pollObj["title"] = pollInput.value;
            const isRadio = !!poll.querySelector(".add-bgcolor-blue");
            pollObj["type"] = isRadio ? "radio" : "checkbox";
            const allAnswers = Array.from(poll.querySelectorAll("#answer"));
            allAnswers.forEach((answer, index) => {
                pollObj[index] = answer.value;
            });
            pollsData[index] = pollObj;
        });
        return pollsData;
    }
    Utils.createPollsData = createPollsData;
})(Utils || (Utils = {}));
