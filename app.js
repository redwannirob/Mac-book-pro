// variables

const extraMemoryCost = document.getElementById('extra-memory-cost');
const extraStorageCost = document.getElementById('extra-storage-cost');
const deliverCost = document.getElementById('delivery-cost');



const memory8 = document.getElementById('8gb-memory');
const memory16 = document.getElementById('16gb-memory');

const storageBtn1 = document.getElementById('storageBtn1');
const storageBtn2 = document.getElementById('storageBtn2');
const storageBtn3 = document.getElementById('storageBtn3');

const freeDelivery = document.getElementById('free-delivery');
const paidDelivery = document.getElementById('paid-delivery');


const totalCost = document.getElementById('total-price');
const grandTotal = document.getElementById('grand-total');



let newMemoryCost = 0,newStorageCost = 0,newDeliveryCost = 0;




// functions
function memoryCost(cost){
   newMemoryCost = extraMemoryCost.innerText = cost;
   totalCost.innerText = 1299 + cost;
   return newMemoryCost;
}

function storageCost(cost){
    newStorageCost = extraStorageCost.innerText = cost;
    totalCost.innerText = 1299 + cost;
    return newStorageCost;
}

function deliveryCost(cost){
    newDeliveryCost = deliverCost.innerText = cost;
    totalCost.innerText = 1299 + newDeliveryCost;
    return newDeliveryCost;
}




function total(){
    totalCost.innerText = 1299 + newMemoryCost + newStorageCost + newDeliveryCost;
}



function grandTotalCost(){
    grandTotal.innerText = 1299 + newMemoryCost + newStorageCost + newDeliveryCost;
}


// event-listener 

memory8.addEventListener('click',function(){
    memoryCost(0)
    total();
    grandTotalCost();
});

memory16.addEventListener('click',function(){
    memoryCost(180);
    total();
    grandTotalCost();
});
 storageBtn1.addEventListener('click',function(){
     storageCost(0);
     total();
     grandTotalCost();
 });
 storageBtn2.addEventListener('click',function(){
     storageCost(100);
     total();
     grandTotalCost();
 });
 storageBtn3.addEventListener('click',function(){
     storageCost(180);
     total();
     grandTotalCost();
 });
 freeDelivery.addEventListener('click',function(){
     deliveryCost(0);
     total();
     grandTotalCost();
 });
 paidDelivery.addEventListener('click',function(){
     deliveryCost(20);
     total();
     grandTotalCost();
 });

// promo code
 document
  .getElementById("promo-code-btn")
  .addEventListener("click", function () {
    const promoCode = document.getElementById("promo-code");
    const inputField = promoCode.value;
    inputField.value = "";
    if (inputField == "stevekaku") {
      const discount = (20 * parseFloat(totalCost.innerText)) / 100;
      grandTotal.innerText = parseFloat(totalCost.innerText) - discount;
      promoCode.value = "";
    }
  });
