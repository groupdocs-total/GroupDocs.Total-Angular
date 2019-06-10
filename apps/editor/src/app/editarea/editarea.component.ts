import {Component, Input, OnInit} from '@angular/core';
import {FileDescription} from "@groupdocs-total-angular/common-components";

@Component({
  selector: 'gd-editarea',
  templateUrl: './editarea.component.html',
  styleUrls: ['./editarea.component.less']
})
export class EditAreaComponent implements OnInit {

  @Input() file: FileDescription;

  constructor() { }

  ngOnInit() {
  }
}
