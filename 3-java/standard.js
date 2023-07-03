// console.log("Standard build in object");

// const s = new String("min ga lar par byar");
// console.log(s);
// console.log(s[3]);
// console.log(s[5]);
// console.log(s.substring(0,10));
// console.log(s.search("min"));
// console.log(s.search("ko"));


// console.log(s.replace("lar","xxx"));
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());

// console.log(s.trim().length);

// const x = new String("ab");
// console.log(x.padEnd(5,"c"));

// console.log(s.split(""));
// console.log(s.split("a"));


// const obj = {
//     x:"x",
//     y:"Y",
//     a(){},
//     b(){}
// };

// console.log(obj);


// class Test {
//     x="x";
//     y="Y";
//     a(){};
//     b(){} 
// }

// const test = new Test 
// console.log(test);


// const n =new Number(2003.53333);
// console.log(n);
// console.log(typeof n);
// console.log(n.toString());
// console.log(n.toFixed(2));
// console.log(n.toPrecision(1));


// console.log(Number("234"));
// console.log(Number.parseInt("2222cccc"));
// console.log(Number.parseInt("2222.345lb"));

// console.log(Math.floor("123.5"));

// const obj = {
//     x:"x",
//     y:"Y",
//     a(){},
//     b(){}
// };

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// console.log(eval("6+2"));

// console.log(isNaN(Number("222llb")));
// console.log(isFinite(Number("1000/0")));

// const a = function(){
//     return "this is a function a"
// }

// const b = function(x,y){
//     return `${x} * ${y} is ${x*y}`;
// }

// const run = new Function("return 'this is run fun' ")
// console.log(a());
// 

// const run = new Function ('x','y', "return 'run fun'+ x*y ");
// console.log(run(2,3));
// console.log(typeof run);
// console.dir(a);
// console.log(a.name);

// console.log(a.apply());

// function getRandom(){
//     return Math.random();
// }
// console.log(getRandom());


// function getRandomArbitrary(min, max) {
//     return Math.random(3) * (max - min) + min;
//   }
// console.log(getRandomArbitrary(2,4));  


// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
//   }

//   console.log(getRandomInt(5,7));


//   function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
//   }


const fruits = ["apple","orange","mango","banana","lemon","line","kiwi"];
console.log(fruits);
// console.log(fruits.length);
// console.log(fruits.join(" "));
// console.log(fruits.unshift("aaa","bbb"));
// console.log(fruits.shift(""));
// console.log(fruits.push("jj"));
// console.log(fruits.pop("ddd"));

// console.log(fruits);

// for(fruit of fruits){
//         console.log(fruit);
// }

// function greeting(){
//         return " min ga lar par";
// }

// function into(callback){
//         console.log(callback());
//         console.log("my name is tla");
//         return "finish intro";
// } ;

// console.log(into(greeting));

// fruits.forEach(function(x){
// console.log(x);
// })

// fruits.forEach(function(el,index){
//         console.log(el,index);
// })

// `loop : ${fruits.forEach(function(el,index){
//         console.log(el,index);
// })}`;


//arrow fun

// const run = _ => "hello ";
// console.log(run());


// const run = function (name){
//         return "I m" + name;
// }
// const run = name => "i m "+name;
// console.log(run("tla"));


// const run = function (x,y){
//         return x+y ;

// }

// const run = (x,y) => x+y;
// console.log(run(4,5));

// const run = function(birthYear){
//         const d= new Date();
//         const currentYear = d.getFullYear();
//         const result = currentYear - birthYear;
//         return "my age is"+result;
// }
// const run = birthYear => {
//         const d = new Date ();
//         const currentYear = d.getFullYear();
//         const result = currentYear - birthYear;
//         return " my age is " +result
// }

// console.log(run(2003));

// console.log(Array.isArray());

// console.log(Array.isArray(fruits));

// console.log(fruits.includes());

// console.log(fruits.splice(2,3));
// console.log(fruits);

// const firstName = " tun ";
// const lastName = " aung";
// console.log(firstName.concat(lastName));

// const nums = [1,2,3,4,5];
// const chars = ["a","b","c"];
// // const arr = nums.concat(chars).concat(fruits);
// // console.log(arr)
// const arr =["aaa",...nums,...chars];
// console.log(arr);

// fruits.forEach(el => console.log(el));

// const result = fruits.map((el) =>{
// console.log(el);
// return el.toUpperCase() + "--";
// })
// console.log(result);
console.log(products);

// const r =products.map(el =>{
//         // console.log(el);
//         // el.price = el.price +5;
//         // el.title = "tla--"+el.title;
//         return {
//                 title : el.title,
//                 price : el.price
//         };
// })


// const r = products.filter((el) => {
//         // return el.id ===5 || el.id === 7 || el.id ===10;

// return el.rating.rate>4 && el.price <50;
// })

// const r = products.filter(el => el.price <50).map(el=>el.title)

// const r = products.filter(el => el.id ===5)
// const r = products.find(el => el.id === 5)

const nums = [1,2,3,4,5];

// console.log(nums.reduce((pv,cv) => {
//         console.log(pv,cv);
//       return  pv+cv
// },0)
// );

// const r = products.reduce((pv,cv) => pv+ cv.price,0)
// console.log(r);
