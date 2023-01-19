// //Decorators will invoke once throughout the lifecycle of the application
// //It will invoke once class is defined not at the time when class is instantiated
// function FirstDecorator(name:string) {
//-----------------------------------------------------
//     /*This one is actuall decorator and above one is Decorator Factory*/
//     return function (constructor: Function) {
//         console.log(`${name} Invoked`);

//         console.log(constructor);
//     }
// }

//-----------------------------------------------------
// @FirstDecorator('First Decorator')

// enum Manufacturer {

//     boeing = 'boeing',
//     airbus = 'airbus',

// }
//-----------------------------------------------------
// interface AircraftInterface {
//     _aircraftModel: string;
//     prototype?: any;
//     origin?: string;
//     manufacturer: string;
//     type?: string;
//     pilotName: () => void;
//     airbusMethod?: () => void;
//     boeingMethod?: () => void;
// }
//-----------------------------------------------------
// function aircraftManufacturer(manufacturer: Manufacturer) {

//     return (target: Function) => {

//         if (manufacturer == Manufacturer.airbus) {
//             target.prototype.origin = "United States of America";
//             target.prototype.manufacturer = Manufacturer.airbus;
//             target.prototype.type = "Jet";
//             target.prototype.airbusMethod = () => {
//                 console.log('Function performed by airbus');
//             };
//         } else {
//             target.prototype.origin = "France";
//             target.prototype.manufacturer = Manufacturer.boeing;
//             target.prototype.type = "Helicopter";
//             target.prototype.boeingMethod = () => {
//                 console.log('Function performed by boeing');
//             };
//         }

//     }

// }

// @aircraftManufacturer(Manufacturer.airbus)

//-----------------------------------------------------
// function StaticMethodDecorator(constructor: Object, methodName: string, descriptor: PropertyDescriptor) {
//     //Method Decorator

//     console.log(constructor);
//     console.log(methodName);
//     console.log(descriptor);
//     descriptor.writable = true;
// }
//-----------------------------------------------------
// function parameterDecorator(classPrototype: Object,
//     methodName: string, index: number) {

//     console.log(classPrototype);
//     console.log(methodName);
//     console.log(index);


// }

//-----------------------------------------------------
function propertyDecorator(classPrototype: Object,
    propertyName: String) {

    console.log(classPrototype);

    console.log(propertyName);


};

function accessorDecorator(classPrototype: Object,
    accessorName: string,
    propertyDescriptor: PropertyDescriptor) {

        console.log(classPrototype);

        console.log(accessorName);

        console.log(propertyDescriptor);



};

class Airplane {

    @propertyDecorator
    public _aircraftModel: string;
    // constructor(
    //     public _aircraftModel: string,
    //     // private name: string,
    //     // public manufacturer: string

    // ) { }

    constructor(aircarftModel: string) {

        this._aircraftModel = aircarftModel;
    }


    //@StaticMethodDecorator
    public static seatCount(): void {
        console.log("150 Seats");
    }

    //@MethodDecorator
    public pilotName(name: string,
        //@parameterDecorator 
        lastName: string) {
        console.log(name);
    }

    @accessorDecorator
    public get aircraftModel() {
        return this._aircraftModel
    }


}

// @aircraftManufacturer(Manufacturer.boeing)
// class Helicopter implements AircraftInterface {

//     constructor(
//         public _aircraftModel: string,
//         private pilot: string,
//         public manufacturer: string
//     ) {}

//     public pilotName() {
//         console.log(this.pilot);
//     }

//     public get aircraftModel() {
//         return this._aircraftModel
//     }


// }

// const airplane: AircraftInterface = new Airplane("Aircraft A380", "John", "Karan");

// airplane.pilotName = () => console.log('Function Changed');

// const helicopter: AircraftInterface = new Helicopter("H380", "Mark", "Karan1");

// airplane.pilotName();
// console.log(airplane);
// // console.log(helicopter);

// airplane.airbusMethod ? airplane.airbusMethod() : console.log('Method does ' + 'not exist');