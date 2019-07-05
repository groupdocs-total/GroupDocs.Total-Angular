import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class DisabledCursorDirective implements OnInit, OnChanges {
    dis: boolean;
    constructor();
    cursor: string;
    private updateCursor;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
