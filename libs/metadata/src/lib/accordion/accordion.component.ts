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
  @ContentChildren(AccordionGroupComponent)
  groups: QueryList<AccordionGroupComponent>;

  ngAfterContentInit() {
    this.groups.toArray().forEach((group) => {
      group.opened = true;

      group.toggle.subscribe(($event) => {
        $event.preventDefault();
        $event.stopPropagation();
        this.openGroup(group);
      });
    });
  }

  openGroup(group: AccordionGroupComponent) {
    group.opened = !group.opened;
  }
}
