//object destructuring

const person = {
    id:345,
    name: {
        firstName: "Mezbah",
        middleName: "Abedin",
        lastName: "Persian"
    },
    contactNo: "01793837035",
    address: "Saidpur, Nilphamari"
}


const {contactNo, name: {middleName, lastName:lName}} = person;

console.log(contactNo);


//array destructuring

const myFriends = ["Tamim", "Nasir", "Shakib", "Shishir", "Tutul", "Abir"];
const [,,bestFriend, ...rest] = myFriends;

//rest = ["Shishir", "Tutul", "Abir"];
