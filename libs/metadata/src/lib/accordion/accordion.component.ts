import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';

@Component({
  selector: 'gd-accordion',
  template: `
    <ng-content></ng-content>
`,
  styleUrls: ['./accordion.component.less']
})

export class AccordionComponent  implements AfterContentInit {
  ngAfterContentInit() {
  }
}
