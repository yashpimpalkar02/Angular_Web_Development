function DisplayFactors(No) {
    console.log("Factors of number are: ");
    for (var i = 1; i <= No / 2; i++) {
        if (No % i === 0) {
            console.log(i);
        }
    }
    console.log(No);
}
DisplayFactors(20);
