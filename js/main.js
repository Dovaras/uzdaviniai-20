const spanQuery = document.querySelector('span');
const buttonQuery = document.querySelector('button');
const inputQuery = document.querySelector('input');

function myFunction() {
    var str = "Hello World!";
    var result = str.fontcolor("green");
    document.getElementById("input").innerHTML = result; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

function buttonClick() {
    spanQuery.innerText = inputQuery.value;  
    inputQuery.value = "";
    myFunction();
}
buttonQuery.addEventListener('click', buttonClick);