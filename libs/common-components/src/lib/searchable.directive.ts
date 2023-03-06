import {Directive, ElementRef} from '@angular/core';
import {SearchService} from "./search.service";
import {HighlightSearchPipe} from "./pipes";
import {ZoomService} from "./zoom.service";
import * as jquery from "jquery";
import {Observable, Subject} from "rxjs";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";
const $ = jquery;

@Directive({
  selector: '[gdSearchable]'
})
export class SearchableDirective {

  text: string;
  prevText: string;
  current = 0;
  total = 0;
  private zoom = 100;
  private _searchingObserver: Subject<boolean> = new Subject();
  private readonly _searching: Observable<boolean> = this._searchingObserver.asObservable();
  private _searchingFlag: boolean = false;

  constructor(private _elementRef: ElementRef<HTMLElement>,
              private _searchService: SearchService,
              private _highlight: HighlightSearchPipe,
              private _zoomService: ZoomService) {
    _searchService.currentChange.subscribe((current: number) => {
      this.current = current;
      if (this.current !== 0) {
        this.moveToCurrent();
      }
    });

    _searchService.textChange
      .pipe(debounceTime(500))
       .pipe(distinctUntilChanged())
        .subscribe((text: string) => {
      this.text = text;
      if (!this._searchingFlag) {
         this._searchingFlag = true;
         this.setSearching(this._searchingFlag);
      }
    });

    this.zoom = _zoomService.zoom ? _zoomService.zoom : this.zoom;
    _zoomService.zoomChange.subscribe((val: number) => {
      this.zoom = val ? val : this.zoom;
    });

    this.searching.subscribe((val: boolean) => {
      this._searchingFlag = val;
      if (!val) {
        if (this.text != this.prevText) {
          this._searchingFlag = true;
          this.highlightSearch();
        }
      } 
      else {
        this.highlightSearch()
      }
    })
  }

  get searching(): Observable<boolean> {
    return this._searching;
  }

  setSearching(searching: boolean) {
    this._searchingObserver.next(searching);
  }

  private  highlightSearch() {
    this._searchingFlag = true;
    const el = this._elementRef ? this._elementRef.nativeElement : null;

       setTimeout(() => 
       {
        this.prevText = this.text;

        if (el) {
          if (this.prevText) {
            this.cleanHighlight(el);
            this.highlightEl(el);
          } 
          else {
              this.cleanHighlight(el);
          }
        } 

        if (this.prevText) {
          const count = el.querySelectorAll('.gd-highlight').length;
          this.total = count;
        }
        else {
          this.total = 0
        }
         this._searchService.setTotal(this.total);
         this.setSearching(false);
        }
      ,0);
  }

  private moveToCurrent() {
    if (this.current === 0) {
      return;
    }
    const currentZoom = this.getZoom();
    const el = this._elementRef ? this._elementRef.nativeElement : null;
    if (el) {
      el.querySelectorAll('.gd-highlight-select').forEach(function (value) {
        $(value).removeClass('gd-highlight-select');
      });
      const currentEl = el.querySelectorAll('.gd-highlight')[this.current - 1];
      $(currentEl).addClass('gd-highlight-select');
      if (currentEl) {
        const options = {
          left: 0,
          top: ($(currentEl).offset().top) + el.parentElement.parentElement.scrollTop - 150,
        };
        // using polyfill
        el.parentElement.parentElement.scroll(options);
      }
    }
  }

  private highlightEl(el: Element) {
    const textNodes = $(el).find('*').contents().filter(function () {
      const nodeName = this.parentElement.nodeName.toLowerCase();
      const checkClass = (<Element>this).classList ? !(<Element>this).classList.contains('gd-highlight') : true;
      return this.nodeType === 3 &&
        this.textContent.trim().length !== 0 &&
        nodeName !== 'style' &&
        nodeName !== 'title' &&
        nodeName !== 'body' &&
        nodeName !== 'script' &&
        checkClass;
    });
    const text = this.text;
    const highlight = this._highlight;
    textNodes.each(function () {
      const $this = $(this);
      let content = $this.text();
      content = highlight.transform(content, text);
      $this.replaceWith(content);
    });
    el.normalize();
  }

  private cleanHighlight(el: HTMLElement) {
    const nodeListOf = el.querySelectorAll('.gd-highlight');

    //const lengthOfNodeList = nodeListOf.length;
    //for (let i = 0; i < lengthOfNodeList; i++)
    nodeListOf.forEach(element => {
      //const element = nodeListOf.item(i);
      element.replaceWith((<HTMLElement>element).innerText);
    })
    el.normalize();
  }

  private getZoom() {
    return this.zoom / 100;
  }
}
