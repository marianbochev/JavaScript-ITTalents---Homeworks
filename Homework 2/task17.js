var side = 10;
var char = "o";
var outSide = "x"
for (index = 0; index < side; index++) {
    process.stdout.write(outSide + "");

}
console.log('');
for (var i = 0; i < side - 2; i++) {
    for (var j = 0; j < side; j++) {
        if (j == 0 || (j + 1) == side) {
            process.stdout.write(outSide + "");
        } else {
            process.stdout.write(char + "")
        }
        process.stdout.write("");

    }
    console.log('');
}
for (index = 0; index < side; index++) {
    process.stdout.write(outSide + "");
}