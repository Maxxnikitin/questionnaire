export function addInputListenner(
  input: HTMLInputElement,
  label: HTMLElement
): void {
  // добавляем слушателя на input, чтобы сдвигать label при фокусе
  input.addEventListener("focus", () => {
    label.classList.add("on-focus");
  });

  // добавляем слушателя на input, чтобы сдвигать label обратно при блюре
  input.addEventListener("blur", () => {
    input.value === "" && label.classList.remove("on-focus");
  });
}

export function addDeleteBtnListenner(
  btn: HTMLButtonElement,
  className: string
): void {
  function del(): void {
    const element = btn.closest(className);
    element.remove();
  }
  // добавляем слушателя на удаление
  btn.addEventListener("click", del);
}

export function addBorderColor(
  element: HTMLElement,
  borderColor: string
): void {
  // добавляем цветную рамку
  element.querySelector(".create-poll__form").classList.add(borderColor);
}

export function addDragColor(element: HTMLElement, dragColor: string): void {
  // добавляем цвет в фон левой части опроса
  element.querySelector(".create-poll__drag-button").classList.add(dragColor);
}
