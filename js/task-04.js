let counterValue = 0; //

const decrement = document.querySelector('[data-action="decrement"]'); //
const increment = document.querySelector('[data-action="increment"]'); //
const value = document.querySelector("#value"); //

// dodanie callbacku
decrement.addEventListener("click", () => {
  // który odejmuje od counterValue jedną wartość
  counterValue -= 1;
  // zawartości tekstowej elementu value przypisujemy wartość counterValue, co oznacza, że wartość na stronie się zmieni
  value.textContent = counterValue;
});

increment.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
