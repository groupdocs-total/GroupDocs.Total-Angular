import { RenderPrintService } from "./render-print.service";
export declare class RenderPrintDirective {
    private _renderService;
    htmlMode: boolean;
    constructor(_renderService: RenderPrintService);
    private renderPrint;
    private openWindow;
    private renderPrintBlob;
}
