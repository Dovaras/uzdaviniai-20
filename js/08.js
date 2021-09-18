const minusQuery = document.querySelector('.minus');
const plusQuery = document.querySelector('.plus');
const resetQuery = document.querySelector('.reset');
const numQuery = document.querySelector('.number');
const h1Query = document.querySelector('h1');

function minusClick() {
    numQuery.innerText--;
    h1Query.innerText = "Žaidimas progrese";
}
function plusClick() {
    numQuery.innerText++;
    h1Query.innerText = "Žaidimas progrese";
}
function resetClick() {
    numQuery.innerText = 0;
    h1Query.innerText = "Show must go on!";
}

minusQuery.addEventListener('click', minusClick);
plusQuery.addEventListener('click', plusClick);
resetQuery.addEventListener('click', resetClick);