import {Directive, HostListener, Input} from '@angular/core';
import {SelectionService} from './selection.service';
import {EditHtmlService} from "./edit-html.service";

@Directive({
  selector: '[gdEditor]'
})
export class EditorDirective {
  @Input() text: any;

  private isIE: boolean = /*@cc_on!@*/false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);

  constructor(private _selectionService: SelectionService, private _htmlService: EditHtmlService) {
  }

  @HostListener('keyup', ['$event'])
  public onInput(event) {
    this.text = event.target;
    if(this.isIE){
      if (this.text.innerHTML) {
        const html = this.text.innerHTML.toString();
        this._htmlService.observer.next(html);
      }
    }
  }

  @HostListener('mouseleave', ['$event'])
  public onMouseleave(event) {
    this._selectionService.captureSelection();
    // this code is required to fix IE11 issue - it doesn't trigger blur event, since that we need to save updated HTML here
    if(this.isIE){
      this._htmlService.observer.next(event.target.innerHTML.toString());
    }
  }

  @HostListener('blur', ['$event'])
  public onBlur(event) {
    event.preventDefault();
    this._selectionService.restoreSelection();
    if (this.text.innerHTML) {
      const html = this.text.innerHTML.toString();
      this._htmlService.observer.next(html);
    } else {
      this._htmlService.observer.next(event.target.innerHTML.toString());
    }
  }
}
