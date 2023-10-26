try{
    const x = 5;
    x=10;
}catch(error){
    console.dir(error.message);
    console.dir(error.stack);
}finally{
    console.log("run finish");
}

// fetch("https://fakestoreapi.com/products/1")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// fetch("https://fakestoreapi.com/products/2")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// fetch("https://fakestoreapi.com/products/3")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// fetch("https://fakestoreapi.com/products/4")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// fetch("https://fakestoreapi.com/products/5")
//   .then((res) => res.json())
//   .then((json) => console.log(json));


// const fetchAll = async () => {
//     const data = await fetch("https://fakestoreapi.com/products/5");
//     const res = await data.json() ;
//     console.log(res);

//     const data2 = await fetch("https://fakestoreapi.com/products/6");
//     const res2 = await data2.json() ;
//     console.log(res2);
// }


// fetchAll()


document.querySelector("#open").addEventListener("click",async()=> {

    const bt = await navigator.getBattery();
    console.log(bt.level);

})