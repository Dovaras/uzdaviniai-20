let lentaQuery = document.querySelector(".lenta");

function generuotiLenta(x) {
    for (let i = 1; i <= x; i++) {
        if (x <= 0) break;
        lentaQuery.innerHTML += "<div>" + i + "</div>";
    }
} generuotiLenta(0);