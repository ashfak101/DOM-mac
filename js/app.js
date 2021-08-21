
function productPrice(product, price) {
    const cost = document.getElementById(product);
    cost.innerText = price;
    getTotalPrice();// Total price Calculation
}

// Total price Calculation
function getTotalPrice() {
    const memoryCost = document.getElementById('memory-price').innerText;
    const storageCost = document.getElementById('storage-price').innerText;
    const deliveryCost = document.getElementById('delivery-price').innerText;
    const totalCost = parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost) + 1299;


    document.getElementById('total').innerText = totalCost;
    const totalFinalCost = document.getElementById('total-final');
    totalFinalCost.innerText = totalCost;
}
/* handle Event for memory storage delivery */
//  memory button and price
document.getElementById('8gb-button').addEventListener('click', function () {
     productPrice('memory-price', 0); 
})
document.getElementById('16gb-button').addEventListener('click', function () {
     productPrice('memory-price', 180);
})
// Storage 
document.getElementById('256gb-button').addEventListener('click', function () {
     productPrice('storage-price', 0);
})
document.getElementById('512gb-button').addEventListener('click', function () {
     productPrice('storage-price', 100);
})
document.getElementById('1tb-button').addEventListener('click', function () {
     productPrice('storage-price', 180);
})
//   Delivery  
document.getElementById('free-button').addEventListener('click', function () {
     productPrice('delivery-price', 0);
})
document.getElementById('paid-button').addEventListener('click', function () {
    productPrice('delivery-price', 20);
})
/* handle event ends here */


/* ---------------  pomo code section -------------- */

document.getElementById('pomo-button').addEventListener('click', function () {
    const pomoCodeTextField = document.getElementById('pomo-input');
    const textFieldValue = pomoCodeTextField.value;

    const normalCost = document.getElementById('total-final');
    if (textFieldValue == 'stevekaku') {
        const afterDiscount = parseInt(normalCost.innerText) * 0.2;
        normalCost.innerText = parseFloat(normalCost.innerText) - afterDiscount;
    }
    else{
        window.alert(' invalid pomo code');
    }
//clear input field
    pomoCodeTextField.value = '';

})
