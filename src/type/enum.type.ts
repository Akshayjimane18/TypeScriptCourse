enum ROLES {
    admin,
    author,
    editor
}


type Person = {
    name: string,
    email: string,
    password: string,
    role: ROLES
};

console.log(ROLES.author);

const person3: Person = {
    name: "Akki",
    email: "akki@123",
    password: "test123",
    role: ROLES.admin
}

console.log(person3);



