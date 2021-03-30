import { Component, OnInit } from '@angular/core';
import { DocumentViewService } from '../document-view.service';

@Component({
  selector: 'gd-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.less']
})
export class DocumentViewComponent implements OnInit {

  constructor(public documentViewService: DocumentViewService) { }

  ngOnInit() {
  }

}
