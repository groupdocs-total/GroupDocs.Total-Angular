import { Component, ContentChildren, QueryList, AfterContentInit, Input } from '@angular/core';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';
import { FileDescription } from '@groupdocs.examples.angular/common-components';

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

  /**
   * Invoked when all children (groups) are ready
   */
  ngAfterContentInit() {
    // Loop through all Groups
    this.groups.toArray().forEach((group) => {
      group.opened = true;
      // when title bar is clicked
      // (toggle is an @output event of Group)
      group.toggle.subscribe(($event) => {
        $event.preventDefault();
        $event.stopPropagation();
        // Open the group
        this.openGroup(group);
      });
      /*t.toggle.subscribe((group) => {
        // Open the group
        this.openGroup(group);
      });*/
    });
  }

  /**
   * Open an accordion group
   * @param group   Group instance
   */
  openGroup(group: AccordionGroupComponent) {
    // open current group
    group.opened = !group.opened;
  }
}
