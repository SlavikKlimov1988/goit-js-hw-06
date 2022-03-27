const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientsList = document.querySelector('#ingredients');




const ingredientsOption = (option) => {
  return option.map(ingredient => {
    const potatoes = document.createElement('li');
    potatoes.textContent = `${ingredient}`;
    potatoes.classList.add(`${ingredient}`);
    return potatoes
  })
};

const elements = ingredientsOption(ingredients)
ingredientsList.append(...elements)