// zmienna numbersOfCategories to odwołanie się do dzieci elementu ul, jest to pseudotablice
const numberOfCategories = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${numberOfCategories.length}`);

allCategories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("ul li").length;
  console.log(`\n Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
