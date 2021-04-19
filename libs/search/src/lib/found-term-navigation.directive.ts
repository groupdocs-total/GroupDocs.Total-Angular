import { Directive, ElementRef } from '@angular/core';
import { FoundTermNavigationService } from './found-term-navigation.service';
import * as jquery from "jquery";
const $ = jquery;

@Directive({
  selector: '[gdFoundTermNavigation]'
})
export class FoundTermNavigationDirective {

  constructor(private _elementRef: ElementRef<HTMLElement>,
              private _termNavigationService: FoundTermNavigationService) {
    const element = this._elementRef ? this._elementRef.nativeElement : null;
    _termNavigationService.setElement(element);
    this._termNavigationService.currentChanged.subscribe((current: number) => {
      this.moveToCurrent(current);
    });
  }

  moveToCurrent(current: number) {
    if (current === 0) {
      return;
    }

    const element = this._elementRef ? this._elementRef.nativeElement : null;
    if (element) {
      element.querySelectorAll('.counted-term-selected').forEach(function (value) {
        $(value).removeClass('counted-term-selected');
      });
      const elements = element.querySelectorAll('.counted-term');
      const currentElement = elements[current - 1];
      $(currentElement).addClass('counted-term-selected');
      if (currentElement) {
        const options = {
          left: 0,
          top: ($(currentElement).offset().top) + element.scrollTop - 210,
        };
        // using polyfill
        element.scroll(options);
      }
    }
  }
}
