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

tl.from(".container1_gsap_comp" , {
    opacity:0,
    x:20,
    stagger :0.1,
    
})


gsap.from(".container2_gsap_comp" , {
    opacity:0,
    x:20,
    stagger :0.1,
    delay:1,
    scrollTrigger:{
        target :"contaiener2",
        scroller:"body",
        // markers:true,
     
       
    }
})

gsap,from(".section3_gsap_comp" , {
    opacity:0,
    x:20,
    stagger :0.1,
    delay:1,
    scrollTrigger:{
        target :"contaiener3",
        scroller:"body",
        markers:true
     
       
    }
})