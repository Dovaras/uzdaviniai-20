const spanQuery = document.querySelector('span');
const buttonQuery = document.querySelector('button');
const inputQuery = document.querySelector('input');

function buttonClick() {
    spanQuery.innerText = inputQuery.value;  
    inputQuery.value = ""; 
}
buttonQuery.addEventListener('click', buttonClick);