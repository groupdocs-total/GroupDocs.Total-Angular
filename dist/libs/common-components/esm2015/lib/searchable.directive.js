/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
import { SearchService } from "./search.service";
import { ZoomService } from "./zoom.service";
import * as jquery from "jquery";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
/** @type {?} */
const $ = jquery;
export class SearchableDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _searchService
     * @param {?} _zoomService
     */
    constructor(_elementRef, _searchService, _zoomService) {
        this._elementRef = _elementRef;
        this._searchService = _searchService;
        this._zoomService = _zoomService;
        this.current = 0;
        this.total = 0;
        this.zoom = 100;
        this._searchingObserver = new Subject();
        this._searching = this._searchingObserver.asObservable();
        this._searchingFlag = false;
        _searchService.currentChange.subscribe((/**
         * @param {?} current
         * @return {?}
         */
        (current) => {
            this.current = current;
            if (this.current !== 0) {
                this.moveToCurrent();
            }
        }));
        _searchService.textChange
            .pipe(debounceTime(500))
            .pipe(distinctUntilChanged())
            .subscribe((/**
         * @param {?} text
         * @return {?}
         */
        (text) => {
            this.text = text;
            if (!this._searchingFlag) {
                this._searchingFlag = true;
                this.setSearching(this._searchingFlag);
            }
        }));
        this.zoom = _zoomService.zoom ? _zoomService.zoom : this.zoom;
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            this.zoom = val ? val : this.zoom;
        }));
        this.searching.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            this._searchingFlag = val;
            if (!val) {
                if (this.text !== this.prevText) {
                    this._searchingFlag = true;
                    this.highlightSearch();
                }
            }
            else {
                this.highlightSearch();
            }
        }));
    }
    /**
     * @return {?}
     */
    get searching() {
        return this._searching;
    }
    /**
     * @param {?} searching
     * @return {?}
     */
    setSearching(searching) {
        this._searchingObserver.next(searching);
    }
    /**
     * @private
     * @return {?}
     */
    highlightSearch() {
        this._searchingFlag = true;
        /** @type {?} */
        const el = this._elementRef ? this._elementRef.nativeElement : null;
        setTimeout((/**
         * @return {?}
         */
        () => {
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
                /** @type {?} */
                const count = el.querySelectorAll('mark').length;
                this.total = count;
            }
            else {
                this.total = 0;
            }
            this._searchService.setTotal(this.total);
            this.setSearching(false);
        }), 0);
    }
    /**
     * @private
     * @return {?}
     */
    moveToCurrent() {
        if (this.current === 0) {
            return;
        }
        /** @type {?} */
        const el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            el.querySelectorAll('.gd-highlight-select').forEach((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                $(value).removeClass('gd-highlight-select');
            }));
            /** @type {?} */
            const currentEl = el.querySelectorAll('mark')[this.current - 1];
            $(currentEl).addClass('gd-highlight-select');
            if (currentEl) {
                /** @type {?} */
                const options = {
                    left: 0,
                    top: ($(currentEl).offset().top) + el.parentElement.parentElement.scrollTop - 150,
                };
                // using polyfill
                el.parentElement.parentElement.scroll(options);
            }
        }
    }
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    highlightEl(el) {
        /** @type {?} */
        const textNodes = $(el).find('*').contents().filter((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            const nodeName = this.parentElement.nodeName.toLowerCase();
            /** @type {?} */
            const checkClass = ((/** @type {?} */ (this))).classList ? !((/** @type {?} */ (this))).classList.contains('gd-highlight') : true;
            return this.nodeType === 3 &&
                this.textContent.trim().length !== 0 &&
                nodeName !== 'style' &&
                nodeName !== 'title' &&
                nodeName !== 'body' &&
                nodeName !== 'script' &&
                checkClass;
        }));
        /** @type {?} */
        const text = this.text.split('').map(this.getTurkishCharacterPattern).join('');
        /** @type {?} */
        const re = new RegExp(text, 'gi');
        /** @type {?} */
        const reg = new RegExp(`(${text})`, 'gi');
        textNodes.each((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            const $this = $(this);
            /** @type {?} */
            const content = $this.text();
            if (content && re.test(content)) {
                /** @type {?} */
                const separators = [...content.matchAll(reg)]
                    .map((/**
                 * @param {?} arr
                 * @return {?}
                 */
                arr => arr[0]))
                    .map((/**
                 * @param {?} s
                 * @return {?}
                 */
                s => `<mark>${s}</mark>`));
                /** @type {?} */
                const parts = content
                    .split(re)
                    .map((/**
                 * @param {?} c
                 * @return {?}
                 */
                c => c.replace(/</g, '&lt;').replace(/>/g, '&gt;')));
                /** @type {?} */
                const transformed = parts.map((/**
                 * @param {?} e
                 * @param {?} i
                 * @return {?}
                 */
                (e, i) => e.concat(separators[i] ? separators[i] : ''))).join('');
                $this.replaceWith(transformed);
            }
        }));
        el.normalize();
    }
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    cleanHighlight(el) {
        /** @type {?} */
        const nodeListOf = el.querySelectorAll('mark');
        nodeListOf.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            element.replaceWith(((/** @type {?} */ (element))).innerText);
        }));
        el.normalize();
    }
    /**
     * @private
     * @param {?} char
     * @return {?}
     */
    getTurkishCharacterPattern(char) {
        /** @type {?} */
        const turkishMapping = {
            'i': '[iİ]',
            // English 'i' matches both 'i' and 'İ'
            'I': '[ıI]',
            // English 'I' matches both 'ı' and 'I'
            'c': '[cÇ]',
            // English 'c' matches both 'c' and 'Ç'
            'g': '[gĞ]',
            // English 'g' matches both 'g' and 'Ğ'
            'o': '[oÖ]',
            // English 'o' matches both 'o' and 'Ö'
            's': '[sŞ]',
            // English 's' matches both 's' and 'Ş'
            'u': '[uÜ]',
        };
        return turkishMapping[char] || char;
    }
}
SearchableDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gdSearchable]'
            },] }
];
/** @nocollapse */
SearchableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: SearchService },
    { type: ZoomService }
];
if (false) {
    /** @type {?} */
    SearchableDirective.prototype.text;
    /** @type {?} */
    SearchableDirective.prototype.prevText;
    /** @type {?} */
    SearchableDirective.prototype.current;
    /** @type {?} */
    SearchableDirective.prototype.total;
    /**
     * @type {?}
     * @private
     */
    SearchableDirective.prototype.zoom;
    /**
     * @type {?}
     * @private
     */
    SearchableDirective.prototype._searchingObserver;
    /**
     * @type {?}
     * @private
     */
    SearchableDirective.prototype._searching;
    /**
     * @type {?}
     * @private
     */
    SearchableDirective.prototype._searchingFlag;
    /**
     * @type {?}
     * @private
     */
    SearchableDirective.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    SearchableDirective.prototype._searchService;
    /**
     * @type {?}
     * @private
     */
    SearchableDirective.prototype._zoomService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUMsWUFBWSxFQUFFLG9CQUFvQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O01BQzVELENBQUMsR0FBRyxNQUFNO0FBS2hCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQVc5QixZQUFvQixXQUFvQyxFQUNwQyxjQUE2QixFQUM3QixZQUF5QjtRQUZ6QixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDcEMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsaUJBQVksR0FBWixZQUFZLENBQWE7UUFUN0MsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDRixTQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ1gsdUJBQWtCLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDNUMsZUFBVSxHQUF3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEYsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFNN0IsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxPQUFlLEVBQUUsRUFBRTtZQUN6RCxJQUFJLENBQUMsT0FBTyxH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QUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7Ozs7SUFFTywwQkFBMEIsQ0FBQyxJQUFJOztjQUM3QixjQUFjLEdBQUc7WUFDbkIsR0FBRyxFQUFFLE1BQU07O1lBQ1gsR0FBRyxFQUFFLE1BQU07O1lBQ1gsR0FBRyxFQUFFLE1BQU07O1lBQ1gsR0FBRyxFQUFFLE1BQU07O1lBQ1gsR0FBRyxFQUFFLE1BQU07O1lBQ1gsR0FBRyxFQUFFLE1BQU07O1lBQ1gsR0FBRyxFQUFFLE1BQU07U0FDZDtRQUVELE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQztJQUN4QyxDQUFDOzs7WUE1S0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs7WUFWa0IsVUFBVTtZQUNyQixhQUFhO1lBQ2IsV0FBVzs7OztJQVdqQixtQ0FBYTs7SUFDYix1Q0FBaUI7O0lBQ2pCLHNDQUFZOztJQUNaLG9DQUFVOzs7OztJQUNWLG1DQUFtQjs7Ozs7SUFDbkIsaURBQTZEOzs7OztJQUM3RCx5Q0FBMEY7Ozs7O0lBQzFGLDZDQUErQjs7Ozs7SUFFbkIsMENBQTRDOzs7OztJQUM1Qyw2Q0FBcUM7Ozs7O0lBQ3JDLDJDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2VhcmNoU2VydmljZX0gZnJvbSBcIi4vc2VhcmNoLnNlcnZpY2VcIjtcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7ZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5jb25zdCAkID0ganF1ZXJ5O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2RTZWFyY2hhYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoYWJsZURpcmVjdGl2ZSB7XG5cbiAgdGV4dDogc3RyaW5nO1xuICBwcmV2VGV4dDogc3RyaW5nO1xuICBjdXJyZW50ID0gMDtcbiAgdG90YWwgPSAwO1xuICBwcml2YXRlIHpvb20gPSAxMDA7XG4gIHByaXZhdGUgX3NlYXJjaGluZ09ic2VydmVyOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfc2VhcmNoaW5nOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5fc2VhcmNoaW5nT2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgX3NlYXJjaGluZ0ZsYWcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2VhcmNoU2VydmljZTogU2VhcmNoU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgX3NlYXJjaFNlcnZpY2UuY3VycmVudENoYW5nZS5zdWJzY3JpYmUoKGN1cnJlbnQ6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50ID0gY3VycmVudDtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQgIT09IDApIHtcbiAgICAgICAgdGhpcy5tb3ZlVG9DdXJyZW50KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfc2VhcmNoU2VydmljZS50ZXh0Q2hhbmdlXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoNTAwKSlcbiAgICAgICAucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxuICAgICAgICAuc3Vic2NyaWJlKCh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICAgIGlmICghdGhpcy5fc2VhcmNoaW5nRmxhZykge1xuICAgICAgICAgICAgIHRoaXMuX3NlYXJjaGluZ0ZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgIHRoaXMuc2V0U2VhcmNoaW5nKHRoaXMuX3NlYXJjaGluZ0ZsYWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB0aGlzLnpvb20gPSBfem9vbVNlcnZpY2Uuem9vbSA/IF96b29tU2VydmljZS56b29tIDogdGhpcy56b29tO1xuICAgIF96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgodmFsOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuem9vbSA9IHZhbCA/IHZhbCA6IHRoaXMuem9vbTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2VhcmNoaW5nLnN1YnNjcmliZSgodmFsOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLl9zZWFyY2hpbmdGbGFnID0gdmFsO1xuICAgICAgaWYgKCF2YWwpIHtcbiAgICAgICAgaWYgKHRoaXMudGV4dCAhPT0gdGhpcy5wcmV2VGV4dCkge1xuICAgICAgICAgIHRoaXMuX3NlYXJjaGluZ0ZsYWcgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0U2VhcmNoKCk7XG4gICAgICAgIH1cbiAgICAgIH0gXG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRTZWFyY2goKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBnZXQgc2VhcmNoaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLl9zZWFyY2hpbmc7XG4gIH1cblxuICBzZXRTZWFyY2hpbmcoc2VhcmNoaW5nOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2VhcmNoaW5nT2JzZXJ2ZXIubmV4dChzZWFyY2hpbmcpO1xuICB9XG5cbiAgcHJpdmF0ZSBoaWdobGlnaHRTZWFyY2goKSB7XG4gICAgdGhpcy5fc2VhcmNoaW5nRmxhZyA9IHRydWU7XG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbGVtZW50UmVmID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IDogbnVsbDtcblxuICAgICAgIHNldFRpbWVvdXQoKCkgPT4gXG4gICAgICAge1xuICAgICAgICB0aGlzLnByZXZUZXh0ID0gdGhpcy50ZXh0O1xuXG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgIGlmICh0aGlzLnByZXZUZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFuSGlnaGxpZ2h0KGVsKTtcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0RWwoZWwpO1xuICAgICAgICAgIH0gXG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuY2xlYW5IaWdobGlnaHQoZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuICAgICAgICBpZiAodGhpcy5wcmV2VGV4dCkge1xuICAgICAgICAgIGNvbnN0IGNvdW50ID0gZWwucXVlcnlTZWxlY3RvckFsbCgnbWFyaycpLmxlbmd0aDtcbiAgICAgICAgICB0aGlzLnRvdGFsID0gY291bnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy50b3RhbCA9IDBcbiAgICAgICAgfVxuICAgICAgICAgdGhpcy5fc2VhcmNoU2VydmljZS5zZXRUb3RhbCh0aGlzLnRvdGFsKTtcbiAgICAgICAgIHRoaXMuc2V0U2VhcmNoaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgLDApO1xuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlVG9DdXJyZW50KCkge1xuICAgICBpZiAodGhpcy5jdXJyZW50ID09PSAwKSB7XG4gICAgICAgcmV0dXJuO1xuICAgICB9XG4gICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA6IG51bGw7XG4gICAgIGlmIChlbCkge1xuICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC1oaWdobGlnaHQtc2VsZWN0JykuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICQodmFsdWUpLnJlbW92ZUNsYXNzKCdnZC1oaWdobGlnaHQtc2VsZWN0Jyk7XG4gICAgICAgfSk7XG4gICAgICAgY29uc3QgY3VycmVudEVsID0gZWwucXVlcnlTZWxlY3RvckFsbCgnbWFyaycpW3RoaXMuY3VycmVudCAtIDFdO1xuICAgICAgICQoY3VycmVudEVsKS5hZGRDbGFzcygnZ2QtaGlnaGxpZ2h0LXNlbGVjdCcpO1xuICAgICAgIGlmIChjdXJyZW50RWwpIHtcbiAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgIHRvcDogKCQoY3VycmVudEVsKS5vZmZzZXQoKS50b3ApICsgZWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcCAtIDE1MCxcbiAgICAgICAgIH07XG4gICAgICAgICAvLyB1c2luZyBwb2x5ZmlsbFxuICAgICAgICAgZWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbChvcHRpb25zKTtcbiAgICAgICB9XG4gICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGlnaGxpZ2h0RWwoZWw6IEVsZW1lbnQpIHtcbiAgICBjb25zdCB0ZXh0Tm9kZXMgPSAkKGVsKS5maW5kKCcqJykuY29udGVudHMoKS5maWx0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBub2RlTmFtZSA9IHRoaXMucGFyZW50RWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBjaGVja0NsYXNzID0gKDxFbGVtZW50PnRoaXMpLmNsYXNzTGlzdCA/ICEoPEVsZW1lbnQ+dGhpcykuY2xhc3NMaXN0LmNvbnRhaW5zKCdnZC1oaWdobGlnaHQnKSA6IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVUeXBlID09PSAzICYmXG4gICAgICAgICAgdGhpcy50ZXh0Q29udGVudC50cmltKCkubGVuZ3RoICE9PSAwICYmXG4gICAgICAgICAgbm9kZU5hbWUgIT09ICdzdHlsZScgJiZcbiAgICAgICAgICBub2RlTmFtZSAhPT0gJ3RpdGxlJyAmJlxuICAgICAgICAgIG5vZGVOYW1lICE9PSAnYm9keScgJiZcbiAgICAgICAgICBub2RlTmFtZSAhPT0gJ3NjcmlwdCcgJiZcbiAgICAgICAgICBjaGVja0NsYXNzO1xuICAgICAgfSk7XG5cbiAgICBjb25zdCB0ZXh0ID0gdGhpcy50ZXh0LnNwbGl0KCcnKS5tYXAodGhpcy5nZXRUdXJraXNoQ2hhcmFjdGVyUGF0dGVybikuam9pbignJyk7XG4gICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKHRleHQsICdnaScpO1xuICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYCgke3RleHR9KWAsICdnaScpO1xuICAgIHRleHROb2Rlcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSAkdGhpcy50ZXh0KCk7XG4gICAgICBpZiAoY29udGVudCAmJiByZS50ZXN0KGNvbnRlbnQpKSB7XG4gICAgICAgIGNvbnN0IHNlcGFyYXRvcnMgPSBbLi4uY29udGVudC5tYXRjaEFsbChyZWcpXVxuICAgICAgICAgIC5tYXAoYXJyID0+IGFyclswXSlcbiAgICAgICAgICAubWFwKHMgPT4gYDxtYXJrPiR7c308L21hcms+YCk7XG5cbiAgICAgICAgY29uc3QgcGFydHMgPSBjb250ZW50XG4gICAgICAgICAgLnNwbGl0KHJlKVxuICAgICAgICAgIC5tYXAoYyA9PiBjLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7JykpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtZWQgPSBwYXJ0cy5tYXAoKGUsIGkpID0+IGUuY29uY2F0KHNlcGFyYXRvcnNbaV0gPyBzZXBhcmF0b3JzW2ldIDogJycpKS5qb2luKCcnKTtcblxuICAgICAgICAkdGhpcy5yZXBsYWNlV2l0aCh0cmFuc2Zvcm1lZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZWwubm9ybWFsaXplKCk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuSGlnaGxpZ2h0KGVsOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IG5vZGVMaXN0T2YgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCdtYXJrJyk7XG4gICAgbm9kZUxpc3RPZi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgZWxlbWVudC5yZXBsYWNlV2l0aCgoPEhUTUxFbGVtZW50PmVsZW1lbnQpLmlubmVyVGV4dCk7XG4gICAgfSlcbiAgICBlbC5ub3JtYWxpemUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VHVya2lzaENoYXJhY3RlclBhdHRlcm4oY2hhcikge1xuICAgICAgY29uc3QgdHVya2lzaE1hcHBpbmcgPSB7XG4gICAgICAgICAgJ2knOiAnW2nEsF0nLCAgLy8gRW5nbGlzaCAnaScgbWF0Y2hlcyBib3RoICdpJyBhbmQgJ8SwJ1xuICAgICAgICAgICdJJzogJ1vEsUldJywgIC8vIEVuZ2xpc2ggJ0knIG1hdGNoZXMgYm90aCAnxLEnIGFuZCAnSSdcbiAgICAgICAgICAnYyc6ICdbY8OHXScsICAvLyBFbmdsaXNoICdjJyBtYXRjaGVzIGJvdGggJ2MnIGFuZCAnw4cnXG4gICAgICAgICAgJ2cnOiAnW2fEnl0nLCAgLy8gRW5nbGlzaCAnZycgbWF0Y2hlcyBib3RoICdnJyBhbmQgJ8SeJ1xuICAgICAgICAgICdvJzogJ1tvw5ZdJywgIC8vIEVuZ2xpc2ggJ28nIG1hdGNoZXMgYm90aCAnbycgYW5kICfDlidcbiAgICAgICAgICAncyc6ICdbc8WeXScsICAvLyBFbmdsaXNoICdzJyBtYXRjaGVzIGJvdGggJ3MnIGFuZCAnxZ4nXG4gICAgICAgICAgJ3UnOiAnW3XDnF0nLCAgLy8gRW5nbGlzaCAndScgbWF0Y2hlcyBib3RoICd1JyBhbmQgJ8OcJ1xuICAgICAgfTtcbiAgICBcbiAgICAgIHJldHVybiB0dXJraXNoTWFwcGluZ1tjaGFyXSB8fCBjaGFyO1xuICB9XG59XG4iXX0=