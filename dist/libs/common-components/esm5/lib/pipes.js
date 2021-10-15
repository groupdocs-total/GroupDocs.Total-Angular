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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQVcsTUFBTSwyQkFBMkIsQ0FBQztBQUVqRTtJQUVFLDBCQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQzNDLENBQUM7Ozs7O0lBRUQsb0NBQVM7Ozs7SUFBVCxVQUFVLElBQVk7UUFDcEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7O2dCQVBGLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7Ozs7Z0JBRmhCLFlBQVk7O0lBVXBCLHVCQUFDO0NBQUEsQUFSRCxJQVFDO1NBUFksZ0JBQWdCOzs7Ozs7SUFDZixxQ0FBK0I7O0FBUTdDO0lBRUUsa0NBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCw0Q0FBUzs7OztJQUFULFVBQVUsSUFBWTtRQUNwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Z0JBUEYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFDOzs7O2dCQVp4QixZQUFZOztJQW9CcEIsK0JBQUM7Q0FBQSxBQVJELElBUUM7U0FQWSx3QkFBd0I7Ozs7OztJQUN2Qiw2Q0FBK0I7O0FBUTdDO0lBRUUsMkJBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxxQ0FBUzs7OztJQUFULFVBQVUsSUFBWTtRQUNwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Z0JBUEYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQzs7OztnQkF0QmpCLFlBQVk7O0lBOEJwQix3QkFBQztDQUFBLEFBUkQsSUFRQztTQVBZLGlCQUFpQjs7Ozs7O0lBQ2hCLHNDQUErQjs7QUFRN0M7SUFBQTtJQVVBLENBQUM7Ozs7OztJQVBDLHVDQUFTOzs7OztJQUFULFVBQVUsS0FBYSxFQUFFLElBQVk7UUFDbkMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O1lBQ0ssRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7UUFDakMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxzQ0FBc0MsQ0FBQyxDQUFDO0lBQ25FLENBQUM7O2dCQVRGLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUM7O0lBVXpCLDBCQUFDO0NBQUEsQUFWRCxJQVVDO1NBVFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEb21TYW5pdGl6ZXIsIFNhZmVIdG1sfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBQaXBlKHtuYW1lOiAnc2FmZUh0bWwnfSlcclxuZXhwb3J0IGNsYXNzIFNhbml0aXplSHRtbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3Jte1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybShodG1sOiBzdHJpbmcpOiBTYWZlSHRtbCB7XHJcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCk7XHJcbiAgfVxyXG59XHJcblxyXG5AUGlwZSh7bmFtZTogJ3NhZmVSZXNvdXJjZUh0bWwnfSlcclxuZXhwb3J0IGNsYXNzIFNhbml0aXplUmVzb3VyY2VIdG1sUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm17XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKGh0bWw6IHN0cmluZyk6IFNhZmVIdG1sIHtcclxuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoaHRtbCk7XHJcbiAgfVxyXG59XHJcblxyXG5AUGlwZSh7bmFtZTogJ3NhZmVTdHlsZSd9KVxyXG5leHBvcnQgY2xhc3MgU2FuaXRpemVTdHlsZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3Jte1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybShodG1sOiBzdHJpbmcpOiBTYWZlSHRtbCB7XHJcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGh0bWwpO1xyXG4gIH1cclxufVxyXG5cclxuQFBpcGUoe25hbWU6ICdoaWdobGlnaHQnfSlcclxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodFNlYXJjaFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGFyZ3M6IHN0cmluZyk6IGFueSB7XHJcbiAgICBpZiAoIWFyZ3MpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKGFyZ3MsICdnaScpOyAvLydnaScgZm9yIGNhc2UgaW5zZW5zaXRpdmUgYW5kIGNhbiB1c2UgJ2cnIGlmIHlvdSB3YW50IHRoZSBzZWFyY2ggdG8gYmUgY2FzZSBzZW5zaXRpdmUuXHJcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZShyZSwgXCI8c3BhbiBjbGFzcz0nZ2QtaGlnaGxpZ2h0Jz4kJjwvc3Bhbj5cIik7XHJcbiAgfVxyXG59XHJcbiJdfQ==