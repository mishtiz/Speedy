let slide = document.querySelectorAll('.slide');
let first = document.querySelector('.first')
let second = document.querySelector('.second')
let third = document.querySelector('.third')
let fourth = document.querySelector('.forth')
let fifth = document.querySelector('.fifth')
let image = document.querySelectorAll('.image');
let previous = document.querySelector('.pre')
let next = document.querySelector('.next')
let slidernumber = 1;
let length = image.length;


console.log(image);

setInterval(()=>{
    if(slidernumber<length){
        slide[slidernumber].style.transform = `translateX(-${slidernumber*100}%)`;
        console.log(slidernumber);
        slidernumber++;
    }
    else
    {
        slide[slidernumber-1].style.transform = `translateX(0%)`;
        fourth.style.transform = `translateX(0%)`;
        third.style.transform = `translateX(0%)`;
        second.style.transform = `translateX(0%)`;
        first.style.transform = `translateX(0%)`;
        slidernumber = 1;
    }
},4000)




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


const show = document.querySelectorAll(".faq");

show.forEach((e)=>{

    e.addEventListener('click',()=>{
        if(!e.classList.contains("active")){
            e.classList.add("active");
        }else{
            e.classList.remove("active");
        }
    })
})




