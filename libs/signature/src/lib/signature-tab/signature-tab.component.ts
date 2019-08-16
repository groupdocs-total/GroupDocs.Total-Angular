import {Component, Input, OnInit} from '@angular/core';
import {TabActivatorService} from "@groupdocs.examples.angular/common-components";
import {Signature} from "../signature-models";
import {SignatureService} from "../signature.service";

@Component({
  selector: 'gd-signature-tab',
  templateUrl: './signature-tab.component.html',
  styleUrls: ['./signature-tab.component.less']
})
export class SignatureTabComponent implements OnInit {
  @Input() id: string;
  @Input() icon: string;
  @Input() disabled = false;
  @Input() active = false;
  @Input() tooltip: string;
  public showToolTip = false;

  signatures: Signature[];

  constructor(private _tabActivatorService: TabActivatorService,
              private _signatureService: SignatureService) {
    this._tabActivatorService.activeTabChange.subscribe((tabId: string) => {
      this.activation(tabId);
    });
  }

  private activation(tabId: string) {
    if (this.id === tabId) {
      this.active = !this.active;
      if (this.active) {
        this.signatures = [];
        this.getSignatures(tabId);
      }
    } else {
      this.active = false;
    }
  }

  ngOnInit() {
  }

  toggleTab() {
    if (this.disabled) {
      return;
    }
    this._tabActivatorService.changeActiveTab(this.id);
  }

  getSignatures(tabId: string) {
    this._signatureService.getSignatures('', tabId).subscribe((signatures: Signature[]) => this.signatures = signatures || []);
  }

  removeSignature($event: string, type: string) {
    this._signatureService.removeSignatures($event, type).subscribe(() => this.getSignatures(type));
  }
}
