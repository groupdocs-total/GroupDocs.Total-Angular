export class IntervalTimer {
    callback: any;
    interval: number;
    timerId: number;
    startTime: number;
    remaining = 0;
    state = 0; //  0 = idle, 1 = running, 2 = paused, 3= resumed
  
    constructor(callback: any, interval: number) {
      this.callback = callback;
      this.interval = interval;
      this.startTime = new Date().getTime();
      const _this = this;
      
      this.timerId = setInterval(() => { 
          this.callback();
          _this.startTime = new Date().getTime();
        }, this.interval);
      this.state = 1;
    }

    pause() {
        if (this.state !== 1) return;

        this.remaining = this.interval - (new Date().getTime() - this.startTime);
        clearInterval(this.timerId);
        this.state = 2;
    };

    resume() {
        if (this.state !== 2) return;

        this.state = 3;
        setTimeout(() => this.timeoutCallback(), this.remaining);
    };

    stop() {
        this.state = 0;
        clearInterval(this.timerId);
    }

    timeoutCallback() {
        if (this.state !== 3) return;

        this.callback();

        this.startTime = new Date().getTime();
        this.timerId = setInterval(this.callback, this.interval);
        this.state = 1;
    };
}