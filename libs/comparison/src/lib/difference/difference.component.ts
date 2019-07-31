import { Component, Input, OnInit } from '@angular/core';
//import {ChangeInfo} from "@groupdocs.examples.angular/comparison";

@Component({
  selector: 'gd-comparison-difference',
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.less']
})
export class DifferenceComponent implements OnInit {
  // TODO: this leads to `circular dependency detected` warning
  //@Input() change: ChangeInfo;
  @Input() change: any;

  constructor() { }

  ngOnInit() {
  }

}
