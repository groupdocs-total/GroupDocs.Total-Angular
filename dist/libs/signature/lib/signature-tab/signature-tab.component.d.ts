import { EventEmitter, OnInit } from '@angular/core';
import { ExceptionMessageService, ModalService } from "@groupdocs.examples.angular/common-components";
import { SignatureTabActivatorService } from "../signature-tab-activator.service";
export declare class SignatureTabComponent implements OnInit {
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
    constructor(_tabActivatorService: SignatureTabActivatorService, _modalService: ModalService, _excMessageService: ExceptionMessageService);
    private activation;
    ngOnInit(): void;
    toggleTab(): void;
}
