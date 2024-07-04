"use strict";
//spread operator
const bros1 = [
    "Shakib",
    "Sishir",
    "Tamim"
];
const bros2 = ["Nasir", "Taskin", 'Rahat'];
bros1.push(...bros2);
console.log(bros1);
//output
/*
bros1 = [
    "Shakib",
    "Sishir",
    "Tamim",
    "Nasir",
    "Taskin",
    'Rahat'
]*/
//spread operator for object
const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan"
};
const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid"
};
const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
//output
/*const mentorList = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid"
}*/
/*Rest operator*/
const greetFriends = (...friends) => {
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`)
    friends.forEach((friend) => console.log(`Hi ${friend}`));
};
greetFriends("Shakib", "Tamim", "Shishir", "Robi");
