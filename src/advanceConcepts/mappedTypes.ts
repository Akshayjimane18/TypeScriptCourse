let numbers3 = [1, 2, 3];

let stringNumbers = numbers3.map((each) => each.toString());

console.log(stringNumbers);

type Weekdays1 = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';

type Day1 = Weekdays1 | 'Sat' | 'Sun';

type NextDay = {

    [w in Weekdays]: any;
}

let nextDay:NextDay = {
    Mon: 'Tue',
    Tue: 'Wed',
    Wed: 'Thu',
    Thu: 'Fri',
    Fri: 'Sat',

}