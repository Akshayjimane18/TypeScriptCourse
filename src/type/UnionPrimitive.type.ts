

/* Union with Primitives */

type stringOrNumber = number | String;

function addNumberAsString(a: stringOrNumber, b: stringOrNumber) {

    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    } else {
        return a.toString() + b.toString();
    }

}

console.log(addNumberAsString(5,1));
console.log(addNumberAsString("String1",1));
//This will not work //
//console.log(addNumberAsString("String1",null));

