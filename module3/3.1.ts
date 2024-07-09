//* OOP  - class

class Animal {
    public name: string;
    species: string; //by default public
    sound: string;

    constructor(name: string, species: string, sound: string){
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);
        
    }

}


const dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew");
const cat = new Animal("Persian Bhai", "cat", "Meaw Meaw");
console.log(dog.species); //output= dog




//* class - using Parameter Properties

class Animal2 {
   
    constructor(public name: string, public species: string, public sound: string) {}

    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);
        
    }

}


const dog2 = new Animal2("German Shepard Bhai", "dog", "Ghew Ghew");
const cat2 = new Animal2("Persian Bhai", "cat", "Meaw Meaw");
dog2.makeSound();
//output The German Shepard Bhai says Ghew ghew


