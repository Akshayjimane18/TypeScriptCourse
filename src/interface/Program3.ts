type User3 = {
    name: string;
}

type AdminUser2 = {
    isAdmin: boolean;
}

//Intersection
const userAndAdmin: User3 & AdminUser2 = {

    name: "John",
    isAdmin: true,
}

//Union
const userOrAdmin: User3 | AdminUser2 = {

    name: "John",
}

//Tuples

type responseTuple = [string, number];


//Duplicate only happens in interfaces not in type
interface Name {
    name: string;
}

interface LastName {
    lastName: string;
}

interface Person44 extends Name, LastName {

}

const person11: Person44 = {

    name: "Akki",
    lastName: "Mane",
}


