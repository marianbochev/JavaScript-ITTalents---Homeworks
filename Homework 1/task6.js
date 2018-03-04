var a1 = Math.round(Math.random() * 1000);
var a2 = Math.round(Math.random() * 1000);
var a3 = Math.round(Math.random() * 1000);

console.log("a1= " + a1);
console.log("a2= " + a2);
console.log("a3= " + a3);
var oldA1 = a1;
a1 = a2;
a2 = a3;
a3 = oldA1;
console.log();
console.log("a1= " + a1);
console.log("a2= " + a2);
console.log("a3= " + a3);