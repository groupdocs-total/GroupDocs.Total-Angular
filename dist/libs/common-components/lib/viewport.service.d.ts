export declare class ViewportService {
    constructor();
    isBelowCenterOfTheScreen(elem: HTMLElement, parent?: HTMLElement): boolean;
    checkInViewport(el: any, zoom?: number, leftOffset?: number, deltaX?: number): boolean;
}
