const coffeeMenu = require("./coffee_data.js");

//2. print an array of all the drinks on the menu
let arrayOfDrinks = coffeeMenu.map(function (item) {
  return item.name;
});

console.log(arrayOfDrinks);

//3. print an array of drinks that cost 5 and under
let fiveAndUnder = coffeeMenu.filter(function (item) {
  return item.price <= 5;
});

console.table(fiveAndUnder);

//4. print an array of drinks that are priced at an even number
let pricedEvenNum = coffeeMenu.filter(function (item) {
  return item.price % 2 === 0;
});

console.table(pricedEvenNum);

//5. print the total if you were to order one of every drink
let allPricesArray = coffeeMenu.map(function (item) {
  return item.price;
});

console.log(allPricesArray);

let priceTotal = allPricesArray.reduce(function (accum, price) {
  return accum + price;
});

console.log(priceTotal);

//6. print an array with the drinks that are seasonal
let seasonalDrinks = coffeeMenu.filter(function (item) {
  return item.seasonal === true;
});

console.table(seasonalDrinks);

//7. print all the seasonal drinks with the words "with imported beans"
let newName = coffeeMenu.map(function (item) {
  return item.name + " with imported beans";
});

console.log(newName);
