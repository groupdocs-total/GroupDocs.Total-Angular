import { Component, Input, OnInit } from '@angular/core';
import { SearchResultItemModel } from '../search-models';
import { FileModel, FileUtil } from "@groupdocs.examples.angular/common-components";

@Component({
  selector: 'gd-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.less']
})

export class SearchResultItemComponent implements OnInit {
  @Input() item: SearchResultItemModel;

  constructor() {
  }
  
  ngOnInit(): void {
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

  getOccurrencesMessage(occurrences: number) {
    return "Found <b>" + occurrences + "</b> occurrences"
  }

  togglePhrases(item) {
    item.showPhrases = !item.showPhrases;
  }
}
