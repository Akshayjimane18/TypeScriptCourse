function multiplyByTwo(int: unknown) {

    if (typeof int == "number") {

        return int * 2;
    }
    return "Please Provide valid number";
}

console.log(multiplyByTwo(4));
console.log(multiplyByTwo("john"));