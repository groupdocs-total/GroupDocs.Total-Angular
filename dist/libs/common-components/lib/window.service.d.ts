import { Observable } from "rxjs";
export declare class WindowService {
    private resizeSubject;
    private _resize$;
    private width;
    private height;
    constructor();
    readonly onResize: Observable<Window>;
    isMobile(): boolean;
    isTablet(): boolean;
    isDesktop(): boolean;
    getWidth(): number;
    getHeight(): number;
    isEdge(): boolean;
    isFirefox(): boolean;
}
