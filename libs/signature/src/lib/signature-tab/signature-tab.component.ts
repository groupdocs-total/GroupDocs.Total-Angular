import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  CommonModals,
  ExceptionMessageService, ModalService,
  TabActivatorService,
  WindowService
} from "@groupdocs.examples.angular/common-components";
import {Signature, SignatureType} from "../signature-models";
import {SignatureService} from "../signature.service";

@Component({
  selector: 'gd-signature-tab',
  templateUrl: './signature-tab.component.html',
  styleUrls: ['./signature-tab.component.less']
})
export class SignatureTabComponent implements OnInit {
  public static showToolTipMobile = true;

  @Input() id: string;
  @Input() icon: string;
  @Input() disabled = false;
  @Input() active = false;
  @Input() tooltip: string;
  @Input() newTitle: string;
  @Input() rewrite: boolean;
  @Output() newSignatureEvent = new EventEmitter<string>();
  isDesktop: boolean;
  public showNewCode = false;
  public showUpload = false;
  public _showToolTip = false;

  signatures: Signature[];

  constructor(private _tabActivatorService: TabActivatorService,
              private _windowService: WindowService,
              private _signatureService: SignatureService,
              private _modalService: ModalService,
              private _excMessageService: ExceptionMessageService) {
    this._tabActivatorService.activeTabChange.subscribe((tabId: string) => {
      this.activation(tabId);
    });

    this.isDesktop = _windowService.isDesktop();
    _windowService.onResize.subscribe((w) => {
      this.isDesktop = _windowService.isDesktop();
    });
  }

  get showToolTip() {
    return this.isDesktop ? this._showToolTip : SignatureTabComponent.showToolTipMobile;
  }

  set showToolTip($event) {
    if (this.isDesktop) {
      this._showToolTip = $event;
    }
  }

  private activation(tabId: string) {
    if (this.id === tabId) {
      this.active = !this.active;
      if (this.active) {
        this.signatures = [];
        this.getSignatures(tabId);
        this.showNewCode = false;
        this.showUpload = false;
        if (!this.isDesktop) {
          SignatureTabComponent.showToolTipMobile = false;
        }
      } else {
        if (!this.isDesktop) {
          SignatureTabComponent.showToolTipMobile = true;
        }
      }
    } else {
      this.active = false;
    }
  }

  ngOnInit() {
  }

  toggleTab() {
    if (this.disabled) {
      this._modalService.open(CommonModals.ErrorMessage);
      this._excMessageService.changeMessage("Please open document first");
      return;
    }
    this._tabActivatorService.changeActiveTab(this.id);
  }

  getSignatures(tabId: string) {
    this._signatureService.getSignatures('', tabId).subscribe((signatures: Signature[]) => {
      this.signatures = signatures || [];
    });
  }

  removeSignature($event: string, type: string) {
    this._signatureService.removeSignatures($event, type).subscribe(() => this.getSignatures(type));
  }

  toggleNewSignature() {
    if (SignatureType.DIGITAL.id === this.id || SignatureType.IMAGE.id === this.id) {
      this.showUpload = !this.showUpload;
    } else if (SignatureType.BAR_CODE.id === this.id || SignatureType.QR_CODE.id === this.id) {
      this.showNewCode = !this.showNewCode;
    } else {
      this.newSignatureEvent.emit(this.id);
    }
  }

  getCodeName() {
    return SignatureType.QR_CODE.id === this.id ? 'Qr Code' : (SignatureType.BAR_CODE.id === this.id ? 'Bar Code' : '');
  }

  getTitle() {
    return this.showUpload || this.showNewCode ? SignatureType.getSignatureType(this.id).title : this.tooltip;
  }

  getTitleIcon() {
    return this.showUpload || this.showNewCode ? 'times' : 'plus';
  }

  closeUploadPanel($event: boolean) {
    this.showUpload = !$event;
    this.getSignatures(this.id);
  }

  closeCodePanel($event: boolean) {
    this.showNewCode = !$event;
    this.getSignatures(this.id);
  }
}
