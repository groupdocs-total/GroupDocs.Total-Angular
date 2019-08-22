import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DraggableSignature, Position, Signature, SignatureType} from "../signature-models";
import {NavigateService} from "@groupdocs.examples.angular/common-components";
import {SelectSignatureService} from "../select-signature.service";
import {DragSignatureService} from "../drag-signature.service";


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
              private _selectSignatureService: SelectSignatureService,
              private _dragSignatureService: DragSignatureService) {
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

  dragOver($event: DragEvent) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  dragLeave($event: DragEvent, guid: string) {
    this._dragSignatureService.sign = this.getSign(guid);
  }
}
