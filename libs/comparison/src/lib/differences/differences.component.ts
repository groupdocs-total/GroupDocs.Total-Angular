import { Component, Input, OnInit } from '@angular/core';
import { ChangeInfo } from '@groupdocs.examples.angular/comparison';
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

  constructor(changeService : DifferencesService,navigateService: NavigateService,) {
    this.changesService = changeService;
    this.navigateService = navigateService;
  }

  ngOnInit() {}


  highlightDifference(id: string,page: number,event : MouseEvent){
    event.stopPropagation();
    this.changesService.setActiveChange(id);
    this.navigateService.navigateTo(page+1);
  }
}
