import {Component, Input, OnInit} from '@angular/core';
import {FileModel, FileUtil} from "../file.service";

@Component({
  selector: 'gd-browse-files-modal',
  templateUrl: './browse-files-modal.component.html',
  styleUrls: ['./browse-files-modal.component.less']
})
export class BrowseFilesModalComponent implements OnInit {

  @Input() files;

  constructor() { }

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
    return FileUtil.find(file).format;
  }

  getFormatIcon(file: FileModel) {
    return FileUtil.find(file).icon;
  }
}
