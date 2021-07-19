const nBtn1Query = document.querySelector('button');
const nBtn2Query = document.querySelector('button');
const nBtn3Query = document.querySelector('button');
const sBtn1Query = document.querySelector('button');
const sBtn2Query = document.querySelector('button');
const sBtn3Query = document.querySelector('button');
const nRezQuery = document.querySelector('.rezultatas');
const sRezQuery = document.querySelector('.rezultatas');

const elList = Array.from(document.querySelectorAll('.komanda'), (el) => {
    return {
        element: el,
        select: el.dataset
    };
}); console.log(elList);

function n1Click() {
    nBtn1Query.innerText = '5';
}

function n2Click() {
    nBtn2Query.innerText = '6';
}
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