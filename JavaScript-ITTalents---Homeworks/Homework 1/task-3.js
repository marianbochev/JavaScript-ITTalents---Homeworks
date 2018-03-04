//input
console.log('Old values');
var variable1 = 6;
console.log('Value 1: ' + variable1);
var variable2 = 99;
console.log('Value 2: ' + variable2);

//logic
var temp = variable1;
variable1 = variable2;
variable2 = temp;

console.log('');
//output
console.log('New values');
console.log('Value 1: ' + variable1);
console.log('Value 2: ' + variable2);