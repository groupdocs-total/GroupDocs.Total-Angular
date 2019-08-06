import { Component, Input, OnInit } from '@angular/core';
import {ChangeInfo} from "../models";
import * as jquery from "jquery";
const $ = jquery;

@Component({
  selector: 'gd-difference-highlight',
  templateUrl: './difference-highlight.component.html',
  styleUrls: ['./difference-highlight.component.less']
})
export class DifferenceHighlightComponent implements OnInit{
  @Input() change: ChangeInfo;
  @Input() active: boolean;
  left = 0;
  top = 0;

  constructor() {
   }

   ngOnInit() {
    const x = this.change.box.x;
    const y = this.change.box.y;

    // TODO: take this widths&heights using jQuery
    const xOffcet = (1569 - 794)/2; // .panzoom width - .gd-page-image width
    const yOffcet = this.change.pageInfo.id === 0 ? 
                    20 : // .page margin
                    // borders + .page margin + .page margins + page number * .gd-page-image height
                    5 + 20 + 40 + (this.change.pageInfo.id * 1123);

    this.left = xOffcet + x;
    this.top = yOffcet + y;
  }
}
