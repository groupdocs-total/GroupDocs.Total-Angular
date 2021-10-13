import { EventEmitter } from '@angular/core';
export declare class TooltipDirective {
    showToolTip: EventEmitter<boolean>;
    constructor();
    onHovering(): void;
    onUnhovering(): void;
}
