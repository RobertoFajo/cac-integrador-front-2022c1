let btnComprar = document.getElementById("btnComprar");
btnComprar.onclick = cargaComprarTickets;

let menuComprar = document.getElementById("menuComprar");
menuComprar.onclick = cargaComprarTickets;

function cargaComprarTickets(){
    location.href = "tickets/index.html";
}