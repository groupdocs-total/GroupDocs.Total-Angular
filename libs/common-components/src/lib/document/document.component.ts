import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnInit,
  AfterViewInit,
  OnChanges,
  Output,
  EventEmitter,
  Renderer2
} from '@angular/core';
import {FileDescription, FileUtil} from "../file.service";
import {ZoomService} from "../zoom.service";
import * as Hammer from 'hammerjs';
import {WindowService} from '../window.service';
import * as jquery from 'jquery';
import { NavigateService } from '../navigate.service';

const $ = jquery;

@Component({
  selector: 'gd-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.less']
})
export class DocumentComponent implements OnInit, AfterViewChecked, AfterViewInit, OnChanges {

  @Input() mode: boolean;
  @Input() preloadPageCount: number;
  @Input() file: FileDescription;
  @Input() selectedPage: number;
  wait = false;
  zoom: number;

  docWidth = null;
  docHeight = null;
  viewportWidth = null;
  viewportHeight = null;
  scale = null;
  lastScale = null;
  container = null;
  doc = null;
  x = 0;
  lastX = 0;
  y = 0;
  lastY = 0;
  pinchCenter = null;
  pinchCenterOffset = null;
  curWidth = 0;
  curHeight = 0;
  isDesktop: boolean;

  renderer: Renderer2;

  constructor(protected _elementRef: ElementRef<HTMLElement>,
              private _zoomService: ZoomService,
              private _windowService: WindowService,
              private _navigateService: NavigateService,
              renderer: Renderer2) {

     this.renderer = renderer;

    _zoomService.zoomChange.subscribe((val: number) => {
      this.zoom = val;
    });

    this.isDesktop = _windowService.isDesktop();

    this._navigateService.navigate.subscribe(((
      value => {
        this.selectedPage = value;
      })));
  }

  ngOnInit() {
    if (this.ifPresentation())
    {
      this.selectedPage = this._navigateService.currentPage;
    }
  }

  ngOnChanges() {
  }

  ngAfterViewInit() {
    // For current iteration we take .panzoom as a document
    this.doc = this._elementRef.nativeElement.children.item(0).children.item(0);
    // For current iteration we take .gd-document as a container
    this.container = this._elementRef.nativeElement;

    this.docWidth = this.doc.clientWidth;
    this.docHeight = this.doc.clientHeight;
    this.viewportWidth = this.doc.offsetWidth;

    // For cases where we already have zoom defined we should include it
    this.scale = (this.viewportWidth / this.docWidth) * this._zoomService.zoom / 100;

    this.lastScale = this.scale;
    this.viewportHeight = this.container.offsetHeight;
    this.curWidth = this.docWidth * this.scale;
    this.curHeight = this.docHeight * this.scale;

    const hammer = new Hammer(this.container);

    this.initControlsListeners();
  }

  private initControlsListeners() {
    const inputs = this._elementRef.nativeElement.querySelectorAll('input');
    inputs.forEach(input => {
      this.renderer.listen(input, 'keyup', (event) => {
        input.setAttribute('value', input.value);
      });
    });

    const selects = this._elementRef.nativeElement.querySelectorAll('select');
    selects.forEach(select => {
      this.renderer.listen(select, 'change', (event) => {
        selects.forEach(s => {
          for (let i = s.options.length - 1; i >= 0; i--) {
            s.options[i].removeAttribute('selected');
          }
        });

        select.options[select.selectedIndex].setAttribute('selected', 'selected');
      });
    });
  }

  // TODO: this temporary crutch for Excel files should be documented
  ifExcel() {
    return FileUtil.find(this.file.guid, false).format === "Microsoft Excel";
  }

  ifPresentation() {
    return FileUtil.find(this.file.guid, false).format === "Microsoft PowerPoint";
  }

  getDimensionWithUnit(value: number, pageNumber: number) {
    return this.ifPresentation() && !this.isVisible(pageNumber) ? 0 : value + (this.mode ? FileUtil.find(this.file.guid, false).unit : 'px');
  }

  ifEdge() {
    return navigator.userAgent.toLowerCase().indexOf('edge') > -1;
  }

  ngAfterViewChecked(): void {
    // for now we are not sure that need this action in current implementation
    // const elementNodeListOf = this._elementRef.nativeElement.querySelectorAll('.gd-wrapper');
    // const element = elementNodeListOf.item(0);
    // if (element) {
    //   $(element).trigger('focus');
    // }
  }

  isVisible(pageNumber) {
    if (this.ifPresentation()) {
      return pageNumber === this.selectedPage ? true : false;
    }
    else {
      return true;
    }
  }
}
