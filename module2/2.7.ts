//* generic constraint with keyof operator

type Vehicle = {
    bike: string;
    car: string;
    ship: string;
}



type Owner = "bike" | "car" | "ship" // manually

type Owner2 = keyof Vehicle

//Note: here, Owner & Owner2 are same type


//const getPropertyValue = <X,Y extends "name" | "age" | "address">(obj: X, key:Y) => {
  //  return obj[key];
//}

const getPropertyValue = <X,Y extends keyof X>(obj: X, key:Y) => {
    return obj[key];
}

const user0 ={
    name: "Evan Ahmed",
    age:2,
    address: "Saidpur"
}


const car ={
    model: "Toyota 100",
    price:200000,
}

const result0 = getPropertyValue(user0, "name")
const resultCar = getPropertyValue(car, "model")

