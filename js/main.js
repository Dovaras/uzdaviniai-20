const nBtn1Query = document.querySelector('button');
const nBtn2Query = document.querySelector('button');
const nBtn3Query = document.querySelector('button');
const sBtn1Query = document.querySelector('button');
const sBtn2Query = document.querySelector('button');
const sBtn3Query = document.querySelector('button');
const nRezQuery = document.querySelector('.rezultatas');
const sRezQuery = document.querySelector('.rezultatas');
let rez = 0;

const article = document.querySelectorAll('button'),
        data = article.dataset;
let number = parseInt(article[0].textContent);
console.log(number += parseInt(article[0].dataset.points)); //taskai mygtukuose: '1', '2', '3'

const article2 = document.querySelectorAll('.lenta > div'),
        data2 = article2.dataset;
console.log(article2[0].textContent); //rezultatas lentoje vietoj "0:0" => [0]namu[1]sveciu

const article3 = document.querySelectorAll('.aikstele > .komanda'),
        data3 = article3.dataset;
console.log(article3[0].textContent); //komandos: [0]namu vs [0]sveciu



const elList = Array.from(document.querySelectorAll('.komanda'), (el) => {
    return {
        element: el,
        select: el.dataset
    };
}); console.log(elList);

function n1Click() {
    nBtn1Query.innerText = '4';
}

function n2Click() {
    nBtn2Query.innerText = '5';
}
// PATYRINETI PATYRINETI PATYRINETI PATYRINETI PATYRINETI PATYRINETI PATYRINETI PATYRINETI PATYRINETI PATYRINETI
/*
if (document.querySelector('button').dataset.komanda === 'namu') {
    //nBtn1Query.addEventListener.prototype.n1Click;
}
else //if (document.querySelector('button').dataset.komanda === 'sveciu')
}
*/
nBtn1Query.addEventListener('click', n1Click);
nBtn2Query.addEventListener('click', n2Click);
/*
nBtn3Query.addEventListener('click', n3Click);
sBtn1Query.addEventListener('click', s1Click);
sBtn2Query.addEventListener('click', s2Click);
sBtn3Query.addEventListener('click', s3Click);
nRezQuery.addEventListener('click', nRezCLick);
sRezQuery.addEventListener('click', sRezCLick);
*/