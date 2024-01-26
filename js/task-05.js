const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", inputHandler);

function inputHandler() {
  if (input.value !== "") {
    // metoda trim() usuwa spacje
    return (span.textContent = input.value.trim());
  }
  if (input.value === "") return (span.textContent = "");
}
