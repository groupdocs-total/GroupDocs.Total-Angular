import * as tslib_1 from "tslib";
import { Directive, HostBinding, Input } from '@angular/core';
import { ZoomService } from "./zoom.service";
import { DomSanitizer } from "@angular/platform-browser";
let ZoomDirective = class ZoomDirective {
    constructor(_zoomService, _sanitizer) {
        this._zoomService = _zoomService;
        this._sanitizer = _sanitizer;
        this.zoomActive = true;
    }
    ngOnDestroy() {
    }
    ngOnInit() {
        if (!this.zoomActive) {
            return;
        }
        this.setStyles(this._zoomService.zoom);
        this._zoomService.zoomChange.subscribe((zoom) => {
            this.setStyles(zoom);
        });
    }
    setStyles(zoom) {
        if (!this.zoomActive) {
            return;
        }
        this.zoomStr = Math.round(zoom) + '%';
        this.zoomInt = zoom === 100 ? 1 : zoom / 100;
        this.mozTransform = 'scale(' + this.zoomInt + ', ' + this.zoomInt + ')';
        this.mozTransformOrigin = 'top';
        const transform = this._sanitizer.bypassSecurityTrustStyle('(' + this.zoomInt + ', ' + this.zoomInt + ')');
        this.webkitTransform = transform;
        this.msTransform = transform;
        this.oTransform = transform;
    }
    ngAfterViewInit() {
        this.setStyles(this._zoomService.zoom);
    }
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
export { ZoomDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvem9vbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFLbEUsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQVl4QixZQUFvQixZQUF5QixFQUFVLFVBQXdCO1FBQTNELGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBYztRQVZ0RSxlQUFVLEdBQUcsSUFBSSxDQUFDO0lBVzNCLENBQUM7SUFFRCxXQUFXO0lBQ1gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxTQUFTLENBQUMsSUFBSTtRQUNwQixJQUFJLENBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQztRQUMzRyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0YsQ0FBQTtBQTNDVTtJQUFSLEtBQUssRUFBRTs7aURBQW1CO0FBRUE7SUFBMUIsV0FBVyxDQUFDLFlBQVksQ0FBQzs7OENBQWlCO0FBQ2hCO0lBQTFCLFdBQVcsQ0FBQyxZQUFZLENBQUM7OzhDQUFpQjtBQUNOO0lBQXBDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQzs7bURBQXNCO0FBQ2Q7SUFBM0MsV0FBVyxDQUFDLDZCQUE2QixDQUFDOzt5REFBNEI7QUFDL0I7SUFBdkMsV0FBVyxDQUFDLHlCQUF5QixDQUFDOztzREFBNEI7QUFDL0I7SUFBbkMsV0FBVyxDQUFDLHFCQUFxQixDQUFDOztrREFBd0I7QUFDeEI7SUFBbEMsV0FBVyxDQUFDLG9CQUFvQixDQUFDOztpREFBdUI7QUFWOUMsYUFBYTtJQUh6QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtLQUNyQixDQUFDOzZDQWFrQyxXQUFXLEVBQXNCLFlBQVk7R0FacEUsYUFBYSxDQTZDekI7U0E3Q1ksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xuaW1wb3J0IHtEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkWm9vbV0nXG59KVxuZXhwb3J0IGNsYXNzIFpvb21EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgQElucHV0KCkgem9vbUFjdGl2ZSA9IHRydWU7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS56b29tJykgem9vbVN0cjogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnpvb20nKSB6b29tSW50OiBudW1iZXI7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuLW1vei10cmFuc2Zvcm0nKSBtb3pUcmFuc2Zvcm06IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS4tbW96LXRyYW5zZm9ybS1vcmlnaW4nKSBtb3pUcmFuc2Zvcm1PcmlnaW46IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS4td2Via2l0LXRyYW5zZm9ybScpIHdlYmtpdFRyYW5zZm9ybTogU2FmZVN0eWxlO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLi1tcy10cmFuc2Zvcm0nKSBtc1RyYW5zZm9ybTogU2FmZVN0eWxlO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLi1vLXRyYW5zZm9ybScpIG9UcmFuc2Zvcm06IFNhZmVTdHlsZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsIHByaXZhdGUgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghIHRoaXMuem9vbUFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0eWxlcyh0aGlzLl96b29tU2VydmljZS56b29tKTtcbiAgICB0aGlzLl96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgoem9vbSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdHlsZXMoem9vbSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFN0eWxlcyh6b29tKSB7XG4gICAgaWYgKCEgdGhpcy56b29tQWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuem9vbVN0ciA9IE1hdGgucm91bmQoem9vbSkgKyAnJSc7XG4gICAgdGhpcy56b29tSW50ID0gem9vbSA9PT0gMTAwID8gMSA6IHpvb20gLyAxMDA7XG4gICAgdGhpcy5tb3pUcmFuc2Zvcm0gPSAnc2NhbGUoJyArIHRoaXMuem9vbUludCArICcsICcgKyB0aGlzLnpvb21JbnQgKyAnKSc7XG4gICAgdGhpcy5tb3pUcmFuc2Zvcm1PcmlnaW4gPSAndG9wJztcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCcoJyArIHRoaXMuem9vbUludCArICcsICcgKyB0aGlzLnpvb21JbnQgKyAnKScpO1xuICAgIHRoaXMud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIHRoaXMubXNUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgdGhpcy5vVHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0U3R5bGVzKHRoaXMuX3pvb21TZXJ2aWNlLnpvb20pO1xuICB9XG59XG4iXX0=