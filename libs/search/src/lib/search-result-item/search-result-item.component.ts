import { Component, Input, OnInit } from '@angular/core';
import { SearchResultItemModel } from '../search-models';
import { FileModel, FileUtil } from "@groupdocs.examples.angular/common-components";
import { Router } from '@angular/router';

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

  getUrl(item: SearchResultItemModel): string {
    let result = window.location.origin + "/viewer?file=" + encodeURIComponent(item.guid);
    for (let i = 0; i < item.terms.length; i++) {
      result += "&term=" + encodeURIComponent(item.terms[i]);
    }
    return result;
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
