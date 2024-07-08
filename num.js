// let num1 = 12;
// let num2 = 17;
// let num3 = 235;
// let num4 = 26;
function e(num1, num2, num3, num4) {
    if (num1 > num2 && num1 > num3 && num1 > num4) {
        largest = num1;
    }
    else if (num2 > num3 && num2 > num4 ) {
        largest = num2;
    }
    else if (num3 > num4 ) {
        largest = num3;
    }
    else{
        largest = num4;
    }
    return largest;
}

console.log(e(102, 10, 56, 2));


