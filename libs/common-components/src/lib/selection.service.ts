import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  selection: Range;
  private isIE: boolean;

  constructor() {
    this.isIE = /*@cc_on!@*/false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
  }

  restoreSelection() {
    if(this.isIE && this.selection){
      this.putSelection(this.selection);
    } else if(this.selection && this.selection.collapsed){
      this.putSelection(this.selection);
    }
  }

  captureSelection() {
    if(this.isIE){
      this.selection = window.getSelection().getRangeAt(0);
    } else {
      if (window.getSelection().getRangeAt(0).startOffset != window.getSelection().getRangeAt(0).endOffset) {
        this.selection = window.getSelection().getRangeAt(0);
      }
    }
  }

  getSelection() {
    return window.getSelection().getRangeAt(0);
  }

  putSelection(selection) {
    let sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(selection.cloneRange());
  }

  refreshSelection() {
    this.captureSelection();
    this.restoreSelection();
  }
}
