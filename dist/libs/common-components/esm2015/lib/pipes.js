/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class SanitizeHtmlPipe {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    transform(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}
SanitizeHtmlPipe.decorators = [
    { type: Pipe, args: [{ name: 'safeHtml' },] }
];
/** @nocollapse */
SanitizeHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SanitizeHtmlPipe.prototype.sanitizer;
}
export class SanitizeResourceHtmlPipe {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    transform(html) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    }
}
SanitizeResourceHtmlPipe.decorators = [
    { type: Pipe, args: [{ name: 'safeResourceHtml' },] }
];
/** @nocollapse */
SanitizeResourceHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SanitizeResourceHtmlPipe.prototype.sanitizer;
}
export class SanitizeStylePipe {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    transform(html) {
        return this.sanitizer.bypassSecurityTrustStyle(html);
    }
}
SanitizeStylePipe.decorators = [
    { type: Pipe, args: [{ name: 'safeStyle' },] }
];
/** @nocollapse */
SanitizeStylePipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SanitizeStylePipe.prototype.sanitizer;
}
export class HighlightSearchPipe {
    /**
     * @param {?} value
     * @param {?} args
     * @return {?}
     */
    transform(value, args) {
        if (!args) {
            return value;
        }
        /** @type {?} */
        const re = new RegExp(args, 'gi');
        return value.replace(re, "<span class='gd-highlight'>$&</span>");
    }
}
HighlightSearchPipe.decorators = [
    { type: Pipe, args: [{ name: 'highlight' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQVcsTUFBTSwyQkFBMkIsQ0FBQztBQUdqRSxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBQzNCLFlBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBWTtRQUNwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7O1lBUEYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQzs7OztZQUZoQixZQUFZOzs7Ozs7O0lBSU4scUNBQStCOztBQVM3QyxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBQ25DLFlBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBWTtRQUNwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7O1lBUEYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFDOzs7O1lBWnhCLFlBQVk7Ozs7Ozs7SUFjTiw2Q0FBK0I7O0FBUzdDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFDNUIsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUMzQyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxJQUFZO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7WUFQRixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDOzs7O1lBdEJqQixZQUFZOzs7Ozs7O0lBd0JOLHNDQUErQjs7QUFTN0MsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBRTlCLFNBQVMsQ0FBQyxLQUFhLEVBQUUsSUFBWTtRQUNuQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxLQUFLLENBQUM7U0FDZDs7Y0FDSyxFQUFFLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztRQUNqQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLHNDQUFzQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7O1lBVEYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RG9tU2FuaXRpemVyLCBTYWZlSHRtbH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5AUGlwZSh7bmFtZTogJ3NhZmVIdG1sJ30pXHJcbmV4cG9ydCBjbGFzcyBTYW5pdGl6ZUh0bWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0oaHRtbDogc3RyaW5nKTogU2FmZUh0bWwge1xyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpO1xyXG4gIH1cclxufVxyXG5cclxuQFBpcGUoe25hbWU6ICdzYWZlUmVzb3VyY2VIdG1sJ30pXHJcbmV4cG9ydCBjbGFzcyBTYW5pdGl6ZVJlc291cmNlSHRtbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3Jte1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybShodG1sOiBzdHJpbmcpOiBTYWZlSHRtbCB7XHJcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKGh0bWwpO1xyXG4gIH1cclxufVxyXG5cclxuQFBpcGUoe25hbWU6ICdzYWZlU3R5bGUnfSlcclxuZXhwb3J0IGNsYXNzIFNhbml0aXplU3R5bGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0oaHRtbDogc3RyaW5nKTogU2FmZUh0bWwge1xyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShodG1sKTtcclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHtuYW1lOiAnaGlnaGxpZ2h0J30pXHJcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHRTZWFyY2hQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBhcmdzOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgaWYgKCFhcmdzKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChhcmdzLCAnZ2knKTsgLy8nZ2knIGZvciBjYXNlIGluc2Vuc2l0aXZlIGFuZCBjYW4gdXNlICdnJyBpZiB5b3Ugd2FudCB0aGUgc2VhcmNoIHRvIGJlIGNhc2Ugc2Vuc2l0aXZlLlxyXG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UocmUsIFwiPHNwYW4gY2xhc3M9J2dkLWhpZ2hsaWdodCc+JCY8L3NwYW4+XCIpO1xyXG4gIH1cclxufVxyXG4iXX0=