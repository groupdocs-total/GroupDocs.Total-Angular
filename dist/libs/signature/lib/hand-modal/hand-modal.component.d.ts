import { OnInit } from '@angular/core';
import { SignatureService } from "../signature.service";
import { SignatureTabActivatorService } from "../signature-tab-activator.service";
import { CanvasComponent } from "../canvas/canvas.component";
import { ModalService } from "@groupdocs.examples.angular/common-components";
export declare class HandModalComponent implements OnInit {
    private _signatureService;
    private _tabActivationService;
    private _modalService;
    defaultColor: string;
    selectedColor: string;
    colorPickerShow: boolean;
    constructor(_signatureService: SignatureService, _tabActivationService: SignatureTabActivatorService, _modalService: ModalService);
    ngOnInit(): void;
    selectColor(color: string): void;
    saveSign(canvasComponent: CanvasComponent): void;
    private close;
    toggleColorPicker($event: any): void;
    closePicker($event: any): void;
    onCloseOpen(canvasComponent: CanvasComponent, $event: any): void;
    private clear;
}
