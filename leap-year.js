// // 3 number input largeNumber who output

// let num1 = 100;
// let num2 = 40;
// let num3 = 30;
// let largest;
// if (num1 > num2 && num1 > num3) {
//     largest = num1;
// } else if (num2 > num3) {
//     largest = num2;
// } else {
//     largest = num3;
// }

// console.log('large number', largest);



// // // large number Array
// // const arrayNumber = [22, 23, 34, 15, 34, 233, 67, 56];
// // // console.log(arrayNumber[0]);

// // let largeNumber = arrayNumber[0];

// // for (let i = 0; i < arrayNumber.length; i++) {

// //     if (arrayNumber[i] > largeNumber) {

// //         largeNumber = arrayNumber[i];
// //     }

// // }
// // console.log('Array large number',largeNumber);



// const array = [12, 2, 32, 14, 22, 31, 11, 23, 21, 33];

// let largeNumber = array[0];

// for (let i = 0; i < array.length; i ++) {

//     if (array[i]> largeNumber) {

//         largeNumber = array[i];
//     }

// }
// console.log(largeNumber);

// function leapYear(year) {
//     return (year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0);
// }

// function cheakLeapYears(yearsArray) {
//     const leapYears = [];
//     for (const year of yearsArray) {
//         if (leapYear(year)) {
//             leapYears.push(year);
//         }
//     }
//     return leapYears;
// }

// const inputYears = [2023, 2024, 2025, 2028, 2030];
// const leapYearsArray = cheakLeapYears(inputYears);

// console.log("leap years:", leapYearsArray);



function leapYears(year) {
    let leapYear = [];
    for (let index = 0; index < year.length; index++) {
        const element = year[index];
        if (element % 4 === 0) {
            leapYear.push(element)
        }
    }
return leapYear;
}
const year = [2023, 2024, 2025, 1996, 2028, 1999, 2004, 2016];
console.log(leapYears(year));