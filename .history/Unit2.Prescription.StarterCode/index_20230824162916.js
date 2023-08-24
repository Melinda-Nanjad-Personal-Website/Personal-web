/**
 * Calculates the total cost of all refills.
 * @param {number} pricePerRefill
 * @param {number} refills
 * @returns {number} total cost of all refills
 */
function getTotalCost(pricePerRefill, refills) {
  return pricePerRefill * refills;
}

/**
 * If the customer has a subscription, apply a 25% discount
 * to the total cost of the refills.
 * @param {number} totalCostWithoutDiscounts
 * @param {boolean} isSubscribed whether the user has a subscription
 * @returns {number} total cost with subscription discount
 */
function applyDiscount(totalCostWithoutDiscounts, isSubscribed) {
  return totalCostWithoutDiscounts * (isSubscribed ? 0.75 : 1);
}

/**
 * If the customer has a coupon, apply a $10 discount to
 * the total cost of the refills after the subscription discount.
 * @param {number} costAfterSubscription
 * @param {boolean} hasCoupon whether the customer is using a coupon
 * @returns
 */
function applyCoupon(costAfterSubscription, hasCoupon) {
  return costAfterSubscription - (hasCoupon ? 10 : 0);
}

/**
 * Calculates the cost of a subscription based on input values
 * and displays the result on the page.
 */
function calculateCost() {
  const pricePerRefill = document.querySelector("#price");
  const refills = document.querySelector("#refills");
  const subscription = document.querySelector("#subscribed");
  const coupon = document.querySelector("#coupon");

  const output = document.querySelector("#cost");

  const initialCost = getTotalCost(pricePerRefill.value, refills.value);
  const costAfterSubscription = applyDiscount(
    initialCost,
    subscription.checked
  );
  const finalCost = applyCoupon(costAfterSubscription, coupon.checked);

  output.textContent = `$${finalCost.toFixed(2)}`;
}

if (typeof module !== "undefined") {
  module.exports = {
    getTotalCost,
    applyDiscount,
    applyCoupon,
    calculateCost,
  };
} else {
  const calculateButton = document.querySelector("#calculate");
  calculateButton.addEventListener("click", calculateCost);
}
