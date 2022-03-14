// let conic = document.getElementsByClassName("outer-circle");
let conic = document.getElementById("deg");
val;
let initial = 0;
setInterval(() => {
  initial++;
  let deg = (initial / 100) * 360;
  if (initial <= 75) {
    conic.style.backgroundImage = `conic-gradient(#20e734 0deg, #20e734 ${deg}deg, #eee ${deg}deg)`;
    document.getElementById("val").innerHTML = initial + "%";
  } else {
    clearInterval();
  }
}, 50);
