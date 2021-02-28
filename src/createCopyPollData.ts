import { pollObject } from "./types/interfaces";

// функция сбора данных для копирования
export function createCopyPollData(
  btn: HTMLButtonElement,
  className: string,
  pollType: string
): pollObject {
  const pollData = {} as pollObject;
  const poll: HTMLElement = btn.closest(className);

  const pollInput: HTMLInputElement = poll.querySelector("#title");
  pollData["title"] = pollInput.value;

  pollData["type"] = pollType;

  const allAnswers: HTMLInputElement[] = Array.from(
    poll.querySelectorAll("#answer")
  );
  allAnswers.forEach((answer, index) => {
    pollData[index] = answer.value;
  });

  return pollData;
}
