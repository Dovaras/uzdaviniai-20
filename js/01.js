const h1Query = document.querySelector('h1');
const pQuery = document.querySelector('p');
const aQuery = document.querySelector('a');

function clickedA() {
    h1Query.innerText = 'Labas vakaras!';
    pQuery.innerText = "Šiandien gražus oras!";
    aQuery.innerText = "Spausk mane!";
};
aQuery.addEventListener('click', clickedA);