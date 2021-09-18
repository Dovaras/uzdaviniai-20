const ulQuery = document.querySelector('ul');
ulQuery.innerText = "Tu pasileidai zaidima - sekmes!"; let pradzia = false;
const minusQuery = document.querySelector('.minus');
const plusQuery = document.querySelector('.plus');
const resetQuery = document.querySelector('.reset');

const numQuery = document.querySelector('.number');



function minusClick() {
    if (!pradzia) ulQuery.innerText = "Paspaudei minusa ir dabartinis rezultatas yra " + --numQuery.textContent;
    else pradzia = false;
}
function plusClick() {
    if (!pradzia) ulQuery.innerText = "Paspaudei pliusa ir dabartinis rezultatas yra " + ++numQuery.textContent;
    else pradzia = false;
}
function resetClick() {
    if (!pradzia) ulQuery.innerText = "Paspaudei reset ir dabartinis rezultatas yra " + 0;
    else pradzia = false;
    //numQuery.textContent = 0;
}

minusQuery.addEventListener('click', minusClick);
plusQuery.addEventListener('click', plusClick);
resetQuery.addEventListener('click', resetClick);