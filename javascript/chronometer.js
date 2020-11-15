class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.splitTime = 0;
  }

  startClick(callback) {
    this.intervalID = setInterval(() => this.currentTime++, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return Math.round(this.currentTime%60);
  }
  getMilliseconds() {
    return Math.round(this.currentTime%3600*100);
  }

  twoDigitsNumber(num) {
    const toString = num.toString()
    if(toString.length ===1){
      return `0${toString}`;
    }else{
      return toString;
    }
  }
  stopClick() {
    clearInterval(this.intervalID);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    this.splitTime = this.currentTime - this.splitTime;
    let mins = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    let milli = this.twoDigitsNumber(this.getMilliseconds());
    return `${mins}:${seconds}:${milli}`;
  }
}
