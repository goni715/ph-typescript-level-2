//* type assertion

let anything : any;

anything = "Next Level Web Development";

anything = 222;

// (anything as number).toString()




const kgToGm = (value: string | number) : number | string | undefined => {
    if(typeof value === "string"){
        const convertedValue = parseFloat(value)*1000;
        return `The converted value is : ${convertedValue}`;
    }

    if(typeof value === "number"){
        return value*1000;
    }
}


const result3 = kgToGm(1000) as number;
const result4 = kgToGm("1000") as string;




//* assertion in try catch block

type CustomError = {
    message: string
}


try{

}
catch(error){
   console.log((error as CustomError).message);
}