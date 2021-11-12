let buttonQuery = document.querySelector('button');

function buttonClicked() {
    let uzsakymas = document.getElementsByClassName('order')[0].innerText = "";

    if (document.getElementById("customer").value === '')
        uzsakymas += "Uzsakovas nenorintis nurodyti vardo";
    else uzsakymas += "Uzsakovas vardu " + document.getElementById("customer").value;

    if (document.querySelector('#sriuba').checked)
        uzsakymas += ' nori ';
    else uzsakymas += ' nenori ';
    uzsakymas += 'sriubos,';

    if (document.querySelector('#patiekalas').checked)
        uzsakymas += ' nori ';
    else uzsakymas += ' nenori ';
    uzsakymas += 'pagrindinio patiekalo,';

    if (document.querySelector('#desertas').checked)
        uzsakymas += ' nori ';
    else uzsakymas += ' nenori ';
    uzsakymas += 'deserto,';

    if (document.querySelector('#sultys').checked)
    uzsakymas += ' sultys';
    if (document.querySelector('#gira').checked)
    uzsakymas += ' gira';
    if (document.querySelector('#pienas').checked)
    uzsakymas += ' pienas';
    uzsakymas += ' yra pasirinktas gerimas.';    

    document.getElementsByClassName("order")[0].innerText = uzsakymas;

       //[nori/nenori] sriubos, [nori/nenori] pagrindinio patiekalo, [nori/nenori] deserto ir [gerimo pavadinimas] yra pasirinktas gerimas."
    
}
buttonQuery.addEventListener('click', buttonClicked);