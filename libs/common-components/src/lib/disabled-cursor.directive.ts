import {Directive, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[gdDisabledCursor]'
})
export class DisabledCursorDirective implements OnInit, OnChanges {

  @Input() dis: boolean;

  constructor() {
  }

  @HostBinding('style.cursor') cursor: string;

  private updateCursor() {
    this.cursor = this.dis ? 'not-allowed' : 'pointer';
  }

  ngOnInit(): void {
    this.updateCursor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateCursor()
  }
}
