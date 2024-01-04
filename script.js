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



var NUM_PARTICLES = ( ( ROWS = 100 ) * ( COLS = 300 ) ),
    THICKNESS = Math.pow( 80, 2 ),
    SPACING = 3,
    MARGIN = 100,
    COLOR = 220,
    DRAG = 0.95,
    EASE = 0.25,
    
    /*
    
    used for sine approximation, but Math.sin in Chrome is still fast enough :)http://jsperf.com/math-sin-vs-sine-approximation

    B = 4 / Math.PI,
    C = -4 / Math.pow( Math.PI, 2 ),
    P = 0.225,

    */

    container,
    particle,
    canvas,
    mouse,
    stats,
    list,
    ctx,
    tog,
    man,
    dx, dy,
    mx, my,
    d, t, f,
    a, b,
    i, n,
    w, h,
    p, s,
    r, c
    ;

particle = {
  vx: 0,
  vy: 0,
  x: 0,
  y: 0
};

function init() {

  container = document.getElementById( 'container' );
  canvas = document.createElement( 'canvas' );
  
  ctx = canvas.getContext( '2d' );
  man = false;
  tog = true;
  
  list = [];
  
  w = canvas.width = COLS * SPACING + MARGIN * 2;
  h = canvas.height = ROWS * SPACING + MARGIN * 2;
  
  container.style.marginLeft = Math.round( w * -0.5 ) + 'px';
  container.style.marginTop = Math.round( h * -0.5 ) + 'px';
  
  for ( i = 0; i < NUM_PARTICLES; i++ ) {
    
    p = Object.create( particle );
    p.x = p.ox = MARGIN + SPACING * ( i % COLS );
    p.y = p.oy = MARGIN + SPACING * Math.floor( i / COLS );
    
    list[i] = p;
  }

  container.addEventListener( 'mousemove', function(e) {

    bounds = container.getBoundingClientRect();
    mx = e.clientX - bounds.left;
    my = e.clientY - bounds.top;
    man = true;
    
  });
  
  if ( typeof Stats === 'function' ) {
    document.body.appendChild( ( stats = new Stats() ).domElement );
  }
  
  container.appendChild( canvas );
}

function step() {

  if ( stats ) stats.begin();

  if ( tog = !tog ) {

    if ( !man ) {

      t = +new Date() * 0.001;
      mx = w * 0.5 + ( Math.cos( t * 2.1 ) * Math.cos( t * 0.9 ) * w * 0.45 );
      my = h * 0.5 + ( Math.sin( t * 3.2 ) * Math.tan( Math.sin( t * 0.8 ) ) * h * 0.45 );
    }
      
    for ( i = 0; i < NUM_PARTICLES; i++ ) {
      
      p = list[i];
      
      d = ( dx = mx - p.x ) * dx + ( dy = my - p.y ) * dy;
      f = -THICKNESS / d;

      if ( d < THICKNESS ) {
        t = Math.atan2( dy, dx );
        p.vx += f * Math.cos(t);
        p.vy += f * Math.sin(t);
      }

      p.x += ( p.vx *= DRAG ) + (p.ox - p.x) * EASE;
      p.y += ( p.vy *= DRAG ) + (p.oy - p.y) * EASE;

    }

  } else {

    b = ( a = ctx.createImageData( w, h ) ).data;

    for ( i = 0; i < NUM_PARTICLES; i++ ) {

      p = list[i];
      b[n = ( ~~p.x + ( ~~p.y * w ) ) * 4] = b[n+1] = b[n+2] = COLOR, b[n+3] = 255;
    }

    ctx.putImageData( a, 0, 0 );
  }

  if ( stats ) stats.end();

  requestAnimationFrame( step );
}

init();
step();


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


// var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgba(" + r + ", " + g + ", " + b + ", 0.8)";
}

function changeColorRandomly() {
  blur.style.backgroundColor = getRandomColor();
}

// Change color randomly every second
setInterval(changeColorRandomly, 900);



gsap.to(".navbar", {
    backgroundColor: "rgba(49, 40, 94, 0.9)",
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
  backgroundColor: "rgb(147, 204, 181,0.02)",
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