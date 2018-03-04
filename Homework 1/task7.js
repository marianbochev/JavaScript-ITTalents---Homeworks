var time = Math.round(Math.random() * 24);
var money = (Math.random() * 1000).toFixed(2);
var health = true;

console.log(time);
console.log(money);
console.log(health);

if (health && (money > 10)) {
    console.log("Nqma da izlizam - shte si kupq lekarstva.");
} else {
    if (health && (money < 10)) {
        console.log("Nqma da izlizam - shte si piq chaia.");
    }
}
if (!health && (money < 10)) {
    console.log("Shte otida na kafe");
} else {
    if (!health && (money > 100)) {
        console.log("Shte otida na diskoteka.");
    }
}











