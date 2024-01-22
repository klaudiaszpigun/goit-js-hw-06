const validationInput = document.querySelector("#validation-input");

// dodanie zdarzenia blur, czyli po zniknięciu focusu
validationInput.addEventListener("blur", () => {
  // zmienna valueLength to długość watrości wprowadzonej do inputu
  const valueLength = validationInput.value.length;
  // element.classList.toggle(className, condition);
  // jeśli warunek został spełniony to dodaje do elementu klase valid
  validationInput.classList.toggle("valid", valueLength >= 6);
  // jeśli warunek został spełniony to dodaje do elementu klasę invalid
  validationInput.classList.toggle("invalid", valueLength <= 6);
});
