   //* interface type

   type User3 = {
    name: string,
    age: number
}

type rollNumber = number;

interface User4 {
    name: string,
    age: number
}


//type-alias or custom type using
const user3: User3 ={
    name: "Osman Goni",
    age: 23
}


// interface using
const user4: User4 ={
    name: "Osman Goni",
    age: 23
}





//* intersection with type-alias or custom-type

type UserWithRole1 = User3 & {role: string}

const user5: UserWithRole1 = {
    name: "Evan",
    age: 2,
    role: "Id34"
}




//* intersection with interface // inteface User4 extends

interface UserWithRole2 extends User4 {
    role: string
}

const user6: UserWithRole2 = {
    name: "Marjan",
    age: 8,
    role: "Id25"
}



//* type-alias বা custom-type কে extend করে inteface বানাতে পারবো।

interface UserWithRole3 extends User3 {  //User3 একটা type-alias/custom-type
    role: string
}




//* interface for array

type Role1 = number[];

interface Role2 {
    [index: number]: number
}


const rollNumber1: Role2 = [1,2,4,5];




// * interface for function-- functionও একটি object

type Add1 = (num1:number, num2:number) => number

interface Add2 {
    (num1: number, num2: number) : number
}


const add1: Add2 = (num1,num2) => num1 + num2
