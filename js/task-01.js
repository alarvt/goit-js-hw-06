const itemsEl = document.querySelectorAll(".item");
console.log("Number of categories:", itemsEl.length);


itemsEl.forEach(myFunction);

function myFunction(category) {
    const categoryTitle = category.firstElementChild;
    console.log('Category:', categoryTitle.textContent);
    const categoryListEl = categoryTitle.nextElementSibling;
    console.log("Element:", categoryListEl.childElementCount);
}







    
   


