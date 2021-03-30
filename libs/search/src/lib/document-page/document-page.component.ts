import { Component, Input, OnInit } from '@angular/core';
import { DocumentPage } from '../search-models';

@Component({
  selector: 'gd-document-page',
  templateUrl: './document-page.component.html',
  styleUrls: ['./document-page.component.less']
})
export class DocumentPageComponent implements OnInit {
  @Input() page: DocumentPage;

  constructor() {
  }

  ngOnInit() {
  }

}
