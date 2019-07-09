import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  selection: Range;

  restoreSelection() {
    if(!this.selection.collapsed){
      this.putSelection(this.selection);
    }
  }

  captureSelection() {
    this.selection = window.getSelection().getRangeAt(0);
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
