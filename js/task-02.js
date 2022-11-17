const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

const res = ingredients.map(ingredient => {
  const nameEl = document.createElement("li");
  nameEl.classList.add("item");
  nameEl.textContent = ingredient;
  return nameEl;
});

console.log(res);
listEl.append(...res);

