// * nullable types
const searchName = (value:string | null) => {
    if(value){
        console.log('Searching...');
    }
    else{
        console.log('There is nothing to search');  
    }

}

searchName(null)





//* unknown type --- typeof

const getSpeedInMeterPerSecond = (value: unknown) =>{
    if(typeof value === "number"){
        const convertedSpeed = (value * 1000) /3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`);  
    }

    else if(typeof value === "string"){
        const [result, unit] = value.split(' ');
        const convertedSpeed = (parseFloat(result) * 1000) / 3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`);  
    }
    else{
        console.log('wrong input'); 
    }
}


getSpeedInMeterPerSecond(1000) // type=number
getSpeedInMeterPerSecond('1000 kmh^-1') // type=string
getSpeedInMeterPerSecond(null) // type=null





//* never type

const throwError = (msg: string):never => {
    throw new Error(msg);
}

throwError('Oops! Something went wrong!');