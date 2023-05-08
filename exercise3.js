/*
Statement:
    Given two dates. Create a function that returns the difference in days.

    Example:
            INPUT                                                    OUTPUT
    differenceInDays('Dec 1, 2023', 'Dec 24, 2023');                   23
*/

const differenceInDays = (date_1, date_2) => {

    //Given the correct format to the date
    date_1 = date_1 instanceof Date ? date_1 : new Date(date_1);
    date_2 = date_2 instanceof Date ? date_2 : new Date(date_2);

    //Get the difference in milliseconds between both dates
    const millisecondsDifference = Math.abs(date_1.getTime() - date_2.getTime());

    //Divide the difference in milliseconds by the number of milliseconds in a day and round to get the days
    const days = Math.floor(millisecondsDifference / (1000 * 60 * 60 * 24));

    //In case a NaN appears
    if(isNaN(days)) 'wrong date format, please use the american format';

    return `The difference are ${days} days`;
}

console.log(differenceInDays('Dec 1, 2023', 'Dec 24, 2023'));
console.log(differenceInDays('2023-1-12', '2023-1-14'));