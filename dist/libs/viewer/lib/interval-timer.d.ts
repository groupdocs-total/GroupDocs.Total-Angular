export declare class IntervalTimer {
    callback: any;
    interval: number;
    timerId: number;
    startTime: number;
    remaining: number;
    state: number;
    constructor(callback: any, interval: number);
    pause(): void;
    resume(): void;
    stop(): void;
    timeoutCallback(): void;
}
