import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  selection: Range;

  constructor() {
  }

  restoreSelection() {
    if (this.selection && this.selection.collapsed) {
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(this.selection.cloneRange());
    }
  }

  captureSelection() {
    if (window.getSelection().getRangeAt(0).startOffset != window.getSelection().getRangeAt(0).endOffset) {
      this.selection = window.getSelection().getRangeAt(0);
    }
  }

  refreshSelection() {
    this.captureSelection();
    this.restoreSelection();
  }
}
