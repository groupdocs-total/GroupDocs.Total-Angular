import {AfterViewInit, Directive, HostBinding, Input, OnDestroy, OnInit, ElementRef, OnChanges, HostListener} from '@angular/core';
import {ZoomService} from "./zoom.service";
import {FileUtil} from "./file.service";
import { WindowService } from './window.service';

@Directive({
  selector: '[gdEditHeaderFooter]'
})
export class EditHeaderFooterDirective implements OnInit, OnDestroy, AfterViewInit, OnChanges {

  el: ElementRef<any>;
  footerRef: any;

  constructor(private _zoomService: ZoomService, private _windowService: WindowService, el: ElementRef) {
    this.el = el;
  }

  ngAfterViewInit(): void {
    this.footerRef = this.el.nativeElement.querySelectorAll('.footer')[0];
    this.footerRef.setAttribute("contenteditable", false);
    this.footerRef.className += " disabled";
  }

  ngOnDestroy(): void {
  }

  ngOnChanges(): void {
  }

  ngOnInit(): void {
  }

  @HostListener('dblclick', ['$event'])
  dblclickEvent(event) {
    const footerTitle = document.createElement("div");
    footerTitle.className = "footer-title";
    footerTitle.append('Footer');

    const footer = event.target.closest('.footer');
    if (footer && footer.classList.contains('disabled')) {
      footer.classList.remove('disabled');
      footer.setAttribute("contenteditable", true);
      footer.before(footerTitle);
    }

    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('click', ['$event'])
  clickEvent(event) {
    const footer = event.target.closest('.footer');
    if (!footer) {
      this.footerRef.setAttribute("contenteditable", false);
      if (!this.footerRef.classList.contains('disabled'))
      {
        this.footerRef.className += " disabled";
      }

      const section = this.el.nativeElement.querySelectorAll('.section')[0];
      const footerTitle = this.el.nativeElement.querySelectorAll('.footer-title')[0];
      if (section && footerTitle) {
        section.removeChild(footerTitle);
      }
    }
  }
}
