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

    // Radiobutton: kaip paimti iš visų pasirinkimų - vienintelę pažymėtą reikšmę?
    // Nes Radiobutton tam ir yra skirtas - vieninteliam pasirinkimui...
    const sultys = document.getElementById("sultys");
    const gira = document.getElementById("gira");
    const pienas = document.getElementById("pienas");
/**/
    if (sultys.checked == true) {
        uzsakymas += "sultys yra pasirinktas gerimas.";
    } else if (gira.checked == true) {
        uzsakymas += "gira yra pasirinktas gerimas.";
        } else if (pienas.checked == true) {
            uzsakymas += "pienas yra pasirinktas gerimas.";
            } else uzsakymas += "nera pasirinkto gerimo."
/**/
    document.getElementsByClassName('order')[0].innerText = uzsakymas;
    console.log(uzsakymas);
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