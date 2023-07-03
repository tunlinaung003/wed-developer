// class Student {
    //name,major,age,gender
    //properties
    // name="mg mg";
    // major="swd";
    // age=20;
    // gender="male";


    // constructor(x) {
    //     console.log("I M CONSTRUCTOR",x);
    // }

    //methods

//     eat(){
//         return this.name + " can eat ";
//     }
//     learn(){
//         return this.name + " can learn " + this.major ;
//     }

// };

// let st = new Student("xXX");
// // 

// console.log(st.name);
// console.log(st.learn());
// console.log(st.eat());


// class Student {

//     static Uniform = "green and white";
//     static try(){
//         return " student must try"
//     }

//     //male = mr ,female = mis;

//     language = {
//         swd : ["html","CSS","js"],
//     }

//     prefixes = {
//         male : "mrs",
//         female : "mis",
//     }

//     constructor(inputName,inputAge,inputGender,inputMajor){
//         this.name = inputName;
//         this.age = inputAge;
//         this.gender= inputGender;
//         this.major=inputMajor;
//         this.genderPrefix=this.prefixes[this.gender];
//         this.fullName = this.genderPrefix + this .name;
//      }

//     learn(){
//         return `${this.name} can learn ${this.major} including ${this.language[this.major]}`;
//     }

//     introduction(){
//         return `my name is ${this.fullName} and ${this.age} year${this.age>1 && "s"}.now i am learning about ${this.major} including ${this.language[this.major]}`;
//     }

// }

// const St1 = new Student ("mg mg", 20 , "male", "swd");
// const St2 = new Student ("SU SU", 18 , "female", "swd");
// const St3 = new Student ("hla hla ", 19 , "female", "swd");

// console.log(St1);

// console.log(Student.Uniform);
// console.log(Student.try());
// console.log(St1.genderPrefix);
// console.log(St1.fullName);
// console.log(St1.learn());

// console.log(St1.introduction());

// console.log(St1.learn());
// console.log(St2.learn());
// console.log(St3.learn());


// class Monitor extends Student {

//     section = "weekday"

// }

// const Mt1 = new Monitor("kaung kaung",21,"male","swd") ;
// console.log(Mt1);

// class Test {
//     #X =5;

//     getX( ){
//         return this.#X;
//     }
//     setX(newX){
//         this.#X = newX;
//         return this.#X;
//     }
// };

// const test = new Test;
// console.log(test.getX());
// console.log(test.setX(10));


class Test {
    x=5;
}

const t = new Test;
console.log(t.x);
t.x=90;
console.log(t.x);