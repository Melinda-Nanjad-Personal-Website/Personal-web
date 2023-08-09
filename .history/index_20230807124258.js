// Create a file named index.js in your VS Code project

// Create the customer object
const customer = {
  firstName: 'jake',
  lastName: 'smith',
  email: 'jaekSmih!aol.com',
  phone: undefined,
  zipCode: '631',
  favoriteFlavors: 32,
  cupSize: 'medium',
  favoriteStore: 'Target',
  firstVisit: false
};

// Modify incorrect information
customer.email = 'Jak3Smith1992@email.com';
customer.phone = 3195551234;
customer.zipCode = '63132';
customer.favoriteFlavors = ['coffee', 'strawberry', 'matcha'];

// Remove specified properties
delete customer.zipCode;
delete customer.favoriteStore;

// Add additional information
customer.toppings = ['chocolate sprinkles', 'wafer straws', 'gummy bears'];
customer.futureFlavors = 'mango';
customer.todaysPurchaseCost = 5.32;

// Print keys in the survey
const surveyKeys = Object.keys(customer);
console.log(surveyKeys);

// Check your work with console.table
console.table(customer);
