// let slide = document.querySelector('.slide');
// let image = document.querySelectorAll('.image');
// let previous = document.querySelector('.pre')
// let next = document.querySelector('.next')
// let slidernumber = 1;
// let length = image.length;

// setInterval(()=>{
//     if(slidernumber<length){
//         slide.style.transform = `translateX(-${slidernumber*100}%)`;
//         slidernumber++;
//     }
//     else{
//         slide.style.transform = `translateX(0)`;
//         slidernumber = 1;
//     }
// },5000)

// next.addEventListener('click',()=>{
//     if(slidernumber<length){
//         slide.style.transform = `translateX(-${slidernumber*100}%)`;
//         slidernumber++;
//     }
//     else{
//         slide.style.transform = `translateX(0)`;
//         slidernumber = 1;
//     }
// })

// previous.addEventListener('click',()=>{
//     if(slidernumber>1){
//         slide.style.transform = `translateX(-${(slidernumber-2)*100}%)`;
//         slidernumber--;
//     }
//     else{
//         slide.style.transform = `translateX(-${(length-1)*100}%)`;
//         slidernumber = length;
//     }
// })


let humburger = document.querySelector('.humburger');
let menu = document.querySelector('.menu');
let check = 0;

menu.addEventListener("click",()=>{
    console.log('hello');
    if(check==0){
        humburger.style.display = "flex";
        check=1;
    }
    else{
        humburger.style.display = "none";
        check=0;
    }
    humburger.classList.toggle('active');
})
