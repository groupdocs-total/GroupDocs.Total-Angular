import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Signature, SignatureType} from "../signature-models";

@Component({
  selector: 'gd-signature-list-panel',
  templateUrl: './signature-list-panel.component.html',
  styleUrls: ['./signature-list-panel.component.less']
})
export class SignatureListPanelComponent implements OnInit {

  @Input() signatures: Signature[];
  @Input() icon: string;
  @Input() title: string;
  @Input() signatureType: string;
  @Output() newSignatureEvent = new EventEmitter<string>();
  @Output() removeSignatureEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  newSignature() {
    this.newSignatureEvent.emit(this.signatureType);
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
}
