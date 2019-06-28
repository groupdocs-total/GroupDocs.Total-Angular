import { Observable } from "rxjs";
export declare class ZoomService {
    private _observer;
    private readonly _zoomChange;
    private _zoom;
    createZoomOption(val: number, name: string, sep?: boolean): {
        value: number;
        name: string;
        separator: boolean;
    };
    zoomOptions(width: number, height: number): {
        value: number;
        name: string;
        separator: boolean;
    }[];
    constructor();
    readonly zoom: number;
    readonly zoomChange: Observable<number>;
    changeZoom(zoom: number): void;
}
