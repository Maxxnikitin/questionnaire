// функция сбора данных для превью
export function createPollsData(): Object {
  const pollsData: Object = {};
  const allPolls: HTMLElement[] = Array.from(
    document.querySelectorAll(".create-poll__question")
  );

  allPolls.forEach((poll, index) => {
    const pollObj: Object = {};

    const pollInput: HTMLInputElement = poll.querySelector("#title");
    pollObj["title"] = pollInput.value;

    const isRadio: boolean = !!poll.querySelector(".add-bgcolor-blue");
    pollObj["type"] = isRadio ? "radio" : "checkbox";

    const allAnswers: HTMLInputElement[] = Array.from(
      poll.querySelectorAll("#answer")
    );
    allAnswers.forEach((answer, index) => {
      pollObj[index] = answer.value;
    });

    pollsData[index] = pollObj;
  });
  return pollsData;
}
