import { Component, OnInit } from '@angular/core';
import { DocumentViewService } from '../document-view.service';

@Component({
  selector: 'gd-prepare-document',
  templateUrl: './prepare-document.component.html',
  styleUrls: ['./prepare-document.component.less']
})
export class PrepareDocumentComponent implements OnInit {

  constructor(public documentViewService: DocumentViewService) {
  }

  ngOnInit() {
  }

}
