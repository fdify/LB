//TYPEWRITER ON LANDINGPAGE


var i = 0;
var txt = 'Mastering your project management in 3 steps to get your final results';
var speed = 77;

window.onload =function typeWriter() {
  if (i < txt.length) {
    document.getElementById("twriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

