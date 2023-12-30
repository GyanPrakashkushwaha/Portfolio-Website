document.addEventListener('DOMContentLoaded', function () {
  const logo = document.getElementById('logo');

  logo.addEventListener('mouseenter', function () {
    const randomTranslateX = Math.random() * 40 - 20; // Random value between -10 and 10
    const randomRotate = Math.random() * 30 - 10; // Random value between -10 and 10
    const randomTranslateY = Math.random() * 20 - 5; // Random value between -5 and 5
    const randomPerspective = Math.random() * 1000 + 500; // Random value between 500 and 1000

    logo.style.transform = `translateX(${randomTranslateX}px) rotate(${randomRotate}deg) translateY(${randomTranslateY}px) perspective(${randomPerspective}px)`;
  });

  logo.addEventListener('mouseleave', function () {
    logo.style.transform = 'none';
  });
});


document.addEventListener('DOMContentLoaded', function() {
  // Get the text element
  var textElement = document.getElementById('typewriter-text');
  // Get the text content
  var textContent = textElement.innerHTML.trim();
  // Clear the text content
  textElement.innerHTML = '';

  // Split the text into characters
  var characters = textContent.split('');

  // Iterate through each character and append it to the text element with a delay
  characters.forEach(function(char, index) {
      // Create a span element for each character
      var charElement = document.createElement('span');
      charElement.innerHTML = char;

      // Append the span element with a delay proportional to its index
      setTimeout(function() {
          textElement.appendChild(charElement);
      }, 100 * index);
  });
});


gsap.to(".navbar", {
    backgroundColor: "rgb(147, 204, 181,0.90)",
    duration: 0.5,
    height: "70px",
    scrollTrigger: {
      trigger: ".navbar",
      scroller: "body", // Note: Check if this should be a valid selector or use document.body
      // markers: true,
      start: "top -10%",
      end: "top -11%",
      scrub:0
    }
});


gsap.to(".navbar-about", {
  backgroundColor: "rgb(237, 47, 47)",
  backgroundColor: "rgb(147, 204, 181,0.50)",
  duration: 0.5,
  height: "70px",
  scrollTrigger: {
    trigger: ".navbar",
    scroller: "body", // Note: Check if this should be a valid selector or use document.body
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub:0
  }
});


// gsap.to("#main",{
//   backgroundColor : "#000",
//   duration:0.5,
//   scrollTrigger:{
//     trigger:"#main",
//     scroller:"body",
//     markers:true,
//     start: "top -25%",
//     end:"top -75%",
//     scrub:1
//   }
  
// })