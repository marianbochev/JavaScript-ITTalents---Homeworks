var firstNumber = 25;
var secondNumber = 250;
var greater = (firstNumber > secondNumber) ? firstNumber : secondNumber;
var smaller = (firstNumber > secondNumber) ? secondNumber : firstNumber;
for (var index = greater; index >= smaller; index--) {
    if (index % 50 == 0) {
        console.log(index);
    }
}