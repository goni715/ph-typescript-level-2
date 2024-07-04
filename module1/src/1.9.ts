//Type Alias

type Student = {
    name: string,
    age:number,
    gender: string,
    contactNo?: string,
    address: string
}

const student1 : Student = {
   name: "Osman Goni",
   age: 23,
   gender: "male",
   contactNo: "01793837035",
   address: "Saidpur, Nilphamari"
}


const student2 : Student = {
    name: "Shakib Shah",
    age: 23,
    gender: "male",
    address: "Naogaon, Rajshahi"
 }

 const student3 : Student = {
    name: "Tutul Hossain",
    age: 23,
    gender: "male",
    address: "Pabna",
    contactNo: "01888888888"
 }



 //string type alias
type UserName = string;
type IsAdmin = boolean;

const userName: UserName = "goni715";
const isDoctor: IsAdmin = true;
 


//function type alias
type Add = (num1:number, num2: number) => number;

const added: Add = (num1, num2) => num1+num2


