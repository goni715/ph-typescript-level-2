//* ternary operator


const age = 15;

if(age >= 18){
    console.log('adult');  
}
else{
    console.log('not adult'); 
}


const isAdult = age >= 18 ? "adult" : "not adult";
console.log(isAdult);




//nullish coalescing operator
// null / undefined ---> decision making

const isAuthenticated = null;
// const isAuthenticated = undefined;

const result1 = isAuthenticated ?? "Guest";
console.log(result1);


type User2 = {
    name: string,
    address: {
        city: string,
        road: string,
        presentAddress: string,
        permanentAddress?:string
    }
}



const user12: User2 = {
    name: "Osman Goni",
    address: {
        city: "Rangpur",
        road: "Main Road",
        presentAddress: "Dhaka"
    }
}


//nullish coalescing operator for optional chaining
const permanentAddress = user12?.address?.permanentAddress ?? 'No Permanent Address';
console.log(permanentAddress);
// output = No Permanent Address


