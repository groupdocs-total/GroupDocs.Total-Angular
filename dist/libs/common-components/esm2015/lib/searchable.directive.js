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
        _searchService.textChange.subscribe((/**
         * @param {?} text
         * @return {?}
         */
        (text) => {
            this.text = text;
            this.highlightSearch();
        }));
        this.zoom = _zoomService.zoom ? _zoomService.zoom : this.zoom;
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            this.zoom = val ? val : this.zoom;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    highlightSearch() {
        /** @type {?} */
        const el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            this.cleanHighlight(el);
            if (this.text) {
                this.highlightEl(el);
                /** @type {?} */
                const count = el.querySelectorAll('.gd-highlight').length;
                this.total = count;
            }
            else {
                this.total = 0;
            }
            this._searchService.setTotal(this.total);
        }
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
                    top: ($(currentEl).offset().top * currentZoom) + el.parentElement.scrollTop - 150,
                };
                el.parentElement.parentElement.scrollTo(options);
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
        for (let i = 0; i < nodeListOf.length; i++) {
            /** @type {?} */
            const element = nodeListOf.item(i);
            element.replaceWith(((/** @type {?} */ (element))).innerText);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDNUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztNQUMzQixDQUFDLEdBQUcsTUFBTTtBQUtoQixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7O0lBTzlCLFlBQW9CLFdBQW9DLEVBQ3BDLGNBQTZCLEVBQzdCLFVBQStCLEVBQy9CLFlBQXlCO1FBSHpCLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUFxQjtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQVA3QyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNGLFNBQUksR0FBRyxHQUFHLENBQUM7UUFNakIsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxPQUFlLEVBQUUsRUFBRTtZQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssQ0FBQyxFQUFFO2dCQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEI7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILGNBQWMsQ0FBQyxVQUFV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QVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxtQkFBYSxPQUFPLEVBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBRU8sT0FBTztRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDekIsQ0FBQzs7O1lBdkdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7O1lBVGtCLFVBQVU7WUFDckIsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixXQUFXOzs7O0lBU2pCLG1DQUFhOztJQUNiLHNDQUFZOztJQUNaLG9DQUFVOzs7OztJQUNWLG1DQUFtQjs7Ozs7SUFFUCwwQ0FBNEM7Ozs7O0lBQzVDLDZDQUFxQzs7Ozs7SUFDckMseUNBQXVDOzs7OztJQUN2QywyQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7U2VhcmNoU2VydmljZX0gZnJvbSBcIi4vc2VhcmNoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtIaWdobGlnaHRTZWFyY2hQaXBlfSBmcm9tIFwiLi9waXBlc1wiO1xyXG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcclxuY29uc3QgJCA9IGpxdWVyeTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2dkU2VhcmNoYWJsZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hhYmxlRGlyZWN0aXZlIHtcclxuXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGN1cnJlbnQgPSAwO1xyXG4gIHRvdGFsID0gMDtcclxuICBwcml2YXRlIHpvb20gPSAxMDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NlYXJjaFNlcnZpY2U6IFNlYXJjaFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfaGlnaGxpZ2h0OiBIaWdobGlnaHRTZWFyY2hQaXBlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSkge1xyXG4gICAgX3NlYXJjaFNlcnZpY2UuY3VycmVudENoYW5nZS5zdWJzY3JpYmUoKGN1cnJlbnQ6IG51bWJlcikgPT4ge1xyXG4gICAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50O1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50ICE9PSAwKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlVG9DdXJyZW50KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIF9zZWFyY2hTZXJ2aWNlLnRleHRDaGFuZ2Uuc3Vic2NyaWJlKCh0ZXh0OiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgdGhpcy5oaWdobGlnaHRTZWFyY2goKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuem9vbSA9IF96b29tU2VydmljZS56b29tID8gX3pvb21TZXJ2aWNlLnpvb20gOiB0aGlzLnpvb207XHJcbiAgICBfem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHZhbDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHRoaXMuem9vbSA9IHZhbCA/IHZhbCA6IHRoaXMuem9vbTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWdobGlnaHRTZWFyY2goKSB7XHJcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRSZWYgPyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgIHRoaXMuY2xlYW5IaWdobGlnaHQoZWwpO1xyXG4gICAgICBpZiAodGhpcy50ZXh0KSB7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHRFbChlbCk7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2QtaGlnaGxpZ2h0JykubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMudG90YWwgPSBjb3VudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRvdGFsID0gMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLnNldFRvdGFsKHRoaXMudG90YWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlVG9DdXJyZW50KCkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBjdXJyZW50Wm9vbSA9IHRoaXMuZ2V0Wm9vbSgpO1xyXG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbGVtZW50UmVmID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IDogbnVsbDtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2QtaGlnaGxpZ2h0LXNlbGVjdCcpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgJCh2YWx1ZSkucmVtb3ZlQ2xhc3MoJ2dkLWhpZ2hsaWdodC1zZWxlY3QnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRFbCA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC1oaWdobGlnaHQnKVt0aGlzLmN1cnJlbnQgLSAxXTtcclxuICAgICAgJChjdXJyZW50RWwpLmFkZENsYXNzKCdnZC1oaWdobGlnaHQtc2VsZWN0Jyk7XHJcbiAgICAgIGlmIChjdXJyZW50RWwpIHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgIHRvcDogKCQoY3VycmVudEVsKS5vZmZzZXQoKS50b3AgKiBjdXJyZW50Wm9vbSkgKyBlbC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcCAtIDE1MCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGVsLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zY3JvbGxUbyhvcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWdobGlnaHRFbChlbDogRWxlbWVudCkge1xyXG4gICAgY29uc3QgdGV4dE5vZGVzID0gJChlbCkuZmluZCgnKicpLmNvbnRlbnRzKCkuZmlsdGVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3Qgbm9kZU5hbWUgPSB0aGlzLnBhcmVudEVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgY29uc3QgY2hlY2tDbGFzcyA9ICg8RWxlbWVudD50aGlzKS5jbGFzc0xpc3QgPyAhKDxFbGVtZW50PnRoaXMpLmNsYXNzTGlzdC5jb250YWlucygnZ2QtaGlnaGxpZ2h0JykgOiB0cnVlO1xyXG4gICAgICByZXR1cm4gdGhpcy5ub2RlVHlwZSA9PT0gMyAmJlxyXG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQudHJpbSgpLmxlbmd0aCAhPT0gMCAmJlxyXG4gICAgICAgIG5vZGVOYW1lICE9PSAnc3R5bGUnICYmXHJcbiAgICAgICAgbm9kZU5hbWUgIT09ICd0aXRsZScgJiZcclxuICAgICAgICBub2RlTmFtZSAhPT0gJ2JvZHknICYmXHJcbiAgICAgICAgbm9kZU5hbWUgIT09ICdzY3JpcHQnICYmXHJcbiAgICAgICAgY2hlY2tDbGFzcztcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdGV4dCA9IHRoaXMudGV4dDtcclxuICAgIGNvbnN0IGhpZ2hsaWdodCA9IHRoaXMuX2hpZ2hsaWdodDtcclxuICAgIHRleHROb2Rlcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICBsZXQgY29udGVudCA9ICR0aGlzLnRleHQoKTtcclxuICAgICAgY29udGVudCA9IGhpZ2hsaWdodC50cmFuc2Zvcm0oY29udGVudCwgdGV4dCk7XHJcbiAgICAgICR0aGlzLnJlcGxhY2VXaXRoKGNvbnRlbnQpO1xyXG4gICAgfSk7XHJcbiAgICBlbC5ub3JtYWxpemUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYW5IaWdobGlnaHQoZWw6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBjb25zdCBub2RlTGlzdE9mID0gZWwucXVlcnlTZWxlY3RvckFsbCgnLmdkLWhpZ2hsaWdodCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlTGlzdE9mLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBub2RlTGlzdE9mLml0ZW0oaSk7XHJcbiAgICAgIGVsZW1lbnQucmVwbGFjZVdpdGgoKDxIVE1MRWxlbWVudD5lbGVtZW50KS5pbm5lclRleHQpO1xyXG4gICAgfVxyXG4gICAgZWwubm9ybWFsaXplKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFpvb20oKSB7XHJcbiAgICByZXR1cm4gdGhpcy56b29tIC8gMTAwO1xyXG4gIH1cclxufVxyXG4iXX0=