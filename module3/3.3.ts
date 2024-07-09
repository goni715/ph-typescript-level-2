//* type guard / type narrowing



/* typeof ---> type guard */

type Alphaneumeric = string | number;

const add01 = (param1: Alphaneumeric, param2: Alphaneumeric) : Alphaneumeric => {

    if(typeof param1 === "number" && typeof param2 === "number"){
        return param1 + param2;
    }
    else{
        return param1.toString() + param2.toString();
    }

}

const result7 = add01(2,4) 
console.log(result7);
//output = 6

const result8 = add01("2",4)
console.log(result8);
//output = 24






//* in guard --> type guard

type NormalUser = {
    name: string;
}


type AdminUser = {
    name: string;
    role: string;
}


const getUser = (user: NormalUser | AdminUser) => {

    if('role' in user){
        console.log(`My name is ${user.name} and my role is ${user.role}`);   
    }
    else{
        console.log(`My name is ${user.name}`);   
    }

}


const normalUser : NormalUser = {
    name: "Mr. Normal User Bhai"
}


const adminUser : AdminUser = {
    name: "Mr. Admin Bhai",
    role: "admin"
}


const result9 = getUser(normalUser);
//output= My name is Mr. Normal User Bhai


const result09 = getUser(adminUser);
//output= My name is Mr. Admin Bhai and my role is admin.;g
