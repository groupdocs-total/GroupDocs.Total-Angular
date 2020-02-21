import { EventEmitter, OnInit } from '@angular/core';
import { OnCloseService } from "../on-close.service";
import { Option } from "../select/select.component";
export declare class TextMenuComponent implements OnInit {
    private _onCloseService;
    blur: boolean;
    fontSize: number;
    font: string;
    bold: boolean;
    italic: boolean;
    underline: boolean;
    color: string;
    decoration: boolean;
    showTooltips: boolean;
    outFontSize: EventEmitter<number>;
    outFont: EventEmitter<string>;
    outBold: EventEmitter<boolean>;
    outItalic: EventEmitter<boolean>;
    outUnderline: EventEmitter<boolean>;
    outColor: EventEmitter<string>;
    fontSizeOptions: {
        value: number;
        name: string;
        separator: boolean;
    }[];
    fontOptions: any[];
    colorPickerShow: boolean;
    constructor(_onCloseService: OnCloseService);
    ngOnInit(): void;
    selectFontSize($event: Option): void;
    selectFont($event: Option): void;
    toggleColorPicker($event: any): void;
    selectColor($event: string): void;
    toggleBold(event: any): void;
    toggleItalic(event: any): void;
    toggleUnderline(event: any): void;
    closePicker($event: any): void;
}
