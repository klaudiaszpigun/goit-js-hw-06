// zmienna numbersOfCategories to odwołanie się do dzieci elementu ul, jest to pseudotablice
const numberOfCategories = document.querySelectorAll(".item"); // całe znaczniki <li> z zawartością

console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach((category) => {
  const categoryName = category.querySelector("h2");
  const categoryCount = category.querySelectorAll("ul li").length;
  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${categoryCount}`);
});
