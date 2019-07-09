import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import { ViewportService } from "../viewport.service";
import * as jquery from 'jquery';
var $ = jquery;
var TopToolbarComponent = /** @class */ (function () {
    function TopToolbarComponent(_elementRef, _viewportService, _cdRef) {
        this._elementRef = _elementRef;
        this._viewportService = _viewportService;
        this._cdRef = _cdRef;
        this.leftOffset = true;
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
        if (!this.leftOffset) {
            return 0;
        }
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TopToolbarComponent.prototype, "leftOffset", void 0);
    TopToolbarComponent = tslib_1.__decorate([
        Component({
            selector: 'gd-top-toolbar',
            template: "<div class=\"top-toolbar\">\n  <gd-button [className]=\"'arrow-button'\" class=\"arrow-left\" id=\"left\" [icon]=\"'caret-left'\" [tooltip]=\"'Scroll left'\"\n             (click)=\"moveLeft()\"\n             *ngIf=\"showLeft\"></gd-button>\n  <div id=\"tools\" class=\"tools\">\n    <ng-content></ng-content>\n  </div>\n  <gd-button [className]=\"'arrow-button'\" class=\"arrow-right\" id=\"right\" [icon]=\"'caret-right'\"\n             [tooltip]=\"'Scroll right'\" (click)=\"moveRight()\"\n             *ngIf=\"showRight\"></gd-button>\n</div>\n",
            styles: [".top-toolbar{width:100%;height:60px;z-index:999;display:flex;align-items:center}.tools{width:100%;height:100%;display:flex;align-items:center}@media (max-width:480px){.top-toolbar{height:60px}.arrow-right{position:absolute;right:0}.tools{width:calc(100% - 120px);height:100%;overflow-x:auto;overflow-scrolling:touch;display:flex;align-items:center;transition:.3s ease-in-out;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.tools::-webkit-scrollbar{width:0;height:0;background-color:#3e4e5a}}"]
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            ViewportService,
            ChangeDetectorRef])
    ], TopToolbarComponent);
    return TopToolbarComponent;
}());
export { TopToolbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3RvcC10b29sYmFyL3RvcC10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFtQixpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsSUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBT2pCO0lBTUUsNkJBQW9CLFdBQW9DLEVBQ3BDLGdCQUFpQyxFQUNqQyxNQUF5QjtRQUZ6QixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQVBwQyxlQUFVLEdBQUcsSUFBSSxDQUFDO0lBUTNCLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9CLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQixFQUFFLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFO1lBQzVCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0UsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9CLElBQUksRUFBRSxFQUFFO1lBQ04sSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENB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YSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0csSUFBSSxRQUFRLEtBQUssSUFBSSxDQUFDLFFBQVEsSUFBSSxTQUFTLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM5RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQXpHUTtRQUFSLEtBQUssRUFBRTs7MkRBQW1CO0lBRGhCLG1CQUFtQjtRQUwvQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLGdqQkFBMkM7O1NBRTVDLENBQUM7aURBT2lDLFVBQVU7WUFDTCxlQUFlO1lBQ3pCLGlCQUFpQjtPQVJsQyxtQkFBbUIsQ0EyRy9CO0lBQUQsMEJBQUM7Q0FBQSxBQTNHRCxJQTJHQztTQTNHWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0NoZWNrZWQsIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtWaWV3cG9ydFNlcnZpY2V9IGZyb20gXCIuLi92aWV3cG9ydC5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXRvcC10b29sYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvcC10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9wLXRvb2xiYXIuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUb3BUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkIHtcbiAgQElucHV0KCkgbGVmdE9mZnNldCA9IHRydWU7XG5cbiAgc2hvd0xlZnQ6IGJvb2xlYW47XG4gIHNob3dSaWdodDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdmlld3BvcnRTZXJ2aWNlOiBWaWV3cG9ydFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgY29uc3QgZWwgPSB0aGlzLmdldFRvb2xzRWxlbSgpO1xuICAgIGNvbnN0ICR0aGlzID0gdGhpcztcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkdGhpcy5yZWZyZXNoKCk7XG4gICAgfSk7XG4gIH1cblxuICBtb3ZlTGVmdCgpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZ2V0VG9vbHNFbGVtKCk7XG4gICAgaWYgKGVsKSB7XG4gICAgICBjb25zdCBlbGVtID0gdGhpcy5jYW5Nb3ZlVG8odHJ1ZSk7XG4gICAgICBpZiAoZWxlbSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIGxlZnQ6ICQoZWxlbSkub2Zmc2V0KCkubGVmdCArIGVsLnNjcm9sbExlZnQgLSB0aGlzLmdldExlZnRPZmZzZXQoKSxcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgIH07XG4gICAgICAgIGVsLnNjcm9sbFRvKG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdmVSaWdodCgpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZ2V0VG9vbHNFbGVtKCk7XG4gICAgaWYgKGVsKSB7XG4gICAgICBjb25zdCBlbGVtID0gdGhpcy5jYW5Nb3ZlVG8oZmFsc2UpO1xuICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBsZWZ0OiAkKGVsZW0pLm9mZnNldCgpLmxlZnQgKyBlbC5zY3JvbGxMZWZ0IC0gdGhpcy5nZXRMZWZ0T2Zmc2V0KCksXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICB9O1xuICAgICAgICBlbC5zY3JvbGxUbyhvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFRvb2xzRWxlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5xdWVyeVNlbGVjdG9yKCcjdG9vbHMnKSA6IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGNhbk1vdmVUbyhsZWZ0OiBib29sZWFuKSB7XG4gICAgbGV0IGVsZW07XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG4gICAgY29uc3QgY291bnRFbGVtID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAoZWxlbSA9IDA7IGVsZW0gPCBjb3VudEVsZW07IGVsZW0rKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbShlbGVtKTtcbiAgICAgIGlmICh0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KGVsZW1lbnQsIDEwMCwgdGhpcy5nZXRMZWZ0T2Zmc2V0KCkpKSB7XG4gICAgICAgIGlmIChsZWZ0KSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW0gPiAwID8gY2hpbGRyZW4uaXRlbShlbGVtIC0gMSkgOiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBlbGVtICsgMSA8IGNvdW50RWxlbSA/IGNoaWxkcmVuLml0ZW0oZWxlbSArIDEpIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBwcml2YXRlIGdldEVsZW0obnVtOiBudW1iZXIpIHtcbiAgICBjb25zdCBlbGVtcyA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcbiAgICByZXR1cm4gZWxlbXMuaXRlbShudW0gIT09IG51bGwgPyBudW0gOiBlbGVtcy5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hpbGRyZW4oKTogSFRNTENvbGxlY3Rpb24ge1xuICAgIGNvbnN0IGVsID0gdGhpcy5nZXRUb29sc0VsZW0oKTtcbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBlbC5jaGlsZHJlbjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGVmdE9mZnNldCgpIHtcbiAgICBpZiAoIXRoaXMubGVmdE9mZnNldCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50ID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMF0gOiBudWxsO1xuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gZWwuY2xpZW50V2lkdGg7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2goKSB7XG4gICAgdGhpcy5zaG93TGVmdCA9ICF0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KHRoaXMuZ2V0RWxlbSgwKSwgMTAwLCB0aGlzLmdldExlZnRPZmZzZXQoKSwgMC44KTtcbiAgICB0aGlzLnNob3dSaWdodCA9ICF0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KHRoaXMuZ2V0RWxlbShudWxsKSwgMTAwLCB0aGlzLmdldExlZnRPZmZzZXQoKSwgMC44KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBzaG93TGVmdCA9ICF0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KHRoaXMuZ2V0RWxlbSgwKSwgMTAwLCB0aGlzLmdldExlZnRPZmZzZXQoKSwgMC44KTtcbiAgICBjb25zdCBzaG93UmlnaHQgPSAhdGhpcy5fdmlld3BvcnRTZXJ2aWNlLmNoZWNrSW5WaWV3cG9ydCh0aGlzLmdldEVsZW0obnVsbCksIDEwMCwgdGhpcy5nZXRMZWZ0T2Zmc2V0KCksIDAuOCk7XG4gICAgaWYgKHNob3dMZWZ0ICE9PSB0aGlzLnNob3dMZWZ0IHx8IHNob3dSaWdodCAhPT0gdGhpcy5zaG93UmlnaHQpIHtcbiAgICAgIHRoaXMuc2hvd0xlZnQgPSBzaG93TGVmdDtcbiAgICAgIHRoaXMuc2hvd1JpZ2h0ID0gc2hvd1JpZ2h0O1xuICAgICAgdGhpcy5fY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxufVxuIl19