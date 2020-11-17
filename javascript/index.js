const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
  const min = chronometer.getMinutes();
  minDec.innerHTML = Math.floor(min / 10);
  minUni.innerHTML = min % 10;
}

function printSeconds() {
  // ... your code goes here
  const sec = chronometer.getSeconds();
  secDec.innerHTML = Math.floor(sec / 10);
  secUni.innerHTML = sec % 10;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit(splitTime) {
  // ... your code goes here
  const splitList = document.createElement('li');
  splitList.innerHTML = splitTime;
  splits.appendChild(splitList);
  console.log(splitList);
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.innerHTML = 'STOP';
  btnLeft.classList.replace('start', 'stop');
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerHTML = 'SPLIT';
  btnRight.classList.replace('reset', 'split');
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.innerHTML = 'START';
  btnLeft.classList.replace('stop', 'start');
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerHTML = 'RESET';
  btnRight.classList.replace('split', 'reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  let print;
  if (btnLeft.className === 'btn start') {
    chronometer.startClick();
    console.log('The clock has started');
    setStopBtn();
    setSplitBtn();
    print = setInterval(() => {
      printMinutes();
      printSeconds();
    }, 1000);
  } else {
    chronometer.stopClick();
    console.log('The clock has been stopped');
    setStartBtn();
    setResetBtn();
    clearInterval(print);
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if (btnRight.className === 'btn reset') {
    chronometer.resetClick();
    printMinutes();
    printSeconds();
  } else {
    const splitTime = chronometer.splitClick();
    console.log(splitTime);
    printSplit(splitTime);
  }
});
