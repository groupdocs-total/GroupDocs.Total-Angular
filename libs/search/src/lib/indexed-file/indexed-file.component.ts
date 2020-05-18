import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from "../search.service";
import { FileModel, FileUtil } from '@groupdocs.examples.angular/common-components';

@Component({
  selector: 'gd-indexed-file',
  templateUrl: './indexed-file.component.html',
  styleUrls: ['./indexed-file.component.less']
})

export class IndexedFileComponent implements OnInit {
  @Input() file: FileModel;

  constructor(private _searchService: SearchService) {
  }
  
  ngOnInit(): void {
  }

  removeFile($event, file: FileModel) {
    $event.preventDefault();
    $event.stopPropagation();
    this._searchService.selectedItemToRemove(file);
  }

  getSizeString(size: number) {
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

  getFormatIcon(file: FileModel) {
    return FileUtil.find(file.name, file.directory).icon;
  }

  getFormatName(file: FileModel) {
    return FileUtil.find(file.name, file.directory).format;
  }
}
