export enum AgeUnit {
    years = "Years",
    months = "Months"
}


type Person1 = {
    name: string,
    age: number,
    ageUnit: AgeUnit,
    country: string
}

const personObj: Person1 = {
    name: "Akshay",
    age: 29,
    ageUnit: AgeUnit.years,
    country: "India"
}

function convertAgetoMonths(person: Person1): Person1 {
    person.age = person.age * 12;
    person.ageUnit = AgeUnit.months;

    return person;
}

//console.log(convertAgetoMonths(personObj));