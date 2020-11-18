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
  headerRef: any;

  constructor(private _zoomService: ZoomService, private _windowService: WindowService, el: ElementRef) {
    this.el = el;
  }

  ngAfterViewInit(): void {
    this.headerRef = this.el.nativeElement.querySelectorAll('.header')[0];
    if (this.headerRef) {
      this.headerRef.setAttribute("contenteditable", false);
      this.headerRef.className += " disabled";
    }

    this.footerRef = this.el.nativeElement.querySelectorAll('.footer')[0];
    if (this.footerRef) {
      this.footerRef.setAttribute("contenteditable", false);
      this.footerRef.className += " disabled";
    }
  }

  ngOnDestroy(): void {
  }

  ngOnChanges(): void {
  }

  ngOnInit(): void {
  }

  @HostListener('dblclick', ['$event'])
  dblclickEvent(event) {
    const headerTitle = document.createElement("div");
    headerTitle.className = "header-title";
    headerTitle.append('Header');

    const footerTitle = document.createElement("div");
    footerTitle.className = "footer-title";
    footerTitle.append('Footer');

    const closestHeader = event.target.closest('.header');
    if (closestHeader && closestHeader.classList.contains('disabled')) {
      closestHeader.classList.remove('disabled');
      closestHeader.setAttribute("contenteditable", true);
      closestHeader.after(headerTitle);
    }

    const closestFooter = event.target.closest('.footer');
    if (closestFooter && closestFooter.classList.contains('disabled')) {
      closestFooter.classList.remove('disabled');
      closestFooter.setAttribute("contenteditable", true);
      closestFooter.before(footerTitle);
    }

    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('click', ['$event'])
  clickEvent(event) {
    const closestHeader = event.target.closest('.header');
    if (!closestHeader) {
      this.headerRef.setAttribute("contenteditable", false);
      if (!this.headerRef.classList.contains('disabled'))
      {
        this.headerRef.className += " disabled";
      }

      const section = this.el.nativeElement.querySelectorAll('.section')[0];
      const headerTitle = this.el.nativeElement.querySelectorAll('.header-title')[0];
      if (section && headerTitle) {
        section.removeChild(headerTitle);
      }
    }

    const closestFooter = event.target.closest('.footer');
    if (!closestFooter) {
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
