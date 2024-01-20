const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const unorderedlist = document.querySelector("#ingredients");

const liArray = ingredients.map((ingredient) => {
  const listItem = document.createElement("li"); // <li></li>
  listItem.textContent = ingredient; // <li>ingridient</li>
  listItem.classList.add("item"); //<li class="item">ingridient</li>
  return listItem;
});
unorderedlist.append(...liArray);
