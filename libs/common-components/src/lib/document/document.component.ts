import {Component, Input, OnInit} from '@angular/core';
import {FileDescription} from "../file.service";

@Component({
  selector: 'gd-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.less']
})
export class DocumentComponent implements OnInit {

  @Input() mode: boolean;
  @Input() preloadPageCount: number;
  @Input() file: FileDescription;

  constructor() { }

  ngOnInit() {
  }

}
