import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DigitalSign, DraggableSignature, Position, Signature, SignatureType} from "../signature-models";
import {NavigateService} from "@groupdocs.examples.angular/common-components";
import {SelectSignatureService} from "../select-signature.service";
import {DragSignatureService} from "../drag-signature.service";
import {DatePipe} from "@angular/common";
import {SignaturesHolderService} from "../signatures-holder.service";


@Component({
  selector: 'gd-signature-list-panel',
  templateUrl: './signature-list-panel.component.html',
  styleUrls: ['./signature-list-panel.component.less']
})
export class SignatureListPanelComponent implements OnInit {

  @Input() signatures: Signature[];
  @Input() icon: string;
  @Input() signatureType: string;
  @Input() isPdf: boolean;
  @Output() removeSignatureEvent = new EventEmitter<string>();
  showDigitalInputs = false;
  digitalProps = new DigitalSign();

  constructor(private _navigateService: NavigateService,
              private _selectSignatureService: SelectSignatureService,
              private _dragSignatureService: DragSignatureService,
              private _datePipe: DatePipe,
              private _signaturesHolderService: SignaturesHolderService) {
    this.digitalProps.date = this._datePipe.transform(new Date(), 'dd-MM-yyyy');
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
    if (this.signatureType === SignatureType.DIGITAL.id) {
      this.showDigitalInputs = !this.showDigitalInputs;
    } else {
      const sign = this.getSign(guid);
      this.selectSignature(sign);
    }
  }

  dragOver($event: DragEvent) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  dragLeave($event: DragEvent, guid: string) {
    this._dragSignatureService.sign = this.getSign(guid);
  }

  selectDigital(guid: string) {
    if (!this.isActive(guid)) {
      return;
    }
    const sign = this.getSign(guid);
    sign.digitalProps = this.digitalProps;
    this.selectSignature(sign);
  }

  parseDate(value) {
    return this._datePipe.transform(value, 'dd-MM-yyyy');
  }

  isActive(guid: string) {
    return !this._signaturesHolderService.has(guid);
  }

  dragStart($event: DragEvent) { // ff
    $event.dataTransfer.setData('text', 'foo');
  }
}
