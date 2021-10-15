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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDNUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztNQUMzQixDQUFDLEdBQUcsTUFBTTtBQUtoQixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7O0lBTzlCLFlBQW9CLFdBQW9DLEVBQ3BDLGNBQTZCLEVBQzdCLFVBQStCLEVBQy9CLFlBQXlCO1FBSHpCLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUFxQjtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQVA3QyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNGLFNBQUksR0FBRyxHQUFHLENBQUM7UUFNakIsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxPQUFlLEVBQUUsRUFBRTtZQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssQ0FBQyxFQUFFO2dCQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEI7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILGNBQWMsQ0FBQyxVQUFV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QyxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLG1CQUFhLE9BQU8sRUFBQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdkQ7UUFDRCxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFTyxPQUFPO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUN6QixDQUFDOzs7WUF4R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs7WUFUa0IsVUFBVTtZQUNyQixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLFdBQVc7Ozs7SUFTakIsbUNBQWE7O0lBQ2Isc0NBQVk7O0lBQ1osb0NBQVU7Ozs7O0lBQ1YsbUNBQW1COzs7OztJQUVQLDBDQUE0Qzs7Ozs7SUFDNUMsNkNBQXFDOzs7OztJQUNyQyx5Q0FBdUM7Ozs7O0lBQ3ZDLDJDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtTZWFyY2hTZXJ2aWNlfSBmcm9tIFwiLi9zZWFyY2guc2VydmljZVwiO1xyXG5pbXBvcnQge0hpZ2hsaWdodFNlYXJjaFBpcGV9IGZyb20gXCIuL3BpcGVzXCI7XHJcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSBcImpxdWVyeVwiO1xyXG5jb25zdCAkID0ganF1ZXJ5O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZ2RTZWFyY2hhYmxlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaGFibGVEaXJlY3RpdmUge1xyXG5cclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgY3VycmVudCA9IDA7XHJcbiAgdG90YWwgPSAwO1xyXG4gIHByaXZhdGUgem9vbSA9IDEwMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2VhcmNoU2VydmljZTogU2VhcmNoU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9oaWdobGlnaHQ6IEhpZ2hsaWdodFNlYXJjaFBpcGUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlKSB7XHJcbiAgICBfc2VhcmNoU2VydmljZS5jdXJyZW50Q2hhbmdlLnN1YnNjcmliZSgoY3VycmVudDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnQ7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQgIT09IDApIHtcclxuICAgICAgICB0aGlzLm1vdmVUb0N1cnJlbnQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgX3NlYXJjaFNlcnZpY2UudGV4dENoYW5nZS5zdWJzY3JpYmUoKHRleHQ6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICB0aGlzLmhpZ2hsaWdodFNlYXJjaCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy56b29tID0gX3pvb21TZXJ2aWNlLnpvb20gPyBfem9vbVNlcnZpY2Uuem9vbSA6IHRoaXMuem9vbTtcclxuICAgIF96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgodmFsOiBudW1iZXIpID0+IHtcclxuICAgICAgdGhpcy56b29tID0gdmFsID8gdmFsIDogdGhpcy56b29tO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhpZ2hsaWdodFNlYXJjaCgpIHtcclxuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA6IG51bGw7XHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgdGhpcy5jbGVhbkhpZ2hsaWdodChlbCk7XHJcbiAgICAgIGlmICh0aGlzLnRleHQpIHtcclxuICAgICAgICB0aGlzLmhpZ2hsaWdodEVsKGVsKTtcclxuICAgICAgICBjb25zdCBjb3VudCA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC1oaWdobGlnaHQnKS5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy50b3RhbCA9IGNvdW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudG90YWwgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3NlYXJjaFNlcnZpY2Uuc2V0VG90YWwodGhpcy50b3RhbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1vdmVUb0N1cnJlbnQoKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50ID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGN1cnJlbnRab29tID0gdGhpcy5nZXRab29tKCk7XHJcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRSZWYgPyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC1oaWdobGlnaHQtc2VsZWN0JykuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAkKHZhbHVlKS5yZW1vdmVDbGFzcygnZ2QtaGlnaGxpZ2h0LXNlbGVjdCcpO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgY3VycmVudEVsID0gZWwucXVlcnlTZWxlY3RvckFsbCgnLmdkLWhpZ2hsaWdodCcpW3RoaXMuY3VycmVudCAtIDFdO1xyXG4gICAgICAkKGN1cnJlbnRFbCkuYWRkQ2xhc3MoJ2dkLWhpZ2hsaWdodC1zZWxlY3QnKTtcclxuICAgICAgaWYgKGN1cnJlbnRFbCkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgdG9wOiAoJChjdXJyZW50RWwpLm9mZnNldCgpLnRvcCkgKyBlbC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsVG9wIC0gMTUwLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gdXNpbmcgcG9seWZpbGxcclxuICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsKG9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhpZ2hsaWdodEVsKGVsOiBFbGVtZW50KSB7XHJcbiAgICBjb25zdCB0ZXh0Tm9kZXMgPSAkKGVsKS5maW5kKCcqJykuY29udGVudHMoKS5maWx0ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBub2RlTmFtZSA9IHRoaXMucGFyZW50RWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBjb25zdCBjaGVja0NsYXNzID0gKDxFbGVtZW50PnRoaXMpLmNsYXNzTGlzdCA/ICEoPEVsZW1lbnQ+dGhpcykuY2xhc3NMaXN0LmNvbnRhaW5zKCdnZC1oaWdobGlnaHQnKSA6IHRydWU7XHJcbiAgICAgIHJldHVybiB0aGlzLm5vZGVUeXBlID09PSAzICYmXHJcbiAgICAgICAgdGhpcy50ZXh0Q29udGVudC50cmltKCkubGVuZ3RoICE9PSAwICYmXHJcbiAgICAgICAgbm9kZU5hbWUgIT09ICdzdHlsZScgJiZcclxuICAgICAgICBub2RlTmFtZSAhPT0gJ3RpdGxlJyAmJlxyXG4gICAgICAgIG5vZGVOYW1lICE9PSAnYm9keScgJiZcclxuICAgICAgICBub2RlTmFtZSAhPT0gJ3NjcmlwdCcgJiZcclxuICAgICAgICBjaGVja0NsYXNzO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy50ZXh0O1xyXG4gICAgY29uc3QgaGlnaGxpZ2h0ID0gdGhpcy5faGlnaGxpZ2h0O1xyXG4gICAgdGV4dE5vZGVzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgIGxldCBjb250ZW50ID0gJHRoaXMudGV4dCgpO1xyXG4gICAgICBjb250ZW50ID0gaGlnaGxpZ2h0LnRyYW5zZm9ybShjb250ZW50LCB0ZXh0KTtcclxuICAgICAgJHRoaXMucmVwbGFjZVdpdGgoY29udGVudCk7XHJcbiAgICB9KTtcclxuICAgIGVsLm5vcm1hbGl6ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhbkhpZ2hsaWdodChlbDogSFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IG5vZGVMaXN0T2YgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2QtaGlnaGxpZ2h0Jyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVMaXN0T2YubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IG5vZGVMaXN0T2YuaXRlbShpKTtcclxuICAgICAgZWxlbWVudC5yZXBsYWNlV2l0aCgoPEhUTUxFbGVtZW50PmVsZW1lbnQpLmlubmVyVGV4dCk7XHJcbiAgICB9XHJcbiAgICBlbC5ub3JtYWxpemUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Wm9vbSgpIHtcclxuICAgIHJldHVybiB0aGlzLnpvb20gLyAxMDA7XHJcbiAgfVxyXG59XHJcbiJdfQ==