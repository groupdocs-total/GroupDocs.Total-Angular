import {AfterViewInit, Directive, Input, OnDestroy, ViewContainerRef} from '@angular/core';
import {HostingDynamicComponentService} from "./hosting-dynamic-component.service";

@Directive({
  selector: '[gdHostDynamic]'
})
export class HostDynamicDirective implements AfterViewInit, OnDestroy {
  @Input() ident: number;

  constructor(public viewContainerRef: ViewContainerRef,
              private _hostingService: HostingDynamicComponentService) {
  }

  ngAfterViewInit(): void {
    this._hostingService.add(this);
  }

  ngOnDestroy(): void {
    this._hostingService.remove(this);
    this.viewContainerRef.clear();
  }

}
