import { ElementRef, OnInit } from "@angular/core";
import { NgModel } from "@angular/forms";
export declare class GdIntegerDirective implements OnInit {
    private ngModel;
    private element;
    private specialKeys;
    private isInteger;
    constructor(ngModel: NgModel, element: ElementRef);
    onKeyDown(event: KeyboardEvent): void;
    ngOnInit(): void;
}
