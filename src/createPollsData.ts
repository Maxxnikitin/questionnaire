import { pollsData, pollObject } from "./types/interfaces";

// функция сбора данных для превью
export function createPollsData(): pollsData {
  const pollsData = {} as pollsData;
  const allPolls: HTMLElement[] = Array.from(
    document.querySelectorAll(".create-poll__question")
  );

  allPolls.forEach((poll, index) => {
    const pollObj = {} as pollObject;

    const pollInput: HTMLInputElement = poll.querySelector("#title");
    pollObj["title"] = pollInput.value;

    pollObj["type"] = poll.querySelector("#answer-box")?.getAttribute("type");

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
