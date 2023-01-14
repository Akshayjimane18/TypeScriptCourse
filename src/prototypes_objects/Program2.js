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

}

User.prototype.login = function () {
    console.log(this.name, 'Has Loged In');
}

User.prototype.logout = function () {
    console.log(this.name, 'Has Logoed Out');
}

User.prototype.addPoint = function () {

    this.points++;
    console.log('Total Points', this.points);
}


function adminUser(name, email, peopleReporting) {

    //prototype properties inheritance
    User.apply(this, [name, email]);

    this.peopleReporting = peopleReporting;

}

//prototype method inheritance
adminUser.prototype = Object.create(User.prototype);

adminUser.prototype.updatePeopleReporting = function (newNumber) {

    this.peopleReporting = newNumber;

}

const user = new User('john', 'john@gmail.com');

const admin = new adminUser("Mark", "mark@gmail.com", 10);

console.log(admin);
console.log(user);