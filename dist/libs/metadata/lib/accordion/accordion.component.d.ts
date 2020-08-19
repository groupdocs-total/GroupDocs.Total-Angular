import { QueryList, AfterContentInit } from '@angular/core';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';
export declare class AccordionComponent implements AfterContentInit {
    groups: QueryList<AccordionGroupComponent>;
    ngAfterContentInit(): void;
    openGroup(group: AccordionGroupComponent): void;
}
