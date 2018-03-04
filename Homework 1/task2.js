var firstNumber = 49;
var secondNumber = 99;

var sum = Math.abs(firstNumber + secondNumber);
var diff = Math.abs(firstNumber - secondNumber);
var multiply = Math.abs(firstNumber * secondNumber);
var devide = Math.abs(firstNumber / secondNumber);
var devidePercent = Math.abs(firstNumber % secondNumber);

var thirdNumber = 22.1;
var fourthNumber = 8.75;
var secondSum = Math.abs(thirdNumber + fourthNumber);
var secondDiff = Math.abs(thirdNumber - fourthNumber);
var secondMultiply = Math.abs(thirdNumber * fourthNumber);
var secondDevide = Math.abs(thirdNumber / fourthNumber);
var secondDevidePercent = Math.abs(thirdNumber % fourthNumber);

console.log("Integer numbers");
console.log(sum);
console.log(diff);
console.log(multiply);
console.log(devide);
console.log(devidePercent);

console.log();

console.log("Floating point numbers;");
console.log(secondSum);
console.log(secondDiff);
console.log(secondMultiply);
console.log(secondDevide);
console.log(secondDevidePercent );