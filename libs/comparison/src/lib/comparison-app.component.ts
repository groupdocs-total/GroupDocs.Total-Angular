import {Component, AfterViewInit} from '@angular/core';
import * as jquery from 'jquery';
const $ = jquery;

@Component({
  selector: 'gd-editor-angular-root',
  templateUrl: './comparison-app.component.html',
  styleUrls: ['./comparison-app.component.less']
})
export class ComparisonAppComponent implements AfterViewInit  {
  ngAfterViewInit(): void {
  }

}
