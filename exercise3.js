/*
Given two dates. Create a function that returns the difference in days.

Example:
        INPUT                                                    OUTPUT
differenceInDays('Dec 1, 2023', 'Dec 24, 2023');                   23
*/

const differenceInDays = (date_1, date_2) => {

    //
    date_1 = date_1 instanceof Date ? date_1 : new Date(date_1);
    date_2 = date_2 instanceof Date ? date_2 : new Date(date_2);

    //
    const millisecondsDifference = Math.abs(date_1.getTime() - date_2.getTime());

    //
    const days = Math.floor(millisecondsDifference / (1000 * 60 * 60 * 24));

    if(isNaN(days)) 'wrong date format, please use the american format';

    return `The difference are ${days} days`;
}

console.log(differenceInDays('Dec 1, 2023', 'Dec 24, 2023'));
console.log(differenceInDays('2023-1-12', '2023-1-14'));