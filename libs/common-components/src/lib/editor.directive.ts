import {Directive, HostListener, Input} from '@angular/core';
import {SelectionService} from './selection.service';
import {EditHtmlService} from "./edit-html.service";

@Directive({
  selector: '[gdEditor]'
})
export class EditorDirective {
  @Input() text: any;

  constructor(private _selectionService: SelectionService, private _htmlService: EditHtmlService) {
  }

  @HostListener('keyup', ['$event'])
  public onInput(event) {
    this.text = event.target;
    const isIE = /*@cc_on!@*/false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    if(isIE){
      if (this.text.innerHTML) {
        const html = this.text.innerHTML.toString();
        this._htmlService.observer.next(html);
      }
    }
  }

  @HostListener('mouseleave', ['$event'])
  public onMouseleave(event) {
    this._selectionService.captureSelection();
  }

  @HostListener('blur', ['$event'])
  public onBlur(event) {
    event.preventDefault();
    this._selectionService.restoreSelection();
    if (this.text.innerHTML) {
      const html = this.text.innerHTML.toString();
      this._htmlService.observer.next(html);
    }
  }
}
