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

/* Module 3: Implement interfaces in TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare the Loan interface. */
interface Loan {
    principal: number;
    interestRate: number;
}


/*  TODO: Declare the ConventionalLoan interface. */

interface ConventionalLoan extends Loan {
    months: number;
}


/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    // Calculates the monthly payment of an interest only loan
    let interest: number = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment: number;
    payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

/*  TODO: Update the calculateConventionalLoanPayment function. */

function calculateConventionalLoanPayment(loanTerms: ConventionalLoan): string {
    // Calculates the monthly payment of a conventional loan
    let interest: number = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment: number;
    payment = loanTerms.principal * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({principal: 30000, interestRate: 5});
let conventionalPayment = calculateConventionalLoanPayment({principal: 30000, interestRate: 5, months: 180});

console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24" 