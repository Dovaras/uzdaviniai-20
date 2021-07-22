const nBtn1Query = document.querySelectorAll('button');//[data-komanda="namu"], [data-points="1"]');
const lenta = document.querySelectorAll('.lenta > div');
//const nBtn1Query = document.querySelectorAll('button');

for (let i of nBtn1Query) {
    i.addEventListener('click', function () {
        console.log(i.dataset.points);
        console.log('"data-komanda" kintamieji yra: ' + nBtn1Query.length);
        if (i.dataset.komanda === 'namu')
            console.log("NAMU komanda" + i.dataset.komanda);
        else if (i.dataset.komanda === 'sveciu')
            console.log("SVECIU komanda" + i.dataset.komanda);

    //const newButton = nBtn1Query[i]; /*nBtn1Query.length - 1*/
    //newButton.addEventListener("click", function() {


        if (i.dataset.komanda === 'namu')
            lenta[0].textContent = parseInt(lenta[0].textContent) + parseInt(i.dataset.points);
        else if (i.dataset.komanda === 'sveciu')
            lenta[1].textContent = parseInt(lenta[1].textContent) + parseInt(i.dataset.points);
        console.log(i.dataset.komanda + ' ' + lenta[0].textContent + ' : ' + lenta[1].textContent);
    });
}

/*
const nBtn2Query = document.querySelector('button');
const nBtn3Query = document.querySelector('button');
const sBtn1Query = document.querySelector('button');
const sBtn2Query = document.querySelector('button');
const sBtn3Query = document.querySelector('button');
const nRezQuery = document.querySelector('.rezultatas');
const sRezQuery = document.querySelector('.rezultatas');
*/
let number = 0;
let pointI = 0;
let komandaI = '';
let i = 0;

//for (let i = 0; i < nBtn1Query.length; i++) {
function doit() {
    alert("Button Clicked");
    pointI = nBtn1Query[0].dataset.points;
    komandaI = nBtn1Query[1].dataset.komanda;
};

//console.log(lenta[0].textContent); // VEIKIA
//console.log(lenta[1].textContent); //rezultatas lentoje vietoj "0:0" => [0]namu[1]sveciu

const article2 = document.querySelectorAll('.lenta > div'),
    data2 = article2.dataset;
//console.log(article2[0].textContent); //rezultatas lentoje vietoj "0:0" => [0]namu[1]sveciu
/* DELETE
const article3 = document.querySelectorAll('.aikstele > .komanda'),
    data3 = article3.dataset;
console.log(article3[0].textContent); //komandos: [0]namu vs [0]sveciu
*/

const elList = Array.from(document.querySelectorAll('.komanda'), (el) => {
    return {
        element: el,
        select: el.dataset
    };
}); //console.log(elList);
/*
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
//nBtn1Query.addEventListener('click', doit);
/*
nBtn2Query.addEventListener('click', n2Click);
nBtn3Query.addEventListener('click', n3Click);
sBtn1Query.addEventListener('click', s1Click);
sBtn2Query.addEventListener('click', s2Click);
sBtn3Query.addEventListener('click', s3Click);
nRezQuery.addEventListener('click', nRezCLick);
sRezQuery.addEventListener('click', sRezCLick);
*/