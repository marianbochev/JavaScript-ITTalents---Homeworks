var stop = 9;
for (var row = 1; row <= 10; row++) {
    var result = "";
    var start = row;
    for (var col = 1; col <= 10; col++) {
        if (start == 10) {
            start = 0;
        }
        if (start === stop) {
            result += start;
            start = -1;
        } else {
            result += start;    
        }
        start++;
    }
    console.log(result);
}