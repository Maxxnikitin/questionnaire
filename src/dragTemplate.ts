const pollContainer: HTMLElement = document.querySelector(
  ".create-poll__questions"
);

export function dragTemplate(
  evt: MouseEvent,
  poll: HTMLElement,
  parentElement: HTMLElement
): void {
  poll = parentElement;
  poll.style.position = "absolute";
  pollContainer.append(poll);

  function moveAt(pageX, pageY) {
    poll.style.left = pageX - 6 + "px";
    poll.style.top = pageY - poll.offsetHeight / 2 + "px";
  }

  moveAt(evt.pageX, evt.pageY);

  function onMouseMove(evt) {
    moveAt(evt.pageX, evt.pageY);
  }

  document.addEventListener("mousemove", onMouseMove);

  poll.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    poll.onmouseup = null;
    poll.removeAttribute("style");
  };
}
