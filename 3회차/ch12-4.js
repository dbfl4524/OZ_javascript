const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
let minutes = 0;
let seconds = 0;
let tenMillis = 0;
const appendTens = document.getElementById('tenMillis');
const appendSeconds = document.getElementById('seconds');
const appendMinutes = document.getElementById('minutes');
const resetBtn = document.getElementById('reset');
let intervalId;

startBtn.addEventListener('click', function () {
  clearInterval(intervalId);
  intervalId = setInterval(operateTimer, 10);
});

stopBtn.addEventListener('click', function () {
  clearInterval(intervalId);
});

resetBtn.addEventListener('click', function () {
  clearInterval(intervalId);
  minutes = 0;
  seconds = 0;
  tenMillis = 0;
  appendTens.textContent = '00';
  appendSeconds.textContent = '00';
  appendMinutes.textContent = '00';
});

// operateTimer : 10ms 마다 시간에 대한 숫자가 증가한다!
function operateTimer() {
  tenMillis++;
  appendTens.textContent = tenMillis > 9 ? tenMillis : '0' + tenMillis;
  if (tenMillis > 99) {
    seconds++;
    appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds;
    tenMillis = 0;
    appendTens.textContent = '00';
  }
  if (seconds > 59) {
    minutes++;
    appendMinutes.textContent = minutes > 9 ? minutes : '0' + minutes;
    seconds = 0;
    appendSeconds.textContent = '00';
  }
}
