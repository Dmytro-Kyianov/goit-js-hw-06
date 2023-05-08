const categoriesItemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItemEl.length}`)

categoriesItemEl.forEach(number => {
    console.log(`Category: ${number.firstElementChild.textContent} Elements: ${number.lastElementChild.children.length}`)
    
})

