import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'gd-document-page',
  templateUrl: './document-page.component.html',
  styleUrls: ['./document-page.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class DocumentPageComponent implements OnInit {
  @Input() page: SafeHtml;

  constructor() {
  }

  ngOnInit() {
  }

}
