/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
import { SearchService } from "./search.service";
import { HighlightSearchPipe } from "./pipes";
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
     * @param {?} _highlight
     * @param {?} _zoomService
     */
    constructor(_elementRef, _searchService, _highlight, _zoomService) {
        this._elementRef = _elementRef;
        this._searchService = _searchService;
        this._highlight = _highlight;
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
                const count = el.querySelectorAll('.gd-highlight').length;
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
            const currentEl = el.querySelectorAll('.gd-highlight')[this.current - 1];
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
        const highlight = this._highlight;
        textNodes.each((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            const $this = $(this);
            /** @type {?} */
            let content = $this.text();
            content = highlight.transform(content, text);
            $this.replaceWith(content);
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
        const nodeListOf = el.querySelectorAll('.gd-highlight');
        //const lengthOfNodeList = nodeListOf.length;
        //for (let i = 0; i < lengthOfNodeList; i++)
        nodeListOf.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            //const element = nodeListOf.item(i);
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
    { type: HighlightSearchPipe },
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
    SearchableDirective.prototype._highlight;
    /**
     * @type {?}
     * @private
     */
    SearchableDirective.prototype._zoomService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDNUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFDLFlBQVksRUFBRSxvQkFBb0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDOztNQUM1RCxDQUFDLEdBQUcsTUFBTTtBQUtoQixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7O0lBVzlCLFlBQW9CLFdBQW9DLEVBQ3BDLGNBQTZCLEVBQzdCLFVBQStCLEVBQy9CLFlBQXlCO1FBSHpCLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUFxQjtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQVY3QyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNGLFNBQUksR0FBRyxHQUFHLENBQUM7UUFDWCx1QkFBa0IsR0FBcUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM1QyxlQUFVLEdBQXdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsRixtQkFBYyxHQUFHLEtBQUssQ0FB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QUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLEVBQWU7O2NBQzlCLFVBQVUsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO1FBRXZELDZDQUE2QztRQUM3Qyw0Q0FBNEM7UUFDNUMsVUFBVSxDQUFDLE9BQU87Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUMzQixxQ0FBcUM7WUFDckMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLG1CQUFhLE9BQU8sRUFBQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxFQUFDLENBQUE7UUFDRixFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFTyxPQUFPO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUN6QixDQUFDOzs7WUExSkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs7WUFYa0IsVUFBVTtZQUNyQixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLFdBQVc7Ozs7SUFXakIsbUNBQWE7O0lBQ2IsdUNBQWlCOztJQUNqQixzQ0FBWTs7SUFDWixvQ0FBVTs7Ozs7SUFDVixtQ0FBbUI7Ozs7O0lBQ25CLGlEQUE2RDs7Ozs7SUFDN0QseUNBQTBGOzs7OztJQUMxRiw2Q0FBK0I7Ozs7O0lBRW5CLDBDQUE0Qzs7Ozs7SUFDNUMsNkNBQXFDOzs7OztJQUNyQyx5Q0FBdUM7Ozs7O0lBQ3ZDLDJDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2VhcmNoU2VydmljZX0gZnJvbSBcIi4vc2VhcmNoLnNlcnZpY2VcIjtcbmltcG9ydCB7SGlnaGxpZ2h0U2VhcmNoUGlwZX0gZnJvbSBcIi4vcGlwZXNcIjtcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7ZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5jb25zdCAkID0ganF1ZXJ5O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2RTZWFyY2hhYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoYWJsZURpcmVjdGl2ZSB7XG5cbiAgdGV4dDogc3RyaW5nO1xuICBwcmV2VGV4dDogc3RyaW5nO1xuICBjdXJyZW50ID0gMDtcbiAgdG90YWwgPSAwO1xuICBwcml2YXRlIHpvb20gPSAxMDA7XG4gIHByaXZhdGUgX3NlYXJjaGluZ09ic2VydmVyOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfc2VhcmNoaW5nOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5fc2VhcmNoaW5nT2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgX3NlYXJjaGluZ0ZsYWcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2VhcmNoU2VydmljZTogU2VhcmNoU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfaGlnaGxpZ2h0OiBIaWdobGlnaHRTZWFyY2hQaXBlLFxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UpIHtcbiAgICBfc2VhcmNoU2VydmljZS5jdXJyZW50Q2hhbmdlLnN1YnNjcmliZSgoY3VycmVudDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50O1xuICAgICAgaWYgKHRoaXMuY3VycmVudCAhPT0gMCkge1xuICAgICAgICB0aGlzLm1vdmVUb0N1cnJlbnQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9zZWFyY2hTZXJ2aWNlLnRleHRDaGFuZ2VcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSg1MDApKVxuICAgICAgIC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgIGlmICghdGhpcy5fc2VhcmNoaW5nRmxhZykge1xuICAgICAgICAgdGhpcy5fc2VhcmNoaW5nRmxhZyA9IHRydWU7XG4gICAgICAgICB0aGlzLnNldFNlYXJjaGluZyh0aGlzLl9zZWFyY2hpbmdGbGFnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuem9vbSA9IF96b29tU2VydmljZS56b29tID8gX3pvb21TZXJ2aWNlLnpvb20gOiB0aGlzLnpvb207XG4gICAgX3pvb21TZXJ2aWNlLnpvb21DaGFuZ2Uuc3Vic2NyaWJlKCh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy56b29tID0gdmFsID8gdmFsIDogdGhpcy56b29tO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZWFyY2hpbmcuc3Vic2NyaWJlKCh2YWw6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuX3NlYXJjaGluZ0ZsYWcgPSB2YWw7XG4gICAgICBpZiAoIXZhbCkge1xuICAgICAgICBpZiAodGhpcy50ZXh0ICE9PSB0aGlzLnByZXZUZXh0KSB7XG4gICAgICAgICAgdGhpcy5fc2VhcmNoaW5nRmxhZyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5oaWdobGlnaHRTZWFyY2goKTtcbiAgICAgICAgfVxuICAgICAgfSBcbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodFNlYXJjaCgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGdldCBzZWFyY2hpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaGluZztcbiAgfVxuXG4gIHNldFNlYXJjaGluZyhzZWFyY2hpbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zZWFyY2hpbmdPYnNlcnZlci5uZXh0KHNlYXJjaGluZyk7XG4gIH1cblxuICBwcml2YXRlICBoaWdobGlnaHRTZWFyY2goKSB7XG4gICAgdGhpcy5fc2VhcmNoaW5nRmxhZyA9IHRydWU7XG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbGVtZW50UmVmID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IDogbnVsbDtcblxuICAgICAgIHNldFRpbWVvdXQoKCkgPT4gXG4gICAgICAge1xuICAgICAgICB0aGlzLnByZXZUZXh0ID0gdGhpcy50ZXh0O1xuXG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgIGlmICh0aGlzLnByZXZUZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFuSGlnaGxpZ2h0KGVsKTtcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0RWwoZWwpO1xuICAgICAgICAgIH0gXG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuY2xlYW5IaWdobGlnaHQoZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuICAgICAgICBpZiAodGhpcy5wcmV2VGV4dCkge1xuICAgICAgICAgIGNvbnN0IGNvdW50ID0gZWwucXVlcnlTZWxlY3RvckFsbCgnLmdkLWhpZ2hsaWdodCcpLmxlbmd0aDtcbiAgICAgICAgICB0aGlzLnRvdGFsID0gY291bnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy50b3RhbCA9IDBcbiAgICAgICAgfVxuICAgICAgICAgdGhpcy5fc2VhcmNoU2VydmljZS5zZXRUb3RhbCh0aGlzLnRvdGFsKTtcbiAgICAgICAgIHRoaXMuc2V0U2VhcmNoaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgLDApO1xuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlVG9DdXJyZW50KCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudFpvb20gPSB0aGlzLmdldFpvb20oKTtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRSZWYgPyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xuICAgIGlmIChlbCkge1xuICAgICAgZWwucXVlcnlTZWxlY3RvckFsbCgnLmdkLWhpZ2hsaWdodC1zZWxlY3QnKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAkKHZhbHVlKS5yZW1vdmVDbGFzcygnZ2QtaGlnaGxpZ2h0LXNlbGVjdCcpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBjdXJyZW50RWwgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2QtaGlnaGxpZ2h0JylbdGhpcy5jdXJyZW50IC0gMV07XG4gICAgICAkKGN1cnJlbnRFbCkuYWRkQ2xhc3MoJ2dkLWhpZ2hsaWdodC1zZWxlY3QnKTtcbiAgICAgIGlmIChjdXJyZW50RWwpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHRvcDogKCQoY3VycmVudEVsKS5vZmZzZXQoKS50b3ApICsgZWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcCAtIDE1MCxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdXNpbmcgcG9seWZpbGxcbiAgICAgICAgZWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbChvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhpZ2hsaWdodEVsKGVsOiBFbGVtZW50KSB7XG4gICAgY29uc3QgdGV4dE5vZGVzID0gJChlbCkuZmluZCgnKicpLmNvbnRlbnRzKCkuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IG5vZGVOYW1lID0gdGhpcy5wYXJlbnRFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCBjaGVja0NsYXNzID0gKDxFbGVtZW50PnRoaXMpLmNsYXNzTGlzdCA/ICEoPEVsZW1lbnQ+dGhpcykuY2xhc3NMaXN0LmNvbnRhaW5zKCdnZC1oaWdobGlnaHQnKSA6IHRydWU7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlVHlwZSA9PT0gMyAmJlxuICAgICAgICB0aGlzLnRleHRDb250ZW50LnRyaW0oKS5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgbm9kZU5hbWUgIT09ICdzdHlsZScgJiZcbiAgICAgICAgbm9kZU5hbWUgIT09ICd0aXRsZScgJiZcbiAgICAgICAgbm9kZU5hbWUgIT09ICdib2R5JyAmJlxuICAgICAgICBub2RlTmFtZSAhPT0gJ3NjcmlwdCcgJiZcbiAgICAgICAgY2hlY2tDbGFzcztcbiAgICB9KTtcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy50ZXh0O1xuICAgIGNvbnN0IGhpZ2hsaWdodCA9IHRoaXMuX2hpZ2hsaWdodDtcbiAgICB0ZXh0Tm9kZXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICBsZXQgY29udGVudCA9ICR0aGlzLnRleHQoKTtcbiAgICAgIGNvbnRlbnQgPSBoaWdobGlnaHQudHJhbnNmb3JtKGNvbnRlbnQsIHRleHQpO1xuICAgICAgJHRoaXMucmVwbGFjZVdpdGgoY29udGVudCk7XG4gICAgfSk7XG4gICAgZWwubm9ybWFsaXplKCk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuSGlnaGxpZ2h0KGVsOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IG5vZGVMaXN0T2YgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2QtaGlnaGxpZ2h0Jyk7XG5cbiAgICAvL2NvbnN0IGxlbmd0aE9mTm9kZUxpc3QgPSBub2RlTGlzdE9mLmxlbmd0aDtcbiAgICAvL2ZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoT2ZOb2RlTGlzdDsgaSsrKVxuICAgIG5vZGVMaXN0T2YuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIC8vY29uc3QgZWxlbWVudCA9IG5vZGVMaXN0T2YuaXRlbShpKTtcbiAgICAgIGVsZW1lbnQucmVwbGFjZVdpdGgoKDxIVE1MRWxlbWVudD5lbGVtZW50KS5pbm5lclRleHQpO1xuICAgIH0pXG4gICAgZWwubm9ybWFsaXplKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFpvb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuem9vbSAvIDEwMDtcbiAgfVxufVxuIl19