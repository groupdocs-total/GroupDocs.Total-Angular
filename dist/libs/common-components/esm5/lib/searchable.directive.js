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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDNUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztJQUMzQixDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQVVFLDZCQUFvQixXQUFvQyxFQUNwQyxjQUE2QixFQUM3QixVQUErQixFQUMvQixZQUF5QjtRQUg3QyxpQkFvQkM7UUFwQm1CLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUFxQjtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQVA3QyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNGLFNBQUksR0FBRyxHQUFHLENBQUM7UUFNakIsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxPQUFlO1lBQ3JELEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksS0FBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUU7Z0JBQ3RCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN0QjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7O1FBQUMs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QkFDcEMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxtQkFBYSxPQUFPLEVBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBRU8scUNBQU87Ozs7SUFBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDekIsQ0FBQzs7Z0JBeEdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OztnQkFUa0IsVUFBVTtnQkFDckIsYUFBYTtnQkFDYixtQkFBbUI7Z0JBQ25CLFdBQVc7O0lBNkduQiwwQkFBQztDQUFBLEFBekdELElBeUdDO1NBdEdZLG1CQUFtQjs7O0lBRTlCLG1DQUFhOztJQUNiLHNDQUFZOztJQUNaLG9DQUFVOzs7OztJQUNWLG1DQUFtQjs7Ozs7SUFFUCwwQ0FBNEM7Ozs7O0lBQzVDLDZDQUFxQzs7Ozs7SUFDckMseUNBQXVDOzs7OztJQUN2QywyQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NlYXJjaFNlcnZpY2V9IGZyb20gXCIuL3NlYXJjaC5zZXJ2aWNlXCI7XG5pbXBvcnQge0hpZ2hsaWdodFNlYXJjaFBpcGV9IGZyb20gXCIuL3BpcGVzXCI7XG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tIFwianF1ZXJ5XCI7XG5jb25zdCAkID0ganF1ZXJ5O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2RTZWFyY2hhYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoYWJsZURpcmVjdGl2ZSB7XG5cbiAgdGV4dDogc3RyaW5nO1xuICBjdXJyZW50ID0gMDtcbiAgdG90YWwgPSAwO1xuICBwcml2YXRlIHpvb20gPSAxMDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NlYXJjaFNlcnZpY2U6IFNlYXJjaFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2hpZ2hsaWdodDogSGlnaGxpZ2h0U2VhcmNoUGlwZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlKSB7XG4gICAgX3NlYXJjaFNlcnZpY2UuY3VycmVudENoYW5nZS5zdWJzY3JpYmUoKGN1cnJlbnQ6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50ID0gY3VycmVudDtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQgIT09IDApIHtcbiAgICAgICAgdGhpcy5tb3ZlVG9DdXJyZW50KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfc2VhcmNoU2VydmljZS50ZXh0Q2hhbmdlLnN1YnNjcmliZSgodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgdGhpcy5oaWdobGlnaHRTZWFyY2goKTtcbiAgICB9KTtcblxuICAgIHRoaXMuem9vbSA9IF96b29tU2VydmljZS56b29tID8gX3pvb21TZXJ2aWNlLnpvb20gOiB0aGlzLnpvb207XG4gICAgX3pvb21TZXJ2aWNlLnpvb21DaGFuZ2Uuc3Vic2NyaWJlKCh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy56b29tID0gdmFsID8gdmFsIDogdGhpcy56b29tO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoaWdobGlnaHRTZWFyY2goKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbGVtZW50UmVmID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IDogbnVsbDtcbiAgICBpZiAoZWwpIHtcbiAgICAgIHRoaXMuY2xlYW5IaWdobGlnaHQoZWwpO1xuICAgICAgaWYgKHRoaXMudGV4dCkge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodEVsKGVsKTtcbiAgICAgICAgY29uc3QgY291bnQgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2QtaGlnaGxpZ2h0JykubGVuZ3RoO1xuICAgICAgICB0aGlzLnRvdGFsID0gY291bnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvdGFsID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NlYXJjaFNlcnZpY2Uuc2V0VG90YWwodGhpcy50b3RhbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlVG9DdXJyZW50KCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudFpvb20gPSB0aGlzLmdldFpvb20oKTtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRSZWYgPyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xuICAgIGlmIChlbCkge1xuICAgICAgZWwucXVlcnlTZWxlY3RvckFsbCgnLmdkLWhpZ2hsaWdodC1zZWxlY3QnKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAkKHZhbHVlKS5yZW1vdmVDbGFzcygnZ2QtaGlnaGxpZ2h0LXNlbGVjdCcpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBjdXJyZW50RWwgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2QtaGlnaGxpZ2h0JylbdGhpcy5jdXJyZW50IC0gMV07XG4gICAgICAkKGN1cnJlbnRFbCkuYWRkQ2xhc3MoJ2dkLWhpZ2hsaWdodC1zZWxlY3QnKTtcbiAgICAgIGlmIChjdXJyZW50RWwpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHRvcDogKCQoY3VycmVudEVsKS5vZmZzZXQoKS50b3ApICsgZWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcCAtIDE1MCxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdXNpbmcgcG9seWZpbGxcbiAgICAgICAgZWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbChvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhpZ2hsaWdodEVsKGVsOiBFbGVtZW50KSB7XG4gICAgY29uc3QgdGV4dE5vZGVzID0gJChlbCkuZmluZCgnKicpLmNvbnRlbnRzKCkuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IG5vZGVOYW1lID0gdGhpcy5wYXJlbnRFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCBjaGVja0NsYXNzID0gKDxFbGVtZW50PnRoaXMpLmNsYXNzTGlzdCA/ICEoPEVsZW1lbnQ+dGhpcykuY2xhc3NMaXN0LmNvbnRhaW5zKCdnZC1oaWdobGlnaHQnKSA6IHRydWU7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlVHlwZSA9PT0gMyAmJlxuICAgICAgICB0aGlzLnRleHRDb250ZW50LnRyaW0oKS5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgbm9kZU5hbWUgIT09ICdzdHlsZScgJiZcbiAgICAgICAgbm9kZU5hbWUgIT09ICd0aXRsZScgJiZcbiAgICAgICAgbm9kZU5hbWUgIT09ICdib2R5JyAmJlxuICAgICAgICBub2RlTmFtZSAhPT0gJ3NjcmlwdCcgJiZcbiAgICAgICAgY2hlY2tDbGFzcztcbiAgICB9KTtcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy50ZXh0O1xuICAgIGNvbnN0IGhpZ2hsaWdodCA9IHRoaXMuX2hpZ2hsaWdodDtcbiAgICB0ZXh0Tm9kZXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICBsZXQgY29udGVudCA9ICR0aGlzLnRleHQoKTtcbiAgICAgIGNvbnRlbnQgPSBoaWdobGlnaHQudHJhbnNmb3JtKGNvbnRlbnQsIHRleHQpO1xuICAgICAgJHRoaXMucmVwbGFjZVdpdGgoY29udGVudCk7XG4gICAgfSk7XG4gICAgZWwubm9ybWFsaXplKCk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuSGlnaGxpZ2h0KGVsOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IG5vZGVMaXN0T2YgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2QtaGlnaGxpZ2h0Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlTGlzdE9mLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gbm9kZUxpc3RPZi5pdGVtKGkpO1xuICAgICAgZWxlbWVudC5yZXBsYWNlV2l0aCgoPEhUTUxFbGVtZW50PmVsZW1lbnQpLmlubmVyVGV4dCk7XG4gICAgfVxuICAgIGVsLm5vcm1hbGl6ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRab29tKCkge1xuICAgIHJldHVybiB0aGlzLnpvb20gLyAxMDA7XG4gIH1cbn1cbiJdfQ==