import { OnInit } from '@angular/core';
import { TabActivatorService } from "../tab-activator.service";
export declare class TabComponent implements OnInit {
    private _tabActivatorService;
    id: string;
    tabTitle: string;
    icon: string;
    disabled: boolean;
    active: boolean;
    content: boolean;
    constructor(_tabActivatorService: TabActivatorService);
    private activation;
    ngOnInit(): void;
    selectTab(): void;
}
