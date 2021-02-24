// функция сбора данных для превью
export function createPollsData() {
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
