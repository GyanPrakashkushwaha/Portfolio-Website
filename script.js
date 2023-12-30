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


document.addEventListener("DOMContentLoaded", function () {
  var textElement = document.getElementById("typewriter-text");
  var words = textElement.innerText.split(" ");
  var coloredText = words.map(function (word, index) {
    var color = getRandomColor();
    return '<span style="color: ' + color + ';">' + word + '</span>';
  }).join(" ");
  textElement.innerHTML = coloredText;
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


gsap.to(".navbar", {
    backgroundColor: "rgb(237, 47, 47)",
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