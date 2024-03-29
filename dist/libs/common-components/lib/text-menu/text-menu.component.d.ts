import { EventEmitter, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { OnCloseService } from "../on-close.service";
import { Option } from "../select/select.component";
import { ZoomService } from '../zoom.service';
import { WindowService } from '../window.service';
export declare class TextMenuComponent implements OnInit {
    private _onCloseService;
    private _zoomService;
    private _windowService;
    protected _elementRef: ElementRef<HTMLElement>;
    private renderer;
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
    isMobile: boolean;
    constructor(_onCloseService: OnCloseService, _zoomService: ZoomService, _windowService: WindowService, _elementRef: ElementRef<HTMLElement>, renderer: Renderer2);
    ngOnInit(): void;
    changePosition(val: number): void;
    selectFontSize($event: Option): void;
    selectFont($event: Option): void;
    toggleColorPicker($event: any): void;
    selectColor($event: string): void;
    toggleBold(event: any): void;
    toggleItalic(event: any): void;
    toggleUnderline(event: any): void;
    closePicker($event: any): void;
}
