// * generic type

type GenericArray<T> = Array<T>

//const rollNumbers: number[] = [3,6,8,10];
//const rollNumbers: Array<number> = [3,6,8,10]; //generic-type
const rollNumbers: GenericArray<number> = [3,6,8,10]; //re-usable generic type



//const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
//const mentors: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"]; //generic-type
const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"]; //re-usable generic type



//const boolArray: boolean[] = [true, false, true, false];
//const boolArray: Array<boolean> = [true, false, true, false]; //generic-type
const boolArray: GenericArray<boolean> = [true, false, true, false]; //re-usable generic type




//* generic for array of object// object-array

const users: GenericArray<{name: string, age: number, roll?:string}> = [
    {
        name: "Osman Goni",
        age: 23,
    },
    {
        name: "Marjan Hossain",
        age: 7,
        roll: "id25"
    }
]




// *generic tuple

type GenericTuple<X, Y> = [X, Y];

const manush: GenericTuple<string, number> = ["Mr. X", 50]

const userWithId : GenericTuple<number, {name:string, email: string}> = [1234, {name: "Osman Goni", email: "goni@gmail.com"}]
