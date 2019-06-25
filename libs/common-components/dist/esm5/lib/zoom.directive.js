import * as tslib_1 from "tslib";
import { Directive, HostBinding, Input } from '@angular/core';
import { ZoomService } from "./zoom.service";
import { DomSanitizer } from "@angular/platform-browser";
var ZoomDirective = /** @class */ (function () {
    function ZoomDirective(_zoomService, _sanitizer) {
        this._zoomService = _zoomService;
        this._sanitizer = _sanitizer;
        this.zoomActive = true;
    }
    ZoomDirective.prototype.ngOnDestroy = function () {
    };
    ZoomDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.zoomActive) {
            return;
        }
        this.setStyles(this._zoomService.zoom);
        this._zoomService.zoomChange.subscribe(function (zoom) {
            _this.setStyles(zoom);
        });
    };
    ZoomDirective.prototype.setStyles = function (zoom) {
        if (!this.zoomActive) {
            return;
        }
        this.zoomStr = Math.round(zoom) + '%';
        this.zoomInt = zoom === 100 ? 1 : zoom / 100;
        this.mozTransform = 'scale(' + this.zoomInt + ', ' + this.zoomInt + ')';
        this.mozTransformOrigin = 'top';
        var transform = this._sanitizer.bypassSecurityTrustStyle('(' + this.zoomInt + ', ' + this.zoomInt + ')');
        this.webkitTransform = transform;
        this.msTransform = transform;
        this.oTransform = transform;
    };
    ZoomDirective.prototype.ngAfterViewInit = function () {
        this.setStyles(this._zoomService.zoom);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ZoomDirective.prototype, "zoomActive", void 0);
    tslib_1.__decorate([
        HostBinding('style.zoom'),
        tslib_1.__metadata("design:type", String)
    ], ZoomDirective.prototype, "zoomStr", void 0);
    tslib_1.__decorate([
        HostBinding('style.zoom'),
        tslib_1.__metadata("design:type", Number)
    ], ZoomDirective.prototype, "zoomInt", void 0);
    tslib_1.__decorate([
        HostBinding('style.-moz-transform'),
        tslib_1.__metadata("design:type", String)
    ], ZoomDirective.prototype, "mozTransform", void 0);
    tslib_1.__decorate([
        HostBinding('style.-moz-transform-origin'),
        tslib_1.__metadata("design:type", String)
    ], ZoomDirective.prototype, "mozTransformOrigin", void 0);
    tslib_1.__decorate([
        HostBinding('style.-webkit-transform'),
        tslib_1.__metadata("design:type", Object)
    ], ZoomDirective.prototype, "webkitTransform", void 0);
    tslib_1.__decorate([
        HostBinding('style.-ms-transform'),
        tslib_1.__metadata("design:type", Object)
    ], ZoomDirective.prototype, "msTransform", void 0);
    tslib_1.__decorate([
        HostBinding('style.-o-transform'),
        tslib_1.__metadata("design:type", Object)
    ], ZoomDirective.prototype, "oTransform", void 0);
    ZoomDirective = tslib_1.__decorate([
        Directive({
            selector: '[gdZoom]'
        }),
        tslib_1.__metadata("design:paramtypes", [ZoomService, DomSanitizer])
    ], ZoomDirective);
    return ZoomDirective;
}());
export { ZoomDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvem9vbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFLbEU7SUFZRSx1QkFBb0IsWUFBeUIsRUFBVSxVQUF3QjtRQUEzRCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQWM7UUFWdEUsZUFBVSxHQUFHLElBQUksQ0FBQztJQVczQixDQUFDO0lBRUQsbUNBQVcsR0FBWDtJQUNBLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUMxQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGlDQUFTLEdBQWpCLFVBQWtCLElBQUk7UUFDcEIsSUFBSSxDQUFFLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDckIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUM3QyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUN4RSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDM0csSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUVELHVDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQTFDUTtRQUFSLEtBQUssRUFBRTs7cURBQW1CO0lBRUE7UUFBMUIsV0FBVyxDQUFDLFlBQVksQ0FBQzs7a0RBQWlCO0lBQ2hCO1FBQTFCLFdBQVcsQ0FBQyxZQUFZLENBQUM7O2tEQUFpQjtJQUNOO1FBQXBDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQzs7dURBQXNCO0lBQ2Q7UUFBM0MsV0FBVyxDQUFDLDZCQUE2QixDQUFDOzs2REFBNEI7SUFDL0I7UUFBdkMsV0FBVyxDQUFDLHlCQUF5QixDQUFDOzswREFBNEI7SUFDL0I7UUFBbkMsV0FBVyxDQUFDLHFCQUFxQixDQUFDOztzREFBd0I7SUFDeEI7UUFBbEMsV0FBVyxDQUFDLG9CQUFvQixDQUFDOztxREFBdUI7SUFWOUMsYUFBYTtRQUh6QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtTQUNyQixDQUFDO2lEQWFrQyxXQUFXLEVBQXNCLFlBQVk7T0FacEUsYUFBYSxDQTZDekI7SUFBRCxvQkFBQztDQUFBLEFBN0NELElBNkNDO1NBN0NZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcbmltcG9ydCB7RG9tU2FuaXRpemVyLCBTYWZlU3R5bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tnZFpvb21dJ1xufSlcbmV4cG9ydCBjbGFzcyBab29tRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuXG4gIEBJbnB1dCgpIHpvb21BY3RpdmUgPSB0cnVlO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuem9vbScpIHpvb21TdHI6IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS56b29tJykgem9vbUludDogbnVtYmVyO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLi1tb3otdHJhbnNmb3JtJykgbW96VHJhbnNmb3JtOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuLW1vei10cmFuc2Zvcm0tb3JpZ2luJykgbW96VHJhbnNmb3JtT3JpZ2luOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuLXdlYmtpdC10cmFuc2Zvcm0nKSB3ZWJraXRUcmFuc2Zvcm06IFNhZmVTdHlsZTtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS4tbXMtdHJhbnNmb3JtJykgbXNUcmFuc2Zvcm06IFNhZmVTdHlsZTtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS4tby10cmFuc2Zvcm0nKSBvVHJhbnNmb3JtOiBTYWZlU3R5bGU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLCBwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoISB0aGlzLnpvb21BY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdHlsZXModGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XG4gICAgdGhpcy5fem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHpvb20pID0+IHtcbiAgICAgIHRoaXMuc2V0U3R5bGVzKHpvb20pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdHlsZXMoem9vbSkge1xuICAgIGlmICghIHRoaXMuem9vbUFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnpvb21TdHIgPSBNYXRoLnJvdW5kKHpvb20pICsgJyUnO1xuICAgIHRoaXMuem9vbUludCA9IHpvb20gPT09IDEwMCA/IDEgOiB6b29tIC8gMTAwO1xuICAgIHRoaXMubW96VHJhbnNmb3JtID0gJ3NjYWxlKCcgKyB0aGlzLnpvb21JbnQgKyAnLCAnICsgdGhpcy56b29tSW50ICsgJyknO1xuICAgIHRoaXMubW96VHJhbnNmb3JtT3JpZ2luID0gJ3RvcCc7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgnKCcgKyB0aGlzLnpvb21JbnQgKyAnLCAnICsgdGhpcy56b29tSW50ICsgJyknKTtcbiAgICB0aGlzLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB0aGlzLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIHRoaXMub1RyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFN0eWxlcyh0aGlzLl96b29tU2VydmljZS56b29tKTtcbiAgfVxufVxuIl19