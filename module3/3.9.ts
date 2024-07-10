//* abstraction

//* two way: 1. interface 2. abstract class



//* abstraction with interface 

//idea
interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}


// real-implementation
class Car1 implements Vehicle1{
    startEngine(): void {
        console.log(`I am starting the car engine`);   
    }

    stopEngine(): void {
        console.log(`I am stopping the car engine`);   
    }

    move(): void {
        console.log('I am moving the car');   
    }
}


const toyotaCar = new Car1();
toyotaCar.startEngine(); //output = I am starting the car engine




//* abstraction by using abstract class

//idea
abstract class Car2{
    abstract startEngine(): void;

   abstract stopEngine(): void;

   abstract move(): void;

   test(){
    console.log('I am just testing');
   }
}



// real-implementation
class ToyotaCar extends Car2{
    startEngine(): void {
        console.log(`I am starting the car engine`);   
    }

    stopEngine(): void {
        console.log(`I am stopping the car engine`);   
    }

    move(): void {
        console.log('I am moving the car');   
    }
}
    

const toyotaCar2 = new ToyotaCar();
toyotaCar2.startEngine() //output = I am starting the car engine
toyotaCar2.test() //output = I am just testing