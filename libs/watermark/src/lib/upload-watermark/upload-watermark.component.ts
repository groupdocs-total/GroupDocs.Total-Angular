import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileListWithParams} from "../watermark-models";
import {WatermarkService} from "../watermark.service";

@Component({
  selector: 'gd-upload-watermark',
  templateUrl: './upload-watermark.component.html',
  styleUrls: ['./upload-watermark.component.less']
})
export class UploadWatermarkComponent implements OnInit {
  @Input() watermarkType: string;
  @Input() rewrite: boolean;
  @Output() closePanel = new EventEmitter<boolean>();

  constructor(private _watermarkService: WatermarkService) {
  }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.addFiles(files);
  }

  addFiles(files) {
    const data = new FileListWithParams(files, this.watermarkType);
    this._watermarkService.uploadWatermark(data, this.rewrite).subscribe(() => {
      this.closePanel.emit(true);
    });
  }

  uploadFiles($event: any) {
    this.addFiles($event);
  }
}
