let buttonQuery = document.querySelectorAll('button');
let data_komandaQuery = document.querySelectorAll('[data-komanda]');
var taskaiNamu = 0, taskaiSveciu = 0;

function buttonClicked0() {
    data_komandaQuery[0].innerText = ++taskaiNamu;
}function buttonClicked1() {
    taskaiNamu += 2;
    data_komandaQuery[0].innerText = taskaiNamu;
}function buttonClicked2() {
    taskaiNamu += 3;
    data_komandaQuery[0].innerText = taskaiNamu;
}

function buttonClicked3() {
    data_komandaQuery[1].innerText = ++taskaiSveciu;
}function buttonClicked4() {
    taskaiSveciu += 2;
    data_komandaQuery[1].innerText = taskaiSveciu;
}function buttonClicked5() {
    taskaiSveciu += 3;
    data_komandaQuery[1].innerText = taskaiSveciu;
}

buttonQuery[0].addEventListener('click', buttonClicked0);
buttonQuery[1].addEventListener('click', buttonClicked1);
buttonQuery[2].addEventListener('click', buttonClicked2);
buttonQuery[3].addEventListener('click', buttonClicked3);
buttonQuery[4].addEventListener('click', buttonClicked4);
buttonQuery[5].addEventListener('click', buttonClicked5);



//let buttonQuery = document.querySelector('button');
// function buttonClicked() {

// if (document.getElementsByTagName('button').getAttribute("data-points") === "1" &&
//     document.getElementsByClassName('komanda').getAttribute("data-komanda") === "namu")

// if  (document.getElementsByClassName('rezultatas').getAttribute("data-komanda") === "namu")
//     document.querySelector('rezultatas').innerText = 17;

// }
// buttonQuery.addEventListener('click', buttonClicked);

/*
function showDetails(animal) {
    var animalType = animal.getAttribute("data-animal-type");
    alert("The " + animal.innerHTML + " is a " + animalType + ".");
  }
  */