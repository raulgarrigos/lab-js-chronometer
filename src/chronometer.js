class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) printTimeCallback();
    }, 1000);
  }

  // start(printTimeCallback) {
  //   if (typeof printTimeCallback === "function") {
  //     this.intervalId = setInterval(() => {
  //       this.currentTime++;
  //       printTimeCallback();
  //     }, 1000);
  //   } else {
  //     this.intervalId = setInterval(() => {
  //       this.currentTime++;
  //     }, 1000);
  //   }
  // }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    value = value.toString();

    if (value.length === 1) {
      value = "0" + value;
    }

    return value;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}
