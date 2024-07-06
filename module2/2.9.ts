//* conditional type


type a1 = null;
type b1 = undefined;

type x = a1 extends null ? true : false; // true //conditional type





type Sheikh = {
    bike: string;
    car: string;
    ship: string;
}


//car ase kina / bike ase kina/ aship ase kina / tractor ase kina

// CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

type HasCar = CheckVehicle<"car">; // true
type HasPlane = CheckVehicle<"plane">; // false
