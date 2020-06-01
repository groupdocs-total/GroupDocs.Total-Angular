import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from "../search.service";
import { FileModel, FileUtil } from '@groupdocs.examples.angular/common-components';
import { IndexedFileModel, FileIndexingStatus } from '../search-models';

@Component({
  selector: 'gd-indexed-file',
  templateUrl: './indexed-file.component.html',
  styleUrls: ['./indexed-file.component.less']
})

export class IndexedFileComponent implements OnInit {
  @Input() file: IndexedFileModel;

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

  getFormatIcon() {
    return FileUtil.find(this.file.name, this.file.directory).icon;
  }

  getFormatName() {
    return FileUtil.find(this.file.name, this.file.directory).format;
  }

  getStatusIcon() {
    switch (this.file.documentStatus) {
      case FileIndexingStatus.Indexing:
      case FileIndexingStatus.PasswordRequired:
        return "circle-notch";
      case FileIndexingStatus.SuccessfullyProcessed:
        return "check";
      case FileIndexingStatus.ProcessedWithError:
        return "times";
      case FileIndexingStatus.Skipped:
        return "forward";
      default:
        return "times";
    }
  }

  getStatusTitle() {
    switch (this.file.documentStatus) {
      case FileIndexingStatus.Indexing:
      case FileIndexingStatus.PasswordRequired:
        return "Indexing";
      case FileIndexingStatus.SuccessfullyProcessed:
        return "Indexed";
      case FileIndexingStatus.ProcessedWithError:
        return "Error"
      case FileIndexingStatus.Skipped:
        return "Skipped";
      default:
        return "times";
    }
  }
}
