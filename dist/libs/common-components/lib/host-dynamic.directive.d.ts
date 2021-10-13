import { AfterViewInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { HostingDynamicComponentService } from "./hosting-dynamic-component.service";
export declare class HostDynamicDirective implements AfterViewInit, OnDestroy {
    viewContainerRef: ViewContainerRef;
    private _hostingService;
    ident: number;
    constructor(viewContainerRef: ViewContainerRef, _hostingService: HostingDynamicComponentService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
