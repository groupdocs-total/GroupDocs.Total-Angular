import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UploadFilesService} from "../upload-files.service";

@Component({
  selector: 'gd-upload-file-zone',
  templateUrl: './upload-file-zone.component.html',
  styleUrls: ['./upload-file-zone.component.less']
})
export class UploadFileZoneComponent implements OnInit {

  @Output() closeUpload = new EventEmitter<boolean>();

  constructor(private _uploadService: UploadFilesService) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this._uploadService.changeFilesList(files);
    this.onCloseUpload();
  }

  onCloseUpload() {
    this.closeUpload.emit(true);
  }

  close($event) {
    if ($event.target.id === 'gd-dropZone') {
      this.onCloseUpload();
    }
  }
}
