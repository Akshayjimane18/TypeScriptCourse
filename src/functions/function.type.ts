function intro(name:string , age:string):string{
    
    return `My name is ${name} and age is ${age}`;
}

//function expression
const inrto2 = function intro(name:string , age:string):string{
    
    return `My name is ${name} and age is ${age}`;
}

//arrow functions
const intro3 = (name:string, age:string):string=>{
    return `My name is ${name} and age is ${age}`;
}