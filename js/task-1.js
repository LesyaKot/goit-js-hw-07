`use strict`;

const categoriesList = document.querySelectorAll("li.item");
categoriesList.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemNumber = category.querySelectorAll("li").length;
  console.log(title);
  console.log(itemNumber);
});
