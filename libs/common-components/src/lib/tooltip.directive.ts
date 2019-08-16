import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[gdTooltip]'
})
export class TooltipDirective {

  @Output() showToolTip = new EventEmitter<boolean>();

  constructor() {
  }

  @HostListener('mouseenter')
  public onHovering() {
    this.showToolTip.emit(true);
  }

  @HostListener('mouseleave')
  public onUnhovering() {
    this.showToolTip.emit(false);
  }

}
