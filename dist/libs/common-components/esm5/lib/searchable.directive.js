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
        var text = this.text.split('').map(this.getTurkishCharacterPattern).join('');
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
     * @param {?} char
     * @return {?}
     */
    SearchableDirective.prototype.getTurkishCharacterPattern = /**
     * @private
     * @param {?} char
     * @return {?}
     */
    function (char) {
        /** @type {?} */
        var turkishMapping = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFDLFlBQVksRUFBRSxvQkFBb0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDOztJQUM1RCxDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQWNFLDZCQUFvQixXQUFvQyxFQUNwQyxjQUE2QixFQUM3QixZQUF5QjtRQUY3QyxpQkF1Q0M7UUF2Q21CLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQVQ3QyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNGLFNBQUksR0FBRyxHQUFHLENBQUM7UUFDWCx1QkFBa0IsR0FBcUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM1QyxlQUFVLEdBQXdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsRixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQU03QixjQUFjLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQWU7WUFDckQsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFD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QUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELENBQUMsRUFBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7OztJQUVPLHdEQUEwQjs7Ozs7SUFBbEMsVUFBbUMsSUFBSTs7WUFDN0IsY0FBYyxHQUFHO1lBQ25CLEdBQUcsRUFBRSxNQUFNOztZQUNYLEdBQUcsRUFBRSxNQUFNOztZQUNYLEdBQUcsRUFBRSxNQUFNOztZQUNYLEdBQUcsRUFBRSxNQUFNOztZQUNYLEdBQUcsRUFBRSxNQUFNOztZQUNYLEdBQUcsRUFBRSxNQUFNOztZQUNYLEdBQUcsRUFBRSxNQUFNO1NBQ2Q7UUFFRCxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDeEMsQ0FBQzs7Z0JBNUtGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OztnQkFWa0IsVUFBVTtnQkFDckIsYUFBYTtnQkFDYixXQUFXOztJQW1MbkIsMEJBQUM7Q0FBQSxBQTdLRCxJQTZLQztTQTFLWSxtQkFBbUI7OztJQUU5QixtQ0FBYTs7SUFDYix1Q0FBaUI7O0lBQ2pCLHNDQUFZOztJQUNaLG9DQUFVOzs7OztJQUNWLG1DQUFtQjs7Ozs7SUFDbkIsaURBQTZEOzs7OztJQUM3RCx5Q0FBMEY7Ozs7O0lBQzFGLDZDQUErQjs7Ozs7SUFFbkIsMENBQTRDOzs7OztJQUM1Qyw2Q0FBcUM7Ozs7O0lBQ3JDLDJDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2VhcmNoU2VydmljZX0gZnJvbSBcIi4vc2VhcmNoLnNlcnZpY2VcIjtcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7ZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5jb25zdCAkID0ganF1ZXJ5O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2RTZWFyY2hhYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoYWJsZURpcmVjdGl2ZSB7XG5cbiAgdGV4dDogc3RyaW5nO1xuICBwcmV2VGV4dDogc3RyaW5nO1xuICBjdXJyZW50ID0gMDtcbiAgdG90YWwgPSAwO1xuICBwcml2YXRlIHpvb20gPSAxMDA7XG4gIHByaXZhdGUgX3NlYXJjaGluZ09ic2VydmVyOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfc2VhcmNoaW5nOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5fc2VhcmNoaW5nT2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgX3NlYXJjaGluZ0ZsYWcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2VhcmNoU2VydmljZTogU2VhcmNoU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgX3NlYXJjaFNlcnZpY2UuY3VycmVudENoYW5nZS5zdWJzY3JpYmUoKGN1cnJlbnQ6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50ID0gY3VycmVudDtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQgIT09IDApIHtcbiAgICAgICAgdGhpcy5tb3ZlVG9DdXJyZW50KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfc2VhcmNoU2VydmljZS50ZXh0Q2hhbmdlXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoNTAwKSlcbiAgICAgICAucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxuICAgICAgICAuc3Vic2NyaWJlKCh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICAgIGlmICghdGhpcy5fc2VhcmNoaW5nRmxhZykge1xuICAgICAgICAgICAgIHRoaXMuX3NlYXJjaGluZ0ZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgIHRoaXMuc2V0U2VhcmNoaW5nKHRoaXMuX3NlYXJjaGluZ0ZsYWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB0aGlzLnpvb20gPSBfem9vbVNlcnZpY2Uuem9vbSA/IF96b29tU2VydmljZS56b29tIDogdGhpcy56b29tO1xuICAgIF96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgodmFsOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuem9vbSA9IHZhbCA/IHZhbCA6IHRoaXMuem9vbTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2VhcmNoaW5nLnN1YnNjcmliZSgodmFsOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLl9zZWFyY2hpbmdGbGFnID0gdmFsO1xuICAgICAgaWYgKCF2YWwpIHtcbiAgICAgICAgaWYgKHRoaXMudGV4dCAhPT0gdGhpcy5wcmV2VGV4dCkge1xuICAgICAgICAgIHRoaXMuX3NlYXJjaGluZ0ZsYWcgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0U2VhcmNoKCk7XG4gICAgICAgIH1cbiAgICAgIH0gXG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRTZWFyY2goKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBnZXQgc2VhcmNoaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLl9zZWFyY2hpbmc7XG4gIH1cblxuICBzZXRTZWFyY2hpbmcoc2VhcmNoaW5nOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2VhcmNoaW5nT2JzZXJ2ZXIubmV4dChzZWFyY2hpbmcpO1xuICB9XG5cbiAgcHJpdmF0ZSBoaWdobGlnaHRTZWFyY2goKSB7XG4gICAgdGhpcy5fc2VhcmNoaW5nRmxhZyA9IHRydWU7XG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbGVtZW50UmVmID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IDogbnVsbDtcblxuICAgICAgIHNldFRpbWVvdXQoKCkgPT4gXG4gICAgICAge1xuICAgICAgICB0aGlzLnByZXZUZXh0ID0gdGhpcy50ZXh0O1xuXG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgIGlmICh0aGlzLnByZXZUZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFuSGlnaGxpZ2h0KGVsKTtcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0RWwoZWwpO1xuICAgICAgICAgIH0gXG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuY2xlYW5IaWdobGlnaHQoZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuICAgICAgICBpZiAodGhpcy5wcmV2VGV4dCkge1xuICAgICAgICAgIGNvbnN0IGNvdW50ID0gZWwucXVlcnlTZWxlY3RvckFsbCgnbWFyaycpLmxlbmd0aDtcbiAgICAgICAgICB0aGlzLnRvdGFsID0gY291bnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy50b3RhbCA9IDBcbiAgICAgICAgfVxuICAgICAgICAgdGhpcy5fc2VhcmNoU2VydmljZS5zZXRUb3RhbCh0aGlzLnRvdGFsKTtcbiAgICAgICAgIHRoaXMuc2V0U2VhcmNoaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgLDApO1xuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlVG9DdXJyZW50KCkge1xuICAgICBpZiAodGhpcy5jdXJyZW50ID09PSAwKSB7XG4gICAgICAgcmV0dXJuO1xuICAgICB9XG4gICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA6IG51bGw7XG4gICAgIGlmIChlbCkge1xuICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC1oaWdobGlnaHQtc2VsZWN0JykuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICQodmFsdWUpLnJlbW92ZUNsYXNzKCdnZC1oaWdobGlnaHQtc2VsZWN0Jyk7XG4gICAgICAgfSk7XG4gICAgICAgY29uc3QgY3VycmVudEVsID0gZWwucXVlcnlTZWxlY3RvckFsbCgnbWFyaycpW3RoaXMuY3VycmVudCAtIDFdO1xuICAgICAgICQoY3VycmVudEVsKS5hZGRDbGFzcygnZ2QtaGlnaGxpZ2h0LXNlbGVjdCcpO1xuICAgICAgIGlmIChjdXJyZW50RWwpIHtcbiAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgIHRvcDogKCQoY3VycmVudEVsKS5vZmZzZXQoKS50b3ApICsgZWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcCAtIDE1MCxcbiAgICAgICAgIH07XG4gICAgICAgICAvLyB1c2luZyBwb2x5ZmlsbFxuICAgICAgICAgZWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbChvcHRpb25zKTtcbiAgICAgICB9XG4gICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGlnaGxpZ2h0RWwoZWw6IEVsZW1lbnQpIHtcbiAgICBjb25zdCB0ZXh0Tm9kZXMgPSAkKGVsKS5maW5kKCcqJykuY29udGVudHMoKS5maWx0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBub2RlTmFtZSA9IHRoaXMucGFyZW50RWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBjaGVja0NsYXNzID0gKDxFbGVtZW50PnRoaXMpLmNsYXNzTGlzdCA/ICEoPEVsZW1lbnQ+dGhpcykuY2xhc3NMaXN0LmNvbnRhaW5zKCdnZC1oaWdobGlnaHQnKSA6IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVUeXBlID09PSAzICYmXG4gICAgICAgICAgdGhpcy50ZXh0Q29udGVudC50cmltKCkubGVuZ3RoICE9PSAwICYmXG4gICAgICAgICAgbm9kZU5hbWUgIT09ICdzdHlsZScgJiZcbiAgICAgICAgICBub2RlTmFtZSAhPT0gJ3RpdGxlJyAmJlxuICAgICAgICAgIG5vZGVOYW1lICE9PSAnYm9keScgJiZcbiAgICAgICAgICBub2RlTmFtZSAhPT0gJ3NjcmlwdCcgJiZcbiAgICAgICAgICBjaGVja0NsYXNzO1xuICAgICAgfSk7XG5cbiAgICBjb25zdCB0ZXh0ID0gdGhpcy50ZXh0LnNwbGl0KCcnKS5tYXAodGhpcy5nZXRUdXJraXNoQ2hhcmFjdGVyUGF0dGVybikuam9pbignJyk7XG4gICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKHRleHQsICdnaScpO1xuICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYCgke3RleHR9KWAsICdnaScpO1xuICAgIHRleHROb2Rlcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSAkdGhpcy50ZXh0KCk7XG4gICAgICBpZiAoY29udGVudCAmJiByZS50ZXN0KGNvbnRlbnQpKSB7XG4gICAgICAgIGNvbnN0IHNlcGFyYXRvcnMgPSBbLi4uY29udGVudC5tYXRjaEFsbChyZWcpXVxuICAgICAgICAgIC5tYXAoYXJyID0+IGFyclswXSlcbiAgICAgICAgICAubWFwKHMgPT4gYDxtYXJrPiR7c308L21hcms+YCk7XG5cbiAgICAgICAgY29uc3QgcGFydHMgPSBjb250ZW50XG4gICAgICAgICAgLnNwbGl0KHJlKVxuICAgICAgICAgIC5tYXAoYyA9PiBjLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7JykpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtZWQgPSBwYXJ0cy5tYXAoKGUsIGkpID0+IGUuY29uY2F0KHNlcGFyYXRvcnNbaV0gPyBzZXBhcmF0b3JzW2ldIDogJycpKS5qb2luKCcnKTtcblxuICAgICAgICAkdGhpcy5yZXBsYWNlV2l0aCh0cmFuc2Zvcm1lZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZWwubm9ybWFsaXplKCk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuSGlnaGxpZ2h0KGVsOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IG5vZGVMaXN0T2YgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCdtYXJrJyk7XG4gICAgbm9kZUxpc3RPZi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgZWxlbWVudC5yZXBsYWNlV2l0aCgoPEhUTUxFbGVtZW50PmVsZW1lbnQpLmlubmVyVGV4dCk7XG4gICAgfSlcbiAgICBlbC5ub3JtYWxpemUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VHVya2lzaENoYXJhY3RlclBhdHRlcm4oY2hhcikge1xuICAgICAgY29uc3QgdHVya2lzaE1hcHBpbmcgPSB7XG4gICAgICAgICAgJ2knOiAnW2nEsF0nLCAgLy8gRW5nbGlzaCAnaScgbWF0Y2hlcyBib3RoICdpJyBhbmQgJ8SwJ1xuICAgICAgICAgICdJJzogJ1vEsUldJywgIC8vIEVuZ2xpc2ggJ0knIG1hdGNoZXMgYm90aCAnxLEnIGFuZCAnSSdcbiAgICAgICAgICAnYyc6ICdbY8OHXScsICAvLyBFbmdsaXNoICdjJyBtYXRjaGVzIGJvdGggJ2MnIGFuZCAnw4cnXG4gICAgICAgICAgJ2cnOiAnW2fEnl0nLCAgLy8gRW5nbGlzaCAnZycgbWF0Y2hlcyBib3RoICdnJyBhbmQgJ8SeJ1xuICAgICAgICAgICdvJzogJ1tvw5ZdJywgIC8vIEVuZ2xpc2ggJ28nIG1hdGNoZXMgYm90aCAnbycgYW5kICfDlidcbiAgICAgICAgICAncyc6ICdbc8WeXScsICAvLyBFbmdsaXNoICdzJyBtYXRjaGVzIGJvdGggJ3MnIGFuZCAnxZ4nXG4gICAgICAgICAgJ3UnOiAnW3XDnF0nLCAgLy8gRW5nbGlzaCAndScgbWF0Y2hlcyBib3RoICd1JyBhbmQgJ8OcJ1xuICAgICAgfTtcbiAgICBcbiAgICAgIHJldHVybiB0dXJraXNoTWFwcGluZ1tjaGFyXSB8fCBjaGFyO1xuICB9XG59XG4iXX0=