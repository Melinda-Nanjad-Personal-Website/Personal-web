/*Pharmacy Checkout System
//Return the total cost of all refills
//The returns of these functions should be stored in a variable, 
allowing other functions to use the result.
//include customer coupon or subscription
// Customer w/Subscription get 25% off
//Coupon $10 */

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

// Calculate refill cost Timmy or all?
function refillCost(customer) {
  return customer.pricePerRefill * customer.refills;
}

//calculate refill cost for Timmy
function refillCost(timmy) {
  return timmy.pricePerRefill * refills;
}

//Calculate grand total
function grandTotal(customer) {

}

//discount for coupon
function couponDiscountApplied
//use if or else?


//discount for subscription
//use if or else

//each customer's final amount

const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]