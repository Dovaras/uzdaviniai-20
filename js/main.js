const pointsQuery = document.querySelectorAll('button'); //[data-points="1"]
const komandaQuery = document.querySelectorAll('.lenta > .rezultatas'); //[data-komanda="namu"]
const lentaQuery = document.querySelectorAll('.lenta > div');
const rezultatasQuery = document.querySelectorAll('div > .rezultatas');

for (let i of pointsQuery) {
    i.addEventListener('click', function () {
        console.log(i.dataset.points);
        //console.log(i.dataset.komanda);


        if (i.dataset.komanda === 'namu') {
            komandaQuery[0].innerText = parseInt(komandaQuery[0].innerText) + parseInt(i.dataset.points);
            console.log(komandaQuery[0].innerText);
        }
        else if (i.dataset.komanda === 'sveciu') {
            komandaQuery[1].innerText = parseInt(komandaQuery[1].innerText) + parseInt(i.dataset.points);
            console.log(komandaQuery[1].innerText);
        }

        console.log('"button" kintamieji yra: ' + pointsQuery.length);

        if (i.dataset.komanda === 'namu')
            console.log("Komanda " + i.dataset.komanda);
        else if (i.dataset.komanda === 'sveciu')
            console.log("Komanda " + i.dataset.komanda);





        //console.log(komandaQuery);//[0].textContent + ' : ' + rezultatasQuery[1].textContent);

    });
}
/*
const elList = Array.from(document.querySelectorAll('.komanda'), (el) => {
    return {
        element: el,
        select: el.dataset
    };
});*/