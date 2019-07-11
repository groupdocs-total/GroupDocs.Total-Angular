/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var SanitizeHtmlPipe = /** @class */ (function () {
    function SanitizeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    SanitizeHtmlPipe.prototype.transform = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SanitizeHtmlPipe.decorators = [
        { type: Pipe, args: [{ name: 'safeHtml' },] }
    ];
    /** @nocollapse */
    SanitizeHtmlPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return SanitizeHtmlPipe;
}());
export { SanitizeHtmlPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SanitizeHtmlPipe.prototype.sanitizer;
}
var SanitizeResourceHtmlPipe = /** @class */ (function () {
    function SanitizeResourceHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    SanitizeResourceHtmlPipe.prototype.transform = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    };
    SanitizeResourceHtmlPipe.decorators = [
        { type: Pipe, args: [{ name: 'safeResourceHtml' },] }
    ];
    /** @nocollapse */
    SanitizeResourceHtmlPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return SanitizeResourceHtmlPipe;
}());
export { SanitizeResourceHtmlPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SanitizeResourceHtmlPipe.prototype.sanitizer;
}
var SanitizeStylePipe = /** @class */ (function () {
    function SanitizeStylePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    SanitizeStylePipe.prototype.transform = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        return this.sanitizer.bypassSecurityTrustStyle(html);
    };
    SanitizeStylePipe.decorators = [
        { type: Pipe, args: [{ name: 'safeStyle' },] }
    ];
    /** @nocollapse */
    SanitizeStylePipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return SanitizeStylePipe;
}());
export { SanitizeStylePipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SanitizeStylePipe.prototype.sanitizer;
}
var HighlightSearchPipe = /** @class */ (function () {
    function HighlightSearchPipe() {
    }
    /**
     * @param {?} value
     * @param {?} args
     * @return {?}
     */
    HighlightSearchPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} args
     * @return {?}
     */
    function (value, args) {
        if (!args) {
            return value;
        }
        /** @type {?} */
        var re = new RegExp(args, 'gi');
        return value.replace(re, "<span class='gd-highlight'>$&</span>");
    };
    HighlightSearchPipe.decorators = [
        { type: Pipe, args: [{ name: 'highlight' },] }
    ];
    return HighlightSearchPipe;
}());
export { HighlightSearchPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQVcsTUFBTSwyQkFBMkIsQ0FBQztBQUVqRTtJQUVFLDBCQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQzNDLENBQUM7Ozs7O0lBRUQsb0NBQVM7Ozs7SUFBVCxVQUFVLElBQVk7UUFDcEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7O2dCQVBGLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7Ozs7Z0JBRmhCLFlBQVk7O0lBVXBCLHVCQUFDO0NBQUEsQUFSRCxJQVFDO1NBUFksZ0JBQWdCOzs7Ozs7SUFDZixxQ0FBK0I7O0FBUTdDO0lBRUUsa0NBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCw0Q0FBUzs7OztJQUFULFVBQVUsSUFBWTtRQUNwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Z0JBUEYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFDOzs7O2dCQVp4QixZQUFZOztJQW9CcEIsK0JBQUM7Q0FBQSxBQVJELElBUUM7U0FQWSx3QkFBd0I7Ozs7OztJQUN2Qiw2Q0FBK0I7O0FBUTdDO0lBRUUsMkJBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxxQ0FBUzs7OztJQUFULFVBQVUsSUFBWTtRQUNwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Z0JBUEYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQzs7OztnQkF0QmpCLFlBQVk7O0lBOEJwQix3QkFBQztDQUFBLEFBUkQsSUFRQztTQVBZLGlCQUFpQjs7Ozs7O0lBQ2hCLHNDQUErQjs7QUFRN0M7SUFBQTtJQVVBLENBQUM7Ozs7OztJQVBDLHVDQUFTOzs7OztJQUFULFVBQVUsS0FBYSxFQUFFLElBQVk7UUFDbkMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O1lBQ0ssRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7UUFDakMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxzQ0FBc0MsQ0FBQyxDQUFDO0lBQ25FLENBQUM7O2dCQVRGLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUM7O0lBVXpCLDBCQUFDO0NBQUEsQUFWRCxJQVVDO1NBVFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RG9tU2FuaXRpemVyLCBTYWZlSHRtbH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBQaXBlKHtuYW1lOiAnc2FmZUh0bWwnfSlcbmV4cG9ydCBjbGFzcyBTYW5pdGl6ZUh0bWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICB9XG5cbiAgdHJhbnNmb3JtKGh0bWw6IHN0cmluZyk6IFNhZmVIdG1sIHtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCk7XG4gIH1cbn1cblxuQFBpcGUoe25hbWU6ICdzYWZlUmVzb3VyY2VIdG1sJ30pXG5leHBvcnQgY2xhc3MgU2FuaXRpemVSZXNvdXJjZUh0bWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICB9XG5cbiAgdHJhbnNmb3JtKGh0bWw6IHN0cmluZyk6IFNhZmVIdG1sIHtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKGh0bWwpO1xuICB9XG59XG5cbkBQaXBlKHtuYW1lOiAnc2FmZVN0eWxlJ30pXG5leHBvcnQgY2xhc3MgU2FuaXRpemVTdHlsZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3Jte1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gIH1cblxuICB0cmFuc2Zvcm0oaHRtbDogc3RyaW5nKTogU2FmZUh0bWwge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoaHRtbCk7XG4gIH1cbn1cblxuQFBpcGUoe25hbWU6ICdoaWdobGlnaHQnfSlcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHRTZWFyY2hQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGFyZ3M6IHN0cmluZyk6IGFueSB7XG4gICAgaWYgKCFhcmdzKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChhcmdzLCAnZ2knKTsgLy8nZ2knIGZvciBjYXNlIGluc2Vuc2l0aXZlIGFuZCBjYW4gdXNlICdnJyBpZiB5b3Ugd2FudCB0aGUgc2VhcmNoIHRvIGJlIGNhc2Ugc2Vuc2l0aXZlLlxuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKHJlLCBcIjxzcGFuIGNsYXNzPSdnZC1oaWdobGlnaHQnPiQmPC9zcGFuPlwiKTtcbiAgfVxufVxuIl19