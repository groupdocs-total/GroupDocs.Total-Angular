import { Component, Input, OnInit } from '@angular/core';
import {ChangeInfo} from "../models";

@Component({
  selector: 'gd-comparison-difference',
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.less']
})
export class DifferenceComponent implements OnInit {
  @Input() change: ChangeInfo;

  constructor() { }

  ngOnInit() {
  }

}
