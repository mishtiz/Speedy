let slide = document.querySelectorAll('.slide');
let first = document.querySelector('.first')
let second = document.querySelector('.second')
let third = document.querySelector('.third')
let image = document.querySelectorAll('.image');
let previous = document.querySelector('.pre')
let next = document.querySelector('.next')
let slidernumber = 1;
let length = image.length;

slide.forEach((e)=>{
    console.log(e);
    
})


setInterval(()=>{
    if(slidernumber<length){
        slide[slidernumber].style.transform = `translateX(-${slidernumber*100}%)`;
        slidernumber++;
    }
    // else if(slidernumber>length)
    // {
    //     console.log(slidernumber);
    //     slide[slidernumber-1].style.transform = `translateX(0%)`;
    //     third.style.transform = `translateX(0%)`;
    //     second.style.transform = `translateX(0%)`;
    //     first.style.transform = `translateX(0%)`;
    //     slidernumber = 1;
    //     console.log(slidernumber);
    //     slidernumber=1;
    // }
},5000)

next.addEventListener('click',()=>{
    if(slidernumber<length){
        slide[slidernumber].style.transform = `translateX(-${slidernumber*100}%)`;
        slidernumber++;
    }
    else{
        slide[slidernumber].style.transform = `translateX(0)`;
        slidernumber = 1;
    }
})

previous.addEventListener('click',()=>{
    if(slidernumber>1){
        console.log(slidernumber);
        slide[slidernumber-1].style.transform = `translateX(-${(slidernumber-2)*100}%)`;
        slidernumber--;
    }
    else{
        slide[slidernumber].style.transform = `translateX(-${(length-1)*100}%)`;
        slidernumber = length;
    }
})


let humburger = document.querySelector('.humburger');
let menu = document.querySelector('.menu');
let check = 0;

menu.addEventListener("click",()=>{
    if(check==0){
        humburger.style.top = "0";
        check=1;
    }
    else{
        humburger.style.top = "-200%";
        check=0;
    }
    // humburger.classList.toggle('active');
})

