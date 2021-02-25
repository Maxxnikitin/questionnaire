import { addAnswer } from "./addAnswer.js";
import { pollObject } from "interfaces.js";

export function addAnswerBtnListenner(
  btn: HTMLButtonElement,
  colorClass: string,
  pollType: string
): void {
  btn.addEventListener("click", () => {
    addAnswer(btn, colorClass, pollType);
  });
}
