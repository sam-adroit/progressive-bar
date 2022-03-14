// let conic = document.getElementsByClassName("outer-circle");
let conic = document.getElementById("deg");
let conic1 = document.getElementById("deg1");
let conic2 = document.getElementById("deg2");
val;
let initial = 0;
let initial1 = 0;
let initial2 = 0;
setInterval(() => {
  initial++;
  initial1++;
  initial2++;
  let deg = (initial / 100) * 360;
  let deg1 = (initial1 / 100) * 360;
  let deg2 = (initial2 / 100) * 360;
  if (initial <= 75) {
    conic.style.backgroundImage = `conic-gradient(#20e734 0deg, #20e734 ${deg}deg, #eee ${deg}deg)`;
    document.getElementById("val").innerHTML = initial + "%";
  } else {
    clearInterval();
  }
  if (initial1 <= 50) {
    conic1.style.backgroundImage = `conic-gradient(#20e734 0deg, #20e734 ${deg1}deg, #eee ${deg1}deg)`;
    document.getElementById("val1").innerHTML = initial1 + "%";
  } else {
    clearInterval();
  }
  if (initial2 <= 30) {
    conic2.style.backgroundImage = `conic-gradient(#20e734 0deg, #20e734 ${deg2}deg, #eee ${deg2}deg)`;
    document.getElementById("val2").innerHTML = initial2 + "%";
  } else {
    clearInterval();
  }
}, 50);
