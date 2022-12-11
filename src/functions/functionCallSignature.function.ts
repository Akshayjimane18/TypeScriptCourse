import { AgeUnit } from "./customeandReturn.functions";

type greetingFunction = (greeting: string) => string;
type Person2 = {
    name: string;
    age: number;
    ageUnit: AgeUnit;
    country: string;
    greet: greetingFunction;
}

const personObj1: Person2 = {
    name: "Akshay",
    age: 29,
    ageUnit: AgeUnit.years,
    country: "India",
    greet: (greeting => { return `${greeting} ${personObj1.name}` })
}

console.log(personObj1.greet("Morning !!!"));