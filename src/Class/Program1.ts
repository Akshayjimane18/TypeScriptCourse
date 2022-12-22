class Person1 {

    name: string;
    email: string;

    //constructor

    constructor(name: string, email: string) {

        //this keyword 
        this.name = name;
        this.email = email;
    }

    greet() {
        return `Hello ${this.name}`;
    }

}
//instance creation
const person5 = new Person1("Akki", "Akki@gmail.com");
const person6 = new Person1("Akki1", "Akki1@gmail.com");

console.log(person5);
console.log(person5.greet());

console.log(person6);
console.log(person6.greet());
