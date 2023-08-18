//Car Factory
// Car constructor function
class Car {
    constructors (make,model,year)
    this.make = make;
    this.model = model;
    this.year = year;
}

}
getDescription() {
    return `Information about ${Car}`; {

        //Define the Electric class as a subclass of Car
        class ElectricCar extends Car {
             constructors(range) {
            super(make,model,year);
            this.range = range; 
            }
        
                getDescription() {
                    return  `${this.year} ${this.make} 
                    ${this.model} - Range: ${this.range} miles`;
                }
        }
    }
// Create an instance of an Electric Car make "Tesla", model "Model S", year 2019, and range 300,
// getDescription method is called on the instance.
//output will be a string containing the make, model, year, and range of the electric car.
const electricCar = new ElectricCar ("Tesla", "Model S", 2019, 300);
