interface Animal1 {
    live: () => void;
}

interface Dog3 extends Animal1 {
    woof:() => void;
}

type Example = Dog extends Animal1? string:number;

//Syntax = SomeType extends OtherType?TrueType:FalseType;

type isString<T> = T extends string ? true:false;

type A = isString<string>;
type B = isString<number>;
