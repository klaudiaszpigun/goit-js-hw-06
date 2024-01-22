const range = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

// jeśli element range otrzyma zdarzenie input
range.addEventListener("input", () => {
  // wtedy deklarujemy nową zmienną value, której wartość to wartość inputu + px
  let value = range.value + "px";
  span.style.fontSize = value;
});
