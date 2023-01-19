function DecoratorOne(target: Function) {

    console.log('Decorator One');

}
interface MapLocation {
    lat: number;
    long: number;
}


function DecoratorTwo(target: Function) {

    console.log('Decorator Two');

}

//To apply generically
function AddLocation(lat: number, long: number) {

    return <T extends { new(...args: any[]): {} }>(classConstructor: T) => {
        return class extends classConstructor {
            public mapLocation: MapLocation;
            constructor(...args: any[]) {
                super(...args);
                this.mapLocation = { lat, long }
            }

        }
    }
}


@AddLocation(1.23, 1.87)
// @DecoratorOne
// @DecoratorTwo
class Person3 {

    constructor(
        public name: string,
        public age: number,
    ) {

    }
}

const person4: Person3 = new Person3('John', 32);

console.log(person4);