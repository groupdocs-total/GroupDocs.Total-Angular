import {AfterViewChecked, ChangeDetectorRef, Component, ElementRef, Input, OnInit} from '@angular/core';
import {ViewportService} from "../viewport.service";
import * as jquery from 'jquery';
const $ = jquery;

@Component({
  selector: 'gd-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.less']
})
export class SidePanelComponent {
  constructor() {
  }
}
