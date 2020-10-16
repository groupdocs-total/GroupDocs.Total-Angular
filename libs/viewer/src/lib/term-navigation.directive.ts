import { AfterViewInit, Directive, ElementRef, } from '@angular/core';
import { TermNavigationService } from './term-navigation.service';
import * as jquery from "jquery";
const $ = jquery;

@Directive({
  selector: '[gdTermNavigation]'
})
export class TermNavigationDirective implements AfterViewInit {

  constructor(private _elementRef: ElementRef<HTMLElement>,
              private _termNavigationService: TermNavigationService) {
    const element = this._elementRef ? this._elementRef.nativeElement : null;
    _termNavigationService.setElement(element);
    this._termNavigationService.currentChanged.subscribe((current: number) => {
      this.moveToCurrent(current);
    });
    this._termNavigationService.deleteNavigationRequested.subscribe(() => {
      this.deleteNavigation();
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this._termNavigationService.updateTotal();
      this.moveToCurrent(this._termNavigationService.current);
    }, 100);
  }

  moveToCurrent(current: number) {
    if (current === 0) {
      return;
    }

    const element = this._elementRef ? this._elementRef.nativeElement : null;
    if (element) {
      element.querySelectorAll('.gd-found-term-selected').forEach(function (value) {
        $(value).removeClass('gd-found-term-selected');
      });
      const elements = element.querySelectorAll('.gd-found-term');
      const currentElement = elements[current - 1];
      $(currentElement).addClass('gd-found-term-selected');
      if (currentElement) {
        const options = {
          left: 0,
          top: ($(currentElement).offset().top) + element.scrollTop - 150,
        };
        // using polyfill
        element.scroll(options);
      }
    }
  }

  deleteNavigation() {
    const element = this._elementRef ? this._elementRef.nativeElement : null;
    if (element) {
      element.querySelectorAll('.gd-found-term-selected').forEach(function (value) {
        $(value).removeClass('gd-found-term-selected');
      });
      element.querySelectorAll('.gd-found-term').forEach(function (value) {
        $(value).removeClass('gd-found-term');
      });
    }
  }
}
