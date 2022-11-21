let bigInt1 = BigInt(342324);

let bigInt2 = 123344;

console.log(bigInt1);

const safeInt = Number.MAX_SAFE_INTEGER;

console.log(safeInt);

const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;

console.log(safeIntPlusOne);
console.log(safeIntPlusTwo);

console.log(safeIntPlusOne == safeIntPlusTwo);

let a: bigint = BigInt(value);

let b: bigint = 233434n;

let c: bigint = a - b;

console.log(c);
//Big int cannot accepts decimals and Math functions
//let e:bigint = 34453.34n;

//let f = Math.log(a); 

