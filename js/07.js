const minusQuery = document.querySelector('.minus');
const plusQuery = document.querySelector('.plus');
const resetQuery = document.querySelector('.reset');
const numberQuery = document.querySelector('.number');

function minusClick() {
    numberQuery.innerText--;
}
function plusClick() {
    numberQuery.innerText++;
}
function resetClick() {
    numberQuery.innerText = 0;
}

minusQuery.addEventListener('click', minusClick);
plusQuery.addEventListener('click', plusClick);
resetQuery.addEventListener('click', resetClick);