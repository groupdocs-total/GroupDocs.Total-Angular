import {Directive, ElementRef} from '@angular/core';
import {SearchService} from "./search.service";
import {HighlightSearchPipe} from "./pipes";
import * as $ from 'jquery';
import {ZoomService} from "./zoom.service";

@Directive({
  selector: '[gdSearchable]'
})
export class SearchableDirective {

  text: string;
  current: number = 0;
  total: number = 0;
  private zoom: number = 100;

  constructor(private _elementRef: ElementRef<HTMLElement>,
              private _searchService: SearchService,
              private _highlight: HighlightSearchPipe,
              private _zoomService: ZoomService) {
    _searchService.currentChange.subscribe((current: number) => {
      this.current = current;
      if (this.current != 0) {
        this.moveToCurrent();
      }
    });

    _searchService.textChange.subscribe((text: string) => {
      this.text = text;
      this.highlightSearch();
    });

    this.zoom = _zoomService.zoom ? _zoomService.zoom : this.zoom;
    _zoomService.zoomChange.subscribe((val: number) => {
      this.zoom = val ? val : this.zoom;
    });
  }

  private highlightSearch() {
    const el = this._elementRef ? this._elementRef.nativeElement : null;
    if (el) {
      this.cleanHighlight(el);
      if (this.text) {
        this.highlightEl(el);
        let count = el.querySelectorAll('.gd-highlight').length;
        this.total = count;
      } else {
        this.total = 0;
      }
      this._searchService.setTotal(this.total);
    }
  }

  private moveToCurrent() {
    if (this.current == 0) {
      return;
    }
    let currentZoom = this.getZoom();
    const el = this._elementRef ? this._elementRef.nativeElement : null;
    if (el) {
      el.querySelectorAll('.gd-highlight-select').forEach(function (value) {
        $(value).removeClass('gd-highlight-select');
      });
      let currentEl = el.querySelectorAll('.gd-highlight')[this.current - 1];
      $(currentEl).addClass('gd-highlight-select');
      if (currentEl) {
        let options = {
          left: 0,
          top: ($(currentEl).offset().top * currentZoom) + el.parentElement.scrollTop - 150,
        };
        el.parentElement.scrollTo(options);
      }
    }
  }

  private highlightEl(el: Element) {
    var textNodes = $(el).find('*').contents().filter(function () {
      const nodeName = this.parentElement.nodeName.toLowerCase();
      const checkClass = (<Element>this).classList ? !(<Element>this).classList.contains('gd-highlight') : true;
      return this.nodeType === 3 &&
        this.textContent.trim().length != 0 &&
        nodeName != 'style' &&
        nodeName != 'title' &&
        nodeName != 'body' &&
        nodeName != 'script' &&
        checkClass;
    });
    let text = this.text;
    let highlight = this._highlight;
    textNodes.each(function () {
      var $this = $(this);
      var content = $this.text();
      content = highlight.transform(content, text);
      $this.replaceWith(content);
    });
    el.normalize();
  }

  private cleanHighlight(el: HTMLElement) {
    const nodeListOf = el.querySelectorAll('.gd-highlight');
    for (let i = 0; i < nodeListOf.length; i++) {
      const element = nodeListOf.item(i);
      element.replaceWith((<HTMLElement>element).innerText);
    }
    el.normalize();
  }

  private getZoom() {
    return this.zoom / 100;
  }
}
