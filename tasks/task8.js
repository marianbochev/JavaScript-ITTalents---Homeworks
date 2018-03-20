var heigh = 10;
var stop = 1;
var char = "*";
var insert = heigh - 1;
for (var start = 1; start <= heigh; start++) {
    var result = "";
    for (var x = 1; x <= insert; x++) {
        result += " ";
    }
    for (var j = 1; j <= stop; j++) {
        result += char;
    }
    console.log(result);
    stop += 2;
    insert--;
}
