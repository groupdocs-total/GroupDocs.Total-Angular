import { ApplicationRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
export declare class AddDynamicComponentService {
    private _factoryResolver;
    private _appRef;
    constructor(_factoryResolver: ComponentFactoryResolver, _appRef: ApplicationRef);
    addDynamicComponent(viewContainerRef: ViewContainerRef, component: any): import("@angular/core").ComponentRef<{}>;
}
