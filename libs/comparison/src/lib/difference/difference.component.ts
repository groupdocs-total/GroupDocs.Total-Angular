import { Component, Input, OnInit } from '@angular/core';
import { ChangeInfo, StyleChange } from '../models';
import { DifferencesService } from '../differences.service';

@Component({
  selector: 'gd-comparison-difference',
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.less']
})
export class DifferenceComponent implements OnInit {
  @Input() change: ChangeInfo;
  active: boolean;

  private changesService : DifferencesService;

  public actions = [
    {value: 1, id:"Accept"},
    {value: 2, id:"Reject"},
    {value: 3, id:"None"},
  ]
  public changeAction: string;

  constructor(changeService : DifferencesService) {
    this.changesService = changeService;
  }

  addAction(id, action) {
    this.changesService.addToComparisonActions(id, action)
  }

  ngOnInit() {
    this.changesService.activeChange.subscribe(activeID => this.active = this.change.id === activeID)
  }

  getRgbaColor(value){
    return `rgba(${value.red},${value.green},${value.blue},${value.alpha})`;
  }
}
