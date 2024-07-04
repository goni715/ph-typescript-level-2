//function in typescript


//this normal function will return a number
function add(num1:number, num2:number =10 ) : number {
    return num1 + num2;
}


//arrow function
const addArrow = (num1: number, num2: number) : number => {
    return num1+num2;
}


//function in object
//object ---> function ---> method

const poorUser = {
    name: "Osman Goni",
    balance:0,
    addBalance(balance: number): string{
        return `My new balance is : ${this.balance + balance}`;
    }
}



//function in array map function
const arr: number[] = [1.2,4];

const newArray: number[] = arr.map((element:number): number => element*element) //return number array