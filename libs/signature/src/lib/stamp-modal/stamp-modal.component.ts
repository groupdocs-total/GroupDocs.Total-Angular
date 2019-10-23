import {Component, ComponentRef, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SignatureType, StampCanvasProps} from "../signature-models";
import {ActiveCanvasService} from './../active-canvas.service'
import {SignatureService} from './../signature.service'
import {SignatureTabActivatorService} from "./../signature-tab-activator.service";
import {RemoveCanvasService} from "../remove-canvas.service";
import {StampCanvasComponent} from "../stamp-canvas/stamp-canvas.component";
import {
  AddDynamicComponentService, CommonModals, Formatting,
  HostDynamicDirective, ModalService,
  WindowService
} from "@groupdocs.examples.angular/common-components";
import * as jquery from "jquery";
const $ = jquery;

@Component({
  selector: 'gd-stamp-modal',
  templateUrl: './stamp-modal.component.html',
  styleUrls: ['./stamp-modal.component.less']
})
export class StampModalComponent implements OnInit, OnDestroy {
  stampCircles = new Map<number, ComponentRef<any>>();
  textString = '';
  showText = false;

  @ViewChild(HostDynamicDirective, {static: true}) dynamicDirective: HostDynamicDirective;

  private isMobile: boolean;
  private sizeMagnifier = 40;
  private activeId: number;
  textProps = Formatting.default();

  constructor(private _addDynamicComponentService: AddDynamicComponentService,
              private _activeCanvasService: ActiveCanvasService,
              private _windowService: WindowService,
              private _removeCanvas: RemoveCanvasService,
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
      this.activeId = id;
    });
  }

  ngOnInit() {
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

  onCloseOpen($event) {
    if ($event) {
      this.textString = '';
      const props = new StampCanvasProps().init(this.isMobile);
      props.id = this.stampCircles.size + 1;
      this.addCircle(props, true);
    } else {
      this.clear();
    }
  }

  clear() {
    for (const comp of this.stampCircles.values()) {
      comp.destroy();
    }
    this.stampCircles = new Map<number, ComponentRef<any>>();
    this.showText = false;
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
    this.showText = false;
  }

  ngOnDestroy(): void {
    this.clear();
  }

  addText(value: string) {
    this.textString = value;
    const componentRef = this.stampCircles.get(1);
    if (componentRef) {
      const props = (<StampCanvasComponent>componentRef.instance).props;
      props.text = value;
      (<StampCanvasComponent>componentRef.instance).redrawCanvas();
      this.showText = false;
      this._activeCanvasService.changeActive(props.id);
    }
  }

  toggleText() {
    this.showText = !this.showText;
    if (this.showText) {
      this._activeCanvasService.changeActive(null);
    }
    if (this.showText) {
      setTimeout(() => {
        const element = $("#text-input");
        if (element) {
          element.focus();
        }
      }, 100);
    }
  }

  toggleUnderline($event: boolean) {
    this.textProps.underline = $event;
    const componentRef = this.stampCircles.get(1);
    if (componentRef) {
      const props = (<StampCanvasComponent>componentRef.instance).props;
      props.underline = $event;
      (<StampCanvasComponent>componentRef.instance).redrawCanvas();
    }
  }

  toggleBold($event: boolean) {
    this.textProps.bold = $event;
    const componentRef = this.stampCircles.get(1);
    if (componentRef) {
      const props = (<StampCanvasComponent>componentRef.instance).props;
      props.bold = $event;
      (<StampCanvasComponent>componentRef.instance).redrawCanvas();
    }
  }

  toggleItalic($event: boolean) {
    this.textProps.italic = $event;
    const componentRef = this.stampCircles.get(1);
    if (componentRef) {
      const props = (<StampCanvasComponent>componentRef.instance).props;
      props.italic = $event;
      (<StampCanvasComponent>componentRef.instance).redrawCanvas();
    }
  }

  selectTextColor($event: string) {
    this.textProps.color = $event;
    const componentRef = this.stampCircles.get(1);
    if (componentRef) {
      const props = (<StampCanvasComponent>componentRef.instance).props;
      props.textColor = $event;
      (<StampCanvasComponent>componentRef.instance).redrawCanvas();
    }
  }

  selectFont($event: string) {
    this.textProps.font = $event;
    const componentRef = this.stampCircles.get(1);
    if (componentRef) {
      const props = (<StampCanvasComponent>componentRef.instance).props;
      props.font = $event;
      (<StampCanvasComponent>componentRef.instance).redrawCanvas();
    }
  }

  selectFontSize($event: number) {
    this.textProps.fontSize = $event;
    const componentRef = this.stampCircles.get(1);
    if (componentRef) {
      const props = (<StampCanvasComponent>componentRef.instance).props;
      props.fontSize = $event;
      (<StampCanvasComponent>componentRef.instance).redrawCanvas();
    }
  }

  getWidth() {
    return this.isMobile ? this._windowService.getWidth() : 1036;
  }

  getHeight() {
    return this.isMobile ? this._windowService.getHeight() : 501;
  }

  deleteText() {
    const componentRef = this.stampCircles.get(1);
    if (componentRef) {
      const props = (<StampCanvasComponent>componentRef.instance).props;
      props.text = "";
      (<StampCanvasComponent>componentRef.instance).redrawCanvas();
      this.showText = false;
      this._activeCanvasService.changeActive(props.id);
    }
  }

}
