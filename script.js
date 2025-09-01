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
const powerSwitch = document.querySelector('.switch');
const powerLight = document.getElementById('powerLight');

const waterCold = document.getElementById("waterCold");
const waterHot = document.getElementById("waterHot");
const btn = document.getElementById("toggleBtn");
const btn2 = document.getElementById("toggleBtn2");

let coldOn = false;
let hotOn = false;

// Disable taps initially
[btn, btn2].forEach(ctrl => ctrl.disabled = true);

// Power switch logic
powerSwitch.addEventListener('click', () => {
  powerSwitch.classList.toggle('on');   // slides switch
  powerLight.classList.toggle('on');    // turns light on/off

  if (powerSwitch.classList.contains('on')) {
    [btn, btn2].forEach(ctrl => ctrl.disabled = false);
  } else {
    [btn, btn2].forEach(ctrl => ctrl.disabled = true);
    waterCold.classList.remove('on');
    waterHot.classList.remove('on');
    coldOn = false;
    hotOn = false;
  }
});

// Cold tap
btn.addEventListener("click", () => {
  if (!btn.disabled) {
    coldOn = !coldOn;
    waterCold.classList.toggle("on", coldOn);
  }
});

// Hot tap
btn2.addEventListener("click", () => {
  if (!btn2.disabled) {
    hotOn = !hotOn;
    waterHot.classList.toggle("on", hotOn);
  }
});
