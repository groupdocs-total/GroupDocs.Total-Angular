import { Component, ElementRef, OnInit, ViewChildren, QueryList, AfterViewInit, Renderer2 } from '@angular/core';
import { DocumentComponent, WindowService, NavigateService } from '@groupdocs.examples.angular/common-components';
import { ZoomService } from  '@groupdocs.examples.angular/common-components';
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
  navigateService: NavigateService;

  constructor(_elementRef: ElementRef<HTMLElement>,
              zoomService: ZoomService,
              windowService: WindowService,
              navigateService: NavigateService,
              private renderer: Renderer2) {
    super(_elementRef, zoomService, windowService, navigateService);
    this.navigateService = navigateService;
  }

  ngOnInit(){
    this.currentPageNo = 1;
  }

  ngAfterViewInit() {
    this.navigateService.navigate.subscribe(((
     value => {
       if (value) {
         this.selectSheet(value);
       }
     })));

    const scrollbarWidth = this.getScrollBarWidth();
    this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.sheets'), 'right', this.getScrollBarWidth() + 'px');
    this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.sheets'), 'bottom', this.getScrollBarWidth() + 'px');
    if (scrollbarWidth === 0) {
      this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.sheets'), 'padding-right', '17px');
    }
  }

  getScrollBarWidth() {
    const documentBox = document.querySelector('.gd-document') as HTMLElement;
    const scrollbarWidth = documentBox.offsetWidth - documentBox.clientWidth;
    return scrollbarWidth;
  }

  selectSheet(number){
    this.currentPageNo = number;
  }
}
