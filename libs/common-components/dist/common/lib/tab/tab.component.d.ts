import { OnInit } from '@angular/core';
import { TabsComponent } from "../tabs/tabs.component";
export declare class TabComponent implements OnInit {
    tabTitle: any;
    icon: any;
    active: boolean;
    constructor(tabs: TabsComponent);
    ngOnInit(): void;
}
