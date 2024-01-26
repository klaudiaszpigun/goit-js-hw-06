// funkcja która wyrzuca losowy kolor hexagonalny
function getRandomHexColor() {
  // Math.floor() zaokrągla liczbę w dół, Math.random to pseudolosowa liczba od 0 do 1
  return `#${Math.floor(Math.random() * 16777215)
    // reprezentacja hexagonalna
    .toString(16)
    // dopełnia otrzymany ciąg z przodu zerami do uzyskania 6 znaków
    .padStart(6, 0)}`;
}
const span = document.querySelector(".color");
const body = document.querySelector("body");
const button = document.querySelector(".change-color");

button.addEventListener("click", colorOfBody);

function colorOfBody(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
}
