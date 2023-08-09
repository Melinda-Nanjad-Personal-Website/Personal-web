//Pharmacy Checkout System
//Return the total cost of all refills
//include customer coupon or subscription
// Customer w/Subscription get 25% off
//Coupon $10
const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

// Calculate refill cost
function calculateRefillCost(customer) {
  return customer.pricePerRefill * customer.refills;
}

// Apply subscription discount
function applySubscriptionDiscount(refillCost, customer) {
  if (customer.subscription) {
    const subscriptionDiscount = refillCost * 0.25;
    return refillCost - subscriptionDiscount;
  }
  return refillCost;
}

// Apply coupon discount
function applyCouponDiscount(refillCost, customer) {
  if (customer.coupon) {
    return refillCost - 10;
  }
  return refillCost;
}

// Calculate grand total
function calculateGrandTotal(customer) {
  const refillCost = calculateRefillCost(customer);
  const subscriptionDiscountApplied = applySubscriptionDiscount(
    refillCost,
    customer
  );
  const couponDiscountApplied = applyCouponDiscount(
    subscriptionDiscountApplied,
    customer
  );
  return couponDiscountApplied;
}

// Test and log results
const customers = [timmy, sarah, rocky];
customers.forEach((customer) => {
  const finalAmount = calculateGrandTotal(customer);
  console.log(`Your grand total is $${finalAmount}.`);
});


const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};
//Timmy has a coupon 
//deduct $10
function calculateRefillTotal(customer) {
  return customer.pricePerRefill * customer.refills;
}

function applySubscriptionDiscount(refillTotal) {
  return refillTotal * 0.75;
}

function applyCouponDiscount(discountedTotal) {
  return discountedTotal - 10;
}

function calculateTotal(customer) {
  let refillTotal = calculateRefillTotal(customer);

  if (customer.subscription) {
    refillTotal = applySubscriptionDiscount(refillTotal);
  }

  if (customer.coupon) {
    refillTotal = applyCouponDiscount(refillTotal);
  }

  return refillTotal;
}

function formatTotal(total) {
  return "Your grand total is $" + total.toFixed(2);
}

const timmyTotal = calculateTotal(timmy);
const sarahTotal = calculateTotal(sarah);
const rockyTotal = calculateTotal(rocky);

console.log(formatTotal(timmyTotal));
console.log(formatTotal(sarahTotal));
console.log(formatTotal(rockyTotal));

Your grand total is $65.00
Your grand total is $37.50
Your grand total is $102.50
