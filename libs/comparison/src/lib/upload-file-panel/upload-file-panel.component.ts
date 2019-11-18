import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModals, ModalService, UploadFilesService} from "@groupdocs.examples.angular/common-components";

@Component({
  selector: 'gd-upload-file-panel',
  templateUrl: './upload-file-panel.component.html',
  styleUrls: ['./upload-file-panel.component.less']
})
export class UploadFilePanelComponent implements OnInit {

  @Input() panel: string;
  @Output() active = new EventEmitter<string>();
  showUploadFile = false;

  constructor(private _uploadService: UploadFilesService,
              private _modalService: ModalService) {
  }

  ngOnInit() {
  }

  openModal() {
    this.active.emit(this.panel);
    this._modalService.open(CommonModals.BrowseFiles);
  }

  dropped($event) {
    if ($event) {
      this.active.emit(this.panel);
      this.showUploadFile = false;
    }
  }
}
