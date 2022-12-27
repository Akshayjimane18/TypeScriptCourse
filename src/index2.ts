interface User2 {

    name: string;
    email: string;
    phone: number;
    greeting: () => void;
}

class RegisteredUser implements User2 {
    constructor(
        public name: string,
        public email: string,
        public phone: number,
    ) {

    }

    public greeting() {

        console.log(`Hello ${this.name}`);

    }


}