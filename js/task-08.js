const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", click);

function click(event) {
  event.preventDefault();
  // .target to odwołanie do żródła na którym wykonhywany jest event, czyli w tym przypadku jest to registerForm
  const form = event.target;
  // form to rodzic elements, którego jeden z nich ma atrybut name = "login", a value to wartość wprowadzonych danych
  const email = form.elements.email.value;
  // form to rodzic elements, którego jeden z nich ma atrybut name = "password", a value to wartość wprowadzonych danych
  const password = form.elements.password.value;

  // jeśli zmienne które przed chwilą dadeklarowaliśmy === puste pole
  if (email === "" || password === "") {
    // kończy działanie programu
    return alert("uzupełnij pola");
  }
  // deklaracja obiektu
  const object = {
    // używamy słowa kluczowego this. aby odwołać się do zmiennych które znajdują się wyżej w THIS funkcji
    Login: `${this.email.value}`,
    Password: `${this.password.value}`,
  };

  console.log(object);
  // sprzątamy po sobie ;))
  form.reset();
}
