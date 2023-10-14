interface Vehicle {
  make: string;
  color: string;
  doors: number;
  accelerate(speed: number): string;
  brake(): string;
  turn(direction: "left" | "right"): string;
}

class Car implements Vehicle {
  //Properties
  private static numberOfCars: number = 0;
  private _make: string;
  private _color: string;
  private _doors: number;

  //Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
    Car.numberOfCars++;
  }

  //Accessors
  public static get getNumberOfCars(): number {
    return Car.numberOfCars;
  }

  get make() {
    return this._make;
  }
  set make(make) {
    this._make = make;
  }
  get color() {
    return `The color of the car is ${this._color}`;
  }
  set color(color) {
    this._color = color;
  }
  get doors() {
    return this._doors;
  }
  set doors(doors) {
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
  }

  //Methods
  protected worker(): string {
    return this._make;
  }

  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`;
  }

  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`;
  }

  turn(direction: "left" | "right"): string {
    return `${this.worker()} is turning ${direction}`;
  }
}

let myCar1 = new Car("Cool Car Company", "blue", 2);

class ElectricCar extends Car {
  //Properties unique to ElectricCar
  private _range: number;

  //Constructor
  constructor(make: string, color: string, range: number, doors = 2) {
    super(make, color, doors);
    this._range = range;
  }
  //Accesors
  get range() {
    return this._range;
  }
  set range(range) {
    this._range = range;
  }
  //Methods
  charge() {
    console.log(`${this.worker()} is charging.`);
  }
  brake(): string {
    return `${this.worker()} is braking with the regenerative braking system.`;
  }
}

let myElectricCar = new ElectricCar("Spark Motors", "silver", 124);
myElectricCar.charge();

/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */

/*  EXERCISE 1 */

class BuildArray {
  // TODO Define the properties
  private _items: number;
  private _sortOrder: "ascending" | "descending";

  // TODO Define the constructor
  constructor(items: number, sortOrder: "ascending" | "descending") {
    this._items = items;
    this._sortOrder = sortOrder;
  }
  // TODO Define the accessors
  get items() {
    return this._items;
  }
  set items(items) {
    this._items = items;
  }
  get sortOrder() {
    return this._sortOrder;
  }
  set sortOrder(sortOrder) {
    this._sortOrder = sortOrder;
  }
  // TODO Define the methods
  private sortDescending(a: number, b: number) {
    if (a > b) {
      return -1;
    } else if (b > a) {
      return 1;
    } else {
      return 0;
    }
  }

  private sortAscending(a: number, b: number) {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  }

  buildArray(): number[] {
    let randomNumbers: number[] = [];
    let nextNumber: number;
    for (let counter = 0; counter < this._items; counter++) {
      nextNumber = Math.ceil(Math.random() * (100 - 1));
      if (randomNumbers.indexOf(nextNumber) === -1) {
        randomNumbers.push(nextNumber);
      } else {
        counter--;
      }
    }
    if (this._sortOrder === "ascending") {
      return randomNumbers.sort(this.sortAscending);
    } else {
      return randomNumbers.sort(this.sortDescending);
    }
  }
}

/*  TODO: Instantiate the BuildArray objects. */

let testArray1 = new BuildArray(12, "ascending");
let testArray2 = new BuildArray(8, "descending");
console.log(testArray1.buildArray());
console.log(testArray2.buildArray());
