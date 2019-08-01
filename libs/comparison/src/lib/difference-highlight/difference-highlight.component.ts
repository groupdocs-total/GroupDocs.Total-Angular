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
    var x = this.change.box.x;
    var y = this.change.box.y;

    // TODO: take this widths&heights using jQuery
    var xOffcet = (1569 - 794)/2;
    var yOffcet = (60 + 37 + 20);

    this.left = xOffcet + x;
    this.top = yOffcet + y;
  }
}
