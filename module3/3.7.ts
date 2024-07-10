//*static in oop

/* normal class*/

class Counter {
    count: number = 0;

    increment(){
       return ( this.count = this.count + 1);
    }

    decrement(){
        return (this.count = this.count - 1);
    }
}


const instance1 = new Counter();
console.log(instance1.increment()); //output= 1  --> different memory

const instance2 = new Counter();
console.log(instance2.increment()); //output= 1  --> different memory






/*static example 01*/

class Counter2 {
    static count: number = 0;

    increment(){
       return ( Counter2.count = Counter2.count + 1);
    }

    decrement(){
        return (Counter2.count = Counter2.count - 1);
    }
}


const instance3 = new Counter2();
console.log(instance3.increment()); //output= 1  --> single source/memory

const instance4 = new Counter2();
console.log(instance2.increment()); //output= 2  --> single source/memory




/*static example-02*/

class Counter3 {
    static count: number = 0;

    static increment(){
       return ( Counter3.count = Counter3.count + 1);
    }

    decrement(){
       return ( Counter3.count = Counter3.count - 1);
    }
}



console.log(Counter3.increment()); //output= 1  --> single source/memory

console.log(Counter3.increment()); //output= 2  --> single source/memory

console.log(Counter3.increment()); //output= 3  --> single source/memory
