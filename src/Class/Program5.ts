//Abstract

type holidays = {
    date: Date;
    reason: string;
}[];

abstract class Department {

    protected abstract holiday: holidays;
    protected constructor(protected name: string) {

    }

    public addHolidays(holidayArray: holidays) {

        if (Array.isArray(holidayArray)) {

            for (const holidayItem of holidayArray) {

                this.holiday.push(holidayItem);
            }
        }
    }

    public abstract printHoliday(): void;
}


class ITDepartment extends Department {

    protected holiday: holidays = [];

    constructor() {
        super("IT Department");
    }

    public printHoliday() {
        if (this.holiday.length == 0) {
            return console.log("There are no holidays");
        }
        console.log(`Here is the list of holidays for ${this.name}`);

        this.holiday.forEach((holiday, index) => {
            console.log(`${index + 1}.${holiday.reason},${holiday.date}`);
        });
    }

}

class AdminDepartment extends Department {

    protected holiday: holidays = [];

    constructor() {
        super("Account Department");
    }

    public printHoliday() {
        if (this.holiday.length == 0) {
            return console.log("There are no holidays");
        }
        console.log(`Here is the list of holidays for ${this.name}`);

        this.holiday.forEach((holiday, index) => {
            console.log(`${index + 1}.${holiday.reason},${holiday.date}`);
        });
    }

}

const itHolidays: holidays = [
    {
        date: new Date(2022, 12, 25),
        reason: "Christmas",
    },
    {
        date: new Date(2022, 11, 25),
        reason: "IT Day",
    },
];

const adminHolidays: holidays = [
    {
        date: new Date(2022, 12, 25),
        reason: "Christmas",
    },
    {
        date: new Date(2022, 11, 26),
        reason: "Admin Day",
    },
];

const itDepartment: ITDepartment = new ITDepartment();
const adminDepartment: AdminDepartment = new AdminDepartment();

itDepartment.addHolidays(itHolidays);
adminDepartment.addHolidays(adminHolidays);

itDepartment.printHoliday();
adminDepartment.printHoliday();






