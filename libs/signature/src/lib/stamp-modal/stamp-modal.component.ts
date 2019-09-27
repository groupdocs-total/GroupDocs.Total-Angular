import {Component, ComponentRef, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SignatureType, StampCanvasProps} from "../signature-models";
import {ActiveCanvasService} from './../active-canvas.service'
import {SignatureService} from './../signature.service'
import {SignatureTabActivatorService} from "./../signature-tab-activator.service";
import {RemoveCanvasService} from "../remove-canvas.service";
import {StampCanvasComponent} from "../stamp-canvas/stamp-canvas.component";
import {
  AddDynamicComponentService, CommonModals,
  HostDynamicDirective, ModalService,
  WindowService
} from "@groupdocs.examples.angular/common-components";

@Component({
  selector: 'gd-stamp-modal',
  templateUrl: './stamp-modal.component.html',
  styleUrls: ['./stamp-modal.component.less']
})
export class StampModalComponent implements OnInit, OnDestroy {
  stampCircles = new Map<number, ComponentRef<any>>();
  textString: string;
  showText = false;

  @ViewChild(HostDynamicDirective, {static: true}) dynamicDirective: HostDynamicDirective;
  private defaultProps = new StampCanvasProps();
  private isMobile: boolean;
  private sizeMagnifier = 40;
  private activeId: number;

  constructor(private _addDynamicComponentService: AddDynamicComponentService,
              private _activeCanvasService: ActiveCanvasService,
              private _windowService: WindowService,
              private _removeCanvas: RemoveCanvasService,
              private _elementRef: ElementRef,
              private _signatureService: SignatureService,
              private _tabActivationService: SignatureTabActivatorService,
              private _modalService: ModalService) {

    this._removeCanvas.removeCanvas.subscribe((id: number) => {
      const componentRef = this.stampCircles.get(id);
      componentRef.destroy();
      this.stampCircles.delete(id);
    });

    this.isMobile = _windowService.isMobile();
    _windowService.onResize.subscribe((w) => {
      this.isMobile = _windowService.isMobile();
    });

    this._activeCanvasService.activeChange.subscribe((id: number) => {
      const element = this._elementRef.nativeElement.querySelector("#text-input");
      if (element) {
        element.value = '';
      }
      this.activeId = id;
      const comp = this.stampCircles.get(id);
      if (comp) {
        this.textString = (<StampCanvasComponent>comp.instance).props.text;
      }
    });

    this.defaultProps.init(this.isMobile);
  }

  ngOnInit() {
    const props = this.defaultProps;
    props.id = this.stampCircles.size + 1;
    this.addCircle(props, true);
  }

  saveSign() {
    const componentRef = this.stampCircles.get(this.stampCircles.size);
    const canvasComponent = <StampCanvasComponent>componentRef.instance;
    const lastProps = canvasComponent.props;
    const ctx = canvasComponent.ctx;
    const props = [];
    props.push(lastProps);
    for (let i = this.stampCircles.size - 1; i > 0; i--) {
      const comp = <StampCanvasComponent>this.stampCircles.get(i).instance;
      const canvas = comp.canvas.nativeElement;
      let offset = lastProps.width - comp.props.width;
      if (offset !== 0) {
        offset = offset / 2;
      }
      ctx.drawImage(canvas, offset, offset);
      props.push(comp.props);
    }
    props.reverse();
    const img = canvasComponent.canvas.nativeElement.toDataURL("image/png");
    this._signatureService.saveStamp(img, props).subscribe(() => {
      this._tabActivationService.changeActiveTab(SignatureType.STAMP.id);
    });
    this.close();
  }

  private close() {
    this._modalService.close(CommonModals.DrawStampSignature);
  }

  clear($event) {
    for (const comp of this.stampCircles.values()) {
      comp.destroy();
    }
    this.stampCircles = new Map<number, ComponentRef<any>>();
    this.close();
  }

  private addCircle(props: StampCanvasProps, theFirst: boolean) {
    if (this.dynamicDirective) {
      const viewContainerRef = this.dynamicDirective.viewContainerRef;
      const stampCircle = this._addDynamicComponentService.addDynamicComponent(viewContainerRef, StampCanvasComponent);
      (<StampCanvasComponent>stampCircle.instance).id = props.id;
      (<StampCanvasComponent>stampCircle.instance).theFirst = theFirst;
      (<StampCanvasComponent>stampCircle.instance).active = true;
      (<StampCanvasComponent>stampCircle.instance).props = props;
      (<StampCanvasComponent>stampCircle.instance).width = this.getWidth();
      (<StampCanvasComponent>stampCircle.instance).height = this.getHeight();
      this.stampCircles.set(props.id, stampCircle);
      this._activeCanvasService.changeActive(props.id);
    }
  }

  addCanvas() {
    const props = new StampCanvasProps();
    props.init(this.isMobile);
    props.id = this.stampCircles.size + 1;
    const componentRef = this.stampCircles.get(this.stampCircles.size);
    if (componentRef) {
      const lastProps = (<StampCanvasComponent>componentRef.instance).props;
      props.width = lastProps.width + this.sizeMagnifier;
      props.height = lastProps.height + this.sizeMagnifier;
      props.zIndex = lastProps.zIndex - 1;
    }
    this.addCircle(props, false);
    this.textString = '';
    this.showText = false;
  }

  ngOnDestroy(): void {
    this.clear(false);
  }

  addText(value: string) {
    const componentRef = this.stampCircles.get(this.activeId);
    if (componentRef) {
      const props = (<StampCanvasComponent>componentRef.instance).props;
      props.text = value;
      (<StampCanvasComponent>componentRef.instance).redrawCanvas();
    }
  }

  toggleText() {
    this.showText = !this.showText;
    if (this.showText) {
      setTimeout(() => {
        const element = this._elementRef.nativeElement.querySelector("#text-input");
        element.focus();
      }, 100);
    }
  }

  getWidth() {
    return this.isMobile ? this._windowService.getWidth() : 1036;
  }

  getHeight() {
    return this.isMobile ? this._windowService.getHeight() : 501;
  }
}
