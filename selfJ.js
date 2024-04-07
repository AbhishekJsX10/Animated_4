

var t1=gsap.timeline()

t1.from(".nav",{
    y:-200,
    delay:0.2,
    duration:2,
    stagger:1
})


// t1.from(".nav .nav-part2",{
//     y:-200,
//     duration:2,
//     stagger: 1
// })


t1.from("hr",{
    opacity:0,
    duration:0.7,
    delay:0.6
})
t1.from(".page1-left-part1 h1 ",{
    x:-200,
    opacity:0,
    duration:0.7,
    delay:0.6,
    stagger:0.8
})
t1.from(".page1-left-part2 ",{
    opacity:0,
    duration:2,
    delay:1,
    stagger:0.8
})
t1.from(".page1-right ",{
    y:50,
    opacity:0,
    duration:0.7,
    delay:0.6,
    stagger:0.8
})


t1.from(".page2-left, .page2-right",{
    opacity:0,
    duration:2,
    delay:0.6,
    stagger:2,
    scrollTrigger:{
        trigger:".page2-left, .page2-right",
        scroller:"body",
        // markers:true,
        scrub:5,
        start:"top 40%",
        end:"top 90%"
    }
})













