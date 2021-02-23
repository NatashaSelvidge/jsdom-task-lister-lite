document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form");
  form.addEventListener("submit", submitTask);

  function submitTask(Event) {
    Event.preventDefault();
    let taskInput = document.querySelector("#new-task-description");
    let listElement = document.querySelector("li");
    let userInput = taskInput.value;
    listElement.innerHTML = userInput;
  }

  function removeTask(event) {
    listElement.remove();
  }

  span = document.createElement("span");
  listElement.appendChild(span);
  span.userInput = "[x]";
  span.addEventListener("click", removeTask);
});
