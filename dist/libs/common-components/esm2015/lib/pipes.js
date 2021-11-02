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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQVcsTUFBTSwyQkFBMkIsQ0FBQztBQUdqRSxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBQzNCLFlBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBWTtRQUNwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7O1lBUEYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQzs7OztZQUZoQixZQUFZOzs7Ozs7O0lBSU4scUNBQStCOztBQVM3QyxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBQ25DLFlBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBWTtRQUNwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7O1lBUEYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFDOzs7O1lBWnhCLFlBQVk7Ozs7Ozs7SUFjTiw2Q0FBK0I7O0FBUzdDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFDNUIsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUMzQyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxJQUFZO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7WUFQRixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDOzs7O1lBdEJqQixZQUFZOzs7Ozs7O0lBd0JOLHNDQUErQjs7QUFTN0MsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBRTlCLFNBQVMsQ0FBQyxLQUFhLEVBQUUsSUFBWTtRQUNuQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxLQUFLLENBQUM7U0FDZDs7Y0FDSyxFQUFFLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztRQUNqQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLHNDQUFzQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7O1lBVEYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RvbVNhbml0aXplciwgU2FmZUh0bWx9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AUGlwZSh7bmFtZTogJ3NhZmVIdG1sJ30pXG5leHBvcnQgY2xhc3MgU2FuaXRpemVIdG1sUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm17XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgfVxuXG4gIHRyYW5zZm9ybShodG1sOiBzdHJpbmcpOiBTYWZlSHRtbCB7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpO1xuICB9XG59XG5cbkBQaXBlKHtuYW1lOiAnc2FmZVJlc291cmNlSHRtbCd9KVxuZXhwb3J0IGNsYXNzIFNhbml0aXplUmVzb3VyY2VIdG1sUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm17XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgfVxuXG4gIHRyYW5zZm9ybShodG1sOiBzdHJpbmcpOiBTYWZlSHRtbCB7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChodG1sKTtcbiAgfVxufVxuXG5AUGlwZSh7bmFtZTogJ3NhZmVTdHlsZSd9KVxuZXhwb3J0IGNsYXNzIFNhbml0aXplU3R5bGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICB9XG5cbiAgdHJhbnNmb3JtKGh0bWw6IHN0cmluZyk6IFNhZmVIdG1sIHtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGh0bWwpO1xuICB9XG59XG5cbkBQaXBlKHtuYW1lOiAnaGlnaGxpZ2h0J30pXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0U2VhcmNoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBhcmdzOiBzdHJpbmcpOiBhbnkge1xuICAgIGlmICghYXJncykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCByZSA9IG5ldyBSZWdFeHAoYXJncywgJ2dpJyk7IC8vJ2dpJyBmb3IgY2FzZSBpbnNlbnNpdGl2ZSBhbmQgY2FuIHVzZSAnZycgaWYgeW91IHdhbnQgdGhlIHNlYXJjaCB0byBiZSBjYXNlIHNlbnNpdGl2ZS5cbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZShyZSwgXCI8c3BhbiBjbGFzcz0nZ2QtaGlnaGxpZ2h0Jz4kJjwvc3Bhbj5cIik7XG4gIH1cbn1cbiJdfQ==