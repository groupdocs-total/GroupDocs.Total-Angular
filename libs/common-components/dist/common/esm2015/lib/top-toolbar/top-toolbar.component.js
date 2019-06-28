import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { ViewportService } from "../viewport.service";
import * as jquery from "jquery";
const $ = jquery;
let TopToolbarComponent = class TopToolbarComponent {
    constructor(_elementRef, _viewportService, _cdRef) {
        this._elementRef = _elementRef;
        this._viewportService = _viewportService;
        this._cdRef = _cdRef;
    }
    ngOnInit() {
        this.refresh();
        const el = this.getToolsElem();
        const $this = this;
        el.addEventListener('scroll', function () {
            $this.refresh();
        });
    }
    moveLeft() {
        const el = this.getToolsElem();
        if (el) {
            const elem = this.canMoveTo(true);
            if (elem) {
                const options = {
                    left: $(elem).offset().left + el.scrollLeft - this.getLeftOffset(),
                    top: 0,
                };
                el.scrollTo(options);
            }
        }
    }
    moveRight() {
        const el = this.getToolsElem();
        if (el) {
            const elem = this.canMoveTo(false);
            if (elem) {
                const options = {
                    left: $(elem).offset().left + el.scrollLeft - this.getLeftOffset(),
                    top: 0,
                };
                el.scrollTo(options);
            }
        }
    }
    getToolsElem() {
        return this._elementRef ? this._elementRef.nativeElement.children[0].querySelector('#tools') : null;
    }
    canMoveTo(left) {
        let elem;
        const children = this.getChildren();
        const countElem = children.length;
        for (elem = 0; elem < countElem; elem++) {
            const element = this.getElem(elem);
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
    }
    getElem(num) {
        const elems = this.getChildren();
        return elems.item(num !== null ? num : elems.length - 1);
    }
    getChildren() {
        const el = this.getToolsElem();
        if (!el) {
            return;
        }
        return el.children;
    }
    getLeftOffset() {
        const el = this._elementRef.nativeElement ? this._elementRef.nativeElement.parentElement.children[0] : null;
        if (!el) {
            return 0;
        }
        return el.clientWidth;
    }
    refresh() {
        this.showLeft = !this._viewportService.checkInViewport(this.getElem(0), 100, this.getLeftOffset(), 0.8);
        this.showRight = !this._viewportService.checkInViewport(this.getElem(null), 100, this.getLeftOffset(), 0.8);
    }
    ngAfterViewChecked() {
        const showLeft = !this._viewportService.checkInViewport(this.getElem(0), 100, this.getLeftOffset(), 0.8);
        const showRight = !this._viewportService.checkInViewport(this.getElem(null), 100, this.getLeftOffset(), 0.8);
        if (showLeft !== this.showLeft || showRight !== this.showRight) {
            this.showLeft = showLeft;
            this.showRight = showRight;
            this._cdRef.detectChanges();
        }
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
export { TopToolbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3RvcC10b29sYmFyL3RvcC10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFtQixpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFPakIsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFJOUIsWUFBb0IsV0FBb0MsRUFDcEMsZ0JBQWlDLEVBQ2pDLE1BQXlCO1FBRnpCLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLFdBQU0sR0FBTixNQUFNLENBQW1CO0lBQzdDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9CLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQixFQUFFLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFO1lBQzVCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9CLElBQUksRUFBRSxFQUFFO1lBQ04sTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxJQUFJ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Q0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUF0R1ksbUJBQW1CO0lBTC9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsZ2pCQUEyQzs7S0FFNUMsQ0FBQzs2Q0FLaUMsVUFBVTtRQUNMLGVBQWU7UUFDekIsaUJBQWlCO0dBTmxDLG1CQUFtQixDQXNHL0I7U0F0R1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdDaGVja2VkLCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtWaWV3cG9ydFNlcnZpY2V9IGZyb20gXCIuLi92aWV3cG9ydC5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuY29uc3QgJCA9IGpxdWVyeTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtdG9wLXRvb2xiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9wLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b3AtdG9vbGJhci5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRvcFRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQge1xuICBzaG93TGVmdDogYm9vbGVhbjtcbiAgc2hvd1JpZ2h0OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIF92aWV3cG9ydFNlcnZpY2U6IFZpZXdwb3J0U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgICBjb25zdCBlbCA9IHRoaXMuZ2V0VG9vbHNFbGVtKCk7XG4gICAgY29uc3QgJHRoaXMgPSB0aGlzO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICR0aGlzLnJlZnJlc2goKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdmVMZWZ0KCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5nZXRUb29sc0VsZW0oKTtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmNhbk1vdmVUbyh0cnVlKTtcbiAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgbGVmdDogJChlbGVtKS5vZmZzZXQoKS5sZWZ0ICsgZWwuc2Nyb2xsTGVmdCAtIHRoaXMuZ2V0TGVmdE9mZnNldCgpLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgZWwuc2Nyb2xsVG8ob3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW92ZVJpZ2h0KCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5nZXRUb29sc0VsZW0oKTtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmNhbk1vdmVUbyhmYWxzZSk7XG4gICAgICBpZiAoZWxlbSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIGxlZnQ6ICQoZWxlbSkub2Zmc2V0KCkubGVmdCArIGVsLnNjcm9sbExlZnQgLSB0aGlzLmdldExlZnRPZmZzZXQoKSxcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgIH07XG4gICAgICAgIGVsLnNjcm9sbFRvKG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0VG9vbHNFbGVtKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50UmVmID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLnF1ZXJ5U2VsZWN0b3IoJyN0b29scycpIDogbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgY2FuTW92ZVRvKGxlZnQ6IGJvb2xlYW4pIHtcbiAgICBsZXQgZWxlbTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcbiAgICBjb25zdCBjb3VudEVsZW0gPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgZm9yIChlbGVtID0gMDsgZWxlbSA8IGNvdW50RWxlbTsgZWxlbSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5nZXRFbGVtKGVsZW0pO1xuICAgICAgaWYgKHRoaXMuX3ZpZXdwb3J0U2VydmljZS5jaGVja0luVmlld3BvcnQoZWxlbWVudCwgMTAwLCB0aGlzLmdldExlZnRPZmZzZXQoKSkpIHtcbiAgICAgICAgaWYgKGxlZnQpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbSA+IDAgPyBjaGlsZHJlbi5pdGVtKGVsZW0gLSAxKSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW0gKyAxIDwgY291bnRFbGVtID8gY2hpbGRyZW4uaXRlbShlbGVtICsgMSkgOiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RWxlbShudW06IG51bWJlcikge1xuICAgIGNvbnN0IGVsZW1zID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuICAgIHJldHVybiBlbGVtcy5pdGVtKG51bSAhPT0gbnVsbCA/IG51bSA6IGVsZW1zLmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaGlsZHJlbigpOiBIVE1MQ29sbGVjdGlvbiB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmdldFRvb2xzRWxlbSgpO1xuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGVsLmNoaWxkcmVuO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMZWZ0T2Zmc2V0KCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50ID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMF0gOiBudWxsO1xuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gZWwuY2xpZW50V2lkdGg7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2goKSB7XG4gICAgdGhpcy5zaG93TGVmdCA9ICF0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KHRoaXMuZ2V0RWxlbSgwKSwgMTAwLCB0aGlzLmdldExlZnRPZmZzZXQoKSwgMC44KTtcbiAgICB0aGlzLnNob3dSaWdodCA9ICF0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KHRoaXMuZ2V0RWxlbShudWxsKSwgMTAwLCB0aGlzLmdldExlZnRPZmZzZXQoKSwgMC44KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBzaG93TGVmdCA9ICF0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KHRoaXMuZ2V0RWxlbSgwKSwgMTAwLCB0aGlzLmdldExlZnRPZmZzZXQoKSwgMC44KTtcbiAgICBjb25zdCBzaG93UmlnaHQgPSAhdGhpcy5fdmlld3BvcnRTZXJ2aWNlLmNoZWNrSW5WaWV3cG9ydCh0aGlzLmdldEVsZW0obnVsbCksIDEwMCwgdGhpcy5nZXRMZWZ0T2Zmc2V0KCksIDAuOCk7XG4gICAgaWYgKHNob3dMZWZ0ICE9PSB0aGlzLnNob3dMZWZ0IHx8IHNob3dSaWdodCAhPT0gdGhpcy5zaG93UmlnaHQpIHtcbiAgICAgIHRoaXMuc2hvd0xlZnQgPSBzaG93TGVmdDtcbiAgICAgIHRoaXMuc2hvd1JpZ2h0ID0gc2hvd1JpZ2h0O1xuICAgICAgdGhpcy5fY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxufVxuIl19