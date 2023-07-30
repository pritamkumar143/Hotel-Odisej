function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco();


gsap.to("#page1 img", {
    y: -40,
    scale:1.1,
    delay:2,
    duration:1.5,

 } );
 gsap.to("nav svg", {
    y: 260,
    scale:0.27,
    delay:1,
    duration:1,
    // scrollTrigger:{

    // }
  } );  

// gsap.to("nav svg ", {
//     color: "#434B34",
//     scrollTrigger: {
//         trigger: "#main",
//         scroller: "#page1",
//         markers: true,
//         start: "top 10%",
//         end: "top -10%",
//         scrub: 4
//     }
// });

// gsap.to("#page1 h1", {
//     y: -40,
//     color: "#434B34",
//     scrollTrigger: {
//         trigger: "#main",
//         scroller: "#page1",
//         start: "top 10%",
//         end: "top -10%",
//         scrub: 4
//     }
// });


var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})


gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top 60%`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:4,
    },
    stagger:.9,
    color:`#e3e3c4`
})

