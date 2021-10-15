import { SelectionService } from './selection.service';
import { EditHtmlService } from "./edit-html.service";
export declare class EditorDirective {
    private _selectionService;
    private _htmlService;
    text: any;
    private isIE;
    constructor(_selectionService: SelectionService, _htmlService: EditHtmlService);
    onInput(event: any): void;
    onMouseleave(event: any): void;
    onBlur(event: any): void;
}
