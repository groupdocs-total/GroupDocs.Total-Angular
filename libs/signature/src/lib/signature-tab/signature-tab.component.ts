import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  CommonModals,
  ExceptionMessageService, ModalService
} from "@groupdocs.examples.angular/common-components";
import {SignatureTabActivatorService} from "../signature-tab-activator.service";

@Component({
  selector: 'gd-signature-tab',
  templateUrl: './signature-tab.component.html',
  styleUrls: ['./signature-tab.component.less']
})
export class SignatureTabComponent implements OnInit {
  @Input() id: string;
  @Input() icon: string;
  @Input() disabled = false;
  @Input() tooltip: string;
  @Input() firstElement = false;
  @Output() activeTab = new EventEmitter<string>();
  public active = false;
  public showToolTip = false;

  constructor(private _tabActivatorService: SignatureTabActivatorService,
              private _modalService: ModalService,
              private _excMessageService: ExceptionMessageService) {
    this._tabActivatorService.activeTabChange.subscribe((tabId: string) => {
      this.activation(tabId);
    });
  }

  private activation(tabId: string) {
    if (this.id === tabId) {
      this.active = !this.active;
      if (this.active) {
        this.activeTab.emit(this.id);
      } else {
        this.activeTab.emit("");
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

}
