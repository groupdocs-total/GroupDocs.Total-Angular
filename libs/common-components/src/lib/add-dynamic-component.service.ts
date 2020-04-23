import {
  ApplicationRef,
  ComponentFactoryResolver,
  Injectable,
  ViewContainerRef
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddDynamicComponentService {

  constructor(private _factoryResolver: ComponentFactoryResolver,
              private _appRef: ApplicationRef) {
  }

  addDynamicComponent(viewContainerRef: ViewContainerRef, component: any) {
    const factory = this._factoryResolver.resolveComponentFactory(component);
    const componentRef = viewContainerRef.createComponent(factory);

    componentRef.onDestroy(() => {
      this._appRef.detachView(componentRef.hostView);
    });

    return componentRef;
  }

}
