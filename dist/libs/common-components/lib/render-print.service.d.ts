import { Observable } from "rxjs";
import { PageModel } from "./file.service";
export declare class RenderPrintService {
    private _render;
    private _observer;
    private _renderBlob;
    private _observerBlob;
    constructor();
    readonly renderPrint: Observable<PageModel[]>;
    changePages(pages: PageModel[]): void;
    readonly renderPrintBlob: Observable<Blob>;
    changeBlob(file: Blob): void;
}
