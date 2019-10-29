import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { DocumentComponent, WindowService } from '@groupdocs.examples.angular/common-components';
import {ZoomService,ZoomDirective} from  '@groupdocs.examples.angular/common-components';
import * as jquery from 'jquery';
const $ = jquery;

@Component({
  selector: 'gd-excel-document',
  templateUrl: './excel-document.component.html',
  styleUrls: ['./excel-document.component.less'], // @TODO: this is replicated from base component until styles inheritance supported added to angular
  providers : [ZoomService],
  viewProviders : [ZoomDirective]
})
export class ExcelDocumentComponent extends DocumentComponent implements OnInit  {
  //private changesService : DifferencesService;
  private currentPageNo: number;

  constructor(_elementRef: ElementRef<HTMLElement>,
              zoomService: ZoomService,
              //changeService : DifferencesService,
              windowService: WindowService) {
    super(_elementRef, zoomService, windowService);
    //this.changesService = changeService;
  }

  close(){
    //this.changesService.setActiveChange(null)
  }

  ngOnInit(){
    this.currentPageNo = 1;
  }

  selectSheet(number){
    this.currentPageNo = number;
  }
}
