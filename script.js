gsap.to("#nav", {
    backgroundColor: "#000",
    height: "100px",
    duration: 0.5,
    scrollTrigger: {
      trigger: "#nav",
      scroller: "#body", // Note: Check if this should be a valid selector or use document.body
      markers: true,
      start: "top -10%",
      end: "top -11%"
    }
  });
