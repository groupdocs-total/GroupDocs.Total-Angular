import { RenderPrintService } from "./render-print.service";
declare type IFrame = HTMLElement & {
    contentWindow: Window;
};
export declare class RenderPrintDirective {
    private _renderService;
    htmlMode: boolean;
    constructor(_renderService: RenderPrintService);
    private renderPrint;
    private openWindow;
    private renderPrintBlob;
    doPrint(iframe: IFrame): void;
}
export {};
