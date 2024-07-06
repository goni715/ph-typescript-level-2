//* mapped types

const arrOfNumbers : number[] = [1, 4, 5];

// const arrOfStrings : string[] = ["1", "4", "5"];
const arrOfStrings : string[] = arrOfNumbers.map((number)=> number.toString());

console.log(arrOfStrings);



type AreaNumber = {
    height: number;
    width: number;
}

type Height = AreaNumber["height"];  // look up type
// type AreaString = {
//     height: string;
//     width: string;
// }

//keyof AreaNumber => "height" | "width"

//* manually number to string type converting
// type AreaString = {
//     [key in "height" | "width"] : string;
// }



type AreaString = {
    [key in keyof AreaNumber] : string;
}




//* mapped type declare with generics

// T => {height: string; width: number}
//key/property => T["width"]

type AreaString2<T> = {
    [key in keyof T] : T[key];
}


const area1: AreaString2<{height: string; width: number}> = {
    height: "100",
    width: 50
}







