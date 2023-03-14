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
var $ = jquery;
var SearchableDirective = /** @class */ (function () {
    function SearchableDirective(_elementRef, _searchService, _highlight, _zoomService) {
        var _this = this;
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
        function (current) {
            _this.current = current;
            if (_this.current !== 0) {
                _this.moveToCurrent();
            }
        }));
        _searchService.textChange
            .pipe(debounceTime(500))
            .pipe(distinctUntilChanged())
            .subscribe((/**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            _this.text = text;
            if (!_this._searchingFlag) {
                _this._searchingFlag = true;
                _this.setSearching(_this._searchingFlag);
            }
        }));
        this.zoom = _zoomService.zoom ? _zoomService.zoom : this.zoom;
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this.zoom = val ? val : _this.zoom;
        }));
        this.searching.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this._searchingFlag = val;
            if (!val) {
                if (_this.text !== _this.prevText) {
                    _this._searchingFlag = true;
                    _this.highlightSearch();
                }
            }
            else {
                _this.highlightSearch();
            }
        }));
    }
    Object.defineProperty(SearchableDirective.prototype, "searching", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searching;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} searching
     * @return {?}
     */
    SearchableDirective.prototype.setSearching = /**
     * @param {?} searching
     * @return {?}
     */
    function (searching) {
        this._searchingObserver.next(searching);
    };
    /**
     * @private
     * @return {?}
     */
    SearchableDirective.prototype.highlightSearch = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._searchingFlag = true;
        /** @type {?} */
        var el = this._elementRef ? this._elementRef.nativeElement : null;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.prevText = _this.text;
            if (el) {
                if (_this.prevText) {
                    _this.cleanHighlight(el);
                    _this.highlightEl(el);
                }
                else {
                    _this.cleanHighlight(el);
                }
            }
            if (_this.prevText) {
                /** @type {?} */
                var count = el.querySelectorAll('.gd-highlight').length;
                _this.total = count;
            }
            else {
                _this.total = 0;
            }
            _this._searchService.setTotal(_this.total);
            _this.setSearching(false);
        }), 0);
    };
    /**
     * @private
     * @return {?}
     */
    SearchableDirective.prototype.moveToCurrent = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.current === 0) {
            return;
        }
        /** @type {?} */
        var currentZoom = this.getZoom();
        /** @type {?} */
        var el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            el.querySelectorAll('.gd-highlight-select').forEach((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                $(value).removeClass('gd-highlight-select');
            }));
            /** @type {?} */
            var currentEl = el.querySelectorAll('.gd-highlight')[this.current - 1];
            $(currentEl).addClass('gd-highlight-select');
            if (currentEl) {
                /** @type {?} */
                var options = {
                    left: 0,
                    top: ($(currentEl).offset().top) + el.parentElement.parentElement.scrollTop - 150,
                };
                // using polyfill
                el.parentElement.parentElement.scroll(options);
            }
        }
    };
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    SearchableDirective.prototype.highlightEl = /**
     * @private
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var textNodes = $(el).find('*').contents().filter((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var nodeName = this.parentElement.nodeName.toLowerCase();
            /** @type {?} */
            var checkClass = ((/** @type {?} */ (this))).classList ? !((/** @type {?} */ (this))).classList.contains('gd-highlight') : true;
            return this.nodeType === 3 &&
                this.textContent.trim().length !== 0 &&
                nodeName !== 'style' &&
                nodeName !== 'title' &&
                nodeName !== 'body' &&
                nodeName !== 'script' &&
                checkClass;
        }));
        /** @type {?} */
        var text = this.text;
        /** @type {?} */
        var highlight = this._highlight;
        textNodes.each((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var $this = $(this);
            /** @type {?} */
            var content = $this.text();
            content = highlight.transform(content, text);
            $this.replaceWith(content);
        }));
        el.normalize();
    };
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    SearchableDirective.prototype.cleanHighlight = /**
     * @private
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var nodeListOf = el.querySelectorAll('.gd-highlight');
        //const lengthOfNodeList = nodeListOf.length;
        //for (let i = 0; i < lengthOfNodeList; i++)
        nodeListOf.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            //const element = nodeListOf.item(i);
            element.replaceWith(((/** @type {?} */ (element))).innerText);
        }));
        el.normalize();
    };
    /**
     * @private
     * @return {?}
     */
    SearchableDirective.prototype.getZoom = /**
     * @private
     * @return {?}
     */
    function () {
        return this.zoom / 100;
    };
    SearchableDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdSearchable]'
                },] }
    ];
    /** @nocollapse */
    SearchableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: SearchService },
        { type: HighlightSearchPipe },
        { type: ZoomService }
    ]; };
    return SearchableDirective;
}());
export { SearchableDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDNUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFDLFlBQVksRUFBRSxvQkFBb0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDOztJQUM1RCxDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQWNFLDZCQUFvQixXQUFvQyxFQUNwQyxjQUE2QixFQUM3QixVQUErQixFQUMvQixZQUF5QjtRQUg3QyxpQkF1Q0M7UUF2Q21CLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUFxQjtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQVY3QyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNGLFNBQUksR0FBRyxHQUFHLENBQUM7UUFDWCx1QkFBa0IsR0FBcUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM1QyxlQUFVLEdBQXdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsRixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQU03Qixj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Q0FBQyxDQUFDO1FBQzdCLENBQUMsRUFBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7OztJQUVPLDRDQUFjOzs7OztJQUF0QixVQUF1QixFQUFlOztZQUM5QixVQUFVLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztRQUV2RCw2Q0FBNkM7UUFDN0MsNENBQTRDO1FBQzVDLFVBQVUsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ3hCLHFDQUFxQztZQUNyQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsbUJBQWEsT0FBTyxFQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4RCxDQUFDLEVBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7OztJQUVPLHFDQUFPOzs7O0lBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ3pCLENBQUM7O2dCQTFKRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7Ozs7Z0JBWGtCLFVBQVU7Z0JBQ3JCLGFBQWE7Z0JBQ2IsbUJBQW1CO2dCQUNuQixXQUFXOztJQWlLbkIsMEJBQUM7Q0FBQSxBQTNKRCxJQTJKQztTQXhKWSxtQkFBbUI7OztJQUU5QixtQ0FBYTs7SUFDYix1Q0FBaUI7O0lBQ2pCLHNDQUFZOztJQUNaLG9DQUFVOzs7OztJQUNWLG1DQUFtQjs7Ozs7SUFDbkIsaURBQTZEOzs7OztJQUM3RCx5Q0FBMEY7Ozs7O0lBQzFGLDZDQUErQjs7Ozs7SUFFbkIsMENBQTRDOzs7OztJQUM1Qyw2Q0FBcUM7Ozs7O0lBQ3JDLHlDQUF1Qzs7Ozs7SUFDdkMsMkNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTZWFyY2hTZXJ2aWNlfSBmcm9tIFwiLi9zZWFyY2guc2VydmljZVwiO1xuaW1wb3J0IHtIaWdobGlnaHRTZWFyY2hQaXBlfSBmcm9tIFwiLi9waXBlc1wiO1xuaW1wb3J0IHtab29tU2VydmljZX0gZnJvbSBcIi4vem9vbS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tnZFNlYXJjaGFibGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hhYmxlRGlyZWN0aXZlIHtcblxuICB0ZXh0OiBzdHJpbmc7XG4gIHByZXZUZXh0OiBzdHJpbmc7XG4gIGN1cnJlbnQgPSAwO1xuICB0b3RhbCA9IDA7XG4gIHByaXZhdGUgem9vbSA9IDEwMDtcbiAgcHJpdmF0ZSBfc2VhcmNoaW5nT2JzZXJ2ZXI6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9zZWFyY2hpbmc6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLl9zZWFyY2hpbmdPYnNlcnZlci5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBfc2VhcmNoaW5nRmxhZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIF9zZWFyY2hTZXJ2aWNlOiBTZWFyY2hTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9oaWdobGlnaHQ6IEhpZ2hsaWdodFNlYXJjaFBpcGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSkge1xuICAgIF9zZWFyY2hTZXJ2aWNlLmN1cnJlbnRDaGFuZ2Uuc3Vic2NyaWJlKChjdXJyZW50OiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnQ7XG4gICAgICBpZiAodGhpcy5jdXJyZW50ICE9PSAwKSB7XG4gICAgICAgIHRoaXMubW92ZVRvQ3VycmVudCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX3NlYXJjaFNlcnZpY2UudGV4dENoYW5nZVxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpXG4gICAgICAgLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcbiAgICAgICAgLnN1YnNjcmliZSgodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgaWYgKCF0aGlzLl9zZWFyY2hpbmdGbGFnKSB7XG4gICAgICAgICB0aGlzLl9zZWFyY2hpbmdGbGFnID0gdHJ1ZTtcbiAgICAgICAgIHRoaXMuc2V0U2VhcmNoaW5nKHRoaXMuX3NlYXJjaGluZ0ZsYWcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy56b29tID0gX3pvb21TZXJ2aWNlLnpvb20gPyBfem9vbVNlcnZpY2Uuem9vbSA6IHRoaXMuem9vbTtcbiAgICBfem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHZhbDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLnpvb20gPSB2YWwgPyB2YWwgOiB0aGlzLnpvb207XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlYXJjaGluZy5zdWJzY3JpYmUoKHZhbDogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5fc2VhcmNoaW5nRmxhZyA9IHZhbDtcbiAgICAgIGlmICghdmFsKSB7XG4gICAgICAgIGlmICh0aGlzLnRleHQgIT09IHRoaXMucHJldlRleHQpIHtcbiAgICAgICAgICB0aGlzLl9zZWFyY2hpbmdGbGFnID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmhpZ2hsaWdodFNlYXJjaCgpO1xuICAgICAgICB9XG4gICAgICB9IFxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0U2VhcmNoKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZ2V0IHNlYXJjaGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoaW5nO1xuICB9XG5cbiAgc2V0U2VhcmNoaW5nKHNlYXJjaGluZzogYm9vbGVhbikge1xuICAgIHRoaXMuX3NlYXJjaGluZ09ic2VydmVyLm5leHQoc2VhcmNoaW5nKTtcbiAgfVxuXG4gIHByaXZhdGUgIGhpZ2hsaWdodFNlYXJjaCgpIHtcbiAgICB0aGlzLl9zZWFyY2hpbmdGbGFnID0gdHJ1ZTtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRSZWYgPyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xuXG4gICAgICAgc2V0VGltZW91dCgoKSA9PiBcbiAgICAgICB7XG4gICAgICAgIHRoaXMucHJldlRleHQgPSB0aGlzLnRleHQ7XG5cbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJldlRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYW5IaWdobGlnaHQoZWwpO1xuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRFbChlbCk7XG4gICAgICAgICAgfSBcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5jbGVhbkhpZ2hsaWdodChlbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIGlmICh0aGlzLnByZXZUZXh0KSB7XG4gICAgICAgICAgY29uc3QgY291bnQgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2QtaGlnaGxpZ2h0JykubGVuZ3RoO1xuICAgICAgICAgIHRoaXMudG90YWwgPSBjb3VudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRvdGFsID0gMFxuICAgICAgICB9XG4gICAgICAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLnNldFRvdGFsKHRoaXMudG90YWwpO1xuICAgICAgICAgdGhpcy5zZXRTZWFyY2hpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAsMCk7XG4gIH1cblxuICBwcml2YXRlIG1vdmVUb0N1cnJlbnQoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50Wm9vbSA9IHRoaXMuZ2V0Wm9vbSgpO1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA6IG51bGw7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2QtaGlnaGxpZ2h0LXNlbGVjdCcpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICQodmFsdWUpLnJlbW92ZUNsYXNzKCdnZC1oaWdobGlnaHQtc2VsZWN0Jyk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGN1cnJlbnRFbCA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC1oaWdobGlnaHQnKVt0aGlzLmN1cnJlbnQgLSAxXTtcbiAgICAgICQoY3VycmVudEVsKS5hZGRDbGFzcygnZ2QtaGlnaGxpZ2h0LXNlbGVjdCcpO1xuICAgICAgaWYgKGN1cnJlbnRFbCkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgdG9wOiAoJChjdXJyZW50RWwpLm9mZnNldCgpLnRvcCkgKyBlbC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsVG9wIC0gMTUwLFxuICAgICAgICB9O1xuICAgICAgICAvLyB1c2luZyBwb2x5ZmlsbFxuICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsKG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGlnaGxpZ2h0RWwoZWw6IEVsZW1lbnQpIHtcbiAgICBjb25zdCB0ZXh0Tm9kZXMgPSAkKGVsKS5maW5kKCcqJykuY29udGVudHMoKS5maWx0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3Qgbm9kZU5hbWUgPSB0aGlzLnBhcmVudEVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IGNoZWNrQ2xhc3MgPSAoPEVsZW1lbnQ+dGhpcykuY2xhc3NMaXN0ID8gISg8RWxlbWVudD50aGlzKS5jbGFzc0xpc3QuY29udGFpbnMoJ2dkLWhpZ2hsaWdodCcpIDogdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVUeXBlID09PSAzICYmXG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQudHJpbSgpLmxlbmd0aCAhPT0gMCAmJlxuICAgICAgICBub2RlTmFtZSAhPT0gJ3N0eWxlJyAmJlxuICAgICAgICBub2RlTmFtZSAhPT0gJ3RpdGxlJyAmJlxuICAgICAgICBub2RlTmFtZSAhPT0gJ2JvZHknICYmXG4gICAgICAgIG5vZGVOYW1lICE9PSAnc2NyaXB0JyAmJlxuICAgICAgICBjaGVja0NsYXNzO1xuICAgIH0pO1xuICAgIGNvbnN0IHRleHQgPSB0aGlzLnRleHQ7XG4gICAgY29uc3QgaGlnaGxpZ2h0ID0gdGhpcy5faGlnaGxpZ2h0O1xuICAgIHRleHROb2Rlcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIGxldCBjb250ZW50ID0gJHRoaXMudGV4dCgpO1xuICAgICAgY29udGVudCA9IGhpZ2hsaWdodC50cmFuc2Zvcm0oY29udGVudCwgdGV4dCk7XG4gICAgICAkdGhpcy5yZXBsYWNlV2l0aChjb250ZW50KTtcbiAgICB9KTtcbiAgICBlbC5ub3JtYWxpemUoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW5IaWdobGlnaHQoZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3Qgbm9kZUxpc3RPZiA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC1oaWdobGlnaHQnKTtcblxuICAgIC8vY29uc3QgbGVuZ3RoT2ZOb2RlTGlzdCA9IG5vZGVMaXN0T2YubGVuZ3RoO1xuICAgIC8vZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGhPZk5vZGVMaXN0OyBpKyspXG4gICAgbm9kZUxpc3RPZi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgLy9jb25zdCBlbGVtZW50ID0gbm9kZUxpc3RPZi5pdGVtKGkpO1xuICAgICAgZWxlbWVudC5yZXBsYWNlV2l0aCgoPEhUTUxFbGVtZW50PmVsZW1lbnQpLmlubmVyVGV4dCk7XG4gICAgfSlcbiAgICBlbC5ub3JtYWxpemUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tIC8gMTAwO1xuICB9XG59XG4iXX0=