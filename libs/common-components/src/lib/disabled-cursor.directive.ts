import {Directive, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[gdDisabledCursor]'
})
export class DisabledCursorDirective implements OnInit, OnChanges {

  @Input() dis: boolean;

  constructor() {
  }

  @HostBinding('class.inactive') cursor: boolean;

  private updateCursor() {
    this.cursor = this.dis ? true : false;
  }

  ngOnInit(): void {
    this.updateCursor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateCursor()
  }
}
