var number = 3;
var isPrime = true;
if (number > 1) {
    for (var start = 2; start < number; start++) {
        var check = number % start;
        if (check == 0) {
            isPrime = false;
            break;
        }
    }
} else {
    isPrime = false;
}

if (isPrime) {
    console.log(number + " is prime.");
} else {
    console.log(number + " is not prime.");
}

