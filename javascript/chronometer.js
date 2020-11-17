class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.intervalIdMilli = 0;
    this.currentTimeInMilli = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => this.currentTime++, 1000);
    this.intervalIdMilli = setInterval(() => this.currentTimeInMilli++, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return Math.round(this.currentTime % 60);
  }
  getMilliseconds() {
     return Math.round(this.currentTimeInMilli % 360000)%100;
      
  }

  twoDigitsNumber(num) {
    const toString = num.toString();
    if (toString.length === 1) {
      return `0${toString}`;
    } else {
      return toString;
    }
  }
  stopClick() {
    let id = this.intervalId;
    let idMilli = this.intervalIdMilli;
    clearInterval(id);
    clearInterval(idMilli);
  }

  resetClick() {
    this.currentTime = 0;
    this.currentTimeInMilli = 0;
  }

  splitClick() {
    if (!this.splitTime) {
      this.splitTime = [this.currentTime];
    } else {
      let sumOfSplitTime = this.splitTime.reduce((sum, time) => sum + time);
      this.splitTime.push(this.currentTime - sumOfSplitTime);
    }
    let mins = this.twoDigitsNumber(
      Math.floor(this.splitTime[this.splitTime.length - 1] / 60)
    );
    let seconds = this.twoDigitsNumber(
      Math.round(this.splitTime[this.splitTime.length - 1] % 60)
    );
    let milli = this.twoDigitsNumber(this.getMilliseconds());
    return `${mins}:${seconds}`;
  }
}
