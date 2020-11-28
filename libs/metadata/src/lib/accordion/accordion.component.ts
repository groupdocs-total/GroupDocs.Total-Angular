import { Component, AfterContentInit } from '@angular/core';

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
