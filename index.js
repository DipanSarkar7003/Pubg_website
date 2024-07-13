'use strict'
// gsap.registerPlugin(Draggable, InertiaPlugin);
console.log("hello world")
let navItem = document.querySelectorAll(".listItem")
let device_width = window.innerWidth;
console.log(device_width);

// let container2RightBox = document.querySelector(".container2RightBox")
// window.addEventListener("scroll" , function(){
//     container2RightBox.
   
// })



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
    stagger :0.2,
    scrollTrigger:{
        trigger :".contaiener2",
        scroller:"body",
        start:"top 30%",
       
     
       
    }
})

gsap.from(".section3_gsap_comp" , {
    opacity:0,
    x:20,
    stagger :0.1,
    scrollTrigger:{
        trigger :".container3",
        scroller:"body",
        start:"top 30%",
       
       
    }
})


if (device_width<=820){



gsap.from(".container4Box:nth-child(odd)" , {
    x:50 ,
    opacity : 0 ,
    duration : 1,
    stagger :  0.2,
    scrollTrigger : {
        trigger :".container4",
        scroller:"body" ,
        start:"top 50%",
        end : "bottom center",
        scrub: 0.2 ,

    }
})


gsap.from(".container4Box:nth-child(even)" , {
    x:-50 ,
    opacity : 0 ,
    duration : 1,
    stagger :  0.2,
    scrollTrigger : {
        trigger :".container4",
        scroller:"body" ,
        start:"top 50%",
        end : "bottom center",
        scrub: 0.2 ,

    }
})

}

else {
    
gsap.from(".container4Box" , {
    y:150 ,
    opacity : 0 ,
    duration : 1,
    stagger :  0.2,
    scrollTrigger : {
        trigger :".container4",
        scroller:"body" ,
        start:"top 50%",
        end : "bottom 70%",
        scrub: 0.2 ,

    }
})
}


  