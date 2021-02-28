import { addAnswer } from "./addAnswer.js";

export function addAnswerBtnListenner(
  btn: HTMLButtonElement,
  pollType: string
): void {
  btn.addEventListener("click", () => {
    addAnswer(btn, pollType);
  });
}
