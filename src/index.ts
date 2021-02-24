const pollTemplate: HTMLTemplateElement = document.querySelector("#poll");
const pollTemplateContent: DocumentFragment = pollTemplate.content;
const pollContainer: HTMLElement = document.querySelector(
  ".create-poll__questions"
);

const answerTemplate: HTMLTemplateElement = document.querySelector("#answer");
const answerTemplateContent: DocumentFragment = answerTemplate.content;

const resultTemplate: HTMLTemplateElement = document.querySelector("#result");
const resultTemplateContent: DocumentFragment = resultTemplate.content;
const resultContainer: HTMLElement = document.querySelector(".result-polls");

const optionTemplate: HTMLTemplateElement = document.querySelector("#option");
const optionTemplateContent: DocumentFragment = optionTemplate.content;

const templateRadio: HTMLElement = document.querySelector("#template-radio");
const templateCheckbox: HTMLElement = document.querySelector(
  "#template-checkbox"
);

const testBtn: HTMLButtonElement = document.querySelector("#btn-test");

const content: HTMLElement = document.querySelector(".content");
const result: HTMLElement = document.querySelector(".result");

function addRadioPoll(): void {
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

function addCheckboxPoll(): void {
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

  // добавляем рамку фиолетового цвета
  pollElement
    .querySelector(".create-poll__form")
    .classList.add("add-border-purple");

  // добавляем фиолетовый фон в левую часть опроса
  pollElement
    .querySelector(".create-poll__drag-button")
    .classList.add("add-bgcolor-purple");

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
    answerBox.setAttribute("type", "checkbox");

    // находим кнопку закрытия
    const closeBtn: HTMLButtonElement = answerElement.querySelector(
      ".create-poll__button"
    );

    // добавляем фиолетовый фон в левую часть опроса
    answerElement
      .querySelector(".create-poll__drag-button")
      .classList.add("add-bgcolor-purple");

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

templateRadio.addEventListener("click", addRadioPoll);

templateCheckbox.addEventListener("click", addCheckboxPoll);

// функция сбора данных для превью
function createPollsData(): Object {
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

// функция отправки данных в превью
function setPolls(): void {
  if (content.classList.contains("disabled")) {
    content.classList.remove("disabled");
    result.classList.add("disabled");

    Array.from(resultContainer.querySelectorAll(".result-poll")).forEach(
      (poll) => {
        poll.remove();
      }
    );
    return;
  }

  // забираем объект с данными
  const data = createPollsData();

  // проходим циклом по данным и вставляем в разметку
  for (let num in data) {
    const resultElement: HTMLElement = <HTMLElement>(
      resultTemplateContent.querySelector(".result-poll").cloneNode(true)
    );

    // находим номер вопроса по порядку
    const index: HTMLElement = resultElement.querySelector(
      ".result__form-index"
    );

    // находим текст вопроса
    const text: HTMLElement = resultElement.querySelector(".result__form-text");

    resultContainer.append(resultElement);

    const poll = data[num];
    text.textContent = poll["title"];
    const pollIndex: number = +num;
    index.textContent = (pollIndex + 1).toString();
    const optionContainer: HTMLElement = resultElement.querySelector(
      ".result__form-options"
    );

    const inputType: string = poll["type"];

    for (let elem in poll) {
      if (elem === "title" || elem === "type") {
        continue;
      }
      const optionElement: HTMLElement = <HTMLElement>(
        optionTemplateContent
          .querySelector(".result__form-option")
          .cloneNode(true)
      );

      // находим input, чтобы менять тип на radio или checkbox
      const input: HTMLInputElement = optionElement.querySelector(
        ".result__form-input"
      );

      // находим текст ответа
      const answer: HTMLElement = optionElement.querySelector("#answer");

      answer.textContent = poll[elem];
      input.setAttribute("type", inputType);
      optionContainer.append(optionElement);
    }
  }

  result.classList.remove("disabled");
  content.classList.add("disabled");
}

testBtn.addEventListener("click", setPolls);
