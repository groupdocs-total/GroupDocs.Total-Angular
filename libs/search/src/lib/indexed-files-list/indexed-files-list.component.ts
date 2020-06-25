import { Component, Input, OnInit } from '@angular/core';
import { FileModel } from '@groupdocs.examples.angular/common-components';

@Component({
  selector: 'gd-indexed-files-list',
  templateUrl: './indexed-files-list.component.html',
  styleUrls: ['./indexed-files-list.component.less']
})

export class IndexedFilesListComponent implements OnInit {
  @Input() files: FileModel[] = [];

  constructor() {
  }
  
  ngOnInit(): void {
  }
}