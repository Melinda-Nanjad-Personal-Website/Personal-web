//Home 

class home {
    constructors (rooms, bathroom, squareFeet) {
        this.rooms = rooms;
        this.bathroom = bathroom;
        this.squareFeet = squareFeet;
    }
    getInfo() {
        return  `This home has ${this.rooms,} ${this.bathrooms}, and is ${this.squareFeet}. squareFeet`; {

        }
    }

    class SingleFamily extends Home {
  constructor(rooms, bathrooms, squareFeet, yardSize) {
    super(rooms, bathrooms, squareFeet);
    this.yardSize = yardSize; {
 }
        getInfo()
        return `${super.getInfo()} It has a ${this.yardSize} square foot yard.`;
  }
}

class Apartment extends home {
    constructor(rooms, bathrooms, squareFeet, floor) {
    super(rooms, bathrooms, squareFeet);
    this.floor = floor;
} }

  getInfo() {
    return `${super.getInfo()} It is on floor ${this.floor}.`;
  }
}