type Dog = {
    name: string;
    barks: string;
    wags: string
};

type Cat = {
    name: string;
    purrs: boolean
}

//Union Type
type DogAndCatUnion = Dog | Cat;

let dog: DogAndCatUnion = {
    name: "Buddy",
    purrs: true
}

console.log(dog);

//Common properties should be there