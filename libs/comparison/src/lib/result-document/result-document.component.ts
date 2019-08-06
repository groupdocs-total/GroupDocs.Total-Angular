import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { DocumentComponent } from '@groupdocs.examples.angular/common-components';
import {ZoomService,ZoomDirective} from  '@groupdocs.examples.angular/common-components';
import * as jquery from 'jquery';
const $ = jquery;

@Component({
  selector: 'gd-result-document',
  templateUrl: './result-document.component.html',
  styleUrls: ['./result-document.component.less'], // @TODO: this is replicated from base component until styles inheritance supported added to angular
  providers : [ZoomService],
  viewProviders : [ZoomDirective]
})
export class ResultDocumentComponent extends DocumentComponent implements OnInit  {


}
