let number: readonly number[] = [1,2,3];

type readOnlyPerson = readonly [string, string, number];

const person2: readOnlyPerson = ["String","String 1",2];

type a = Readonly<string[]>;
type c = Readonly<[string,string, number]>;
