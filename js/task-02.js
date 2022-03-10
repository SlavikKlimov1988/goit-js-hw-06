const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const potatoes = document.createElement('li');
potatoes.textContent =`${ingredients[0]}`;
potatoes.classList.add(`${ingredients[0]}`);
console.log(potatoes)
const ingredientsList = document.querySelector('#ingredients');
console.log(ingredientsList)
ingredientsList.appendChild(potatoes)