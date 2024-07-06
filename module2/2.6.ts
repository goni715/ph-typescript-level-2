//* constraints with genericj
const addCourseToStudent0 = <T extends {id:number; name:string, email:string}>(student : T) => {
    const course = 'Next Level Web Developement';

    return {
        ...student,
        course
    }
}



const student03 = addCourseToStudent0({id:234, name: "Osman Goni", email: "goni@gmail.com", devType: 'NLWD'});

const student04 = addCourseToStudent0({id:345, name: "Evan Ahmed", email: "evan@gmail.com", hasWatch: 'Apple Watch'});

