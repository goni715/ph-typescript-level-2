//* instanceof guard --> type guard

class Animal3 {
    name: string;
    species: string;

    constructor(name: string, species: string){
        this.name = name;
        this.species = species;
    }

    makeSound(){
        console.log("I am making sound");
        
    }
}



class Dog extends Animal3{
    constructor(name: string, species: string){
        super(name, species)
    }

    makeBark(){
        console.log("I am barking");   
    }
}


class Cat extends Animal3{
    constructor(name: string, species: string){
        super(name, species)
    }

    makeMeaw(){
        console.log("I am meawing");
    }

}


const getAnimal = (animal :Animal3) => {
    if(animal instanceof Dog){
        animal.makeBark()
    }
    else if(animal instanceof Cat){
        animal.makeMeaw()
    }
    else{
        animal.makeSound();
    }
}

const dog3 = new Dog("Dog Bhai", "dog")
const cat3 = new Dog("Cat Bhai", "cat")

getAnimal(dog3);
//output = I am barking

getAnimal(cat3);
//output = I am meawing





//* smart way তে handle করার জন্য

const isDog = (animal : Animal3) : animal is Dog => {
    return animal instanceof Dog;
}

const isCat = (animal : Animal3) : animal is Cat => {
    return animal instanceof Cat;
}

const getAnimalSmart = (animal : Animal3) => {
    if(isDog(animal)){
        animal.makeBark()
    }
    else if(isCat(animal)){
        animal.makeMeaw()
    }
    else{
        animal.makeSound();
    }
}


getAnimalSmart(dog3);
//output = I am barking

getAnimalSmart(cat3);
//output = I am meawing
