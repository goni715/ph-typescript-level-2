"use strict";
//function in typescript
//this normal function will return a number
function add(num1, num2 = 10) {
    return num1 + num2;
}
//arrow function
const addArrow = (num1, num2) => {
    return num1 + num2;
};
//function in object
//object ---> function ---> method
const poorUser = {
    name: "Osman Goni",
    balance: 0,
    addBalance(balance) {
        return `My new balance is : ${this.balance + balance}`;
    }
};
//function in array map function
const arr = [1.2, 4];
const newArray = arr.map((element) => element * element); //return number array
