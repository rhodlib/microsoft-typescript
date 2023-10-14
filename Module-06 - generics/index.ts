(function () {
  //Generics
  function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
  }

  let numberArray = getArray<number>([2, 4, 5]);
  let stringArray = getArray<string>(["sarasa", "serese"]);

  type ValidTypes = string | number;

  interface Identity<T, U> {
    value: T;
    message: U;
  }

  let one: Identity<number, string> = {
    value: 23,
    message: "Hello!",
  };

  interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
  }

  function processIdentity<T, U>(value: T, message: U): T {
    console.log(message);
    return value;
  }

  let processor: ProcessIdentity<number, string> = processIdentity;

  function identity<T extends ValidTypes, U>(value: T, message: U) {
    let result: ValidTypes = "";
    let typeValue: string = typeof value;

    if (typeof value === "number") {
      result = value + value;
    } else if (typeof value === "string") {
      result = value + value;
    }

    console.log(
      `The message is ${message} and the function returns a ${typeValue} value of ${result}`
    );
    return result;
  }

  let returnNumber = identity<number, string>(100, "Hello!");
  let returnString = identity<string, string>("100", "Hello!");

  /*  Module 6: DGenerics in TypeScript
    Lab Start */

  /*  DataStore is a utility function that can store up to 10 string values in an array. 
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
  class DataStore<T> {
    private _data: Array<T> = new Array(10);

    AddOrUpdate(index: number, item: T) {
      if (index >= 0 && index < 10) {
        this._data[index] = item;
      } else {
        alert("Index is greater than 10");
      }
    }
    GetData(index: number) {
      if (index >= 0 && index < 10) {
        return this._data[index];
      } else {
        return;
      }
    }
  }

  let cities = new DataStore();

  cities.AddOrUpdate(0, "Mumbai");
  cities.AddOrUpdate(1, "Chicago");
  cities.AddOrUpdate(11, "London"); // item not added

  console.log(cities.GetData(1)); // returns 'Chicago'
  console.log(cities.GetData(12)); // returns 'undefined'

  // TODO Test items as numbers.
  let empIDs = new DataStore<number>();
  empIDs.AddOrUpdate(0, 50);
  empIDs.AddOrUpdate(1, 65);
  empIDs.AddOrUpdate(2, 90);

  // TODO Test items as objects.
  type Pets = {
    name: string;
    breed: string;
    age: number;
  };

  let pets = new DataStore<Pets>();
  pets.AddOrUpdate(0, { name: "Rex", breed: "Golden Retriever", age: 5 });
})();
