import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnInit,
  AfterViewInit,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';
import {FileDescription, FileUtil, PageModel} from "@groupdocs.examples.angular/common-components";
import {ZoomService} from "@groupdocs.examples.angular/common-components";
import * as Hammer from 'hammerjs';
import {WindowService} from "@groupdocs.examples.angular/common-components";
import * as jquery from 'jquery';
import { NavigateService } from "@groupdocs.examples.angular/common-components";
import { Subject } from 'rxjs';
import { Constants } from '../viewer.constants';

const $ = jquery;

@Component({
  selector: 'gd-run-presentation',
  templateUrl: './run-presentation.component.html',
  styleUrls: ['./run-presentation.component.less']
})
export class RunPresentationComponent implements OnInit, AfterViewChecked, AfterViewInit, OnChanges {

  @Input() mode: boolean;
  @Input() preloadPageCount: number;
  @Input() file: FileDescription;
  @Input() currentPage: number;
  @Output() selectedPage = new EventEmitter<number>();
  wait = false;
  zoom: number;

  container = null;
  doc = null;
  isDesktop: boolean;
  lastCurrentPage: number;
  offsetWidth: number;

  constructor(protected _elementRef: ElementRef<HTMLElement>,
              private _zoomService: ZoomService,
              private _windowService: WindowService,
              private _navigateService: NavigateService,) {
    _zoomService.zoomChange.subscribe((val: number) => {
      this.zoom = val;
    });

    this.isDesktop = _windowService.isDesktop();

    this._navigateService.navigate.subscribe((
      value => {
          this.scrollTo(value, value > this.lastCurrentPage);
          this.lastCurrentPage = value;
      }));
  }

  ngOnInit() {
    this.lastCurrentPage = this._navigateService.currentPage;
    this.offsetWidth = this._elementRef.nativeElement.offsetWidth;
  }

  ngOnChanges() {
  }

  ngAfterViewInit() {
    // For current iteration we take .panzoom as a document
    this.doc = this._elementRef.nativeElement.children.item(0).children.item(0);
    // For current iteration we take .gd-document as a container
    this.container = this._elementRef.nativeElement;
    const hammer = new Hammer(this.container);

    const timerId = setInterval(() => 
    {
      if (this.currentPage !== 1)
      {
        if (this._elementRef.nativeElement.offsetWidth === this.offsetWidth) {
          this.scrollTo(this.currentPage, true, false);
          clearInterval(timerId);
          this.alignVert();
        }
      }

      this.alignVert();
      clearInterval(timerId);
    }, 100);
  }

  alignVert(): void {
    const presentationElements = this._elementRef.nativeElement.querySelectorAll('.presentation');
    const zoom = this._zoomService.zoom/100;
    presentationElements.forEach(element => (element as HTMLElement).style.marginTop = ((window.innerHeight - element.clientHeight*zoom - Constants.topbarWidth)/2)/zoom + "px");
  }

  ngAfterViewChecked(): void {
    const elementNodeListOf = this._elementRef.nativeElement.querySelectorAll('.gd-wrapper');
    const element = elementNodeListOf.item(0);
    if (element) {
      $(element).trigger('focus');
    }
  }

  scrollTo(pageNumber: number, onRight: boolean, animate: boolean = true) {
    const pagesWidth = this._elementRef.nativeElement.offsetWidth * (pageNumber - 1);
    const startingX = onRight ? pagesWidth - this._elementRef.nativeElement.offsetWidth : pagesWidth + this._elementRef.nativeElement.offsetWidth;
    this.doScrolling(pagesWidth, startingX, 500, new Subject<any>(), this._elementRef, animate);

    this.selectedPage.emit(pageNumber);
  }

  private doScrolling(elementX: number, startingX: number, duration: number, subject: Subject<any>, _elementRef, animate: boolean = true) {
    const diff = elementX - startingX;
    let start : number;

    if (!animate) {
      _elementRef.nativeElement.scrollTo({ left: startingX + diff});
    }
    else {
      window.requestAnimationFrame(function step(timestamp) {
        start = (!start) ? timestamp : start;

        const time = timestamp - start;
        const percent = Math.min(time / duration, 1);

        _elementRef.nativeElement.scrollTo({ left: startingX + diff * percent });

        if (time < duration) {
          window.requestAnimationFrame(step);
          subject.next({});
        } else {
          subject.complete();
        }
      });
    }
  }

  getDimensionWithUnit(value: number, pageNumber: number) {
    return value + (this.mode ? FileUtil.find(this.file.guid, false).unit : 'px');
  }

  isVertical(page: PageModel) {
    return page.height > page.width;
  }

  onPanLeft($event) {
    if ($event.isFinal) {
      this._navigateService.nextPage();
    }
  }

  onPanRight($event) {
    if ($event.isFinal) {
      this._navigateService.prevPage();
    }
  }
}
