import { Component, ElementRef, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { DocumentComponent } from '../document/document.component';
import { WindowService } from '../window.service';
import { NavigateService } from '../navigate.service';
import { ZoomService } from  '../zoom.service';
import { ExcelPageComponent } from '../excel-page/excel-page.component';

@Component({
  selector: 'gd-excel-document',
  templateUrl: './excel-document.component.html',
  styleUrls: ['./excel-document.component.less'],
})
export class ExcelDocumentComponent extends DocumentComponent implements OnInit, AfterViewInit  {
  @ViewChildren(ExcelPageComponent) pages: QueryList<ExcelPageComponent>; 
  
  currentPageNo: number;
  panzoom = null;

  constructor(_elementRef: ElementRef<HTMLElement>,
              zoomService: ZoomService,
              windowService: WindowService,
              private _navigateService: NavigateService) {
    super(_elementRef, zoomService, windowService);
  }

  ngOnInit(){
    this.currentPageNo = 1;
  }

  ngAfterViewInit() {
    this.refreshExcelDocHeight();
    this.pages.changes.subscribe(()=>{
        this.refreshExcelDocHeight();
    });

    this._navigateService.navigate.subscribe(
     value => {
         this.selectSheet(value);
     });
  }

  refreshExcelDocHeight() {
    // For current iteration we'll change actual height of .document
    this.doc = this._elementRef.nativeElement.children.item(0);
    this.panzoom = this._elementRef.nativeElement.children.item(0).children.item(0);
    // magic number 37 is the height of the bottom-bar with navigation between pages
    this.doc.style.height = this.panzoom.scrollHeight + 37 + "px";
  }

  selectSheet(number){
    this.currentPageNo = number;
  }
}
