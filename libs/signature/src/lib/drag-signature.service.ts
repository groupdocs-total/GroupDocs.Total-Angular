import {ElementRef, Injectable} from '@angular/core';
import {DraggableSignature} from "./signature-models";

@Injectable({
  providedIn: 'root'
})
export class DragSignatureService {
  public sign: DraggableSignature;
  public element: ElementRef;

  constructor() {
  }
}
