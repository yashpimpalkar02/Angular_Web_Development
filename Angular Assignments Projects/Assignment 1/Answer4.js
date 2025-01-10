function ChkPrime(No) {
    if (No <= 1)
        return false;
    for (var i = 2; i <= No / 2; i++) {
        if (No % i === 0) {
            return false;
        }
    }
    return true;
}
var number = 11;
if (ChkPrime(number)) {
    console.log(number + "is a prime number.");
}
else {
    console.log(number + "is not a prime number.");
}
