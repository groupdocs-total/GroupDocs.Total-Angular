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
        const currentZoom = this.getZoom();
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
        const text = this.text;
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
     * @return {?}
     */
    getZoom() {
        return this.zoom / 100;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUMsWUFBWSxFQUFFLG9CQUFvQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O01BQzVELENBQUMsR0FBRyxNQUFNO0FBS2hCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQVc5QixZQUFvQixXQUFvQyxFQUNwQyxjQUE2QixFQUM3QixZQUF5QjtRQUZ6QixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDcEMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsaUJBQVksR0FBWixZQUFZLENBQWE7UUFUN0MsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDRixTQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ1gsdUJBQWtCLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDNUMsZUFBVSxHQUF3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEYsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFLN0IsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxPQUFlLEVBQUUsRUFBRTtZQUN6RCxJQUFJLENBQUMsT0FBTyxH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Q2IsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUN6QixDQUFDOzs7WUFqS0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs7WUFWa0IsVUFBVTtZQUNyQixhQUFhO1lBQ2IsV0FBVzs7OztJQVdqQixtQ0FBYTs7SUFDYix1Q0FBaUI7O0lBQ2pCLHNDQUFZOztJQUNaLG9DQUFVOzs7OztJQUNWLG1DQUFtQjs7Ozs7SUFDbkIsaURBQTZEOzs7OztJQUM3RCx5Q0FBMEY7Ozs7O0lBQzFGLDZDQUErQjs7Ozs7SUFFbkIsMENBQTRDOzs7OztJQUM1Qyw2Q0FBcUM7Ozs7O0lBQ3JDLDJDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2VhcmNoU2VydmljZX0gZnJvbSBcIi4vc2VhcmNoLnNlcnZpY2VcIjtcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7ZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5jb25zdCAkID0ganF1ZXJ5O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2RTZWFyY2hhYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoYWJsZURpcmVjdGl2ZSB7XG5cbiAgdGV4dDogc3RyaW5nO1xuICBwcmV2VGV4dDogc3RyaW5nO1xuICBjdXJyZW50ID0gMDtcbiAgdG90YWwgPSAwO1xuICBwcml2YXRlIHpvb20gPSAxMDA7XG4gIHByaXZhdGUgX3NlYXJjaGluZ09ic2VydmVyOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfc2VhcmNoaW5nOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5fc2VhcmNoaW5nT2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgX3NlYXJjaGluZ0ZsYWcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2VhcmNoU2VydmljZTogU2VhcmNoU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlKSB7XG4gICAgX3NlYXJjaFNlcnZpY2UuY3VycmVudENoYW5nZS5zdWJzY3JpYmUoKGN1cnJlbnQ6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50ID0gY3VycmVudDtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQgIT09IDApIHtcbiAgICAgICAgdGhpcy5tb3ZlVG9DdXJyZW50KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfc2VhcmNoU2VydmljZS50ZXh0Q2hhbmdlXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoNTAwKSlcbiAgICAgICAucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxuICAgICAgICAuc3Vic2NyaWJlKCh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICBpZiAoIXRoaXMuX3NlYXJjaGluZ0ZsYWcpIHtcbiAgICAgICAgIHRoaXMuX3NlYXJjaGluZ0ZsYWcgPSB0cnVlO1xuICAgICAgICAgdGhpcy5zZXRTZWFyY2hpbmcodGhpcy5fc2VhcmNoaW5nRmxhZyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnpvb20gPSBfem9vbVNlcnZpY2Uuem9vbSA/IF96b29tU2VydmljZS56b29tIDogdGhpcy56b29tO1xuICAgIF96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgodmFsOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuem9vbSA9IHZhbCA/IHZhbCA6IHRoaXMuem9vbTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2VhcmNoaW5nLnN1YnNjcmliZSgodmFsOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLl9zZWFyY2hpbmdGbGFnID0gdmFsO1xuICAgICAgaWYgKCF2YWwpIHtcbiAgICAgICAgaWYgKHRoaXMudGV4dCAhPT0gdGhpcy5wcmV2VGV4dCkge1xuICAgICAgICAgIHRoaXMuX3NlYXJjaGluZ0ZsYWcgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0U2VhcmNoKCk7XG4gICAgICAgIH1cbiAgICAgIH0gXG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRTZWFyY2goKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBnZXQgc2VhcmNoaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLl9zZWFyY2hpbmc7XG4gIH1cblxuICBzZXRTZWFyY2hpbmcoc2VhcmNoaW5nOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2VhcmNoaW5nT2JzZXJ2ZXIubmV4dChzZWFyY2hpbmcpO1xuICB9XG5cbiAgcHJpdmF0ZSAgaGlnaGxpZ2h0U2VhcmNoKCkge1xuICAgIHRoaXMuX3NlYXJjaGluZ0ZsYWcgPSB0cnVlO1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA6IG51bGw7XG5cbiAgICAgICBzZXRUaW1lb3V0KCgpID0+IFxuICAgICAgIHtcbiAgICAgICAgdGhpcy5wcmV2VGV4dCA9IHRoaXMudGV4dDtcblxuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICBpZiAodGhpcy5wcmV2VGV4dCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhbkhpZ2hsaWdodChlbCk7XG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodEVsKGVsKTtcbiAgICAgICAgICB9IFxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmNsZWFuSGlnaGxpZ2h0KGVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gXG5cbiAgICAgICAgaWYgKHRoaXMucHJldlRleHQpIHtcbiAgICAgICAgICBjb25zdCBjb3VudCA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ21hcmsnKS5sZW5ndGg7XG4gICAgICAgICAgdGhpcy50b3RhbCA9IGNvdW50O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMudG90YWwgPSAwXG4gICAgICAgIH1cbiAgICAgICAgIHRoaXMuX3NlYXJjaFNlcnZpY2Uuc2V0VG90YWwodGhpcy50b3RhbCk7XG4gICAgICAgICB0aGlzLnNldFNlYXJjaGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICwwKTtcbiAgfVxuXG4gIHByaXZhdGUgbW92ZVRvQ3VycmVudCgpIHtcbiAgICAgaWYgKHRoaXMuY3VycmVudCA9PT0gMCkge1xuICAgICAgIHJldHVybjtcbiAgICAgfVxuICAgICBjb25zdCBjdXJyZW50Wm9vbSA9IHRoaXMuZ2V0Wm9vbSgpO1xuICAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRSZWYgPyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xuICAgICBpZiAoZWwpIHtcbiAgICAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2QtaGlnaGxpZ2h0LXNlbGVjdCcpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAkKHZhbHVlKS5yZW1vdmVDbGFzcygnZ2QtaGlnaGxpZ2h0LXNlbGVjdCcpO1xuICAgICAgIH0pO1xuICAgICAgIGNvbnN0IGN1cnJlbnRFbCA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ21hcmsnKVt0aGlzLmN1cnJlbnQgLSAxXTtcbiAgICAgICAkKGN1cnJlbnRFbCkuYWRkQ2xhc3MoJ2dkLWhpZ2hsaWdodC1zZWxlY3QnKTtcbiAgICAgICBpZiAoY3VycmVudEVsKSB7XG4gICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICB0b3A6ICgkKGN1cnJlbnRFbCkub2Zmc2V0KCkudG9wKSArIGVsLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zY3JvbGxUb3AgLSAxNTAsXG4gICAgICAgICB9O1xuICAgICAgICAgLy8gdXNpbmcgcG9seWZpbGxcbiAgICAgICAgIGVsLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zY3JvbGwob3B0aW9ucyk7XG4gICAgICAgfVxuICAgICB9XG4gIH1cblxuICBwcml2YXRlIGhpZ2hsaWdodEVsKGVsOiBFbGVtZW50KSB7XG4gICAgY29uc3QgdGV4dE5vZGVzID0gJChlbCkuZmluZCgnKicpLmNvbnRlbnRzKCkuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IG5vZGVOYW1lID0gdGhpcy5wYXJlbnRFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCBjaGVja0NsYXNzID0gKDxFbGVtZW50PnRoaXMpLmNsYXNzTGlzdCA/ICEoPEVsZW1lbnQ+dGhpcykuY2xhc3NMaXN0LmNvbnRhaW5zKCdnZC1oaWdobGlnaHQnKSA6IHRydWU7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlVHlwZSA9PT0gMyAmJlxuICAgICAgICB0aGlzLnRleHRDb250ZW50LnRyaW0oKS5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgbm9kZU5hbWUgIT09ICdzdHlsZScgJiZcbiAgICAgICAgbm9kZU5hbWUgIT09ICd0aXRsZScgJiZcbiAgICAgICAgbm9kZU5hbWUgIT09ICdib2R5JyAmJlxuICAgICAgICBub2RlTmFtZSAhPT0gJ3NjcmlwdCcgJiZcbiAgICAgICAgY2hlY2tDbGFzcztcbiAgICB9KTtcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy50ZXh0O1xuICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCh0ZXh0LCAnZ2knKTtcbiAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKGAoJHt0ZXh0fSlgLCAnZ2knKTtcbiAgICB0ZXh0Tm9kZXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICBjb25zdCBjb250ZW50ID0gJHRoaXMudGV4dCgpO1xuICAgICAgaWYgKGNvbnRlbnQgJiYgcmUudGVzdChjb250ZW50KSkge1xuICAgICAgICBjb25zdCBzZXBhcmF0b3JzID0gWy4uLmNvbnRlbnQubWF0Y2hBbGwocmVnKV1cbiAgICAgICAgICAubWFwKGFyciA9PiBhcnJbMF0pXG4gICAgICAgICAgLm1hcChzID0+IGA8bWFyaz4ke3N9PC9tYXJrPmApO1xuXG4gICAgICAgIGNvbnN0IHBhcnRzID0gY29udGVudFxuICAgICAgICAgIC5zcGxpdChyZSlcbiAgICAgICAgICAubWFwKGMgPT4gYy5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybWVkID0gcGFydHMubWFwKChlLCBpKSA9PiBlLmNvbmNhdChzZXBhcmF0b3JzW2ldID8gc2VwYXJhdG9yc1tpXSA6ICcnKSkuam9pbignJyk7XG5cbiAgICAgICAgJHRoaXMucmVwbGFjZVdpdGgodHJhbnNmb3JtZWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGVsLm5vcm1hbGl6ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhbkhpZ2hsaWdodChlbDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBub2RlTGlzdE9mID0gZWwucXVlcnlTZWxlY3RvckFsbCgnbWFyaycpO1xuICAgIG5vZGVMaXN0T2YuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGVsZW1lbnQucmVwbGFjZVdpdGgoKDxIVE1MRWxlbWVudD5lbGVtZW50KS5pbm5lclRleHQpO1xuICAgIH0pXG4gICAgZWwubm9ybWFsaXplKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFpvb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuem9vbSAvIDEwMDtcbiAgfVxufVxuIl19