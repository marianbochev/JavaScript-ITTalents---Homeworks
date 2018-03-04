var timeOfDay = Math.round(Math.random() * 23 + 1);
var money = (Math.random() * 14 +1).toFixed(2);
var isSick = Math.random() >=0.5;
console.log(isSick);
console.log(money);
console.log(timeOfDay);
if(isSick && money >=10){
    console.log('Bolen sum.Shte si kypq lekarstva!');
}else if(isSick && money<10){
    console.log('Bolen sum.Shte si sedq vkushti i shte piq chai');
}else if(!isSick && money<10){
    console.log('Shte otida na kafe');
}else if(!isSick && money >10 && timeOfDay > 22){
    console.log('Shte otida na diskoteka');
}else{
    console.log('Shte si sedq vkushti');
}