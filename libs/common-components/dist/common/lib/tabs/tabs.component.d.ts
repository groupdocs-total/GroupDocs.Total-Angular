import { OnInit } from '@angular/core';
import { TabComponent } from "../tab/tab.component";
export declare class TabsComponent implements OnInit {
    tabs: TabComponent[];
    active: boolean;
    constructor();
    ngOnInit(): void;
    addTab(tab: TabComponent): void;
    selectTab(tabComponent: TabsComponent): void;
}
