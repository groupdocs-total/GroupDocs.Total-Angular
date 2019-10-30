import { Observable } from "rxjs";
export declare class RemoveCanvasService {
    private _observer;
    private readonly _removeCanvas;
    constructor();
    readonly removeCanvas: Observable<number>;
    remove(id: number): void;
}
