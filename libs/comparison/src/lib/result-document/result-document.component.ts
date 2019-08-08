import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { DocumentComponent } from '@groupdocs.examples.angular/common-components';
import {ZoomService,ZoomDirective} from  '@groupdocs.examples.angular/common-components';
import * as jquery from 'jquery';
import { Highlight } from '@groupdocs.examples.angular/comparison';
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
  @Input() highlights: Highlight[] = [];
  private changesService : DifferencesService;

  constructor(_elementRef: ElementRef<HTMLElement>,
              zoomService: ZoomService,
              changeService : DifferencesService) {
    super(_elementRef, zoomService)
    this.changesService = changeService;
  }

  close(){
    this.changesService.setActiveChange(null)
  }

  ngOnInit(){
  }
}
