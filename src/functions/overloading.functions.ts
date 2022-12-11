type reservation = {
    departureDate: Date;
    returnDate?: Date;
    departingFrom: string;
    departingTo: string;
};

type reserve1 = {
    (
        departureDate: Date,
        returnDate: Date,
        departingFrom: string,
        departingTo: string,
    ): reservation | never;

    (
        departureDate: Date,
        departingFrom: string,
        departingTo: string,
    ): reservation | never;
}

const reserveElement: reserve1 = (
    departureDate:Date,
    returnDateorDeaprtingFrom:Date|string,
    departingFromorDestination:string,
    departingTo?:string
) => {

    if (returnDateorDeaprtingFrom instanceof Date && departingTo) {

        return {
            departureDate: departureDate,
            returnDate: returnDateorDeaprtingFrom,
            departingFrom: departingFromorDestination,
            departingTo: departingTo
        };
    } else if( typeof returnDateorDeaprtingFrom =="string"){

        return {
            departureDate: departureDate,
            departingFrom: returnDateorDeaprtingFrom,
            departingTo:departingFromorDestination

        };
    }

    throw new Error ("Please provide valid details for reservation");
};

console.log(reserveElement(new Date, new Date, "India", "Goa"));

console.log(reserveElement(new Date, "India", "Goa"));

