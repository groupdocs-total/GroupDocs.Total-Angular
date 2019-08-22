import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Position, AddedSignature, Utils} from "../signature-models";
import {DragSignatureService} from "../drag-signature.service";
import * as jquery from 'jquery';

const $ = jquery;

@Component({
  selector: 'gd-signature-component',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.less']
})
export class Signature implements OnInit {
  @Input() data: AddedSignature;
  @Input() position: Position;

  constructor(private _elementRef: ElementRef,
              private _dragSignatureService: DragSignatureService) {
  }

  ngOnInit() {
  }

  getData() {
    return 'data:image/png;base64,' + this.data.data;
  }

  dragOver($event: DragEvent) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  dragStart($event: DragEvent) {
    this._dragSignatureService.element = this._elementRef;
  }

  dragging($event) {
    $event.preventDefault();
    const position = Utils.getMousePosition($event);

    const currentPage = document.elementFromPoint(position.x, position.y);
    if (currentPage && $(currentPage).parent().parent() && $(currentPage).parent().parent().parent().hasClass("page")) {
      const documentPage = $(currentPage).parent().parent()[0];
      const left = position.x - $(documentPage).offset().left;
      const top = position.y - $(documentPage).offset().top;
      const child = this._elementRef.nativeElement.children[0];
      child.style.left = left - child.clientWidth / 2 + 'px';
      child.style.top = top - child.clientHeight / 2 + 'px';
    }
  }

}
