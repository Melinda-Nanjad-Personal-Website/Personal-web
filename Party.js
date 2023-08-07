//Dinner
// Me- Cheeseburger $12
//Jonah- Steak $20
//Amy- Soup $8
//Mateo- Mac and Cheese $14
//Cheyenne- unlimited Soup and Salad $16
//find the total cost for yourself

const dinner = {
    hamburger: 12,
    steak: 20,
    soup: 8,
    macAndCheese: 14,
    soupAndSalad: 16
};

console.log(Object.keys(dinner));


console.log(Object.values(dinner));

let totalCost = 0;

for (const individualMeal in dinner) {
    totalCost += dinner[individualMeal];
}







console.log(totalCost);

const array = [1,2,3];
array[1] = 4
console.log (array);
