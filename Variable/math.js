const eggPrice = 10;
const onionPrice = 20;

const total = eggPrice + onionPrice;
console.log(total);

const resutl = eggPrice - onionPrice;
console.log(resutl);

console.log(onionPrice - eggPrice);
// muliplication
console.log(onionPrice * eggPrice);
// divition
console.log(onionPrice / eggPrice);
// modules
console.log(11 % 7);
console.log(10 % 3);

// If the value of two variables is string and you want to add these two value by addition JavaScript will put the values together only.
const num1 = '10';
const nun2 = 20;
const total1 = num1 + nun2;
console.log(total)  //output is : 1020; because one is string and another is number.
 

const apple = '320';
const orange = '180';
const total2 = apple + orange; //outPut is 320180; because the values are string;
console.log(total2);


const peara = 100;
const bangi = 120;
const total3 = peara + bangi; // output is correct : 220; becaue they both are number;


// Suposs you earn 100 tk. You spend 40 tk . Now write a program to show how much you have remain
const earn = 100;
const spend = 40 
const remainingTk = earn - spend;
console.log( remainingTk);


// You have 10 pencile. Every time you will use two penciles at a time. How many time you can use penciles
const penciles = 10;
const useEveryTime = 2;
const ableToUse = penciles/useEveryTime;
console.log('I can use :', ableToUse, 'times my penciles if I take two at a time');


// You have 60tk. everytime you use 15tk. How many time you can use your many and how much will reamin after using 15tk everytime??
const iHave = 60;
const iUse = 15;
const iCanUse = iHave/iUse;
const iWillHave = iHave%iUse;
console.log("I can use:", iCanUse ,'times my money and I will have : ', iWillHave, "tk after using 15tk each time");



// I want to print Hello World in the console using towo variable ;
const hello = 'Hello';
const world = 'World';
console.log(hello + " " + world);


// You have bought 153kg rice and 261kg dal. Calculate how much in total you have bought;
const rice = 153;
const dal = 261;
const tolal4 = rice + dal;
console.log(tolal4);


// You have 500 tk. You can use 75tk each time. how many time you can use and how much tk you will have remaining?
const tk = 500;
const useEachTime = 75;
const maxTimeToUse = tk/useEachTime;
const afterUsing = tk%useEachTime;
console.log('I can use ', maxTimeToUse, "times and I will have", afterUsing , 'tk remaining');


// Divide 8 by 3 and put the result and remaining value to variables
const result = 8 / 3;
const remaningValue = 8 % 3;
console.log('Result is ', result, 'Remaining is ', remaningValue);


// You need 4kg chal every day. 12mon (480) kg chal you have given? what month wil it cover and (30 day = 1 month) and how many days you can survive
const chalHave = 480;
const chalNeed = 4;
const oneMonthNeed = 30 * 4;
const coverMonth = chalHave / oneMonthNeed;
const coverDay = chalHave / chalNeed;
 
console.log('Month ', coverMonth, 'day ', coverDay);















