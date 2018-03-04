var stop = 5;
var counter = 0;
var result = "";
for (var start = 3; counter < stop; start++) {
    if (start % 3 == 0) {
        result += start + ", ";
        counter++;
    }
}
console.log(result.substring(0, result.length - 2));


