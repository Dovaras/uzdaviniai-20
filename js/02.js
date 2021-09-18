const liQuery = document.querySelectorAll('li');
const ingredientai = [];

for (let i = 0; i < liQuery.length; i++) {
    ingredientai[i] = liQuery[i].innerText.toUpperCase();
}
for (let i = 0; i < liQuery.length; i++) {
    console.log(ingredientai[i]);
}