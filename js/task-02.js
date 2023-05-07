const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')

const ingredient = ingredients.map(itemName => {
  const ingredientsItemEl = document.createElement('li');
  ingredientsItemEl.classList.add('item');
  ingredientsItemEl.textContent = itemName;

  return ingredientsItemEl;
})

ingredientsEl.append(...ingredient)


