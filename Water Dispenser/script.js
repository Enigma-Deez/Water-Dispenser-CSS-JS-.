let intervalId = null;
let currentHeight = 0;
const maxHeight = 100; // percentage
const water = document.getElementById('water');

function startDispensing() {
  if (intervalId || currentHeight >= maxHeight) return;

  intervalId = setInterval(() => {
    if (currentHeight >= maxHeight) {
      clearInterval(intervalId);
      intervalId = null;
      alert("The glass is full!");
    } else {
      currentHeight += 5;
      water.style.height = currentHeight + "%";
    }
  }, 300); // speed of dispensing
}

function resetGlass() {
  clearInterval(intervalId);
  intervalId = null;
  currentHeight = 0;
  water.style.height = "0%";
}
