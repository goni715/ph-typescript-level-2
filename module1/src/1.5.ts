//Reference Type ---> object

const user: {
    company: "Programming Hero"; // type ---> literal type
    firstName: string,
    middleName?: string, //optional type
    readonly lastName: string
} = {
    company: "Programming Hero",
    firstName : "Osman",
    lastName : "Goni"
}

//user.lastName="Hales" //can n't assign