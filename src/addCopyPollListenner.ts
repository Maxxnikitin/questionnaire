import { pollObject } from "interfaces.js";
import { addPoll } from "./addPoll.js";
import { createCopyPollData } from "./createCopyPollData.js";

const pollContainer: HTMLElement = document.querySelector(
  ".create-poll__questions"
);

export function AddCopyPollListenner(
  btn: HTMLButtonElement,
  className: string,
  pollType: string
): void {
  btn.addEventListener("click", () => {
    const data: pollObject = createCopyPollData(btn, className, pollType);
    pollContainer.append(addPoll(pollType, data));
  });
}
