import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {FileModel, FileUtil} from "../file.service";

const upload_disc = 'Disc';

const upload_url = 'url';

const uploads_choices = [{name: upload_disc, icon: 'hdd'}, {name: upload_url, icon: 'link'}];

@Component({
  selector: 'gd-browse-files-modal',
  templateUrl: './browse-files-modal.component.html',
  styleUrls: ['./browse-files-modal.component.less']
})
export class BrowseFilesModalComponent implements OnInit {
  uploads = uploads_choices;

  @Input() files;
  @Output() selectedFileGuid = new EventEmitter<string>();
  @Output() selectedDirectory = new EventEmitter<string>();
  @Output() urlForUpload = new EventEmitter<string>();
  private selectedFile: FileModel;
  showUploadUrl: boolean = false;
  showUploadFile: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  getSize(size: number) {
    const mb = size / 1024 / 1024;
    if (mb > 1) {
      return (Math.round(mb * 100) / 100) + ' MB';
    } else {
      const kb = size / 1024;
      if (kb > 1) {
        return (Math.round(kb * 100) / 100) + ' KB';
      }
    }
    return size + ' Bytes';
  }

  getFormatName(file: FileModel) {
    return FileUtil.find(file.name, file.directory).format;
  }

  getFormatIcon(file: FileModel) {
    return FileUtil.find(file.name, file.directory).icon;
  }

  choose(file: FileModel) {
    this.selectedFile = file;
    if (file.directory) {
      this.selectedDirectory.emit(file.guid);
    } else {
      this.selectedFileGuid.emit(file.guid);
    }
  }

  goUp() {
    if (this.selectedFile) {
      var guid = this.selectedFile.guid;
      if (guid.length > 0 && guid.indexOf('/') == -1) {
        guid = '';
      } else {
        guid = guid.replace(/\/[^\/]+\/?$/, '');
      }
      this.selectedDirectory.emit(guid);
    }
  }

  selectUpload($event: string) {
    if (upload_url == $event) {
      this.showUploadUrl = true;
      this.showUploadFile = false;
    } else {
      this.showUploadFile = true;
      this.showUploadUrl = false;
    }
  }

  refresh($event) {
    if ($event) {
      this.files = null;
      this.selectedDirectory.emit('');
      this.showUploadUrl = false;
      this.showUploadFile = false;
      this.selectedFile = null;
    }
  }

  showSpinner() {
    return !this.files;
  }

  uploadUrl(url: string) {
    if (url) {
      this.urlForUpload.emit(url);
      this.cleanUpload();
    }
  }

  cleanUpload() {
    this.showUploadFile = false;
    this.showUploadUrl = false;
  }
}
