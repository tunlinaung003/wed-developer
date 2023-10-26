// console.log("Create Elements");


// const createLi = (text) => {
//     const li = document.createElement("li");
//     li.innerText = text;
//     return li;
// }

// //h1 element


// const h1 = document.createElement("h1");
// h1.innerText = "min ga lar par";



// const p = document.createElement("p");
// p.innerHTML = "i m <b>TUn lin aung</b>";

// const ul =document.createElement("ul");


// const fruits = ["apple","mango","banana","orange"];
// fruits.forEach(fruit => ul.append(createLi(fruit)))

// // const li1 =document.createElement("li");
// // li1.innerText = " apple";

// // ul.append(li1)

// // ul.append(createLi("apple"))


// document.body.append(h1);
// document.body.append(p);
// document.body.append(ul);


const createNewTd = (content) => {
    const td = document.createElement("td");
    td.innerText=content;
    return td;
};


const createNewTr = (id,productName,productPrice) => {
    const tr = document.createElement("tr");
    tr.append(createNewTd(id));
    tr.append(createNewTd(productName));
    tr.append(createNewTd(productPrice));    


    return tr;

}



const app =document.querySelector("#app");

const h1 =document.createElement("h1");
app.append(h1);

h1.innerText = "Product List";
h1.classList.add("text-primary","bg-primary-subtle","p-4");
h1.title="my products list";

const img =document.createElement("img");
img.src = "./img/download.jfif";
img.classList.add("m-2","rounded-4","shadow")
app.append(img);

const table =document.createElement("table");
table.classList.add("table");

const thead = document.createElement("thead");
table.append(thead);


const tr1 = document.createElement("tr");
thead.append(tr1);

const td1 = document.createElement("td");
td1.innerText = "#";
tr1.append(td1);


const td2 = document.createElement("td");
td2.innerText = "Product Name";
tr1.append(td2);


const td3 = document.createElement("td");
td3.innerText = "price";
tr1.append(td3);


const tbody = document.createElement("tbody");
table.append(tbody);

tbody.append(createNewTr(1,"apple",500));
tbody.append(createNewTr(2,"mango",400));



app.append(table);
