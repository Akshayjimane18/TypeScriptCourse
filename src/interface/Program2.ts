enum AutoMobileTypes {
    car = "car",
    bus = "bus",
    van = "van",
    truck = "truck",
    bike = "bike",
}

enum AutomobileBrand {
    ferrari = "ferrari",
    honda = "honda",
    toyoto = "toyoto",
    bmw = "bmw",
}

enum AutomobileColors {

    red = "red",
    white = "white",
    blue = "blue",
    black = "black",
    silver = "silver",
}


interface Automobile1<Type, Brand, Colors> {
    type: Type;
    brand: Brand;
    colors: Colors[];
    description: string;
}

interface CommercialVehicle {

    capacity: string;
    licenseRenewelDate: Date;

}

class Truck implements Automobile1<string, AutomobileBrand, AutomobileColors>, CommercialVehicle {

    public type: string = "truck";

    constructor(public brand: AutomobileBrand, public colors: AutomobileColors[],
        public description: string, public capacity: string, public licenseRenewelDate: Date) {

    }

}

const truck: Truck = 
new Truck(AutomobileBrand.toyoto, 
    [AutomobileColors.black, AutomobileColors.red], "This is truck", "15 tonners", new Date());

console.log(truck);