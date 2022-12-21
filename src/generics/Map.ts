const map = <T,U>(array1: T[], func: (item: T) => U) => {

    if (array1.length == 0) {
        return array1;
    }
    let result = [];

    for (let i = 0; i < array1.length; i++) {
        result[i] = func(array1[i]);

    }

    return result;

};

let numbers1 = [4,5,6,7];

const converted = map(numbers1,(num)=>num.toString());

console.log(converted);
