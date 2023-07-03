// console.log(window);
// console.dir(document);
// console.log(console);

//outPut

// console.log("hello");
// document.write("min ga lar par ");
// window.alert("nay kg lr")


//input

// let ans =window.confirm("sar pp lr");
// // let ans =window.prompt("sar pp lr");

// // console.log(ans);
// document.write(ans ? "sar pp p" : "ma sar ya tay bu");


//age calc , in - birth year ,out - age
// let birthYear = window.prompt("what is you birth year ?");
// let date = new Date();
// let ageCalc = date.getFullYear()-birthYear;
// document.write(" U are " +ageCalc + " year old ")

//registration

// let yourName = window.prompt("Your name");
// let yourEmail = window.prompt("Your email");
// let Password = window.prompt(" password");
// let passwordConfirmation = window.prompt("Confirm password");

// if(Password === passwordConfirmation){
//     let result ={
//         yourName,
//         yourEmail,
//         yourPassword,
//         passwordConfirmation
//     }
//     console.log(result);
// }else{
//     alert("password do not match")
// }

//select element

// const  yourName = document.getElementById("yourName");
// const btn =document.getElementById("btn");

// //event listen
// btn.onclick = () =>{
//     console.log(yourName.value);
//     yourName.value = null;
// }