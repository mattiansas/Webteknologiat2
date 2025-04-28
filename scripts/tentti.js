// Tämä funktio laskee pizzan hinnan valittujen täytteiden perusteella
function updatePrice() {
    const size = parseInt(document.getElementById("size").value) || 0;
    const toppings = document.querySelectorAll("input[type='checkbox']:checked");
    let totalPrice = size;

    toppings.forEach(topping => {
        totalPrice += parseInt(topping.value);
    });

    document.getElementById("totalPrice").textContent = totalPrice;
}

// Tämä funktio nollaa tilauksen ja palauttaa kaikki valinnat oletusarvoihin
function resetOrder() {
    document.getElementById("size").value = "0";
    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
        checkbox.checked = false;
    });
    document.getElementById("totalPrice").textContent = "0";
}
