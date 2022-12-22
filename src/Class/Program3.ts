class Person2 {

    private testUserAge(age: number) {
        if (age > 200 || age < 0) {
            throw new Error("Invalid Age");
        }

        return age;
    }

    constructor(private _name: string, private _age: number) {
        this.testUserAge(_age);
    }

    public set name(name: string) {
        this._name = name;
    }

    public get name() {
        return this._name;
    }

    public set age(age: number,) {
        this.testUserAge(age);

        this._age = age;
    }

    public get age() {
        if (this._age == undefined) {
            throw new Error("The property has not set yet");
        }
        return this._age;
    }
}

const person7: Person2 = new Person2("Johny", 32);
person7.age = 70;
console.log(person7.age);
