import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  selection : Range
  constructor() { }
  restoreSelection(){
    if(this.selection){
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(this.selection.cloneRange());
    }
  }
  captureSelection(){
    this.selection = window.getSelection().getRangeAt(0);
  }

  refreshSelection(){
    this.captureSelection()
    this.restoreSelection()
  }
}
