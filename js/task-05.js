const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", inputHandler);

function inputHandler() {
  if (input.value.length !== 0) {
    return (span.textContent = input.value);
  }
}
