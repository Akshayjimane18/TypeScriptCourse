// type Filter = {
//     <T>(
//         array: T[], predicate: (item: T) => boolean
//     ): T[];
// }

// type Filter<T> = {
//         (
//         array: T[], predicate: (item: T) => boolean 
//     ): T[];
// }

type Filter = <T>
    (
        array: T[], predicate: (item: T) => boolean
    ) => T[];


const filter: Filter = (array: any[], predicate: Function) => {

    let result = [];

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (predicate(element)) {
            result.push(element);
        }
    }

    return result;
    console.log(result);
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function greaterThanSeven(item: number) {

    return item > 7;
}

console.log(filter(numbers, greaterThanSeven));


let animal = ['cat', 'dog', 'buffallo'];

function filtersCat(item: string) {
    return item == 'cat';
}

console.log(filter(animal, filtersCat));