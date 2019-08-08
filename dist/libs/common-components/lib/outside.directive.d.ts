import { OnInit, OnDestroy, EventEmitter, ElementRef } from '@angular/core';
export declare class OutsideDirective implements OnInit, OnDestroy {
    private _elRef;
    private globalClick;
    clickOutsideEnabled: boolean;
    clickOutside: EventEmitter<Object>;
    constructor(_elRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onGlobalClick(event: Event): void;
    isDescendant(parent: any, child: any): boolean;
}
