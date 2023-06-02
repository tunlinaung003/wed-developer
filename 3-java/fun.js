// function run(){
//     console.log("one");
//     console.log("two");
//     console.log("three");
// }


// run();

function createTriangle(){
    console.log("*");
    console.log("* *");
    console.log("* * *");
    console.log("* * * *"); 
return "i'm triangle ";
}

// createTriangle();
// createTriangle();
// createTriangle();
// createTriangle();

// console.log(createTriangle());       

//if u know your age , i can find birth year
//2023 - yourage = birthYear

// function findBirthYear(age=0){

//     let birthYear = 2023 - age ;
//     return birthYear;

// }

// console.log(findBirthYear(20));
// console.log(findBirthYear(21));
// console.log(findBirthYear(22));
// console.log(findBirthYear(23));
// console.log(findBirthYear(24));
// console.log(findBirthYear());

// let results = [] ;
// let index = 0;

// function roomArea(width,breadth){
// let area =width * breadth;
// let result = {
//     width : width + "ft",
// breadth : breadth + "ft",
// area : area + "sqft",


// };
//store current
// result[index++] = result;

// return result;
// }
// console.log(roomArea(20,60));
// console.log(roomArea(30,60));

// console.table(results);

// let rates = {

//     USD:2100,
//     SGD:1574,
//     EUR:2251
// };

// function toMMk (amount , fromCurrency) {

// let currentRate = rates [fromCurrency];
// return amount * currentRate + "MMk";
// }

// console.log(toMMk(150,"USD"));
// console.log(toMMk(79,"SGD"));
// console.log(toMMk(30,"EUR"));



// function mmkToCurrency(amount,toCurrency){
//     let currentRate = rates [toCurrency];
//     return amount / currentRate + " " + toCurrency;
// }

// console.log(mmkToCurrency(145000,"USD"));
// console.log(mmkToCurrency(680000,"SGD"));
// console.log(mmkToCurrency(89000,"EUR"));


//450USD ? EUR 
//500SGD ? USD

// let rates = {
//     USD:1.08
// };

// function toEUR(amount, fromCurrency){
// let currentRate = rates[fromCurrency];
// return amount * currentRate + "EUR"; 
// }

// console.log(toEUR(450, "USD"));


// let rate ={
//     SGD:1.33
// };

// function toUSD(amount, fromCurrency){
//     let currentRate = rate[fromCurrency];
//     return amount * currentRate + "USD";

// }
// console.log(toUSD(500, "SGD"));

// let fruits ={
// apple:50,
// orange:65,
// mango:120,
// banana:20

// }
// let records =[];
// let index =0;
// let total =0;


// function buy(fruitName,Quantity){
// let fruitPrice = fruits[fruitName];
// let cost = fruitPrice * Quantity;
// let record ={
// name : fruitName,
// price : fruitPrice,
// Quantity,
// cost,

// };

//     records[index++]=record;
//     total += cost;
// return record;
// }

// function tex(amount,percentage=5){
//     return amount * (percentage/100);
// }

// console.log(buy("apple",5));
// console.log(buy("mango",5));
// console.log(buy("banana",5));

// console.table(records);
// let currentTax = tax(total);
// console.table(total);
// console.table({
//     total,
//     tax:currentTax,
//     subtotal: total + currentTax,

// });


// fun expression

// let run = function(){
//     return "i'm fun expression" 
// };

// console.log(run());

// (function(){

// console.log("i'm ilfe");
// return "i m iife"
// })();

// let x = function(){
//     return "x";
// }

// let y = function(){
//     return x() + "y";
// };
// console.log(y());

// variable scoping

// {
//     let x="x";
//     console.log(x);
// }


// let x;

// {
//     x="x"
// }
// console.log(x);
// let x;
// function run (){

//      x = "x";
//     console.log(x);
// }

// // run();
// console.log(x);

// console.log(x());

// function x(){
//     return "x";
// };



// console.log(y());

// let y = function (){
//     return "y";
// };








