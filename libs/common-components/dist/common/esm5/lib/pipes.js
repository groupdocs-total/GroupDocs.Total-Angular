import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var SanitizeHtmlPipe = /** @class */ (function () {
    function SanitizeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SanitizeHtmlPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SanitizeHtmlPipe = tslib_1.__decorate([
        Pipe({ name: 'safeHtml' }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer])
    ], SanitizeHtmlPipe);
    return SanitizeHtmlPipe;
}());
export { SanitizeHtmlPipe };
var SanitizeResourceHtmlPipe = /** @class */ (function () {
    function SanitizeResourceHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SanitizeResourceHtmlPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    };
    SanitizeResourceHtmlPipe = tslib_1.__decorate([
        Pipe({ name: 'safeResourceHtml' }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer])
    ], SanitizeResourceHtmlPipe);
    return SanitizeResourceHtmlPipe;
}());
export { SanitizeResourceHtmlPipe };
var SanitizeStylePipe = /** @class */ (function () {
    function SanitizeStylePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SanitizeStylePipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustStyle(html);
    };
    SanitizeStylePipe = tslib_1.__decorate([
        Pipe({ name: 'safeStyle' }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer])
    ], SanitizeStylePipe);
    return SanitizeStylePipe;
}());
export { SanitizeStylePipe };
var HighlightSearchPipe = /** @class */ (function () {
    function HighlightSearchPipe() {
    }
    HighlightSearchPipe.prototype.transform = function (value, args) {
        if (!args) {
            return value;
        }
        var re = new RegExp(args, 'gi'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
        return value.replace(re, "<span class='gd-highlight'>$&</span>");
    };
    HighlightSearchPipe = tslib_1.__decorate([
        Pipe({ name: 'highlight' })
    ], HighlightSearchPipe);
    return HighlightSearchPipe;
}());
export { HighlightSearchPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQVcsTUFBTSwyQkFBMkIsQ0FBQztBQUdqRTtJQUNFLDBCQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQzNDLENBQUM7SUFFRCxvQ0FBUyxHQUFULFVBQVUsSUFBWTtRQUNwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQU5VLGdCQUFnQjtRQUQ1QixJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLENBQUM7aURBRVEsWUFBWTtPQURoQyxnQkFBZ0IsQ0FPNUI7SUFBRCx1QkFBQztDQUFBLEFBUEQsSUFPQztTQVBZLGdCQUFnQjtBQVU3QjtJQUNFLGtDQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQzNDLENBQUM7SUFFRCw0Q0FBUyxHQUFULFVBQVUsSUFBWTtRQUNwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQU5VLHdCQUF3QjtRQURwQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQztpREFFQSxZQUFZO09BRGhDLHdCQUF3QixDQU9wQztJQUFELCtCQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksd0JBQXdCO0FBVXJDO0lBQ0UsMkJBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDM0MsQ0FBQztJQUVELHFDQUFTLEdBQVQsVUFBVSxJQUFZO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBTlUsaUJBQWlCO1FBRDdCLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUMsQ0FBQztpREFFTyxZQUFZO09BRGhDLGlCQUFpQixDQU83QjtJQUFELHdCQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksaUJBQWlCO0FBVTlCO0lBQUE7SUFTQSxDQUFDO0lBUEMsdUNBQVMsR0FBVCxVQUFVLEtBQWEsRUFBRSxJQUFZO1FBQ25DLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBTSxFQUFFLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsd0ZBQXdGO1FBQzNILE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsc0NBQXNDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBUlUsbUJBQW1CO1FBRC9CLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUMsQ0FBQztPQUNiLG1CQUFtQixDQVMvQjtJQUFELDBCQUFDO0NBQUEsQUFURCxJQVNDO1NBVFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RG9tU2FuaXRpemVyLCBTYWZlSHRtbH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBQaXBlKHtuYW1lOiAnc2FmZUh0bWwnfSlcbmV4cG9ydCBjbGFzcyBTYW5pdGl6ZUh0bWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICB9XG5cbiAgdHJhbnNmb3JtKGh0bWw6IHN0cmluZyk6IFNhZmVIdG1sIHtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCk7XG4gIH1cbn1cblxuQFBpcGUoe25hbWU6ICdzYWZlUmVzb3VyY2VIdG1sJ30pXG5leHBvcnQgY2xhc3MgU2FuaXRpemVSZXNvdXJjZUh0bWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICB9XG5cbiAgdHJhbnNmb3JtKGh0bWw6IHN0cmluZyk6IFNhZmVIdG1sIHtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKGh0bWwpO1xuICB9XG59XG5cbkBQaXBlKHtuYW1lOiAnc2FmZVN0eWxlJ30pXG5leHBvcnQgY2xhc3MgU2FuaXRpemVTdHlsZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3Jte1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gIH1cblxuICB0cmFuc2Zvcm0oaHRtbDogc3RyaW5nKTogU2FmZUh0bWwge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoaHRtbCk7XG4gIH1cbn1cblxuQFBpcGUoe25hbWU6ICdoaWdobGlnaHQnfSlcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHRTZWFyY2hQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGFyZ3M6IHN0cmluZyk6IGFueSB7XG4gICAgaWYgKCFhcmdzKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChhcmdzLCAnZ2knKTsgLy8nZ2knIGZvciBjYXNlIGluc2Vuc2l0aXZlIGFuZCBjYW4gdXNlICdnJyBpZiB5b3Ugd2FudCB0aGUgc2VhcmNoIHRvIGJlIGNhc2Ugc2Vuc2l0aXZlLlxuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKHJlLCBcIjxzcGFuIGNsYXNzPSdnZC1oaWdobGlnaHQnPiQmPC9zcGFuPlwiKTtcbiAgfVxufVxuIl19