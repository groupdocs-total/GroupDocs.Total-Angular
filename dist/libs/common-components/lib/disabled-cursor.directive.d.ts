import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class DisabledCursorDirective implements OnInit, OnChanges {
    dis: boolean;
    constructor();
    cursor: boolean;
    private updateCursor;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
