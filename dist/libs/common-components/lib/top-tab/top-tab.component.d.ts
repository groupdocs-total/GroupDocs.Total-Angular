import { EventEmitter, OnInit } from '@angular/core';
import { ExceptionMessageService } from "../exception-message.service";
import { TopTabActivatorService } from "../top-tab-activator.service";
import { ModalService } from "../modal.service";
export declare class TopTabComponent implements OnInit {
    private _tabActivatorService;
    private _modalService;
    private _excMessageService;
    id: string;
    icon: string;
    disabled: boolean;
    tooltip: string;
    activeTab: EventEmitter<string>;
    active: boolean;
    showToolTip: boolean;
    constructor(_tabActivatorService: TopTabActivatorService, _modalService: ModalService, _excMessageService: ExceptionMessageService);
    private activation;
    ngOnInit(): void;
    toggleTab(): void;
}
