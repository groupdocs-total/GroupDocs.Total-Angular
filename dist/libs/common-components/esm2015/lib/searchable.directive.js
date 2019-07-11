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
                el.parentElement.scrollTo(options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDNUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztNQUMzQixDQUFDLEdBQUcsTUFBTTtBQUtoQixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7O0lBTzlCLFlBQW9CLFdBQW9DLEVBQ3BDLGNBQTZCLEVBQzdCLFVBQStCLEVBQy9CLFlBQXlCO1FBSHpCLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUFxQjtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQVA3QyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNGLFNBQUksR0FBRyxHQUFHLENBQUM7UUFNakIsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxPQUFlLEVBQUUsRUFBRTtZQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssQ0FBQyxFQUFFO2dCQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEI7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILGNBQWMsQ0FBQyxVQUFV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QUksQ0FBQyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLG1CQUFhLE9BQU8sRUFBQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdkQ7UUFDRCxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFTyxPQUFPO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUN6QixDQUFDOzs7WUF2R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs7WUFUa0IsVUFBVTtZQUNyQixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLFdBQVc7Ozs7SUFTakIsbUNBQWE7O0lBQ2Isc0NBQVk7O0lBQ1osb0NBQVU7Ozs7O0lBQ1YsbUNBQW1COzs7OztJQUVQLDBDQUE0Qzs7Ozs7SUFDNUMsNkNBQXFDOzs7OztJQUNyQyx5Q0FBdUM7Ozs7O0lBQ3ZDLDJDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2VhcmNoU2VydmljZX0gZnJvbSBcIi4vc2VhcmNoLnNlcnZpY2VcIjtcbmltcG9ydCB7SGlnaGxpZ2h0U2VhcmNoUGlwZX0gZnJvbSBcIi4vcGlwZXNcIjtcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tnZFNlYXJjaGFibGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hhYmxlRGlyZWN0aXZlIHtcblxuICB0ZXh0OiBzdHJpbmc7XG4gIGN1cnJlbnQgPSAwO1xuICB0b3RhbCA9IDA7XG4gIHByaXZhdGUgem9vbSA9IDEwMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2VhcmNoU2VydmljZTogU2VhcmNoU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfaGlnaGxpZ2h0OiBIaWdobGlnaHRTZWFyY2hQaXBlLFxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UpIHtcbiAgICBfc2VhcmNoU2VydmljZS5jdXJyZW50Q2hhbmdlLnN1YnNjcmliZSgoY3VycmVudDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50O1xuICAgICAgaWYgKHRoaXMuY3VycmVudCAhPT0gMCkge1xuICAgICAgICB0aGlzLm1vdmVUb0N1cnJlbnQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9zZWFyY2hTZXJ2aWNlLnRleHRDaGFuZ2Uuc3Vic2NyaWJlKCh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICB0aGlzLmhpZ2hsaWdodFNlYXJjaCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy56b29tID0gX3pvb21TZXJ2aWNlLnpvb20gPyBfem9vbVNlcnZpY2Uuem9vbSA6IHRoaXMuem9vbTtcbiAgICBfem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHZhbDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLnpvb20gPSB2YWwgPyB2YWwgOiB0aGlzLnpvb207XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhpZ2hsaWdodFNlYXJjaCgpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRSZWYgPyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xuICAgIGlmIChlbCkge1xuICAgICAgdGhpcy5jbGVhbkhpZ2hsaWdodChlbCk7XG4gICAgICBpZiAodGhpcy50ZXh0KSB7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0RWwoZWwpO1xuICAgICAgICBjb25zdCBjb3VudCA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC1oaWdobGlnaHQnKS5sZW5ndGg7XG4gICAgICAgIHRoaXMudG90YWwgPSBjb3VudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG90YWwgPSAwO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2VhcmNoU2VydmljZS5zZXRUb3RhbCh0aGlzLnRvdGFsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1vdmVUb0N1cnJlbnQoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50Wm9vbSA9IHRoaXMuZ2V0Wm9vbSgpO1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA6IG51bGw7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2QtaGlnaGxpZ2h0LXNlbGVjdCcpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICQodmFsdWUpLnJlbW92ZUNsYXNzKCdnZC1oaWdobGlnaHQtc2VsZWN0Jyk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGN1cnJlbnRFbCA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC1oaWdobGlnaHQnKVt0aGlzLmN1cnJlbnQgLSAxXTtcbiAgICAgICQoY3VycmVudEVsKS5hZGRDbGFzcygnZ2QtaGlnaGxpZ2h0LXNlbGVjdCcpO1xuICAgICAgaWYgKGN1cnJlbnRFbCkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgdG9wOiAoJChjdXJyZW50RWwpLm9mZnNldCgpLnRvcCAqIGN1cnJlbnRab29tKSArIGVsLnBhcmVudEVsZW1lbnQuc2Nyb2xsVG9wIC0gMTUwLFxuICAgICAgICB9O1xuICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvKG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGlnaGxpZ2h0RWwoZWw6IEVsZW1lbnQpIHtcbiAgICBjb25zdCB0ZXh0Tm9kZXMgPSAkKGVsKS5maW5kKCcqJykuY29udGVudHMoKS5maWx0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3Qgbm9kZU5hbWUgPSB0aGlzLnBhcmVudEVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IGNoZWNrQ2xhc3MgPSAoPEVsZW1lbnQ+dGhpcykuY2xhc3NMaXN0ID8gISg8RWxlbWVudD50aGlzKS5jbGFzc0xpc3QuY29udGFpbnMoJ2dkLWhpZ2hsaWdodCcpIDogdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVUeXBlID09PSAzICYmXG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQudHJpbSgpLmxlbmd0aCAhPT0gMCAmJlxuICAgICAgICBub2RlTmFtZSAhPT0gJ3N0eWxlJyAmJlxuICAgICAgICBub2RlTmFtZSAhPT0gJ3RpdGxlJyAmJlxuICAgICAgICBub2RlTmFtZSAhPT0gJ2JvZHknICYmXG4gICAgICAgIG5vZGVOYW1lICE9PSAnc2NyaXB0JyAmJlxuICAgICAgICBjaGVja0NsYXNzO1xuICAgIH0pO1xuICAgIGNvbnN0IHRleHQgPSB0aGlzLnRleHQ7XG4gICAgY29uc3QgaGlnaGxpZ2h0ID0gdGhpcy5faGlnaGxpZ2h0O1xuICAgIHRleHROb2Rlcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIGxldCBjb250ZW50ID0gJHRoaXMudGV4dCgpO1xuICAgICAgY29udGVudCA9IGhpZ2hsaWdodC50cmFuc2Zvcm0oY29udGVudCwgdGV4dCk7XG4gICAgICAkdGhpcy5yZXBsYWNlV2l0aChjb250ZW50KTtcbiAgICB9KTtcbiAgICBlbC5ub3JtYWxpemUoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW5IaWdobGlnaHQoZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3Qgbm9kZUxpc3RPZiA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC1oaWdobGlnaHQnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVMaXN0T2YubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBub2RlTGlzdE9mLml0ZW0oaSk7XG4gICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKCg8SFRNTEVsZW1lbnQ+ZWxlbWVudCkuaW5uZXJUZXh0KTtcbiAgICB9XG4gICAgZWwubm9ybWFsaXplKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFpvb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuem9vbSAvIDEwMDtcbiAgfVxufVxuIl19