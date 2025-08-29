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


    const water = document.getElementById("water");
        const btn = document.getElementById("toggleBtn");    
    let isOn;
    btn.addEventListener("click", () => {
      isOn = !isOn;
      if (isOn) {
        water.classList.add("on");
        btn.textContent = "";
      } else {
        water.classList.remove("on");
        btn.textContent = "";
    }
    });
