const buttonQuery = document.querySelector('button');
function buttonClick() {
    document.getElementById("message").value = "Mano parasytas tekstas";
}
buttonQuery.addEventListener('click', buttonClick);