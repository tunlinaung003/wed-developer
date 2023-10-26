// console.log(window);



// console.log(window.scrollY);

// window.addEventListener("scroll",()=> {
//   console.log(window.scrollY);
// });

// window.addEventListener("resize",()=>{
//   console.log(window.innerWidth,innerHeight);
// console.log(window.outerWidth,window.innerHeight);
// })


// window.addEventListener("load",()=>{
//   console.log("one");
// })

// console.log("two");

// console.log("three");


// window.addEventListener("online",()=>{
//   console.log("online");
// })

// window.addEventListener("offline",()=>{
//   console.log("offline");
// })

// window.setTimeout(() => {
//   console.log("setTimeOut");
// },5000);


// window.setInterval(()=> {
//   console.log("setInterval");
// },1000)

// const clock = document.querySelector(".clock");
// const stopBtn = document.querySelector("#stopBtn");


// const currentTime = () => {
//   const date = new Date();
//   const result = date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds();
//   return result;
// };

// const runClock= setInterval(()=>{
//   clock.innerText =currentTime();
// },1000);

// stopBtn.addEventListener("click",()=>{
//   clearInterval(runClock);
// })


// const run = setTimeout(()=>{
//   console.log("time out");
// },5000)

// const run = setInterval(()=>{
//   console.log("time out");
// },5000)

// console.log(run);

// const openMdn = document.querySelector("#openMdn");
// openMdn.addEventListener("click",() => {
//   window.open("https://www.mozilla.org/", "mozillaTab");

//   const windowFeatures = "left=100,top=100,width=320,height=320";
// const handle = window.open(
//   "https://www.mozilla.org/",
//   "mozillaWindow",
//   windowFeatures,
// );


// })

const closeBtn = document.querySelector("#closeBtn");
const end = document.querySelector("#end");
const h1 = document.querySelector("h1")

closeBtn.addEventListener("click",()=> {

  // window.resizeTo(window.screen.availWidth / 2, window.screen.availHeight / 2);
  // // window.close();

  // window.scrollTo(0,end.getBoundingClientRect().y - 300);
  // setTimeout(() => {
  //   window.scrollTo(0,end.getBoundingClientRect().y + 300);

  // },2000)
  // setTimeout(()=>{
  //   location.href ="https://mms-it.com"
  // },5000)
  location.reload() 

})

