import { Component, OnInit } from '@angular/core';
import { IndexPropertiesService } from '../index-properties.service';

@Component({
  selector: 'gd-index-properties-panel',
  templateUrl: './index-properties-panel.component.html',
  styleUrls: ['./index-properties-panel.component.less']
})
export class IndexPropertiesPanelComponent implements OnInit {
  arePropertiesVisible = false;

  constructor(public properties: IndexPropertiesService) {
  }

  ngOnInit() {
  }

  toggleVisibility() {
    if (this.arePropertiesVisible) {
      this.arePropertiesVisible = false;
    } else {
      this.arePropertiesVisible = true;
    }
  }
}
