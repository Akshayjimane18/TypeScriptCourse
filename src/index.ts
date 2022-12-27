abstract class Person4 {

    public abstract name: string;
    public abstract email: string;
    public abstract phone: number;

    public greeting() {

        console.log(`Hello ${this.name}`);

    }

    public static nameClass(){
    
        return "Class name is Person";
    }

}

class RegisteredPerson extends Person4 {


    constructor(
        public name: string,
        public email: string,
        public phone: number
    ) {
        super();

    }
}

const persons9: RegisteredPerson =
    new RegisteredPerson("Akki",
        "akki@gmail.com", 12344);

        persons9.greeting();

        console.log(Person4.nameClass());