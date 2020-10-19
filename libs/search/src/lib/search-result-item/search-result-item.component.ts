import { Component, Input, OnInit } from '@angular/core';
import { SearchResultItemModel } from '../search-models';
import { FileModel, FileUtil } from "@groupdocs.examples.angular/common-components";
import { Router } from '@angular/router';
import { SearchOptionsService } from '../search-options.service';

@Component({
  selector: 'gd-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.less']
})

export class SearchResultItemComponent implements OnInit {
  @Input() item: SearchResultItemModel;

  constructor(private searchOptionsService: SearchOptionsService) {
  }

  ngOnInit(): void {
  }

  getUrl(item: SearchResultItemModel): string {
    const caseSensitive = this.searchOptionsService.CaseSensitiveSearch ? "true" : "false";
    let result = window.location.origin + "/viewer?file=" + encodeURIComponent(item.guid) + "&caseSensitive=" + caseSensitive;
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
