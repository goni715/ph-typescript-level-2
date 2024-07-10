//* polymorphism ---> same function এর বহুরুপ দেখা

class Person2 {
    getSleep(){
        console.log(`I am slipping for 8 hours per day`);  
    }
}


class Student2 extends Person2 {
    getSleep(){
        console.log(`I am slipping for 7 hours per day`);  
    }
}



class Developer2 extends Person2 {
    getSleep(){
        console.log(`I am slipping for 6 hours per day`);  
    }
}


const person1 = new Person2();
const person2 = new Student2();
const person3 = new Developer2();


const getSleepingHours = (param: Person2)=>{
    param.getSleep();
}

getSleepingHours(person1) //output = I am slipping for 8 hours per day
getSleepingHours(person2) //output = I am slipping for 7 hours per day
getSleepingHours(person3)  //output = I am slipping for 6 hours per day






/* polymorphism- example-02*/

class Shape {
    getArea(): number {
        return 0
    }
}


class Circle extends Shape {
    radius : number;

    constructor(radius:number){
        super(); //super must be called for extends Shape class
        this.radius=radius
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}



class Rectangle extends Shape {
    height : number;
    width: number;

    constructor(height: number, width: number){
        super(); //super must be called for extends Shape class
        this.height= height;
        this.width = width;
    }

    getArea(): number {
        return this.height * this.height;
    }
}


const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Rectangle(10, 20);


const getShapeArea = (param: Shape) => {
    console.log(param.getArea());   
}


getShapeArea(shape1) //output= 0
getShapeArea(shape2) //output= 314.1593
getShapeArea(shape3) //output= 200