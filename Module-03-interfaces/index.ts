interface Employee {
    firstName: string;
    lastName: string;
    fullname(): string;
}

let employee: Employee = {
    firstName: "Rhod",
    lastName: "Tali",
    fullname(): string {
        return `${this.firstName} ${this.lastName}` 
    }
}

interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string;
}

let myIceCream: IceCream = {
    flavor: "vanilla",
    scoops: 2,
    instructions: "This is an instruction"
}

interface Sundae extends IceCream {
    sauce: 'chocolate' | "caramel" | "strawberry";
    nuts?: boolean;
    whippedCream? : boolean;
    instructions?: string;
}

let mySundae: Sundae = {
    flavor: "vanilla",
    scoops: 2,
    sauce: "chocolate",
    nuts: true,
}

function tooManyScoops(dessert: Sundae){
    if(dessert.scoops >= 4){
        return `${dessert.scoops} is too many scoops!`;
    } else {
        return `Your order will be ready soon!`;
    }
}