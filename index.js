'use strict'
console.log("hello world")
let navItem = document.querySelectorAll(".listItem")
// console.log(navItem)

// navItem.addEventListner("click", function(e){
//     navItem.classList.add("yellowButton");
// } )


let container2RightBox = document.querySelector(".container2RightBox")
window.addEventListener("scroll" , function(){
    container2RightBox.
    console.log(container2RightBox)
})



const tl =gsap.timeline()

tl.from(".nav_gsap_comp" ,{
y:-10,
opacity:0,
stagger:0.1
})