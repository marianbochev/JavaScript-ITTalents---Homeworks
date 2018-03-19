var n = 3;
var stop = 1;
var temp = n;

for (var row = 0; row < n; row++) {
    var space = "";
    for (var start = temp; start > 0; start--) {
        space += " ";
    }
    var result = space;
    for (var j = 0; j < stop; j++) {
        result += "*"
    }
    stop += 2;
    temp--;
    console.log(result);
}   