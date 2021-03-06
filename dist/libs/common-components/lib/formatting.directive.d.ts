import { OnInit } from '@angular/core';
import { FormattingService } from "./formatting.service";
import { BackFormattingService } from "./back-formatting.service";
import { SelectionService } from './selection.service';
export declare class FormattingDirective implements OnInit {
    private _formattingService;
    private _backFormattingService;
    private _selectionService;
    private bold;
    private italic;
    private underline;
    private color;
    private bgColor;
    private font;
    private strikeout;
    private align;
    private list;
    private isIE;
    constructor(_formattingService: FormattingService, _backFormattingService: BackFormattingService, _selectionService: SelectionService);
    mouseup(): void;
    private checkJustify;
    private checkList;
    reportFontSize(): number;
    getComputedStyleProperty(el: any, propName: any): any;
    ngOnInit(): void;
    private toggleBold;
    private toggleUnderline;
    private toggleItalic;
    private setBgColor;
    private setColor;
    private setFontSize;
    private toggleUndo;
    private toggleRedo;
    private setFont;
    private toggleStrikeout;
    private toggleAlign;
    private toggleAlignIE;
    private toggleList;
}
