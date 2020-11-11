import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DocumentComponent, NavigateService, WindowService } from '@groupdocs.examples.angular/common-components';
import {ZoomService,ZoomDirective} from  '@groupdocs.examples.angular/common-components';
import * as jquery from 'jquery';
import { DifferencesService } from '../differences.service';
const $ = jquery;

@Component({
  selector: 'gd-result-document',
  templateUrl: './result-document.component.html',
  styleUrls: ['./result-document.component.less'], // @TODO: this is replicated from base component until styles inheritance supported added to angular
  providers : [ZoomService],
  viewProviders : [ZoomDirective]
})
export class ResultDocumentComponent extends DocumentComponent implements OnInit  {
  private changesService : DifferencesService;

  constructor(_elementRef: ElementRef<HTMLElement>,
              zoomService: ZoomService,
              changeService : DifferencesService,
              windowService: WindowService,
              navigateService: NavigateService,
              renderer: Renderer2) {
    super(_elementRef, zoomService, windowService, navigateService, renderer);
    this.changesService = changeService;
  }

  close(){
    this.changesService.setActiveChange(null)
  }

  ngOnInit(){
  }
}
