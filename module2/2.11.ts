//* utility types

//* Pick type

type Person1 = {
    name: string;
    age: number;
    email?: string;
    contactNo: string
}

type Name = Pick<Person1, "name"> // name: string;

type NameAge = Pick<Person1, "name" | "age"> // type NameAge = {name: string; age: number}




//* Omit type

type ContactInfo = Omit<Person1, "name">
//output 
// type ContactInfo = {
//     age: number;
//     email?: string;
//     contactNo: string;
// }


type ContactInfo2 = Omit<Person1, "name" | "age">
//output
// type ContactInfo2 = {
//     email?: string;
//     contactNo: string;
// }



//* Required type

type PersonRequired = Required<Person1>
//output
// type PersonRequired = {
//     name: string;
//     age: number;
//     email: string;
//     contactNo: string;
// }




//* Partial type

type PersonPartial = Partial<Person1>
//output
// type PersonPartial = {
//     name?: string | undefined;
//     age?: number | undefined;
//     email?: string;
//     contactNo?: string | undefined;
// }



//* Readonly 

type PersonReadonly = Readonly<Person1>

const person01: PersonReadonly = {
    name: "Osman Goni",
    age: 23,
    email: "goni@gmail.com",
    contactNo: "01793837035"
}

//output
// type PersonReadonly = {
//     readonly name: string;
//     readonly age: number;
//     readonly email?: string;
//     readonly contactNo: string;
// }

//cann't assign new value
person01.name="Goni Hales" //error show



// * Record utility type

type MyObj = Record<string, string> // here, key/property type = string, propertyValue type = string
// type MyObj = {
//     [x: string]: string;
// }

const object1 : MyObj = {
    name: "goni",
    varsity: "BSMRSTU",
    address: "Saidpur, Nilphamari",
    subject: "public administration"
}


const EmptyObj : Record<string, unknown> = {}

EmptyObj.name="Osman Goni";
EmptyObj.age = 23;
EmptyObj.isBike = true;
EmptyObj.isGraduate = false;
