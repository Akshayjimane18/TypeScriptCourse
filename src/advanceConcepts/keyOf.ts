type Events = {
    id: number;
    date: Date;
    type: 'indoor' | 'outdoor';
};

type UnionOfKeyEvents = keyof Events;

type Numeric = {
    [key:number]:string;
};

type NumericKeyOf = keyof Numeric;

type NumberAndString = {
    [key:string] : string;

}

type NumberAndStringKeyOff = keyof NumberAndString;
