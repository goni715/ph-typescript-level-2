//* inheritance in oop

class Parent {
    name: string
    age: number;
    address: string;

    constructor(name:string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(numberOfHours : number){
        console.log(`${this.name} will sleep for ${numberOfHours}`); 
    }
}




class Student1 extends Parent {

    constructor(name:string, age: number, address: string){
        super(name, age, address)
    }

}


const student5 = new Student1("Osman Goni", 23, "Saidpur")
const student6 = new Student1("Marjan", 7, "Saidpur")
student5.getSleep(9); // Osman Goni will sleep for 5 years


class Teacher extends Parent {

    designation: string;

    constructor(name:string, age: number, address: string, designation : string){
        super(name, age, address);
        this.designation = designation;
       
    }

    takeClass(numberOfClass : number){
        console.log(`${this.name} will take ${numberOfClass} class`); 
    }

}


const teacher1 = new Teacher("Rejaul Islam", 45, "Lakshmanpur", "Professor");

teacher1.getSleep(5); // Rejaul Islam will sleep for 5 years
console.log(teacher1.designation); // output= Professor
teacher1.takeClass(2); // Rejaul Islam will 2 class
