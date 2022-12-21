class Person2 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let person4: Person2 = new Person2("Akki1", 29);
person4.name="Mike";
console.log(person4);