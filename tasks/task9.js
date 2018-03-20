var heigh = 10;
var stop = 1;
var outside = "*";
var inside = "+"
var insert = heigh - 1;

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 1; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
var randomDeco = makeid();
if (Math.random() < 0.33) {
    inside = randomDeco;
} 

for (var start = 1; start <= heigh; start++) {
    var result = "";
    for (var x = 1; x <= insert; x++) {
        result += " ";
    }
    for (var j = 1; j <= stop; j++) {
        if (start == heigh) {
            result += outside;
        } else {
            if ((j == 1) || (j == stop)) { 
                result += outside;
            } else {
                result += inside;
            }
        }
    }

    console.log(result + "          " + "   " +result);
    stop += 2;
    insert--;
}

