//imperative programming

// const numbers =[4,2,5,3,2,7,1,4];
// let sum = 0;

// for(num of numbers){
//     //console.log(num)
//     sum += num
// }

// console.log(sum);

//loop
// const resultArray = [];

// for(num of numbers){
//     if(! resultArray.includes(num)){
//         resultArray.push(num)
//     }
// }

// console.log(resultArray);


// let sum = 0;
// for(let num of numbers){
//      let double = num *2;
//      sum += double;
// }

// console.log(sum);

// const total =numbers.reduce((pv,cv) => pv + cv ,0);
// console.log(total);

// const uniqueArr = new Set(numbers)
// console.log(uniqueArr);

// const sumOfDouble = numbers.map((el)=> el *2).reduce((pv,cv)=> pv + cv,0)

// console.log(sumOfDouble);

// const arraySum = (arr) => {
//     let sum = 0;
//     for(el of arr){
//         sum += el;
//     }
//     return sum;
// }

// console.log(arraySum(numbers));

// class Person {

//     constructor(name,gender,age){
//         this.name = name;
//         this.gender=gender;
//         this.age=age;
//     }

//     eat(){
//         return `${this.name} can eat`;
//     }

//     sleep(){
//         return`${this.name} can sleep`;
//     };

// }

// class Student extends Person {

//     constructor(name,gender,age,subject){
//         super(name,gender,age,);
//         this.subject=subject;
//     }
// }


// class Monitor extends Student {
//     constructor(name,gender,age,subject,room){
//         super(name,gender,age,subject);
//         this.room = room;

//     }
// }


// const mt1 = new Monitor("Mg","male",20,"wed dev","A")
// console.log(mt1.eat());
// console.log(mt1.sleep());
// console.log(mt1);

// const st1 = new Student("Mg","male",20,"wed dev")
// console.log(st1.eat());
// console.log(st1.sleep());
// console.log(st1);


// const p1 = new Person ("tun tun","male",15);
// console.log(p1);

class BankAccount {
    #balance = 0;
    transition = [];

    constructor(name){
        this.name = name;
    }

    deposit(amount){
        this.transition.push({
            amount,
            type : "deposit"
        })
        this.#balance += amount;
    }

    checkBalance(){
        return this.#balance;
    }

    withdraw(amount){
        if(amount <= this.#balance){
            this.transition.push({
                amount,
                type : "withdraw"
            })
            this.#balance -= amount;
        }else{
            console.log("enough money");
        }
    }

    //getter/setter

    // getBalance(){
    //     return this.#balance;
    // }

    // setBalance(amount){
    //  this.#balance = amount;
    // }
}

const mine = new BankAccount("t",100);
// mine.setBalance(100)
// console.log(mine.getBalance());



function factorial(n){
console.log(n);
    if(n===0)return 1;
return n* factorial(n-1);
}


factorial(5)

