const slides =new bootstrap.Carousel("#carouselExampleIndicators");
const modal = new bootstrap.Modal("#exampleModal",{
    backdrop :"static",
    keyboard : false
});

const show=document.querySelector("#show")

show.addEventListener("click",() => {
Swal.fire({
    title: 'san kyi tar',
    text: "hello hello",
    icon: 'error',
    showCancelButton: true,
    confirmButtonText: 'Cool',
    // cancelButtonColor: '#d33',
  })
});

new VenoBox({
    selector: '.venobox',
    overlayColor : "#ffffff99",
    share:true,
    titleattr:'title',
    
  });




// let isShow = false;

// console.log(slides);

// document.addEventListener("keyup",(e) => {
//     if(e.keyCode === 13){
//         slides.next();
//     }
// })

// window.addEventListener("scroll",e => {
//     console.log(window.scrollY);
//     if(window.scrollY > 1000 && isShow === false){
//         modal.show()
//         isShow = true;
//     }
// })

