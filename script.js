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
var tl = gsap.timeline();


tl.from("nav",{
  y:-70,
  delay:-0.2,
  duration:2,
  opacity:0
});

tl.from("nav svg",{
     y:-40,
     opacity:0,
     delay:-0.2,
     duration:0.5,
});
tl.to("nav>svg",{
  y:"-15vh",
  scale:0.15,
  scrollTrigger:{
    trigger:"nav>svg",
    start:"top 10%",
    end:"bottom  90%",
    scrub:true ,
    scroller:"#main",
}
});

  tl.from("#page1 img", {
    scale:0.5,
    delay:0.5,
    duration:0.6,
    ease:"power5.easeOut",
 } );



//  // /// //// /// // //  //
//                          //  
//      PAGE-2 JS //  
//                        //


// var clutters = "";
// document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
//   clutters += `<span>${dets}</span>`

//   document.querySelector("#page2>h1").innerHTML = clutters;
// })


var h2Data = document.querySelectorAll("#page2 h1");
h2Data.forEach(function (elem) {
  var textData = elem.textContent;
  var splitedText = textData.split("");
  var clutter = "";
  splitedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});

gsap.to("#page2  h1 span",{
    scrollTrigger:{
        trigger:`#page2  h1 span`,
        start:`top 50%`,
        end:`bottom 70%`,
        scroller:`#main`,
        scrub:4,
        markerw:true,
    },
    stagger:.6,
    color:`#e3e3c4`
})
//                     //
//                        //
// Page-3 JS    //  
//                        //
//                        //


var clutters="";
document.querySelector("#page3-part1>h1").textContent.split("").forEach(function(dets){
    clutters += `<span>${dets}</span>`

    document.querySelector("#page3-part1>h1").innerHTML = clutters;
})


gsap.to("#page3-part1>h1>span",{
    scrollTrigger:{
        trigger:`#page3-part1>h1>span`,
        start:`top 70%`,
        end:`bottom 60%`,
        scroller:`#main`,
        scrub:4,
    },
    stagger:.2,
    color:`#434b34`
})


gsap.from("#page3-img",{
    y:50,
    delay:0.5,
    opacity:0,
    duration:0.6,
    scrollTrigger:{   
        trigger:`#page3-img`,
        start:`top 85%`,
        end:`top 75%`,
        scroller:`#main`,
        scrub:4,
    },
});
gsap.from("#page3-img1",{
  y:50,
  delay:0.5,
  opacity:0,
  duration:0.6,
  scrollTrigger:{   
      trigger:`#page3-img1`,
      start:`top 85%`,
      end:`top 75%`,
      scroller:`#main`,
      scrub:4,
  },
});
gsap.from("#page3-img2",{
  y:50,
  delay:0.5,
  opacity:0,
  duration:0.6,
  scrollTrigger:{   
      trigger:`#page3-img2`,
      start:`top 85%`,
      end:`top 75%`,
      scroller:`#main`,
      scrub:4,
  },
});

gsap.from("#page3-part2-1 p",{
  y:50,
  delay:0.5,
  opacity:0,
  duration:0.6,
  scrollTrigger:{   
      trigger:`#page3-part2-1`,
      start:`top 85%`,
      end:`top 75%`,
      scroller:`#main`,
      scrub:4,
  },
});
gsap.from("#page3-part2-1 span , #page3-part2-1 .icon",{
  y:40,
  delay:0.5,
  opacity:0,
  duration:0.6,
  scrollTrigger:{   
      trigger:`#page3-part2-1`,
      start:`top 75%`,
      end:`top 65%`,
      scroller:`#main`,
      scrub:4,
  },
});
