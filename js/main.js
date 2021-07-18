const btnQuery = document.querySelector("form.komanda.komanda");

function btnClick() {
    console.log(btnQuery.dataset.komanda);
    console.log(btnQuery.dataset.komanda);

    switch (btnQuery.dataset.points) {
        case "1": document.querySelector('div').innerText = '1'; break;
        case "2": document.querySelector('div').innerText = '22'; break;
        case "3": document.querySelector('div').innerText = '333'; break;
    }
}
btnQuery.addEventListener('click', btnClick);