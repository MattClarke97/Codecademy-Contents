var orderCount = 0;
function takeOrder(topping, crustType) {
  orderCount = orderCount + 1;
  console.log("Order: " + crustType + "pizza " + "with" + topping);
}

function getSubTotal(itemCount) {
  return itemCount * 7.5;
}

function getTax() {
  return getSubTotal(orderCount) * 0.06;
}

function getTotal() {
  return getTax() + getSubTotal(orderCount);
}

takeOrder(" bacon","thin crust ");
takeOrder(" ham","deep dish ");
takeOrder(" Pineapple","thin crust ");
console.log("Total without tax: " + getSubTotal(orderCount));
console.log("Total with tax: " + getTotal());
