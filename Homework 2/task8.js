var n = 4;
var stop = 0
for (var start = n - 1; stop < n; start += 2) {
    var result = "";
    for (var x = 0; x < n; x++) {
        result += start + "";
    }
    stop++;
    console.log(result);
}