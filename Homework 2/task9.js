var firstNumber = 1;
var secondNumber = 107;
var result = "";
var sum = 0;
for (var start = firstNumber; start <= secondNumber; start++) {
    if (sum < 200) {
        if (start % 3 !== 0) {
            result += (start * start) + ", ";
            sum += start * start;
        } else {
            result += 'skip ' + start + ", "
        }
    } else {
        break;
    }
}
console.log(result.substring(0, result.length - 2));
