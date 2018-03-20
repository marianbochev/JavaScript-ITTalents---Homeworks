var number = 31;
var isPrime = true;

for (var start = 2; start < number; start++) {
    if (number % start == 0) {
        isPrime = false;
        break;
    }
}
console.log(number + " is prime - " + isPrime);