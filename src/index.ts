type Dog = {
    name:string;
    barks:string;
    wags:string
};

type Cat = {
    name:string;
    purrs:boolean
}

type DogAndCatUnion = Dog | Cat;

let dog: DogAndCatUnion = {
    name: "Buddy",
    purrs:true
}

//Common properties should be there

/* Union with Primitives */

