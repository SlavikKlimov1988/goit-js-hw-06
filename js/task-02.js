const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientsList = document.querySelector('#ingredients');

for (let i = 0; i < ingredients.length; i++){
  const potatoes = document.createElement('li');
  potatoes.textContent =`${ingredients[i]}`;
  potatoes.classList.add(`${ingredients[i]}`);
  ingredientsList.appendChild(potatoes)
}