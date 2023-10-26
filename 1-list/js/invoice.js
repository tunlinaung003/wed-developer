//selector

const products = [

    {
        id:1,
        name :"Apple",
        price : 1200
    },

    {
        id:2,
        name :"Orange",
        price : 1500
    },

    {
        id:3,
        name :"Lime",
        price : 50
    },

    {
        id:4,
        name :"Banana",
        price : 200
    },



]


let rowCount = 1;


const app = document.querySelector("#app");
const newRecord = document.querySelector(".newRecord");
const product = document.querySelector("#product");
const quantity = document.querySelector("#quantity");
const records = document.querySelector("#records");
const recordRows = document.querySelector("#record-rows");
const recordTotal = document.querySelector(".records-total");
const inventories = document.querySelector("#inventories");
const newItem = document.querySelector("#newItem");
const newItemName =document.querySelector("#newItemName");
const newItemPrice = document.querySelector("#newItemPrice");

// function 

const createItem = (name,price) => {
    const div = document.createElement("div");
    div.className = "item-list border border-2 p-2 mb-3 d-flex justify-content-between";
    div.innerHTML=`
    <p class="mb-0 item-name">${name}</p>
    <p class="item-price text-black-50 mb-0">${price}</p>`;
    return div;
} 


const createRecordRow = (ProductId,quantity) => {
    const currentProduct = products.find(el=> el.id==ProductId);
    let cost = currentProduct.price * quantity.valueAsNumber;

    const tableRow = document.createElement("tr");
    tableRow.classList.add("record-row");
    tableRow.setAttribute("product-id",ProductId)
    tableRow.innerHTML=`
    <td class="record-no"></td>
    <td class="text-start record-product">${currentProduct.name}</td>
    <td class="text-end record-price">${currentProduct.price}</td>
    <td class="text-end ">
    <span>
    <i class="record-quantity-control record-quantity-decrement bi bi-dash"></i>
    </span>
    <span class="record-quantity">${quantity.valueAsNumber}</span>
    <span>
    <i class="bi bi-plus record-quantity-control record-quantity-increment"></i>
    </span>
    </td>
    <td class="text-end position-relative"><span class="record-cost">${cost}</span>
    <button class="btn btn-sm btn-primary position-absolute record-row-del">
    <i class="bi bi-trash3"></i>
  </button></td>
    `
    // const formData = new FormData(newRecord);
    // console.log(FormData.get("product"));

    //clear form


    tableRow.querySelector(".record-row-del").addEventListener("click",() => {
       if(confirm("are u sure to del")){
        tableRow.classList.add("animate__animated" ,"animate__fadeOut")

        tableRow.addEventListener("animationend",()=>{
            tableRow.remove();
            calculateTotal();
        })
       
       }
    })

    return tableRow;
};


const calculateTotal =() =>{
    // let total = 0;
    // const allRecords = document.querySelectorAll(".record-cost");
    // console.log([...allRecords].reduce((pv,cv)=> pv+ parseFloat(cv.innerText),0));
    // allRecords.forEach(el=>{
    //     total += parseFloat(el.innerText);
    // })

    // recordTotal.innerText=total;
    recordTotal.innerText= [...document.querySelectorAll(".record-cost")].reduce((pv,cv)=> pv+ parseFloat(cv.innerText),0)
}



//process


//generate product
products.forEach(el => {
    // const newOption = document.createElement("option");
    // newOption.innerText = el.name;
    // newOption.value=el.id;
    product.append(new Option(el.name,el.id));
    inventories.append(createItem(el.name,el.price))
});

//add record

newRecord.addEventListener("submit", (e) => {
    e.preventDefault()

    const isExistedRow = document.querySelector(`[product-id='${product.value}']`)

    if(isExistedRow){

        let currentQuantity = isExistedRow.querySelector(".record-quantity");
        let currentPrice = isExistedRow.querySelector(".record-price");
        let currentCost = isExistedRow.querySelector(".record-cost");

        let newQuantity = parseFloat(currentQuantity.innerText) + quantity.valueAsNumber;

        let newCost = currentPrice.innerText * new quantity;

        currentQuantity.innerText = newQuantity;
        currentCost.innerText =newCost;

    }else{
        recordRows.append(createRecordRow(product.value,quantity));

    }

    newRecord.reset()

    //calculate total cost
    calculateTotal();

});


newItem.addEventListener("submit",(e)=>{
e.preventDefault();

//product array update
let newItemId = products[product.length -1].id+1;
const newItemObj = {
    id : newItemId,
    name : newItemName.value,
    price:newItemPrice.valueAsNumber
}

products.push(newItemObj);

//foem reset
newItem.reset();



//ui update
product.append(new Option(newItemObj.name,newItemObj.id));
inventories.append(createItem(newItemObj.name,newItemObj.price))

})





