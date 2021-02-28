import { addPoll } from "./addPoll.js";
import { inputType } from "./enums/enums.js";

export function dragPolls(main: HTMLElement): void {
  main.addEventListener("dragstart", (evt: DragEvent) => {
    if ((<HTMLElement>evt.target).closest(".templates")) {
      let poll: HTMLElement;
      if ((<HTMLElement>evt.target).closest("#template-radio")) {
        poll = addPoll(inputType.radio);
      } else if ((<HTMLElement>evt.target).closest("#template-checkbox")) {
        poll = addPoll(inputType.checkbox);
      }
      evt.dataTransfer.setData("text/plain", poll.dataset.id);

      const pollContainer = main.querySelector(".create-poll__questions");
      pollContainer.append(poll);
    }

    if ((<HTMLElement>evt.target).classList.contains("create-poll__question")) {
      // сохраняем идентификатор опроса в объекте "dataTransfer"
      evt.dataTransfer.setData(
        "text/plain",
        (<HTMLElement>evt.target).dataset.id
      );
    }
  });

  // создаем переменную для хранения "низлежащего" элемента
  let elemBelow: HTMLElement;

  main.addEventListener("dragover", (evt: MouseEvent) => {
    evt.preventDefault();
    // нужен для альтернативы, чтобы не упала ошибка
    const page: HTMLElement = document.querySelector(".page");

    const currentElement: HTMLElement = <HTMLElement>evt.target;
    // находим родителя текущего элемента, потому что без этого навести мышь на него невозможно
    elemBelow = currentElement.closest(".create-poll__question") || page;
  });

  main.addEventListener("drop", (evt: DragEvent) => {
    // находим перетаскиваемый опрос по идентификатору, записанному в dataTransfer
    const poll = main.querySelector(
      `[data-id="${evt.dataTransfer.getData("text/plain")}"]`
    );

    // прекращаем выполнение кода, если опрос и элемент - одно и тоже
    if (elemBelow === poll) {
      return;
    }

    // на всякий случай еще раз проверяем, что имеем дело с опросом
    if (elemBelow.classList.contains("create-poll__question")) {
      // определяем центр
      const center =
        elemBelow.getBoundingClientRect().y +
        elemBelow.getBoundingClientRect().height / 2;
      // если курсор находится ниже центра
      // значит, перетаскиваемый элемент должен быть помещен под низлежащим
      // иначе, перед ним
      if (evt.clientY > center) {
        if (elemBelow.nextElementSibling !== null) {
          elemBelow = <HTMLElement>elemBelow.nextElementSibling;
        } else {
          return;
        }
      }

      elemBelow.parentElement.insertBefore(poll, elemBelow);
    }

    // если целью является нужное поле
    if (
      (<HTMLElement>evt.target).classList.contains("create-poll__questions")
    ) {
      // просто добавляем в нее перетаскиваемый элемент
      poll !== null && (<HTMLElement>evt.target).append(poll);
    }
  });
}
