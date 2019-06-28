import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
let SanitizeHtmlPipe = class SanitizeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
};
SanitizeHtmlPipe = tslib_1.__decorate([
    Pipe({ name: 'safeHtml' }),
    tslib_1.__metadata("design:paramtypes", [DomSanitizer])
], SanitizeHtmlPipe);
export { SanitizeHtmlPipe };
let SanitizeResourceHtmlPipe = class SanitizeResourceHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(html) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    }
};
SanitizeResourceHtmlPipe = tslib_1.__decorate([
    Pipe({ name: 'safeResourceHtml' }),
    tslib_1.__metadata("design:paramtypes", [DomSanitizer])
], SanitizeResourceHtmlPipe);
export { SanitizeResourceHtmlPipe };
let SanitizeStylePipe = class SanitizeStylePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(html) {
        return this.sanitizer.bypassSecurityTrustStyle(html);
    }
};
SanitizeStylePipe = tslib_1.__decorate([
    Pipe({ name: 'safeStyle' }),
    tslib_1.__metadata("design:paramtypes", [DomSanitizer])
], SanitizeStylePipe);
export { SanitizeStylePipe };
let HighlightSearchPipe = class HighlightSearchPipe {
    transform(value, args) {
        if (!args) {
            return value;
        }
        const re = new RegExp(args, 'gi'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
        return value.replace(re, "<span class='gd-highlight'>$&</span>");
    }
};
HighlightSearchPipe = tslib_1.__decorate([
    Pipe({ name: 'highlight' })
], HighlightSearchPipe);
export { HighlightSearchPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQVcsTUFBTSwyQkFBMkIsQ0FBQztBQUdqRSxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUMzQixZQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQzNDLENBQUM7SUFFRCxTQUFTLENBQUMsSUFBWTtRQUNwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQztDQUNGLENBQUE7QUFQWSxnQkFBZ0I7SUFENUIsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQyxDQUFDOzZDQUVRLFlBQVk7R0FEaEMsZ0JBQWdCLENBTzVCO1NBUFksZ0JBQWdCO0FBVTdCLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBQ25DLFlBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDM0MsQ0FBQztJQUVELFNBQVMsQ0FBQyxJQUFZO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBQ0YsQ0FBQTtBQVBZLHdCQUF3QjtJQURwQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQzs2Q0FFQSxZQUFZO0dBRGhDLHdCQUF3QixDQU9wQztTQVBZLHdCQUF3QjtBQVVyQyxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQUM1QixZQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQzNDLENBQUM7SUFFRCxTQUFTLENBQUMsSUFBWTtRQUNwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztDQUNGLENBQUE7QUFQWSxpQkFBaUI7SUFEN0IsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQyxDQUFDOzZDQUVPLFlBQVk7R0FEaEMsaUJBQWlCLENBTzdCO1NBUFksaUJBQWlCO0FBVTlCLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBRTlCLFNBQVMsQ0FBQyxLQUFhLEVBQUUsSUFBWTtRQUNuQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE1BQU0sRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLHdGQUF3RjtRQUMzSCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLHNDQUFzQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztDQUNGLENBQUE7QUFUWSxtQkFBbUI7SUFEL0IsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQyxDQUFDO0dBQ2IsbUJBQW1CLENBUy9CO1NBVFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RG9tU2FuaXRpemVyLCBTYWZlSHRtbH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBQaXBlKHtuYW1lOiAnc2FmZUh0bWwnfSlcbmV4cG9ydCBjbGFzcyBTYW5pdGl6ZUh0bWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICB9XG5cbiAgdHJhbnNmb3JtKGh0bWw6IHN0cmluZyk6IFNhZmVIdG1sIHtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCk7XG4gIH1cbn1cblxuQFBpcGUoe25hbWU6ICdzYWZlUmVzb3VyY2VIdG1sJ30pXG5leHBvcnQgY2xhc3MgU2FuaXRpemVSZXNvdXJjZUh0bWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICB9XG5cbiAgdHJhbnNmb3JtKGh0bWw6IHN0cmluZyk6IFNhZmVIdG1sIHtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKGh0bWwpO1xuICB9XG59XG5cbkBQaXBlKHtuYW1lOiAnc2FmZVN0eWxlJ30pXG5leHBvcnQgY2xhc3MgU2FuaXRpemVTdHlsZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3Jte1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gIH1cblxuICB0cmFuc2Zvcm0oaHRtbDogc3RyaW5nKTogU2FmZUh0bWwge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoaHRtbCk7XG4gIH1cbn1cblxuQFBpcGUoe25hbWU6ICdoaWdobGlnaHQnfSlcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHRTZWFyY2hQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGFyZ3M6IHN0cmluZyk6IGFueSB7XG4gICAgaWYgKCFhcmdzKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChhcmdzLCAnZ2knKTsgLy8nZ2knIGZvciBjYXNlIGluc2Vuc2l0aXZlIGFuZCBjYW4gdXNlICdnJyBpZiB5b3Ugd2FudCB0aGUgc2VhcmNoIHRvIGJlIGNhc2Ugc2Vuc2l0aXZlLlxuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKHJlLCBcIjxzcGFuIGNsYXNzPSdnZC1oaWdobGlnaHQnPiQmPC9zcGFuPlwiKTtcbiAgfVxufVxuIl19