var sum = 22;
for (number = 100; number <= 999; number++) {
    var sNumber = number.toString();
    var firstDigit = parseInt(sNumber[0]);
    var secondDigit = parseInt(sNumber[1]);
    var lastDigit = parseInt(sNumber[2]);
    if (firstDigit + secondDigit + lastDigit == sum) {
        console.log(number);
    }
}