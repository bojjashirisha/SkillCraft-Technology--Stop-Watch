let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

// START
function startTimer() {

  if (!running) {

    running = true;

    timer = setInterval(() => {

      seconds++;

      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }

      updateDisplay();

    }, 1000);
  }
}

// PAUSE
function pauseTimer() {
  clearInterval(timer);
  running = false;
}

// RESET
function resetTimer() {

  clearInterval(timer);
  running = false;

  seconds = 0;
  minutes = 0;
  hours = 0;

  updateDisplay();

  document.getElementById("lapList").innerHTML = "";
}

// LAP
function lapTimer() {

  let lapTime = document.getElementById("display").innerText;

  let li = document.createElement("li");
  li.innerText = lapTime;

  document.getElementById("lapList").appendChild(li);
}

// DISPLAY UPDATE
function updateDisplay() {

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("display").innerText =
    h + ":" + m + ":" + s;
}