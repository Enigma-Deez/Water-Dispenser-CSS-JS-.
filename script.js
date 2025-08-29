// Fridge door logic
document.addEventListener('DOMContentLoaded', function () {
    var handle = document.querySelector('.fridge-handle');
    var door = document.querySelector('.fridge-door');
    if (handle && door) {
        handle.addEventListener('click', function () {
            door.classList.toggle('open');
        });
    }
    // Cup glide logic
    var cup = document.getElementById('cup');
    var isCold = false;
    if (cup) {
        cup.addEventListener('click', function (e) {
            e.preventDefault();
            isCold = !isCold;
            if (isCold) {
                cup.classList.add('cold');
            } else {
                cup.classList.remove('cold');
            }
        });
    }
});
//Tap logic

//   Switch logic
const switchBtn = document.querySelector('.switch');

switchBtn.addEventListener('click', () => {
  switchBtn.classList.toggle('on');
});


const waterCold = document.getElementById("waterCold");
const waterHot = document.getElementById("waterHot");
const btn = document.getElementById("toggleBtn");
const btn2 = document.getElementById("toggleBtn2");

let coldOn = false;
let hotOn = false;

// Cold tap
btn.addEventListener("click", () => {
  coldOn = !coldOn;
  if (coldOn) {
    waterCold.classList.add("on");
  } else {
    waterCold.classList.remove("on");
  }
});

// Hot tap
btn2.addEventListener("click", () => {
  hotOn = !hotOn;
  if (hotOn) {
    waterHot.classList.add("on");
  } else {
    waterHot.classList.remove("on");
  }
});

