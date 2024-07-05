//* function with generics

const createArray = (param: string) : string[] => {
    return [param]
}


const createArrayWithGeneric = <T>(param: T) : T[] => {
    return [param]
}



const result10 = createArray("Bangladesh"); //string[]
const resultGeneric = createArrayWithGeneric<string>('Bangladesh');

type Person = {
    id: number;
    name: string;
}

const resultGenericObject = createArrayWithGeneric<Person>({ id:34, name: "Osman Goni"})



/*--------------------------------------------------------**-----------------------------------------------------*/

const createArrayWithTupleGeneric = <T, Q>(param1: T, param2: Q) : [T, Q] => {
    return [param1, param2]
}


const result101 = createArrayWithTupleGeneric<string, number>("Bangladesh", 222);

const result102 = createArrayWithTupleGeneric<string, {name: string}>("Bangladesh", {name: 'Asia'});




/*------------------------------------------------------**--Example**-----------------------------------------------------*/

const addCourseToStudent = <T>(student : T) => {
    const course = 'Next Level Web Developement';

    return {
        ...student,
        course
    }
}


type Student0 = {
    name: string;
    email: string;
    devType?: string;
    hasWatch?: string;
}


const student01 = addCourseToStudent<Student0>({name: "Osman Goni", email: "goni@gmail.com", devType: 'NLWD'});

const student02 = addCourseToStudent<Student0>({name: "Evan Ahmed", email: "evan@gmail.com", hasWatch: 'Apple Watch'});



