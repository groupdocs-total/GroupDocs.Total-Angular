import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HighlightDocumentService } from '../highlight-document.service';

@Component({
  selector: 'gd-highlight-document',
  templateUrl: './highlight-document.component.html',
  styleUrls: ['./highlight-document.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class HighlightDocumentComponent implements OnInit {
  subscription: any;

  constructor(public highlightDocumentService: HighlightDocumentService) {
  }

  ngOnInit() {
  }

}
