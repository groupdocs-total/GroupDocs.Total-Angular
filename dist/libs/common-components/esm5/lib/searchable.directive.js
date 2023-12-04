/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef } from '@angular/core';
import { SearchService } from "./search.service";
import { ZoomService } from "./zoom.service";
import * as jquery from "jquery";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
/** @type {?} */
var $ = jquery;
var SearchableDirective = /** @class */ (function () {
    function SearchableDirective(_elementRef, _searchService, _zoomService) {
        var _this = this;
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
                var count = el.querySelectorAll('mark').length;
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
            var currentEl = el.querySelectorAll('mark')[this.current - 1];
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
        var re = new RegExp(text, 'gi');
        /** @type {?} */
        var reg = new RegExp("(" + text + ")", 'gi');
        textNodes.each((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var $this = $(this);
            /** @type {?} */
            var content = $this.text();
            if (content && re.test(content)) {
                /** @type {?} */
                var separators_1 = tslib_1.__spread(content.matchAll(reg)).map((/**
                 * @param {?} arr
                 * @return {?}
                 */
                function (arr) { return arr[0]; }))
                    .map((/**
                 * @param {?} s
                 * @return {?}
                 */
                function (s) { return "<mark>" + s + "</mark>"; }));
                /** @type {?} */
                var parts = content
                    .split(re)
                    .map((/**
                 * @param {?} c
                 * @return {?}
                 */
                function (c) { return c.replace(/</g, '&lt;').replace(/>/g, '&gt;'); }));
                /** @type {?} */
                var transformed = parts.map((/**
                 * @param {?} e
                 * @param {?} i
                 * @return {?}
                 */
                function (e, i) { return e.concat(separators_1[i] ? separators_1[i] : ''); })).join('');
                $this.replaceWith(transformed);
            }
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
        var nodeListOf = el.querySelectorAll('mark');
        nodeListOf.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
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
    SearchableDirective.prototype._zoomService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFDLFlBQVksRUFBRSxvQkFBb0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDOztJQUM1RCxDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQWNFLDZCQUFvQixXQUFvQyxFQUNwQyxjQUE2QixFQUM3QixZQUF5QjtRQUY3QyxpQkFzQ0M7UUF0Q21CLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQVQ3QyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNGLFNBQUksR0FBRyxHQUFHLENBQUM7UUFDWCx1QkFBa0IsR0FBcUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM1QyxlQUFVLEdBQXdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsRixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUs3QixjQUFjLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQWU7WUFDckQsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFD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Q0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7OztJQUVPLHFDQUFPOzs7O0lBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ3pCLENBQUM7O2dCQWpLRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7Ozs7Z0JBVmtCLFVBQVU7Z0JBQ3JCLGFBQWE7Z0JBQ2IsV0FBVzs7SUF3S25CLDBCQUFDO0NBQUEsQUFsS0QsSUFrS0M7U0EvSlksbUJBQW1COzs7SUFFOUIsbUNBQWE7O0lBQ2IsdUNBQWlCOztJQUNqQixzQ0FBWTs7SUFDWixvQ0FBVTs7Ozs7SUFDVixtQ0FBbUI7Ozs7O0lBQ25CLGlEQUE2RDs7Ozs7SUFDN0QseUNBQTBGOzs7OztJQUMxRiw2Q0FBK0I7Ozs7O0lBRW5CLDBDQUE0Qzs7Ozs7SUFDNUMsNkNBQXFDOzs7OztJQUNyQywyQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NlYXJjaFNlcnZpY2V9IGZyb20gXCIuL3NlYXJjaC5zZXJ2aWNlXCI7XG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge2RlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWR9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuY29uc3QgJCA9IGpxdWVyeTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkU2VhcmNoYWJsZV0nXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaGFibGVEaXJlY3RpdmUge1xuXG4gIHRleHQ6IHN0cmluZztcbiAgcHJldlRleHQ6IHN0cmluZztcbiAgY3VycmVudCA9IDA7XG4gIHRvdGFsID0gMDtcbiAgcHJpdmF0ZSB6b29tID0gMTAwO1xuICBwcml2YXRlIF9zZWFyY2hpbmdPYnNlcnZlcjogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3NlYXJjaGluZzogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuX3NlYXJjaGluZ09ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xuICBwcml2YXRlIF9zZWFyY2hpbmdGbGFnID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NlYXJjaFNlcnZpY2U6IFNlYXJjaFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSkge1xuICAgIF9zZWFyY2hTZXJ2aWNlLmN1cnJlbnRDaGFuZ2Uuc3Vic2NyaWJlKChjdXJyZW50OiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnQ7XG4gICAgICBpZiAodGhpcy5jdXJyZW50ICE9PSAwKSB7XG4gICAgICAgIHRoaXMubW92ZVRvQ3VycmVudCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX3NlYXJjaFNlcnZpY2UudGV4dENoYW5nZVxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpXG4gICAgICAgLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcbiAgICAgICAgLnN1YnNjcmliZSgodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgaWYgKCF0aGlzLl9zZWFyY2hpbmdGbGFnKSB7XG4gICAgICAgICB0aGlzLl9zZWFyY2hpbmdGbGFnID0gdHJ1ZTtcbiAgICAgICAgIHRoaXMuc2V0U2VhcmNoaW5nKHRoaXMuX3NlYXJjaGluZ0ZsYWcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy56b29tID0gX3pvb21TZXJ2aWNlLnpvb20gPyBfem9vbVNlcnZpY2Uuem9vbSA6IHRoaXMuem9vbTtcbiAgICBfem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHZhbDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLnpvb20gPSB2YWwgPyB2YWwgOiB0aGlzLnpvb207XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlYXJjaGluZy5zdWJzY3JpYmUoKHZhbDogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5fc2VhcmNoaW5nRmxhZyA9IHZhbDtcbiAgICAgIGlmICghdmFsKSB7XG4gICAgICAgIGlmICh0aGlzLnRleHQgIT09IHRoaXMucHJldlRleHQpIHtcbiAgICAgICAgICB0aGlzLl9zZWFyY2hpbmdGbGFnID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmhpZ2hsaWdodFNlYXJjaCgpO1xuICAgICAgICB9XG4gICAgICB9IFxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0U2VhcmNoKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZ2V0IHNlYXJjaGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoaW5nO1xuICB9XG5cbiAgc2V0U2VhcmNoaW5nKHNlYXJjaGluZzogYm9vbGVhbikge1xuICAgIHRoaXMuX3NlYXJjaGluZ09ic2VydmVyLm5leHQoc2VhcmNoaW5nKTtcbiAgfVxuXG4gIHByaXZhdGUgIGhpZ2hsaWdodFNlYXJjaCgpIHtcbiAgICB0aGlzLl9zZWFyY2hpbmdGbGFnID0gdHJ1ZTtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRSZWYgPyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xuXG4gICAgICAgc2V0VGltZW91dCgoKSA9PiBcbiAgICAgICB7XG4gICAgICAgIHRoaXMucHJldlRleHQgPSB0aGlzLnRleHQ7XG5cbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJldlRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYW5IaWdobGlnaHQoZWwpO1xuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRFbChlbCk7XG4gICAgICAgICAgfSBcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5jbGVhbkhpZ2hsaWdodChlbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIGlmICh0aGlzLnByZXZUZXh0KSB7XG4gICAgICAgICAgY29uc3QgY291bnQgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCdtYXJrJykubGVuZ3RoO1xuICAgICAgICAgIHRoaXMudG90YWwgPSBjb3VudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRvdGFsID0gMFxuICAgICAgICB9XG4gICAgICAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLnNldFRvdGFsKHRoaXMudG90YWwpO1xuICAgICAgICAgdGhpcy5zZXRTZWFyY2hpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAsMCk7XG4gIH1cblxuICBwcml2YXRlIG1vdmVUb0N1cnJlbnQoKSB7XG4gICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IDApIHtcbiAgICAgICByZXR1cm47XG4gICAgIH1cbiAgICAgY29uc3QgY3VycmVudFpvb20gPSB0aGlzLmdldFpvb20oKTtcbiAgICAgY29uc3QgZWwgPSB0aGlzLl9lbGVtZW50UmVmID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IDogbnVsbDtcbiAgICAgaWYgKGVsKSB7XG4gICAgICAgZWwucXVlcnlTZWxlY3RvckFsbCgnLmdkLWhpZ2hsaWdodC1zZWxlY3QnKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgJCh2YWx1ZSkucmVtb3ZlQ2xhc3MoJ2dkLWhpZ2hsaWdodC1zZWxlY3QnKTtcbiAgICAgICB9KTtcbiAgICAgICBjb25zdCBjdXJyZW50RWwgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCdtYXJrJylbdGhpcy5jdXJyZW50IC0gMV07XG4gICAgICAgJChjdXJyZW50RWwpLmFkZENsYXNzKCdnZC1oaWdobGlnaHQtc2VsZWN0Jyk7XG4gICAgICAgaWYgKGN1cnJlbnRFbCkge1xuICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgdG9wOiAoJChjdXJyZW50RWwpLm9mZnNldCgpLnRvcCkgKyBlbC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsVG9wIC0gMTUwLFxuICAgICAgICAgfTtcbiAgICAgICAgIC8vIHVzaW5nIHBvbHlmaWxsXG4gICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsKG9wdGlvbnMpO1xuICAgICAgIH1cbiAgICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoaWdobGlnaHRFbChlbDogRWxlbWVudCkge1xuICAgIGNvbnN0IHRleHROb2RlcyA9ICQoZWwpLmZpbmQoJyonKS5jb250ZW50cygpLmZpbHRlcihmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBub2RlTmFtZSA9IHRoaXMucGFyZW50RWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY29uc3QgY2hlY2tDbGFzcyA9ICg8RWxlbWVudD50aGlzKS5jbGFzc0xpc3QgPyAhKDxFbGVtZW50PnRoaXMpLmNsYXNzTGlzdC5jb250YWlucygnZ2QtaGlnaGxpZ2h0JykgOiB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXMubm9kZVR5cGUgPT09IDMgJiZcbiAgICAgICAgdGhpcy50ZXh0Q29udGVudC50cmltKCkubGVuZ3RoICE9PSAwICYmXG4gICAgICAgIG5vZGVOYW1lICE9PSAnc3R5bGUnICYmXG4gICAgICAgIG5vZGVOYW1lICE9PSAndGl0bGUnICYmXG4gICAgICAgIG5vZGVOYW1lICE9PSAnYm9keScgJiZcbiAgICAgICAgbm9kZU5hbWUgIT09ICdzY3JpcHQnICYmXG4gICAgICAgIGNoZWNrQ2xhc3M7XG4gICAgfSk7XG4gICAgY29uc3QgdGV4dCA9IHRoaXMudGV4dDtcbiAgICBjb25zdCByZSA9IG5ldyBSZWdFeHAodGV4dCwgJ2dpJyk7XG4gICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChgKCR7dGV4dH0pYCwgJ2dpJyk7XG4gICAgdGV4dE5vZGVzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgY29uc3QgY29udGVudCA9ICR0aGlzLnRleHQoKTtcbiAgICAgIGlmIChjb250ZW50ICYmIHJlLnRlc3QoY29udGVudCkpIHtcbiAgICAgICAgY29uc3Qgc2VwYXJhdG9ycyA9IFsuLi5jb250ZW50Lm1hdGNoQWxsKHJlZyldXG4gICAgICAgICAgLm1hcChhcnIgPT4gYXJyWzBdKVxuICAgICAgICAgIC5tYXAocyA9PiBgPG1hcms+JHtzfTwvbWFyaz5gKTtcblxuICAgICAgICBjb25zdCBwYXJ0cyA9IGNvbnRlbnRcbiAgICAgICAgICAuc3BsaXQocmUpXG4gICAgICAgICAgLm1hcChjID0+IGMucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0cmFuc2Zvcm1lZCA9IHBhcnRzLm1hcCgoZSwgaSkgPT4gZS5jb25jYXQoc2VwYXJhdG9yc1tpXSA/IHNlcGFyYXRvcnNbaV0gOiAnJykpLmpvaW4oJycpO1xuXG4gICAgICAgICR0aGlzLnJlcGxhY2VXaXRoKHRyYW5zZm9ybWVkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBlbC5ub3JtYWxpemUoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW5IaWdobGlnaHQoZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3Qgbm9kZUxpc3RPZiA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ21hcmsnKTtcbiAgICBub2RlTGlzdE9mLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKCg8SFRNTEVsZW1lbnQ+ZWxlbWVudCkuaW5uZXJUZXh0KTtcbiAgICB9KVxuICAgIGVsLm5vcm1hbGl6ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRab29tKCkge1xuICAgIHJldHVybiB0aGlzLnpvb20gLyAxMDA7XG4gIH1cbn1cbiJdfQ==