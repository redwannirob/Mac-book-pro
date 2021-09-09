
// Variables
const totalPrice = document.getElementById("total-price");
const bestPrice = document.getElementById("best-price");
let memoryCost = document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const deliveryCost = document.getElementById("delivery-cost");
const totalCost = document.getElementById("total-cost");
let newMemoryCost = 0,
  newStorageCost = 0,
  newDeliveryCost = 0;

//   Functions

const memory = (cost) => {
  newMemoryCost = memoryCost.innerText = cost;
  totalCost.innerHTML = 1299 + newMemoryCost;
  return newMemoryCost;
};

const storage = (cost) => {
  newStorageCost = storageCost.innerText = cost;
  totalCost.innerHTML = 1299 + newStorageCost;
  return newStorageCost;
};

const delivery = (cost) => {
  newDeliveryCost = deliveryCost.innerText = cost;

  return newDeliveryCost;
};

const total = () => {
  totalCost.innerText = 1299 + newMemoryCost + newStorageCost + newDeliveryCost;
};
const finalTotal = () => {
  totalPrice.innerText =
    1299 + newMemoryCost + newStorageCost + newDeliveryCost;
};

// Extra Memory Cost
document.getElementById("first-memory").addEventListener("click", function () {
  memory(0);
  total();
  finalTotal();
});

document.getElementById("second-memory").addEventListener("click", function () {
  memory(180);
  total();
  finalTotal();
});
// Extra Storage Cost
document.getElementById("first-storage").addEventListener("click", function () {
  storage(0);
  total();
  finalTotal();
});
document
  .getElementById("second-storage")
  .addEventListener("click", function () {
    storage(100);
    total();
    finalTotal();
  });
document.getElementById("third-storage").addEventListener("click", function () {
  storage(180);
  total();
  finalTotal();
});
// delivery Charge
document
  .getElementById("first-delivery")
  .addEventListener("click", function () {
    delivery(0);
    total();
    finalTotal();
  });
document
  .getElementById("second-delivery")
  .addEventListener("click", function () {
    delivery(20);
    total();
    finalTotal();
  });

// total cost

// apply
document
  .getElementById("promo-code-btn")
  .addEventListener("click", function () {
    const promoCode = document.getElementById("promo-code");
    const inputField = promoCode.value;
    inputField.value = "";
    if (inputField == "stevekaku") {
      const discount = (20 * parseFloat(totalCost.innerHTML)) / 100;
      totalPrice.innerHTML = parseFloat(totalCost.innerHTML) - discount;
      promoCode.value = "";
    }
  });