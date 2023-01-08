/* class User {

    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.points = 0;
    }

    login() {
        console.log(this.name, "Has logged in");
    }

    logout() {
        console.log(this.name, "Has logged out");
    }

    addPoint() {
        this.points++;
        console.log('Total points', this.points);
    }
}

const user = new User('John', 'john@gmail.com');

console.log(user); */

function User(name, email) {

    this.name = name;
    this.email = email;
    this.points = 0;

    this.login = () => {
        console.log(this.name, "Has logged in");

    }

    this.logout = () => {
        console.log(this.name, "Has logged out");

    }

    this.addPoint = () => {
        this.points++;
        console.log('Total points', this.points);

    }
}

const user = new User('john', 'john@gmail.com');

console.log(user);
