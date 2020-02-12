import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExceptionMessageService} from "../exception-message.service";
import {TopTabActivatorService} from "../top-tab-activator.service";
import {ModalService, CommonModals} from "../modal.service";

@Component({
  selector: 'gd-top-tab',
  templateUrl: './top-tab.component.html',
  styleUrls: ['./top-tab.component.less']
})
export class TopTabComponent implements OnInit {
  @Input() id: string;
  @Input() icon: string;
  @Input() disabled = false;
  @Input() tooltip: string;
  @Output() activeTab = new EventEmitter<string>();
  @Input() firstElement = false;
  public active = false;
  public showToolTip = false;

  constructor(private _tabActivatorService: TopTabActivatorService,
              private _modalService: ModalService,
              private _excMessageService: ExceptionMessageService) {
    this._tabActivatorService.activeTabChange.subscribe((tabId: string) => {
      this.activation(tabId);
      if (tabId === null) {
        this.activeTab.emit("");
      }
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
