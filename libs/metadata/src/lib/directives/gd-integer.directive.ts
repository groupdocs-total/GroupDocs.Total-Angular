import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

import {NgModel} from "@angular/forms";

@Directive({
    selector: "[gdInteger]"
})
export class GdIntegerDirective implements OnInit {
    private specialKeys = [ 
        'Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'
      ];

    private isInteger(value: string) {
        return String(value).match(new RegExp(/^(\-){0,1}\d*$/));
    }

    constructor(private ngModel: NgModel, private element: ElementRef) {}

    @HostListener("keydown", ["$event"])
    onKeyDown(event: KeyboardEvent) {
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        
        const current: string = this.element.nativeElement.value;
        const position: number = this.element.nativeElement.selectionStart;
        const next: string = [current.slice(0, position), event.key, current.slice(position)].join('')
        if (next && !this.isInteger(next)) {
           event.preventDefault();
        }
    }

    ngOnInit(): void {
        this.ngModel.control.valueChanges.subscribe(() => {
            const value = this.element.nativeElement.value;
            if (!value) return;
            this.ngModel.control.setValue(value === "-" ? 0 : parseInt(value, 10), { emitModelToViewChange: false, emitViewToModelChange: true, emitEvent: false });
        });
    }
}