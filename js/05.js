const h1Query = document.querySelector('h1');
h1Query.innerText = "Zuikio pomidoru darzas";
h1Query.classList.add("pavadinimas");

const liQuery = document.querySelectorAll('li');
liQuery.forEach(element => {
    element.classList.add("pomidoras");
    element.textContent = "Pomidoras";
    console.log(element.textContent);
});