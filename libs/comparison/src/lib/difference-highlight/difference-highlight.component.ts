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

}
