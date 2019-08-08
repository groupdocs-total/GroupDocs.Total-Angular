import { Component, Input, OnInit } from '@angular/core';
import {ChangeInfo} from "../models";
import { DifferencesService } from '../differences.service';
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
  private changesService : DifferencesService;

  constructor(changeService : DifferencesService) {
    this.changesService = changeService;
  }
  ngOnInit(){
    this.changesService.activeChange.subscribe(activeID => this.active = this.change.id === activeID);
  }

  close(id : string, event: Event){
    if(event && event['value'] === true) {
      this.changesService.setActiveChange(null);
    }
  }

  highlight(id : string){
    this.changesService.setActiveChange(id);
  }
}
