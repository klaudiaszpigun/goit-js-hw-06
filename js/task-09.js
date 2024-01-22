// funkcja która wyrzuca losowy kolor hexagonalny
function getRandomHexColor() {
  // Math.floor() zaokrągla liczbę w dół, Math.random to pseudolosowa liczba od 0 do 1
  return `#${Math.floor(Math.random() * 16777215)
    // reprezentacja hexagonalna
    .toString(16)
    // dopełnia otrzymany ciąg z przodu zerami do uzyskania 6 znaków
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");

body.addEventListener("click", colorOfBody);

function colorOfBody(event) {
  body.style.backgroundColor = getRandomHexColor();
}
