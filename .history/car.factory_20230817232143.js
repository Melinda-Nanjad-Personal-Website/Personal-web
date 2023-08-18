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
// Create an instance of an Electric Car

