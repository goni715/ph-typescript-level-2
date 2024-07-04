// * union types

// type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'; //string literal type
// type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper';

// type Developer = FrontendDeveloper | FullstackDeveloper;


// const newDeveloper : FrontendDeveloper = 'juniorDeveloper';


// type User = {
//     name: string,
//     email?:string,
//     gender: "male" | "female",
//     bloodGroup: "O+" | "A+" | "B+" | "AB+"
// }


// const user11: User = {
//     name: "Osman Goni",
//     email: "goni@gmail.com",
//     gender: "male",
//     bloodGroup: "B+"
// }





//* intersection type

type FrontendDeveloper = {
    skills: string[],
    designation1: 'Frontend Developer'
}

type BackendDeveloper = {
    skills: string[],
    designation2: 'Backend Developer'
}

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullstackDeveloper : FullstackDeveloper = {
    skills: ['HTML', 'CSS', 'EXPRESS'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
}