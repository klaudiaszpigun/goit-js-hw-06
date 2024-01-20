// zmienna numbersOfCategories to odwołanie się do dzieci elementu ul, jest to pseudotablice
const numberOfCategories = document.querySelectorAll("#categories .item"); // całe znaczniki <li> z zawartością

console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContext;
  const categoryCount = category.querySelectorAll("ul li").length;
  console.log(`/nCategory: ${categoryName}`);
  console.log(`Elements: ${categoryCount}`);
});
