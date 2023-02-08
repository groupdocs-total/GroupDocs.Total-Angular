import { Component, Input, OnInit } from '@angular/core';
import { ChangeInfo } from './../models';
import { DifferencesService } from '../differences.service';
import { NavigateService } from '@groupdocs.examples.angular/common-components';

@Component({
  selector: 'gd-differences',
  templateUrl: './differences.component.html',
  styleUrls: ['./differences.component.less']
})
export class DifferencesComponent implements OnInit {

  @Input() changes : ChangeInfo[] = [];
  private changesService : DifferencesService;
  private navigateService;

  constructor(changeService : DifferencesService, navigateService: NavigateService,) {
    this.changesService = changeService;
    this.navigateService = navigateService;
  }

  ngOnInit() {}

  newChanges(changes) {
    let changesIds = []
    let sortedActions = []
    
    for (let i = 0; i < changes.length; i++)
    {
      changesIds.push(changes[i].id);
    }
    for (let i = 0; i < changesIds.length; i++)
    {
      if (this.changesService.comparisonActionsMap.get(changesIds[i]) === undefined) sortedActions.push(3);
      else sortedActions.push(this.changesService.comparisonActionsMap.get(changesIds[i]));
    }

    this.changesService.comparisonActionsList = sortedActions;    
  }

  highlightDifference(id: string, page: number, event : MouseEvent){
    event.stopPropagation();
    this.changesService.setActiveChange(id);
    this.navigateService.navigateTo(page+1);
  }
}
