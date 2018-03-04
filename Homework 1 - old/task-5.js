//input
var userInput1 = Math.round(Math.random() * 99) + 1;
var userInput2 = Math.round(Math.random() * 99) + 1;
var userInput3 = Math.round(Math.random() * 99) + 1;

//logic & output
if (userInput1 > userInput2 && userInput1 > userInput3) {
    if (userInput1 > userInput3) {
        console.log(userInput1);
        console.log(userInput2);
        console.log(userInput3);
    } else {
        console.log(userInput1);
        console.log(userInput3);
        console.log(userInput2);
    }
} else if (userInput2 > userInput1 && userInput2 > userInput3) {
    if (userInput1 > userInput3) {
        console.log(userInput2);
        console.log(userInput1);
        console.log(userInput3);
    } else {
        console.log(userInput2);
        console.log(userInput3);
        console.log(userInput1);
    }
} else if (userInput3 > userInput1 && userInput3 > userInput2) {
    if (userInput2 > userInput1) {
        console.log(userInput3);
        console.log(userInput2);
        console.log(userInput1);
    } else {
        console.log(userInput3);
        console.log(userInput1);
        console.log(userInput2);
    }
}