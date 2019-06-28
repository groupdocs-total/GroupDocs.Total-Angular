import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { ViewportService } from "../viewport.service";
import * as jquery from "jquery";
var $ = jquery;
var TopToolbarComponent = /** @class */ (function () {
    function TopToolbarComponent(_elementRef, _viewportService, _cdRef) {
        this._elementRef = _elementRef;
        this._viewportService = _viewportService;
        this._cdRef = _cdRef;
    }
    TopToolbarComponent.prototype.ngOnInit = function () {
        this.refresh();
        var el = this.getToolsElem();
        var $this = this;
        el.addEventListener('scroll', function () {
            $this.refresh();
        });
    };
    TopToolbarComponent.prototype.moveLeft = function () {
        var el = this.getToolsElem();
        if (el) {
            var elem = this.canMoveTo(true);
            if (elem) {
                var options = {
                    left: $(elem).offset().left + el.scrollLeft - this.getLeftOffset(),
                    top: 0,
                };
                el.scrollTo(options);
            }
        }
    };
    TopToolbarComponent.prototype.moveRight = function () {
        var el = this.getToolsElem();
        if (el) {
            var elem = this.canMoveTo(false);
            if (elem) {
                var options = {
                    left: $(elem).offset().left + el.scrollLeft - this.getLeftOffset(),
                    top: 0,
                };
                el.scrollTo(options);
            }
        }
    };
    TopToolbarComponent.prototype.getToolsElem = function () {
        return this._elementRef ? this._elementRef.nativeElement.children[0].querySelector('#tools') : null;
    };
    TopToolbarComponent.prototype.canMoveTo = function (left) {
        var elem;
        var children = this.getChildren();
        var countElem = children.length;
        for (elem = 0; elem < countElem; elem++) {
            var element = this.getElem(elem);
            if (this._viewportService.checkInViewport(element, 100, this.getLeftOffset())) {
                if (left) {
                    return elem > 0 ? children.item(elem - 1) : null;
                }
                else {
                    return elem + 1 < countElem ? children.item(elem + 1) : null;
                }
            }
        }
        return;
    };
    TopToolbarComponent.prototype.getElem = function (num) {
        var elems = this.getChildren();
        return elems.item(num !== null ? num : elems.length - 1);
    };
    TopToolbarComponent.prototype.getChildren = function () {
        var el = this.getToolsElem();
        if (!el) {
            return;
        }
        return el.children;
    };
    TopToolbarComponent.prototype.getLeftOffset = function () {
        var el = this._elementRef.nativeElement ? this._elementRef.nativeElement.parentElement.children[0] : null;
        if (!el) {
            return 0;
        }
        return el.clientWidth;
    };
    TopToolbarComponent.prototype.refresh = function () {
        this.showLeft = !this._viewportService.checkInViewport(this.getElem(0), 100, this.getLeftOffset(), 0.8);
        this.showRight = !this._viewportService.checkInViewport(this.getElem(null), 100, this.getLeftOffset(), 0.8);
    };
    TopToolbarComponent.prototype.ngAfterViewChecked = function () {
        var showLeft = !this._viewportService.checkInViewport(this.getElem(0), 100, this.getLeftOffset(), 0.8);
        var showRight = !this._viewportService.checkInViewport(this.getElem(null), 100, this.getLeftOffset(), 0.8);
        if (showLeft !== this.showLeft || showRight !== this.showRight) {
            this.showLeft = showLeft;
            this.showRight = showRight;
            this._cdRef.detectChanges();
        }
    };
    TopToolbarComponent = tslib_1.__decorate([
        Component({
            selector: 'gd-top-toolbar',
            template: "<div class=\"top-toolbar\">\n  <gd-button [className]=\"'arrow-button'\" class=\"arrow-left\" id=\"left\" [icon]=\"'caret-left'\" [tooltip]=\"'Scroll left'\"\n             (click)=\"moveLeft()\"\n             *ngIf=\"showLeft\"></gd-button>\n  <div id=\"tools\" class=\"tools\">\n    <ng-content></ng-content>\n  </div>\n  <gd-button [className]=\"'arrow-button'\" class=\"arrow-right\" id=\"right\" [icon]=\"'caret-right'\"\n             [tooltip]=\"'Scroll right'\" (click)=\"moveRight()\"\n             *ngIf=\"showRight\"></gd-button>\n</div>\n",
            styles: [".top-toolbar{width:100%;height:50px;z-index:999;display:flex;align-items:center}.tools{width:100%;height:100%;display:flex;align-items:center}@media (max-width:1025px){.top-toolbar{height:70px}.arrow-right{position:absolute;right:0}.tools{width:calc(100% - 120px);height:100%;overflow-x:auto;overflow-scrolling:touch;display:flex;align-items:center;transition:.3s ease-in-out;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.tools::-webkit-scrollbar{width:0;height:0;background-color:#3e4e5a}}"]
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            ViewportService,
            ChangeDetectorRef])
    ], TopToolbarComponent);
    return TopToolbarComponent;
}());
export { TopToolbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3RvcC10b29sYmFyL3RvcC10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFtQixpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxJQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFPakI7SUFJRSw2QkFBb0IsV0FBb0MsRUFDcEMsZ0JBQWlDLEVBQ2pDLE1BQXlCO1FBRnpCLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLFdBQU0sR0FBTixNQUFNLENBQW1CO0lBQzdDLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9CLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQixFQUFFLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFO1lBQzVCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0UsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9CLElBQUksRUFBRSxFQUFFO1lBQ04sSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxJQUFJLElBQUksRUFBRTtnQkFDUixJQUFNLE9BQU8sR0FBRztvQkFDZCxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ2xFLEdBQUcsRUFBRSxDQUFDO2lCQUNQLENBQUM7Z0JBQ0YsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0QjtTQUNGO0lBQ0gsQ0FBQztJQUVELHVDQUFTLEdBQVQ7UUFDRSxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0IsSUFBSSxFQUFFLEVBQUU7WUFDTixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25DLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQU0sT0FBTyxHQUFHO29CQUNkLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDbEUsR0FBRyxFQUFFLENBQUM7aUJBQ1AsQ0FBQztnQkFDRixFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3RCO1NBQ0Y7SUFDSCxDQUFDO0lBRU8sMENBQVksR0FBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0RyxDQUFDO0lBRU8sdUNBQVMsR0FBakIsVUFBa0IsSUFBYTtRQUM3QixJQUFJLElBQUksQ0FBQztRQUNULElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ2xDLEtBQUssSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ3ZDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUU7Z0JBQzdFLElBQUksSUFBSSxFQUFFO29CQUNSLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztpQkFDbEQ7cUJBQU07b0JBQ0wsT0FBTyxJQUFJLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztpQkFDOUQ7YUFDRjtTQUNGO1FBQ0QsT0FBTztJQUNULENBQUM7SUFFTyxxQ0FBTyxHQUFmLFVBQWdCLEdBQVc7UUFDekIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVPLHlDQUFXLEdBQW5CO1FBQ0UsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDUCxPQUFPO1NBQ1I7UUFDRCxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7SUFDckIsQ0FBQztJQUVPLDJDQUFhLEdBQXJCO1FBQ0UsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM1RyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1AsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUNELE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztJQUN4QixDQUFDO0lBRU8scUNBQU8sR0FBZjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN4RyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDOUcsQ0FBQztJQUVELGdEQUFrQixHQUFsQjtRQUNFLElBQU0sUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekcsSUFBTSxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3RyxJQUFJLFFBQVEsS0FBSyxJQUFJLENBQUMsUUFBUSxJQUFJLFNBQVMsS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzlELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBckdVLG1CQUFtQjtRQUwvQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLGdqQkFBMkM7O1NBRTVDLENBQUM7aURBS2lDLFVBQVU7WUFDTCxlQUFlO1lBQ3pCLGlCQUFpQjtPQU5sQyxtQkFBbUIsQ0FzRy9CO0lBQUQsMEJBQUM7Q0FBQSxBQXRHRCxJQXNHQztTQXRHWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0NoZWNrZWQsIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1ZpZXdwb3J0U2VydmljZX0gZnJvbSBcIi4uL3ZpZXdwb3J0LnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tIFwianF1ZXJ5XCI7XG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC10b3AtdG9vbGJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90b3AtdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvcC10b29sYmFyLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9wVG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIHNob3dMZWZ0OiBib29sZWFuO1xuICBzaG93UmlnaHQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX3ZpZXdwb3J0U2VydmljZTogVmlld3BvcnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIGNvbnN0IGVsID0gdGhpcy5nZXRUb29sc0VsZW0oKTtcbiAgICBjb25zdCAkdGhpcyA9IHRoaXM7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICAgICAgJHRoaXMucmVmcmVzaCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbW92ZUxlZnQoKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmdldFRvb2xzRWxlbSgpO1xuICAgIGlmIChlbCkge1xuICAgICAgY29uc3QgZWxlbSA9IHRoaXMuY2FuTW92ZVRvKHRydWUpO1xuICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBsZWZ0OiAkKGVsZW0pLm9mZnNldCgpLmxlZnQgKyBlbC5zY3JvbGxMZWZ0IC0gdGhpcy5nZXRMZWZ0T2Zmc2V0KCksXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICB9O1xuICAgICAgICBlbC5zY3JvbGxUbyhvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3ZlUmlnaHQoKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmdldFRvb2xzRWxlbSgpO1xuICAgIGlmIChlbCkge1xuICAgICAgY29uc3QgZWxlbSA9IHRoaXMuY2FuTW92ZVRvKGZhbHNlKTtcbiAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgbGVmdDogJChlbGVtKS5vZmZzZXQoKS5sZWZ0ICsgZWwuc2Nyb2xsTGVmdCAtIHRoaXMuZ2V0TGVmdE9mZnNldCgpLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgZWwuc2Nyb2xsVG8ob3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRUb29sc0VsZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRSZWYgPyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0ucXVlcnlTZWxlY3RvcignI3Rvb2xzJykgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBjYW5Nb3ZlVG8obGVmdDogYm9vbGVhbikge1xuICAgIGxldCBlbGVtO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuICAgIGNvbnN0IGNvdW50RWxlbSA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICBmb3IgKGVsZW0gPSAwOyBlbGVtIDwgY291bnRFbGVtOyBlbGVtKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmdldEVsZW0oZWxlbSk7XG4gICAgICBpZiAodGhpcy5fdmlld3BvcnRTZXJ2aWNlLmNoZWNrSW5WaWV3cG9ydChlbGVtZW50LCAxMDAsIHRoaXMuZ2V0TGVmdE9mZnNldCgpKSkge1xuICAgICAgICBpZiAobGVmdCkge1xuICAgICAgICAgIHJldHVybiBlbGVtID4gMCA/IGNoaWxkcmVuLml0ZW0oZWxlbSAtIDEpIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZWxlbSArIDEgPCBjb3VudEVsZW0gPyBjaGlsZHJlbi5pdGVtKGVsZW0gKyAxKSA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbGVtKG51bTogbnVtYmVyKSB7XG4gICAgY29uc3QgZWxlbXMgPSB0aGlzLmdldENoaWxkcmVuKCk7XG4gICAgcmV0dXJuIGVsZW1zLml0ZW0obnVtICE9PSBudWxsID8gbnVtIDogZWxlbXMubGVuZ3RoIC0gMSk7XG4gIH1cblxuICBwcml2YXRlIGdldENoaWxkcmVuKCk6IEhUTUxDb2xsZWN0aW9uIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZ2V0VG9vbHNFbGVtKCk7XG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gZWwuY2hpbGRyZW47XG4gIH1cblxuICBwcml2YXRlIGdldExlZnRPZmZzZXQoKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblswXSA6IG51bGw7XG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiBlbC5jbGllbnRXaWR0aDtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnNob3dMZWZ0ID0gIXRoaXMuX3ZpZXdwb3J0U2VydmljZS5jaGVja0luVmlld3BvcnQodGhpcy5nZXRFbGVtKDApLCAxMDAsIHRoaXMuZ2V0TGVmdE9mZnNldCgpLCAwLjgpO1xuICAgIHRoaXMuc2hvd1JpZ2h0ID0gIXRoaXMuX3ZpZXdwb3J0U2VydmljZS5jaGVja0luVmlld3BvcnQodGhpcy5nZXRFbGVtKG51bGwpLCAxMDAsIHRoaXMuZ2V0TGVmdE9mZnNldCgpLCAwLjgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuICAgIGNvbnN0IHNob3dMZWZ0ID0gIXRoaXMuX3ZpZXdwb3J0U2VydmljZS5jaGVja0luVmlld3BvcnQodGhpcy5nZXRFbGVtKDApLCAxMDAsIHRoaXMuZ2V0TGVmdE9mZnNldCgpLCAwLjgpO1xuICAgIGNvbnN0IHNob3dSaWdodCA9ICF0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KHRoaXMuZ2V0RWxlbShudWxsKSwgMTAwLCB0aGlzLmdldExlZnRPZmZzZXQoKSwgMC44KTtcbiAgICBpZiAoc2hvd0xlZnQgIT09IHRoaXMuc2hvd0xlZnQgfHwgc2hvd1JpZ2h0ICE9PSB0aGlzLnNob3dSaWdodCkge1xuICAgICAgdGhpcy5zaG93TGVmdCA9IHNob3dMZWZ0O1xuICAgICAgdGhpcy5zaG93UmlnaHQgPSBzaG93UmlnaHQ7XG4gICAgICB0aGlzLl9jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG59XG4iXX0=