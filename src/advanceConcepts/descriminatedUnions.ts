let firstName1 = 'Mark';

console.log(typeof firstName1);

type Cat2 = {
    type: 'cat';
    purrs: boolean;
};

type Dog2 = {
    type: 'dog';
    barks: boolean;
};

type Animal = Cat2 | Dog2;

let cat: Animal = {
    type: 'cat',
    purrs: true,
};

let dog1: Animal = {
    type: 'dog',
    barks: true,
};

function animalReaction(animal: Animal) {

    switch (animal.type) {

        case 'cat':
            console.log('The animal is cat and purrs');
            break;
        case 'dog':
            console.log('The animal is dog and barks');
            break;
    }
}

animalReaction(dog1);
animalReaction(cat);