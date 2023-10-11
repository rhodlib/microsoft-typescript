//Types

//Boolean
let flag: boolean;
let yes = true;
let no = false;

//Number & BigInt
// let x: number;
// let y = 0;
let z: number = 123.234;
let big: bigint = 100n;

//String
let s: string;
let empty: "";
let abc = "abc";

// let firstName: string = "rhod";
let sentence: string = `My name is ${firstName}`;
console.log(sentence);

//Enum
enum ContractStatus {
    Permanent = 1,
    Temp,
    Apprentice,
}
let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);

//Any
let randomValue: any = 10;
randomValue = "Mateo"; //Ok
randomValue = true; //Ok

//Type assertion
(randomValue as string).toUpperCase();

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}

//Union types
let multiType: number | boolean;
multiType = 20;
multiType = true;

//Intersection Types
interface Employee {
    employeeID: number;
    age: number;
}

interface Manager {
    stockPlan: boolean;
}

type ManagementEmployee = Employee & Manager;

let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true,
};

//Literal types
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;

myResult = "incomplete"
myResult = "pass"

//Collections

//Matrix
let list: number[] = [1,2,3];
let anotherList: Array<number> = [2,4,6];

//Tuple
let person1: [string,number] = ["rhod",33];



