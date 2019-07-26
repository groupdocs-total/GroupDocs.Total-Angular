import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {
  CommonModals,
  ExceptionMessageService,
  FileUtil,
  ModalService
} from "@groupdocs.examples.angular/common-components";

export class States {
  static Empty = 'empty';
  static Opened = 'opened';
}

@Component({
  selector: 'gd-add-file-panel',
  templateUrl: './add-file-panel.component.html',
  styleUrls: ['./add-file-panel.component.less']
})
export class AddFilePanelComponent implements OnInit, OnChanges {
  @Input() panel: string;
  @Output() active = new EventEmitter<string>();
  @Output() urlForUpload = new EventEmitter<string>();
  @Output() cleanPanel = new EventEmitter<boolean>();
  state = States.Empty;
  @Input() fileName: string;
  uploadDisabled = true;

  constructor(private _modalService: ModalService,
              private _excMessageService: ExceptionMessageService) {
  }

  ngOnInit() {
  }

  getFormatIcon() {
    return FileUtil.find(this.fileName, false).icon;
  }

  openModal() {
    this.active.emit(this.panel);
    this._modalService.open(CommonModals.BrowseFiles);
  }

  isEmpty() {
    return this.state === States.Empty;
  }

  cleanFile() {
    this.active.emit(this.panel);
    this.cleanPanel.emit(true);
  }

  uploadUrl(url: string) {
    if (url && (url.startsWith('http') || url.startsWith('file') || url.startsWith('ftp'))) {
      this.active.emit(this.panel);
      this.urlForUpload.emit(url);
    } else {
      this._modalService.open(CommonModals.ErrorMessage);
      this._excMessageService.changeMessage("Wrong url");
    }
  }

  checkDisabled(url: string) {
    this.uploadDisabled = url ? url.length === 0 : true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.fileName) {
      this.state = States.Opened;
    }
  }
}
