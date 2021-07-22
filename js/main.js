const nPointsQuery = document.querySelectorAll('button'); //[data-points="1"]
const nKomandaQuery = document.querySelectorAll('.komanda'); //[data-komanda="namu"]
const lentaQuery = document.querySelectorAll('.lenta > div');
const rezultatasQuery = document.querySelectorAll('rezultatas');

for (let i of nPointsQuery) {
    i.addEventListener('click', function () {
        console.log(i.dataset.points);

        if (i.dataset.komanda === 'namu')
            nKomandaQuery[0].innerText = parseInt(nKomandaQuery[0].innerText) + parseInt(i.dataset.points);
        else if (i.dataset.komanda === 'sveciu')
            nKomandaQuery[1].innerText = parseInt(nKomandaQuery[1].innerText) + parseInt(i.dataset.points);

        console.log('"button" kintamieji yra: ' + nPointsQuery.length);

        if (i.dataset.komanda === 'namu')
            console.log("Komanda " + i.dataset.komanda);
        else if (i.dataset.komanda === 'sveciu')
            console.log("Komanda " + i.dataset.komanda);





        console.log(nKomandaQuery);//[0].textContent + ' : ' + rezultatasQuery[1].textContent);

    });
}
/*
const elList = Array.from(document.querySelectorAll('.komanda'), (el) => {
    return {
        element: el,
        select: el.dataset
    };
});*/