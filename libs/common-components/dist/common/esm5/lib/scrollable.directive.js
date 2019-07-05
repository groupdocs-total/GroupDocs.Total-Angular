import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NavigateService } from "./navigate.service";
import { PagePreloadService } from "./page-preload.service";
import { ZoomService } from "./zoom.service";
import { WindowService } from "./window.service";
import { ViewportService } from "./viewport.service";
import * as jquery from "jquery";
var $ = jquery;
var ScrollableDirective = /** @class */ (function () {
    function ScrollableDirective(_elementRef, _navigateService, _pagePreloadService, _zoomService, _windowService, _viewportService) {
        var _this = this;
        this._elementRef = _elementRef;
        this._navigateService = _navigateService;
        this._pagePreloadService = _pagePreloadService;
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this._viewportService = _viewportService;
        this.zoom = 100;
        this.zoom = _zoomService.zoom ? _zoomService.zoom : this.zoom;
        _zoomService.zoomChange.subscribe(function (val) {
            _this.zoom = val ? val : _this.zoom;
            _this.refresh();
        });
    }
    ScrollableDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zoom = this._zoomService.zoom ? this._zoomService.zoom : this.zoom;
        this._navigateService.navigate.subscribe((function (value) {
            _this.currentPage = value;
            _this.scrollToPage(value);
        }));
        this.refresh();
    };
    ScrollableDirective.prototype.scrolling = function () {
        this.refresh();
    };
    ScrollableDirective.prototype.resizing = function () {
        this.refresh();
    };
    ScrollableDirective.prototype.scrollToPage = function (pageNumber) {
        var el = this._elementRef.nativeElement;
        var page = this.getPage(pageNumber);
        var prev = pageNumber > 0 ? this.getPage(pageNumber - 1) : null;
        var isSameTop = (prev && $(prev).offset().top === $(page).offset().top);
        if (this._viewportService.checkInViewport(page, this.zoom) && isSameTop) {
            return;
        }
        var pagesHeight = this.calculateOffset(pageNumber);
        var options = {
            left: 0,
            top: pagesHeight
        };
        if (el) {
            el.scrollTo(options);
        }
    };
    ScrollableDirective.prototype.getChildren = function () {
        var el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            return el.children.item(0).children;
        }
    };
    ScrollableDirective.prototype.getPage = function (pageNumber) {
        var el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            return el.children.item(0).children.item(pageNumber - 1);
        }
    };
    ScrollableDirective.prototype.calculateOffset = function (pageNumber) {
        var count = this.ifFirefox() ? 1 : this.countPagesOnWidth();
        var margin = this._windowService.isDesktop() ? 40 : 10;
        var pagesHeight = 0;
        for (var i = 1; i < pageNumber / count; i++) {
            var item = this.getPage(i);
            var clientHeight = item ? item.clientHeight : 0;
            pagesHeight += clientHeight > 0 ? clientHeight * this.getZoom() + margin : 0;
        }
        return pagesHeight;
    };
    ScrollableDirective.prototype.countPagesOnWidth = function () {
        var pageEl = this.getPage(1);
        var offset = 150;
        var count = Math.floor((this.getWidth() - offset) / (pageEl.getBoundingClientRect().width * this.getZoom()));
        return count === 0 ? 1 : count;
    };
    ScrollableDirective.prototype.ifFirefox = function () {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    };
    ScrollableDirective.prototype.refresh = function () {
        var page;
        var currentPageSet = false;
        var pageElem = this.getPage(this.currentPage);
        var currentPageRect = this.currentPage && pageElem ? pageElem.getBoundingClientRect() : null;
        for (page = 1; page < this.getChildren().length + 1; page++) {
            var element = this.getPage(page);
            if (this._viewportService.checkInViewport(element, this.zoom)) {
                if (!currentPageSet) {
                    if (!this.currentPage || !pageElem || (this.currentPage && currentPageRect && element.getBoundingClientRect().top !== currentPageRect.top)) {
                        this.currentPage = page;
                        this._navigateService.currentPage = page;
                    }
                    currentPageSet = true;
                }
                this._pagePreloadService.changeLastPageInView(page);
            }
        }
    };
    ScrollableDirective.prototype.ngOnChanges = function (changes) {
        this.refresh();
    };
    ScrollableDirective.prototype.ngOnInit = function () {
        this.zoom = this._zoomService.zoom ? this._zoomService.zoom : this.zoom;
    };
    ScrollableDirective.prototype.getWidth = function () {
        return this._elementRef ? this._elementRef.nativeElement.offsetWidth : window.innerWidth;
    };
    ScrollableDirective.prototype.getZoom = function () {
        return this.zoom / 100;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ScrollableDirective.prototype, "onRefresh", void 0);
    tslib_1.__decorate([
        HostListener('scroll'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], ScrollableDirective.prototype, "scrolling", null);
    tslib_1.__decorate([
        HostListener('window:resize'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], ScrollableDirective.prototype, "resizing", null);
    ScrollableDirective = tslib_1.__decorate([
        Directive({
            selector: '[gdScrollable]'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            NavigateService,
            PagePreloadService,
            ZoomService,
            WindowService,
            ViewportService])
    ], ScrollableDirective);
    return ScrollableDirective;
}());
export { ScrollableDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2Nyb2xsYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLElBQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUtqQjtJQU1FLDZCQUFvQixXQUFvQyxFQUNwQyxnQkFBaUMsRUFDakMsbUJBQXVDLEVBQ3ZDLFlBQXlCLEVBQ3pCLGNBQTZCLEVBQzdCLGdCQUFpQztRQUxyRCxpQkFZQztRQVptQixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQ3ZDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFQN0MsU0FBSSxHQUFHLEdBQUcsQ0FBQztRQVNqQixJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDOUQsWUFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFXO1lBQzVDLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUM7WUFDbEMsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDZDQUFlLEdBQWY7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBQSxLQUFLO1lBQzdDLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRXVCLHVDQUFTLEdBQVQ7UUFDdEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFOEIsc0NBQVEsR0FBUjtRQUM3QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELDBDQUFZLEdBQVosVUFBYSxVQUFrQjtRQUM3QixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUMxQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RDLElBQU0sSUFBSSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbEUsSUFBTSxTQUFTLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUUsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxFQUFFO1lBQ3ZFLE9BQU87U0FDUjtRQUNELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckQsSUFBTSxPQUFPLEdBQUc7WUFDZCxJQUFJLEVBQUUsQ0FBQztZQUNQLEdBQUcsRUFBRSxXQUFXO1NBQ2pCLENBQUM7UUFDRixJQUFHLEVBQUUsRUFBQztZQUNKLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRU8seUNBQVcsR0FBbkI7UUFDRSxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3BFLElBQUksRUFBRSxFQUFFO1lBQ04sT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRU8scUNBQU8sR0FBZixVQUFnQixVQUFrQjtRQUNoQyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3BFLElBQUksRUFBRSxFQUFFO1lBQ04sT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMxRDtJQUNILENBQUM7SUFFTyw2Q0FBZSxHQUF2QixVQUF3QixVQUFrQjtRQUN4QyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDOUQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDekQsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEQsV0FBVyxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUU7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRU8sK0NBQWlCLEdBQXpCO1FBQ0UsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbkIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9HLE9BQU8sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUVELHVDQUFTLEdBQVQ7UUFDRSxPQUFPLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxxQ0FBTyxHQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUM7UUFDVCxJQUFJLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEQsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDL0YsS0FBSyxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUMzRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM3RCxJQUFJLENBQUMsY0FBYyxFQUFFO29CQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksZUFBZSxJQUFJLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsS0FBSyxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQzFJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO3dCQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztxQkFDMUM7b0JBQ0QsY0FBYyxHQUFHLElBQUksQ0FBQztpQkFDdkI7Z0JBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JEO1NBQ0Y7SUFDSCxDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzFFLENBQUM7SUFHTyxzQ0FBUSxHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQzNGLENBQUM7SUFFTyxxQ0FBTyxHQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUN6QixDQUFDO0lBOUhRO1FBQVIsS0FBSyxFQUFFOzswREFBb0I7SUE0Qko7UUFBdkIsWUFBWSxDQUFDLFFBQVEsQ0FBQzs7Ozt3REFFdEI7SUFFOEI7UUFBOUIsWUFBWSxDQUFDLGVBQWUsQ0FBQzs7Ozt1REFFN0I7SUFuQ1UsbUJBQW1CO1FBSC9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7U0FDM0IsQ0FBQztpREFPaUMsVUFBVTtZQUNMLGVBQWU7WUFDWixrQkFBa0I7WUFDekIsV0FBVztZQUNULGFBQWE7WUFDWCxlQUFlO09BWDFDLG1CQUFtQixDQWdJL0I7SUFBRCwwQkFBQztDQUFBLEFBaElELElBZ0lDO1NBaElZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05hdmlnYXRlU2VydmljZX0gZnJvbSBcIi4vbmF2aWdhdGUuc2VydmljZVwiO1xuaW1wb3J0IHtQYWdlUHJlbG9hZFNlcnZpY2V9IGZyb20gXCIuL3BhZ2UtcHJlbG9hZC5zZXJ2aWNlXCI7XG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSBcIi4vd2luZG93LnNlcnZpY2VcIjtcbmltcG9ydCB7Vmlld3BvcnRTZXJ2aWNlfSBmcm9tIFwiLi92aWV3cG9ydC5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuY29uc3QgJCA9IGpxdWVyeTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkU2Nyb2xsYWJsZV0nXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbGFibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG9uUmVmcmVzaDogYm9vbGVhbjtcblxuICBwcml2YXRlIGN1cnJlbnRQYWdlOiBudW1iZXI7XG4gIHByaXZhdGUgem9vbSA9IDEwMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3BhZ2VQcmVsb2FkU2VydmljZTogUGFnZVByZWxvYWRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3ZpZXdwb3J0U2VydmljZTogVmlld3BvcnRTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLnpvb20gPSBfem9vbVNlcnZpY2Uuem9vbSA/IF96b29tU2VydmljZS56b29tIDogdGhpcy56b29tO1xuICAgIF96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgodmFsOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuem9vbSA9IHZhbCA/IHZhbCA6IHRoaXMuem9vbTtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuem9vbSA9IHRoaXMuX3pvb21TZXJ2aWNlLnpvb20gPyB0aGlzLl96b29tU2VydmljZS56b29tIDogdGhpcy56b29tO1xuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5uYXZpZ2F0ZS5zdWJzY3JpYmUoKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc2Nyb2xsVG9QYWdlKHZhbHVlKTtcbiAgICB9KSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdzY3JvbGwnKSBzY3JvbGxpbmcoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJykgcmVzaXppbmcoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBzY3JvbGxUb1BhZ2UocGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgcGFnZSA9IHRoaXMuZ2V0UGFnZShwYWdlTnVtYmVyKTtcbiAgICBjb25zdCBwcmV2ID0gcGFnZU51bWJlciA+IDAgPyB0aGlzLmdldFBhZ2UocGFnZU51bWJlciAtIDEpIDogbnVsbDtcbiAgICBjb25zdCBpc1NhbWVUb3AgPSAocHJldiAmJiAkKHByZXYpLm9mZnNldCgpLnRvcCA9PT0gJChwYWdlKS5vZmZzZXQoKS50b3ApO1xuICAgIGlmICh0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KHBhZ2UsIHRoaXMuem9vbSkgJiYgaXNTYW1lVG9wKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhZ2VzSGVpZ2h0ID0gdGhpcy5jYWxjdWxhdGVPZmZzZXQocGFnZU51bWJlcik7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IHBhZ2VzSGVpZ2h0XG4gICAgfTtcbiAgICBpZihlbCl7XG4gICAgICBlbC5zY3JvbGxUbyhvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENoaWxkcmVuKCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA6IG51bGw7XG4gICAgaWYgKGVsKSB7XG4gICAgICByZXR1cm4gZWwuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFBhZ2UocGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbGVtZW50UmVmID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IDogbnVsbDtcbiAgICBpZiAoZWwpIHtcbiAgICAgIHJldHVybiBlbC5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuLml0ZW0ocGFnZU51bWJlciAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlT2Zmc2V0KHBhZ2VOdW1iZXI6IG51bWJlcikge1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5pZkZpcmVmb3goKSA/IDEgOiB0aGlzLmNvdW50UGFnZXNPbldpZHRoKCk7XG4gICAgY29uc3QgbWFyZ2luID0gdGhpcy5fd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKSA/IDQwIDogMTA7XG4gICAgbGV0IHBhZ2VzSGVpZ2h0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBhZ2VOdW1iZXIgLyBjb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRQYWdlKGkpO1xuICAgICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gaXRlbSA/IGl0ZW0uY2xpZW50SGVpZ2h0IDogMDtcbiAgICAgIHBhZ2VzSGVpZ2h0ICs9IGNsaWVudEhlaWdodCA+IDAgPyBjbGllbnRIZWlnaHQgKiB0aGlzLmdldFpvb20oKSArIG1hcmdpbiA6IDA7XG4gICAgfVxuICAgIHJldHVybiBwYWdlc0hlaWdodDtcbiAgfVxuXG4gIHByaXZhdGUgY291bnRQYWdlc09uV2lkdGgoKSB7XG4gICAgY29uc3QgcGFnZUVsID0gdGhpcy5nZXRQYWdlKDEpO1xuICAgIGNvbnN0IG9mZnNldCA9IDE1MDtcbiAgICBjb25zdCBjb3VudCA9IE1hdGguZmxvb3IoKHRoaXMuZ2V0V2lkdGgoKSAtIG9mZnNldCkgLyAocGFnZUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICogdGhpcy5nZXRab29tKCkpKTtcbiAgICByZXR1cm4gY291bnQgPT09IDAgPyAxIDogY291bnQ7XG4gIH1cblxuICBpZkZpcmVmb3goKSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPiAtMTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgbGV0IHBhZ2U7XG4gICAgbGV0IGN1cnJlbnRQYWdlU2V0ID0gZmFsc2U7XG4gICAgY29uc3QgcGFnZUVsZW0gPSB0aGlzLmdldFBhZ2UodGhpcy5jdXJyZW50UGFnZSk7XG4gICAgY29uc3QgY3VycmVudFBhZ2VSZWN0ID0gdGhpcy5jdXJyZW50UGFnZSAmJiBwYWdlRWxlbSA/IHBhZ2VFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogbnVsbDtcbiAgICBmb3IgKHBhZ2UgPSAxOyBwYWdlIDwgdGhpcy5nZXRDaGlsZHJlbigpLmxlbmd0aCArIDE7IHBhZ2UrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0UGFnZShwYWdlKTtcbiAgICAgIGlmICh0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KGVsZW1lbnQsIHRoaXMuem9vbSkpIHtcbiAgICAgICAgaWYgKCFjdXJyZW50UGFnZVNldCkge1xuICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50UGFnZSB8fCAhcGFnZUVsZW0gfHwgKHRoaXMuY3VycmVudFBhZ2UgJiYgY3VycmVudFBhZ2VSZWN0ICYmIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICE9PSBjdXJyZW50UGFnZVJlY3QudG9wKSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJyZW50UGFnZVNldCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcGFnZVByZWxvYWRTZXJ2aWNlLmNoYW5nZUxhc3RQYWdlSW5WaWV3KHBhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuem9vbSA9IHRoaXMuX3pvb21TZXJ2aWNlLnpvb20gPyB0aGlzLl96b29tU2VydmljZS56b29tIDogdGhpcy56b29tO1xuICB9XG5cblxuICBwcml2YXRlIGdldFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50UmVmID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIDogd2luZG93LmlubmVyV2lkdGg7XG4gIH1cblxuICBwcml2YXRlIGdldFpvb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuem9vbSAvIDEwMDtcbiAgfVxufVxuIl19