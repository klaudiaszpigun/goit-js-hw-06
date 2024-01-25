function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

createButton.addEventListener("click", createBoxes);

function createBoxes(amount) {
  const boxesContainer = document.querySelector(".boxes");
  boxesContainer.innerHTML = "";
  // pętla dodająca boxy
  for (let i = 0; i < amount.value; i++) {
    // utworzenie w divie div i nadanie mu klasy
    document.createElement("div").classList.add("box");
    const box = document.querySelector(".box");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor;
    boxesContainer.append(box);
  }
}

destroyButton.removeEventListener("click", createBoxes);
