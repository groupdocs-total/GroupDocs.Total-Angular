import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileModel, FileUtil} from "../file.service";
import {UploadFilesService} from "../upload-files.service";
import * as jquery from "jquery";
const $ = jquery;

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
  @Input() uploadConfig;
  @Output() selectedFileGuid = new EventEmitter<string>();
  @Output() selectedDirectory = new EventEmitter<string>();
  @Output() urlForUpload = new EventEmitter<string>();
  @Output() closing = new EventEmitter<boolean>();
  private selectedFile: FileModel;
  showUploadUrl = false;
  showUploadFile = false;

  constructor(private _uploadService: UploadFilesService) {
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
      let guid = this.selectedFile.guid;
      if (guid.length > 0 && guid.indexOf('/') === -1) {
        guid = '';
      } else {
        guid = guid.replace(/\/[^\/]+\/?$/, '');
      }
      this.selectedDirectory.emit(guid);
    }
  }

  selectUpload($event: string) {
    if (upload_url === $event) {
      this.showUploadUrl = true;
    } else {
      this.showUploadUrl = false;
      $("#gd-upload-input").trigger('click');
    }
  }

  refresh($event) {

    if ($event) {
      this.files = null;
      this.selectedDirectory.emit('');
      this.showUploadUrl = false;
      this.selectedFile = null;
    } else {
      this.closing.emit(true);
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

  handleFileInput(files: FileList) {
    this._uploadService.changeFilesList(files);
  }

  cleanUpload() {
    this.showUploadFile = false;
    this.showUploadUrl = false;
  }
}
