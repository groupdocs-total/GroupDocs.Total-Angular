import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Signature, SignatureType} from "../signature-models";
import {SignatureService} from "../signature.service";

@Component({
  selector: 'gd-signature-left-panel',
  templateUrl: './signature-left-panel.component.html',
  styleUrls: ['./signature-left-panel.component.less']
})
export class SignatureLeftPanelComponent implements OnInit, OnChanges {
  @Input() rewrite: boolean;
  @Input() isPdf: boolean;
  @Input() id: string;
  @Output() newSignatureEvent = new EventEmitter<string>();
  public showNewCode = false;
  public showUpload = false;
  signatures: Signature[];
  loading = true;

  constructor(private _signatureService: SignatureService) {
  }

  getSignatures(tabId: string) {
    this._signatureService.getSignatures('', tabId).subscribe((signatures: Signature[]) => {
      this.signatures = signatures || [];
      this.loading = false;
    });
  }

  ngOnInit() {
    this.init();
  }

  private init() {
    this.loading = true;
    this.signatures = [];
    this.getSignatures(this.id);
    this.showNewCode = false;
    this.showUpload = false;
  }

  getTitleIcon() {
    return this.showUpload || this.showNewCode ? 'times' : 'plus';
  }

  getTitle() {
    if (!this.id) {
      return "";
    }
    const signatureType = SignatureType.getSignatureType(this.id);
    return (this.showUpload || this.showNewCode) ? signatureType.title : signatureType.name;
  }

  getName() {
    if (!this.id) {
      return "";
    }
    const signatureType = SignatureType.getSignatureType(this.id);
    return signatureType.name;
  }

  removeSignature($event: string, type: string) {
    this._signatureService.removeSignatures($event, type).subscribe(() => this.getSignatures(type));
  }

  closeUploadPanel($event: boolean) {
    this.showUpload = !$event;
    this.getSignatures(this.id);
  }

  closeCodePanel($event: boolean) {
    this.showNewCode = !$event;
    this.getSignatures(this.id);
  }

  getCodeName() {
    if (!this.id) {
      return "";
    }
    return SignatureType.QR_CODE.id === this.id ? 'Qr Code' : (SignatureType.BAR_CODE.id === this.id ? 'Bar Code' : '');
  }

  icon() {
    if (!this.id) {
      return "";
    }
    return SignatureType.getSignatureType(this.id).icon;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.init();
  }

  closeNewSignature() {
    if (SignatureType.DIGITAL.id === this.id || SignatureType.IMAGE.id === this.id) {
      this.showUpload = false;
    } else if (SignatureType.BAR_CODE.id === this.id || SignatureType.QR_CODE.id === this.id) {
      this.showNewCode = false;
    }
  }

  openNewSignature() {
    if (this.showUpload || this.showNewCode) {
      return;
    }
    if (SignatureType.DIGITAL.id === this.id || SignatureType.IMAGE.id === this.id) {
      this.showUpload = true;
    } else if (SignatureType.BAR_CODE.id === this.id || SignatureType.QR_CODE.id === this.id) {
      this.showNewCode = true;
    } else {
      this.newSignatureEvent.emit(this.id);
    }
  }
}
