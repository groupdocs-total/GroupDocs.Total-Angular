import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  selection: Range;
  isIE = /*@cc_on!@*/false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);

  restoreSelection() {
    if(this.selection && !this.selection.collapsed || this.isIE){
      this.putSelection(this.selection  );
    }
  }

  captureSelection() {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      this.selection = selection.getRangeAt(0);
    }
  }

  private putSelection(selection) {
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(selection.cloneRange());
  }

  refreshSelection() {
    this.captureSelection();
    this.restoreSelection();
  }
}
