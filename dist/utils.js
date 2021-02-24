export function addInputListenner(input, label) {
    // добавляем слушателя на input, чтобы сдвигать label при фокусе
    input.addEventListener("focus", () => {
        label.classList.add("on-focus");
    });
    // добавляем слушателя на input, чтобы сдвигать label обратно при блюре
    input.addEventListener("blur", () => {
        input.value === "" && label.classList.remove("on-focus");
    });
}
export function addDeleteBtnListenner(btn, className) {
    function del() {
        const element = btn.closest(className);
        element.remove();
    }
    // добавляем слушателя на удаление
    btn.addEventListener("click", del);
}
export function addBorderColor(element, borderColor) {
    // добавляем цветную рамку
    element.querySelector(".create-poll__form").classList.add(borderColor);
}
export function addDragColor(element, dragColor) {
    // добавляем цвет в фон левой части опроса
    element.querySelector(".create-poll__drag-button").classList.add(dragColor);
}
