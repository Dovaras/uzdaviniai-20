const h1Query = document.querySelector('h1');
h1Query.innerText = "Zuikio darzas";

const liQuery = document.querySelectorAll('li');
for (let i = 0; i < liQuery.length; i++) {
    liQuery[i].innerHTML = "Israuta darzove";
}