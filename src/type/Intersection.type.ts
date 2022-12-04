type Cat1 = {
    name: string;
    purrs: boolean;
    color: string;
}

type Dog1 = {
    name: string;
    bark: boolean;
    color: string;
}

type HybridAnimal = Dog1 & Cat1;

const hybridAnimal: HybridAnimal = {
    name: "Max",
    color: "white",
    bark: true,
    purrs: false,
};

console.log(hybridAnimal);