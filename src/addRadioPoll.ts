const pollTemplateContent: DocumentFragment = (<HTMLTemplateElement>(
  document.querySelector("#poll")
)).content;
const pollContainer: HTMLElement = document.querySelector(
  ".create-poll__questions"
);

const answerTemplateContent: DocumentFragment = (<HTMLTemplateElement>(
  document.querySelector("#answer")
)).content;

export function addRadioPoll(): void {
  const pollElement: HTMLElement = <HTMLElement>(
    pollTemplateContent.querySelector(".create-poll__question").cloneNode(true)
  );

  // находим текстовый инпут
  const input: HTMLInputElement = pollElement.querySelector(
    ".create-poll__form-input"
  );
  // находим его label
  const label: HTMLElement = pollElement.querySelector(
    ".create-poll__form-label"
  );

  // находим кнопку закрытия
  const closeBtn: HTMLButtonElement = pollElement.querySelector("#close");

  // находим кнопку добавления строчки с вариантом ответа
  const addAnswerBtn: HTMLButtonElement = pollElement.querySelector(
    "#add-answer"
  );

  // добавляем рамку голубого цвета
  pollElement
    .querySelector(".create-poll__form")
    .classList.add("add-border-blue");

  // добавляем синий фон в левую часть опроса
  pollElement
    .querySelector(".create-poll__drag-button")
    .classList.add("add-bgcolor-blue");

  // добавляем слушателя на input, чтобы сдвигать label при фокусе
  input.addEventListener("focus", () => {
    label.classList.add("on-focus");
  });

  // добавляем слушателя на input, чтобы сдвигать label обратно при блюре
  input.addEventListener("blur", () => {
    input.value === "" && label.classList.remove("on-focus");
  });

  // добавляем слушателя на удаление
  closeBtn.addEventListener("click", () => {
    const element = closeBtn.closest(".create-poll__question");
    element.remove();
  });

  addAnswerBtn.addEventListener("click", () => {
    const answerElement: HTMLElement = <HTMLElement>(
      answerTemplateContent
        .querySelector(".create-poll__answer")
        .cloneNode(true)
    );

    // находим текстовый инпут
    const input: HTMLInputElement = answerElement.querySelector(
      ".create-poll__form-input"
    );
    // находим его label
    const label: HTMLElement = answerElement.querySelector(
      ".create-poll__form-label"
    );

    // находим input, чтобы сделать его radio или checkbox
    const answerBox: HTMLInputElement = answerElement.querySelector(
      "#answer-box"
    );
    answerBox.setAttribute("type", "radio");

    // находим кнопку закрытия
    const closeBtn: HTMLButtonElement = answerElement.querySelector(
      ".create-poll__button"
    );

    // добавляем синий фон в левую часть опроса
    answerElement
      .querySelector(".create-poll__drag-button")
      .classList.add("add-bgcolor-blue");

    // добавляем слушателя на input, чтобы сдвигать label при фокусе
    input.addEventListener("focus", () => {
      label.classList.add("on-focus");
    });

    // добавляем слушателя на input, чтобы сдвигать label обратно при блюре
    input.addEventListener("blur", () => {
      input.value === "" && label.classList.remove("on-focus");
    });

    // добавляем слушателя на удаление
    closeBtn.addEventListener("click", () => {
      const element = closeBtn.closest(".create-poll__answer");
      element.remove();
    });

    // находим нужный контейнер для вставки через ближайшего родителя
    const answerContainer: HTMLElement = addAnswerBtn
      .closest(".create-poll__form")
      .querySelector(".create-poll__answers");

    // добавляем вариант ответа на страницу
    answerContainer.append(answerElement);
  });

  // добавляем элемент на страницу
  pollContainer.append(pollElement);
}
