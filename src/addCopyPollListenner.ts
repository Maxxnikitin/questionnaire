import { pollObject } from "interfaces.js";
import { addCheckboxPoll } from "./addCheckboxPoll.js";
import { addRadioPoll } from "./addRadioPoll.js";
import { createCopyPollData } from "./createCopyPollData.js";
import { inputType } from "./enums/enums.js";

const pollTemplateContent: DocumentFragment = (<HTMLTemplateElement>(
  document.querySelector("#poll")
)).content;
const pollContainer: HTMLElement = document.querySelector(
  ".create-poll__questions"
);

export function AddCopyPollListenner(
  btn: HTMLButtonElement,
  className: string,
  pollType: string
): void {
  btn.addEventListener("click", () => {
    const pollElement: HTMLElement = <HTMLElement>(
      pollTemplateContent.querySelector(className).cloneNode(true)
    );

    // находим текстовый инпут
    const input: HTMLInputElement = pollElement.querySelector(
      ".create-poll__form-input"
    );

    const data: pollObject = createCopyPollData(btn, className, pollType);
    pollType === inputType.radio && pollContainer.append(addRadioPoll(data));
    pollType === inputType.checkbox &&
      pollContainer.append(addCheckboxPoll(data));
  });
}
