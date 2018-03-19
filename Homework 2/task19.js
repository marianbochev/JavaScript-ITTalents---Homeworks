// ako predhodnoto chislo e nechetno = 0.5*chisloto
// ako predhodnoto chiislo e chetno = 3*chisloto+1
var number = 13;
var result = "";
while (number > 1) {
    var even = Math.round((3 * number) + 1);
    var odd = Math.round(0.5 * number);
    if ((number - 1) % 2 == 0) {
        result += even + " ";
        number = even;
    } else {
        result += odd + " ";
        number = odd;
    }
    process.stdout.write(number + " ");
}



