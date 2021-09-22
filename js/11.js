const spanQuery = document.querySelector('span');
document.getElementById("message").style.color = "red";

function buttonClick() {
    spanQuery.innerText = document.getElementById("message").value;  
    document.getElementById("message").value = "";
}
function bgColorClick() {
    spanQuery.style.backgroundColor = document.getElementById("bg-color").value;
}
function textColorClick() {
    spanQuery.style.color = document.getElementById("text-color").value;
}

document.querySelector('button').addEventListener('click', buttonClick);
document.getElementById("bg-color").addEventListener('click', bgColorClick);
document.getElementById("text-color").addEventListener('click', textColorClick);