const pollTemplate: HTMLTemplateElement = document.querySelector("#poll");
const pollTemplateContent: DocumentFragment = pollTemplate.content;
const pollContainer: Element = document.querySelector(
  ".create-poll__questions"
);

const answerTemplate: HTMLTemplateElement = document.querySelector("#answer");
const answerTemplateContent: DocumentFragment = answerTemplate.content;

const templateRadio: Element = document.querySelector("#template-radio");
const templateCheckbox: Element = document.querySelector("#template-checkbox");

const testBtn: Element = document.querySelector("#btn-test");

let pollId: number = 1;
let answerId: number = 1;

// функция добавления id опросникам
const addPollId: (elem: Node) => void = (elem) => {
  (<Element>elem).setAttribute("id", pollId.toString());
  pollId++;
};

// функция добавления id ответам
const addAnswerId: (elem: Node) => void = (elem) => {
  (<Element>elem).setAttribute("id", answerId.toString());
  answerId++;
};

function addRadioPoll(): void {
  const pollElement: Node = pollTemplateContent
    .querySelector(".create-poll__question")
    .cloneNode(true);

  // находим текстовый инпут
  const input = (<Element>pollElement).querySelector(
    ".create-poll__form-input"
  );
  // находим его label
  const label = (<Element>pollElement).querySelector(
    ".create-poll__form-label"
  );

  // находим кнопку закрытия
  const closeBtn = (<Element>pollElement).querySelector("#close");

  // находим кнопку добавления строчки с вариантом ответа
  const addAnswerBtn = (<Element>pollElement).querySelector("#add-answer");

  // добавляем id
  addPollId(pollElement);

  // добавляем рамку голубого цвета
  (<Element>pollElement)
    .querySelector(".create-poll__form")
    .classList.add("add-border-blue");

  // добавляем синий фон в левую часть опроса
  (<Element>pollElement)
    .querySelector(".create-poll__drag-button")
    .classList.add("add-bgcolor-blue");

  // добавляем слушателя на input, чтобы сдвигать label при фокусе
  input.addEventListener("focus", () => {
    label.classList.add("on-focus");
  });

  // добавляем слушателя на input, чтобы сдвигать label обратно при блюре
  input.addEventListener("blur", () => {
    label.classList.remove("on-focus");
  });

  // добавляем слушателя на удаление
  closeBtn.addEventListener("click", () => {
    const element = closeBtn.closest(".create-poll__question");
    element.remove();
  });

  addAnswerBtn.addEventListener("click", () => {
    const answerElement: Node = answerTemplateContent
      .querySelector(".create-poll__answer")
      .cloneNode(true);

    // находим текстовый инпут
    const input = (<Element>answerElement).querySelector(
      ".create-poll__form-input"
    );
    // находим его label
    const label = (<Element>answerElement).querySelector(
      ".create-poll__form-label"
    );

    // находим input, чтобы сделать его radio или checkbox
    const answerBox = (<Element>answerElement).querySelector("#answer-box");
    answerBox.setAttribute("type", "radio");

    // находим кнопку закрытия
    const closeBtn = (<Element>answerElement).querySelector(
      ".create-poll__button"
    );

    // добавляем id
    addAnswerId(answerElement);

    // добавляем синий фон в левую часть опроса
    (<Element>answerElement)
      .querySelector(".create-poll__drag-button")
      .classList.add("add-bgcolor-blue");

    // добавляем слушателя на input, чтобы сдвигать label при фокусе
    input.addEventListener("focus", () => {
      label.classList.add("on-focus");
    });

    // добавляем слушателя на input, чтобы сдвигать label обратно при блюре
    input.addEventListener("blur", () => {
      label.classList.remove("on-focus");
    });

    // добавляем слушателя на удаление
    closeBtn.addEventListener("click", () => {
      const element = closeBtn.closest(".create-poll__answer");
      element.remove();
    });

    // находим нужный контейнер для вставки через ближайшего родителя
    const answerContainer: Element = addAnswerBtn
      .closest(".create-poll__form")
      .querySelector(".create-poll__answers");

    // добавляем вариант ответа на страницу
    answerContainer.append(answerElement);
  });

  // добавляем элемент на страницу
  pollContainer.append(pollElement);
}

