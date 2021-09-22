const buttonQuery = document.querySelector('button');

function buttonClick() {
    // Vardas:
    let uzsakymas;
    if (document.getElementById('customer').value !== "")
        uzsakymas = "Uzsakovas vardu: " + document.getElementById('customer').value + " ";
    else uzsakymas = "Uzsakovas: ";

    // Checkbox:
    const sriuba = document.getElementById("sriuba");
    const patiekalas = document.getElementById("patiekalas");
    const desertas = document.getElementById("desertas");

    if (sriuba.checked == true) {
        uzsakymas += "nori sriubos, ";
    } else uzsakymas += "nenori sriubos, ";
    if (patiekalas.checked == true) {
        uzsakymas += "nori pagrindinio patiekalo, ";
    } else uzsakymas += "nenori pagrindinio patiekalo, ";
    if (desertas.checked == true) {
        uzsakymas += "nori deserto, ";
    } else uzsakymas += "nenori deserto ir ";

    // Radiobutton:
    let pabaiga = false;
    var radios = document.getElementsByTagName('input');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            pabaiga = true;
            uzsakymas += radios[i].value + " yra pasirinktas gerimas.";
        }
    }
    if (!pabaiga) uzsakymas += " nera pasirinkto gerimo";

    document.getElementsByClassName('order')[0].innerText = uzsakymas;
    document.getElementsByClassName('order')[1].innerText = "aha...";
}
buttonQuery.addEventListener('click', buttonClick);


















// <
// div id = "panel" >
//     <
//     div id = "field_name" > TEXT GOES HERE < /div> <
//     /div>

// function showPanel(fieldName) {
//     var fieldNameElement = document.getElementById('field_name');
//     //Make replacement here
// }

// fieldNameElement.textContent = "New text";