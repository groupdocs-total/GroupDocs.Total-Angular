/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
import { SearchService } from "./search.service";
import { HighlightSearchPipe } from "./pipes";
import { ZoomService } from "./zoom.service";
import * as jquery from "jquery";
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
        _searchService.textChange.subscribe((/**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            _this.text = text;
            _this.highlightSearch();
        }));
        this.zoom = _zoomService.zoom ? _zoomService.zoom : this.zoom;
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this.zoom = val ? val : _this.zoom;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    SearchableDirective.prototype.highlightSearch = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            this.cleanHighlight(el);
            if (this.text) {
                this.highlightEl(el);
                /** @type {?} */
                var count = el.querySelectorAll('.gd-highlight').length;
                this.total = count;
            }
            else {
                this.total = 0;
            }
            this._searchService.setTotal(this.total);
        }
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
                    top: ($(currentEl).offset().top * currentZoom) + el.parentElement.scrollTop - 150,
                };
                el.parentElement.parentElement.scrollTo(options);
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
        for (var i = 0; i < nodeListOf.length; i++) {
            /** @type {?} */
            var element = nodeListOf.item(i);
            element.replaceWith(((/** @type {?} */ (element))).innerText);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDNUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztJQUMzQixDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQVVFLDZCQUFvQixXQUFvQyxFQUNwQyxjQUE2QixFQUM3QixVQUErQixFQUMvQixZQUF5QjtRQUg3QyxpQkFvQkM7UUFwQm1CLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUFxQjtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQVA3QyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNGLFNBQUksR0FBRyxHQUFHLENBQUM7UUFNakIsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxPQUFlO1lBQ3JELEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksS0FBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUU7Z0JBQ3RCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN0QjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7O1FBQUMs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RyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsbUJBQWEsT0FBTyxFQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN2RDtRQUNELEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7OztJQUVPLHFDQUFPOzs7O0lBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ3pCLENBQUM7O2dCQXZHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7Ozs7Z0JBVGtCLFVBQVU7Z0JBQ3JCLGFBQWE7Z0JBQ2IsbUJBQW1CO2dCQUNuQixXQUFXOztJQTRHbkIsMEJBQUM7Q0FBQSxBQXhHRCxJQXdHQztTQXJHWSxtQkFBbUI7OztJQUU5QixtQ0FBYTs7SUFDYixzQ0FBWTs7SUFDWixvQ0FBVTs7Ozs7SUFDVixtQ0FBbUI7Ozs7O0lBRVAsMENBQTRDOzs7OztJQUM1Qyw2Q0FBcUM7Ozs7O0lBQ3JDLHlDQUF1Qzs7Ozs7SUFDdkMsMkNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1NlYXJjaFNlcnZpY2V9IGZyb20gXCIuL3NlYXJjaC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SGlnaGxpZ2h0U2VhcmNoUGlwZX0gZnJvbSBcIi4vcGlwZXNcIjtcclxuaW1wb3J0IHtab29tU2VydmljZX0gZnJvbSBcIi4vem9vbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tIFwianF1ZXJ5XCI7XHJcbmNvbnN0ICQgPSBqcXVlcnk7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tnZFNlYXJjaGFibGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoYWJsZURpcmVjdGl2ZSB7XHJcblxyXG4gIHRleHQ6IHN0cmluZztcclxuICBjdXJyZW50ID0gMDtcclxuICB0b3RhbCA9IDA7XHJcbiAgcHJpdmF0ZSB6b29tID0gMTAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgICAgICAgICAgICBwcml2YXRlIF9zZWFyY2hTZXJ2aWNlOiBTZWFyY2hTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2hpZ2hsaWdodDogSGlnaGxpZ2h0U2VhcmNoUGlwZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UpIHtcclxuICAgIF9zZWFyY2hTZXJ2aWNlLmN1cnJlbnRDaGFuZ2Uuc3Vic2NyaWJlKChjdXJyZW50OiBudW1iZXIpID0+IHtcclxuICAgICAgdGhpcy5jdXJyZW50ID0gY3VycmVudDtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudCAhPT0gMCkge1xyXG4gICAgICAgIHRoaXMubW92ZVRvQ3VycmVudCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBfc2VhcmNoU2VydmljZS50ZXh0Q2hhbmdlLnN1YnNjcmliZSgodGV4dDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgIHRoaXMuaGlnaGxpZ2h0U2VhcmNoKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnpvb20gPSBfem9vbVNlcnZpY2Uuem9vbSA/IF96b29tU2VydmljZS56b29tIDogdGhpcy56b29tO1xyXG4gICAgX3pvb21TZXJ2aWNlLnpvb21DaGFuZ2Uuc3Vic2NyaWJlKCh2YWw6IG51bWJlcikgPT4ge1xyXG4gICAgICB0aGlzLnpvb20gPSB2YWwgPyB2YWwgOiB0aGlzLnpvb207XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlnaGxpZ2h0U2VhcmNoKCkge1xyXG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbGVtZW50UmVmID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IDogbnVsbDtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICB0aGlzLmNsZWFuSGlnaGxpZ2h0KGVsKTtcclxuICAgICAgaWYgKHRoaXMudGV4dCkge1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0RWwoZWwpO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gZWwucXVlcnlTZWxlY3RvckFsbCgnLmdkLWhpZ2hsaWdodCcpLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnRvdGFsID0gY291bnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50b3RhbCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fc2VhcmNoU2VydmljZS5zZXRUb3RhbCh0aGlzLnRvdGFsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW92ZVRvQ3VycmVudCgpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY3VycmVudFpvb20gPSB0aGlzLmdldFpvb20oKTtcclxuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA6IG51bGw7XHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgZWwucXVlcnlTZWxlY3RvckFsbCgnLmdkLWhpZ2hsaWdodC1zZWxlY3QnKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICQodmFsdWUpLnJlbW92ZUNsYXNzKCdnZC1oaWdobGlnaHQtc2VsZWN0Jyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBjdXJyZW50RWwgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2QtaGlnaGxpZ2h0JylbdGhpcy5jdXJyZW50IC0gMV07XHJcbiAgICAgICQoY3VycmVudEVsKS5hZGRDbGFzcygnZ2QtaGlnaGxpZ2h0LXNlbGVjdCcpO1xyXG4gICAgICBpZiAoY3VycmVudEVsKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICB0b3A6ICgkKGN1cnJlbnRFbCkub2Zmc2V0KCkudG9wICogY3VycmVudFpvb20pICsgZWwucGFyZW50RWxlbWVudC5zY3JvbGxUb3AgLSAxNTAsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsVG8ob3B0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlnaGxpZ2h0RWwoZWw6IEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHRleHROb2RlcyA9ICQoZWwpLmZpbmQoJyonKS5jb250ZW50cygpLmZpbHRlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IG5vZGVOYW1lID0gdGhpcy5wYXJlbnRFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGNvbnN0IGNoZWNrQ2xhc3MgPSAoPEVsZW1lbnQ+dGhpcykuY2xhc3NMaXN0ID8gISg8RWxlbWVudD50aGlzKS5jbGFzc0xpc3QuY29udGFpbnMoJ2dkLWhpZ2hsaWdodCcpIDogdHJ1ZTtcclxuICAgICAgcmV0dXJuIHRoaXMubm9kZVR5cGUgPT09IDMgJiZcclxuICAgICAgICB0aGlzLnRleHRDb250ZW50LnRyaW0oKS5sZW5ndGggIT09IDAgJiZcclxuICAgICAgICBub2RlTmFtZSAhPT0gJ3N0eWxlJyAmJlxyXG4gICAgICAgIG5vZGVOYW1lICE9PSAndGl0bGUnICYmXHJcbiAgICAgICAgbm9kZU5hbWUgIT09ICdib2R5JyAmJlxyXG4gICAgICAgIG5vZGVOYW1lICE9PSAnc2NyaXB0JyAmJlxyXG4gICAgICAgIGNoZWNrQ2xhc3M7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHRleHQgPSB0aGlzLnRleHQ7XHJcbiAgICBjb25zdCBoaWdobGlnaHQgPSB0aGlzLl9oaWdobGlnaHQ7XHJcbiAgICB0ZXh0Tm9kZXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgbGV0IGNvbnRlbnQgPSAkdGhpcy50ZXh0KCk7XHJcbiAgICAgIGNvbnRlbnQgPSBoaWdobGlnaHQudHJhbnNmb3JtKGNvbnRlbnQsIHRleHQpO1xyXG4gICAgICAkdGhpcy5yZXBsYWNlV2l0aChjb250ZW50KTtcclxuICAgIH0pO1xyXG4gICAgZWwubm9ybWFsaXplKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFuSGlnaGxpZ2h0KGVsOiBIVE1MRWxlbWVudCkge1xyXG4gICAgY29uc3Qgbm9kZUxpc3RPZiA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC1oaWdobGlnaHQnKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZUxpc3RPZi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gbm9kZUxpc3RPZi5pdGVtKGkpO1xyXG4gICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKCg8SFRNTEVsZW1lbnQ+ZWxlbWVudCkuaW5uZXJUZXh0KTtcclxuICAgIH1cclxuICAgIGVsLm5vcm1hbGl6ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRab29tKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuem9vbSAvIDEwMDtcclxuICB9XHJcbn1cclxuIl19