function addCheckboxPoll(): void {
  const pollElement: Node = pollTemplateContent
    .querySelector(".create-poll__question")
    .cloneNode(true);

  // находим текстовый инпут
  const input = (<Element>pollElement).querySelector(
    ".create-poll__form-input"
  );
  // находим его label
  const label = (<Element>pollElement).querySelector(
    ".create-poll__form-label"
  );

  // находим кнопку закрытия
  const closeBtn = (<Element>pollElement).querySelector("#close");

  // находим кнопку добавления строчки с вариантом ответа
  const addAnswerBtn = (<Element>pollElement).querySelector("#add-answer");

  // добавляем id
  addPollId(pollElement);

  // добавляем рамку фиолетового цвета
  (<Element>pollElement)
    .querySelector(".create-poll__form")
    .classList.add("add-border-purple");

  // добавляем фиолетовый фон в левую часть опроса
  (<Element>pollElement)
    .querySelector(".create-poll__drag-button")
    .classList.add("add-bgcolor-purple");

  // добавляем слушателя на input, чтобы сдвигать label при фокусе
  input.addEventListener("focus", () => {
    label.classList.add("on-focus");
  });

  // добавляем слушателя на input, чтобы сдвигать label обратно при блюре
  input.addEventListener("blur", () => {
    label.classList.remove("on-focus");
  });

  // добавляем слушателя на удаление
  closeBtn.addEventListener("click", () => {
    const element = closeBtn.closest(".create-poll__question");
    element.remove();
  });

  addAnswerBtn.addEventListener("click", () => {
    const answerElement: Node = answerTemplateContent
      .querySelector(".create-poll__answer")
      .cloneNode(true);

    // находим текстовый инпут
    const input = (<Element>answerElement).querySelector(
      ".create-poll__form-input"
    );
    // находим его label
    const label = (<Element>answerElement).querySelector(
      ".create-poll__form-label"
    );

    // находим input, чтобы сделать его radio или checkbox
    const answerBox = (<Element>answerElement).querySelector("#answer-box");
    answerBox.setAttribute("type", "checkbox");

    // находим кнопку закрытия
    const closeBtn = (<Element>answerElement).querySelector(
      ".create-poll__button"
    );

    // добавляем id
    addAnswerId(answerElement);

    // добавляем фиолетовый фон в левую часть опроса
    (<Element>answerElement)
      .querySelector(".create-poll__drag-button")
      .classList.add("add-bgcolor-purple");

    // добавляем слушателя на input, чтобы сдвигать label при фокусе
    input.addEventListener("focus", () => {
      label.classList.add("on-focus");
    });

    // добавляем слушателя на input, чтобы сдвигать label обратно при блюре
    input.addEventListener("blur", () => {
      label.classList.remove("on-focus");
    });

    // добавляем слушателя на удаление
    closeBtn.addEventListener("click", () => {
      const element = closeBtn.closest(".create-poll__answer");
      element.remove();
    });

    // находим нужный контейнер для вставки через ближайшего родителя
    const answerContainer: Element = addAnswerBtn
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

// функция отправки данных в LocalStorage
function setPolls(): void {
  const pollsData: Object = {};
  const allPolls: Element[] = Array.from(
    document.querySelectorAll(".create-poll__question")
  );

  allPolls.forEach((poll) => {
    const pollObj: Object = {};

    const pollInput: HTMLInputElement = poll.querySelector("#title");
    pollObj["title"] = pollInput.value;

    const allAnswers: HTMLInputElement[] = Array.from(
      poll.querySelectorAll("#answer")
    );
    allAnswers.forEach((answer) => {
      const id: string = answer
        .closest(".create-poll__answer")
        .getAttribute("id");

      pollObj[id] = answer.value;
    });

    console.log(pollObj);
  });
}

testBtn.addEventListener("click", setPolls);
