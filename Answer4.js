function ChkArmstrong(No) {
    var temp = No;
    var sum = 0;
    while (temp > 0) {
        var digit = temp % 10;
        sum += (digit * digit * digit);
        temp = temp / 10 | 0;
    }
    return sum === No;
}
var number = 153;
if (ChkArmstrong(number)) {
    console.log("".concat(number, " is an Armstrong number"));
}
else {
    console.log("".concat(number, " is not an Armstrong number"));
}
