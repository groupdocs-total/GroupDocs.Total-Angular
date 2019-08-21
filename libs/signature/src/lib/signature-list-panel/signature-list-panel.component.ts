import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DraggableSignature, Position, Signature, SignatureType} from "../signature-models";
import * as jquery from 'jquery';
import {NavigateService} from "@groupdocs.examples.angular/common-components";
import {SelectSignatureService} from "../select-signature.service";

const $ = jquery;

@Component({
  selector: 'gd-signature-list-panel',
  templateUrl: './signature-list-panel.component.html',
  styleUrls: ['./signature-list-panel.component.less']
})
export class SignatureListPanelComponent implements OnInit {

  @Input() signatures: Signature[];
  @Input() icon: string;
  @Input() signatureType: string;
  @Output() removeSignatureEvent = new EventEmitter<string>();

  constructor(private _navigateService: NavigateService,
              private _selectSignatureService: SelectSignatureService) {
  }

  ngOnInit() {
  }

  getImage(data: string) {
    const dataImagePngBase64 = 'data:image/png;base64,';
    return dataImagePngBase64 + data;
  }

  deleteSign(guid: string) {
    this.removeSignatureEvent.emit(guid);
  }

  isDigital() {
    return SignatureType.DIGITAL.id === this.signatureType;
  }

  drop($event: DragEvent, guid: string) {
    const target = $event.target;
    const sign = this.getSign(guid);
    const position = this.getMousePosition($event);

    const currentPage = document.elementFromPoint(position.x, position.y);
    if (currentPage && $(currentPage).parent().parent() && $(currentPage).parent().parent().hasClass("gd-page")) {
      const documentPage = $(currentPage).parent().parent()[0];
      const left = position.x - $(documentPage).offset().left - ($(target)[0].clientWidth / 2);
      const top = position.y - $(documentPage).offset().top - ($(target)[0].clientHeight / 2);
      sign.position = new Position(left, top);
      this.selectSignature(sign);
    } else {
      $(this)[0].style = 'position: relative';
    }
  }

  private getMousePosition(event) {
    const mouse = {
      x: 0,
      y: 0
    };
    const ev = event || window.event; //Moz || IE
    if (ev.pageX || ev.touches[0].pageX) { //Moz
      mouse.x = (typeof ev.pageX !== "undefined" && ev.pageX !== 0) ? ev.pageX : ev.touches[0].pageX;
      mouse.y = (typeof ev.pageY !== "undefined" && ev.pageY !== 0) ? ev.pageY : ev.touches[0].pageY;
    } else if (ev.clientX) { //IE
      mouse.x = ev.clientX + document.body.scrollLeft;
      mouse.y = ev.clientY + document.body.scrollTop;
    }
    return mouse;
  }

  private selectSignature(sign: DraggableSignature) {
    this._selectSignatureService.select(sign);
  }

  private getSign(guid: string): DraggableSignature {
    const sign = new DraggableSignature();
    sign.type = this.signatureType;
    sign.guid = guid;
    sign.position = new Position(0, 0);
    sign.pageNumber = this._navigateService.currentPage;
    return sign;
  }

  select(guid: string) {
    const sign = this.getSign(guid);
    this.selectSignature(sign);
  }
}
