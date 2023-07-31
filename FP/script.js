const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var tl=gsap.timeline()
tl.from("#page1 svg",{
     y:-40,
     opacity:0,
     delay:0.3,
     duration:0.5

})
tl.from("#page1 img",{
    scale:0.5,
    delay:-0.1,
    duration:2,
    ease:Power3.easeOut
})
.from("#nav",{
    y:-50,
    delay:-0.3,
    duration:0.5,
    opacity:0
})