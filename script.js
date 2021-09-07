document.getElementById("memory-8gb").addEventListener("click", function () {
    const memoryCost = document.getElementById("memory-cost");
    memoryCost.innerText = 0;
    updateTotal();
})
document.getElementById("memory-16gb").addEventListener("click", function () {
    const memoryCost = document.getElementById("memory-cost");
    memoryCost.innerText = 180;
    updateTotal();
})
document.getElementById("storage-256gb").addEventListener("click", function () {
    const storageCost = document.getElementById("storage-cost");
    storageCost.innerText = 0;
    updateTotal();
})
document.getElementById("storage-512gb").addEventListener("click", function () {
    const storageCost = document.getElementById("storage-cost");
    storageCost.innerText = 100;
    updateTotal();
})
document.getElementById("storage-1Tb").addEventListener("click", function () {
    const storageCost = document.getElementById("storage-cost");
    storageCost.innerText = 180;
    updateTotal();
})
document.getElementById("delivery-delay").addEventListener("click", function () {
    const deliveryCost = document.getElementById("delivery-cost");
    deliveryCost.innerText = 0;
    updateTotal();
})
document.getElementById("delivery-early").addEventListener("click", function () {
    const deliveryCost = document.getElementById("delivery-cost");
    deliveryCost.innerText = 20;
    updateTotal();
})

const memoryCost = document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const deliveryCost = document.getElementById("delivery-cost")
const bestPrice = document.getElementById("best-price");
bestPrice.innerText = 1299;
const totalPrice = document.getElementById("total-price");
let showTotal = document.getElementById("show-total");

function updateTotal() {
    const memoryPrice = Number(memoryCost.innerText);
    const storagePrice = Number(storageCost.innerText);
    const deliveryPrice = Number(deliveryCost.innerText);
    const macPrice = Number(bestPrice.innerText);
    // Add all price
    let grandTotal = memoryPrice + storagePrice + deliveryPrice + macPrice;
    totalPrice.innerText = grandTotal;
    // Show the added price in the end
    let lastTotal = memoryPrice + storagePrice + deliveryPrice + macPrice;
    showTotal.innerText = lastTotal;
}

