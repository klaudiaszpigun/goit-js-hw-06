const range = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

span.style.fontSize = range.value + "px";
// jeśli element range otrzyma zdarzenie input
range.addEventListener("input", () => {
  span.style.fontSize = range.value + "px";
});
