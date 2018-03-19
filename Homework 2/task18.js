var firstNumber = 2;
var secondNumber = 2;
for (var i = 1; i <= firstNumber; i++) {
    var result = "";
    for (var j = 1; j <= secondNumber; j++) {
        result+= i + "*" + j + "=" + (i*j) + "\n";
    }
    console.log(result);
}