gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "70px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body", // Note: Check if this should be a valid selector or use document.body
      markers: true,
      start: "top -10%",
      end: "top -11%",
      scrub:0
    }
});

gsap.to("#main",{
  backgroundColor : "#000",
  duration:0.5,
  scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    markers:true,
    start: "top -25%",
    end:"top -75%",
    scrub:1
  }
  
})