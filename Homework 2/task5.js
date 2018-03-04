var firstNumber = 5;
var secondNumber = 10;
var smaller = (firstNumber > secondNumber) ? secondNumber : firstNumber;
var greater = (firstNumber > secondNumber) ? firstNumber : secondNumber;
for (var start = smaller; start <= greater; start++) {
    console.log(start);
}
