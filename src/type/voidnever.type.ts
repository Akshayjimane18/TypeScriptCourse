const addNumber = () => {
    console.log(2 + 4);
}
addNumber();

const throwingError = (): never => {
    throw new Error("There is error");
};

throwingError();

