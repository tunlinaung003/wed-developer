import "./style.css";
import initTodo from "./todo";

initTodo();

const data = ["a", "b", "c"];
// const dataHandler = {
//   get(target, property, receiver) {
//     console.log("u access");

//     return Reflect.get(target, property, receiver);
//   },

//   set(target, property,value,  receiver) {
//     console.log("u change");

//     return Reflect.set(target, property,value, receiver);
//   },
// };

// const p = new Proxy(data, dataHandler);
// console.log(p[0]);
// p[0]="aaa "
// p.push("d")
// console.log(p);
