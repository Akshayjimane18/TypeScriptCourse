type Weekdays = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';

type Day = Weekdays | 'Sat' | 'Sun';

function nextDayForWeekDay(weekday: Weekdays): Day {

    switch (weekday) {

        case 'Mon':
            return 'Tue';
        case 'Tue':
            return 'Wed';
        case 'Wed':
            return 'Thu';
        case 'Thu':
            return 'Fri';
        case 'Fri':
            return 'Sat';
    }
}