import { Observable } from "rxjs";
export declare class ZoomService {
    private _observer;
    private readonly _zoomChange;
    private _zoom;
    constructor();
    readonly zoom: number;
    readonly zoomChange: Observable<number>;
    changeZoom(zoom: number): void;
    private createZoomOption;
    zoomOptions(width: any, height: any): {
        value: any;
        name: string;
        separator: boolean;
    }[];
}
