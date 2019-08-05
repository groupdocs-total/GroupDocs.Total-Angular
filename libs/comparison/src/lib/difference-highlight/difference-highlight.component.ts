import { Component, Input, OnInit } from '@angular/core';
import * as jquery from "jquery";
const $ = jquery;

@Component({
  selector: 'gd-difference-highlight',
  templateUrl: './difference-highlight.component.html',
  styleUrls: ['./difference-highlight.component.less']
})
export class DifferenceHighlightComponent implements OnInit{
  @Input() change: any;
  left = 0;
  top = 0;

  constructor() {
   }

   ngOnInit() {
    const x = this.change.box.x;
    const y = this.change.box.y;

    // TODO: take this widths&heights using jQuery
    const xOffcet = (1569 - 794)/2;
    const yOffcet = 20;

    this.left = xOffcet + x;
    this.top = yOffcet + y;
  }
}
