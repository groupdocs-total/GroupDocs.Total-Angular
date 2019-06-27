import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FileDescription, FileUtil } from "../file.service";
import { ZoomService } from "../zoom.service";
let DocumentComponent = class DocumentComponent {
    constructor(zoomService) {
        this.wait = false;
        zoomService.zoomChange.subscribe((val) => {
            this.zoom = val;
        });
    }
    ngOnInit() {
    }
    ifPdf() {
        return FileUtil.find(this.file.guid, false).format === "Portable Document Format";
    }
    ifImage() {
        return FileUtil.find(this.file.guid, false).format === "Joint Photographic Experts Group";
    }
    ngOnChanges(changes) {
        this.refreshView = !this.refreshView;
    }
    ifChromeOrFirefox() {
        return navigator.userAgent.toLowerCase().indexOf('chrome') > -1 || this.ifFirefox();
    }
    ifFirefox() {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], DocumentComponent.prototype, "mode", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], DocumentComponent.prototype, "preloadPageCount", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", FileDescription)
], DocumentComponent.prototype, "file", void 0);
DocumentComponent = tslib_1.__decorate([
    Component({
        selector: 'gd-document',
        template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" gdScrollable [onRefresh]=\"refreshView\">\n  <div class=\"panzoom\" gdZoom [zoomActive]=\"ifFirefox()\" gdSearchable>\n    <div [ngClass]=\"(ifFirefox() && zoom > 110) ? 'page gd-zoomed' : 'page'\" *ngFor=\"let page of file?.pages\" gdZoom [zoomActive]=\"!ifFirefox()\"\n         [style.width.pt]=\"ifPdf() ? page.width : 'unset'\"\n         [style.height.pt]=\"(ifPdf() || ifImage()) && ifChromeOrFirefox() ? page.height : 'unset'\" gdRotation\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\"></gd-page>\n    </div>\n  </div>\n</div>\n",
        styles: [".document{background-color:#e7e7e7;width:100%;height:100%;overflow-x:hidden;overflow-y:auto!important;transition:.4s;padding:0;margin:0}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 4px 12px -4px rgba(0,0,0,.38);transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{-webkit-transform:none;transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;display:flex;justify-content:center;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}@media (max-width:1025px){.document{overflow-x:auto!important}.panzoom{flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
    }),
    tslib_1.__metadata("design:paramtypes", [ZoomService])
], DocumentComponent);
export { DocumentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBTzVDLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBUzVCLFlBQVksV0FBd0I7UUFKcEMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQU1YLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBVyxFQUFFLEVBQUU7WUFDL0MsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxLQUFLO1FBQ0gsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSywwQkFBMEIsQ0FBQztJQUNwRixDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssa0NBQWtDLENBQUM7SUFDNUYsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsT0FBTyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDdEYsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Q0FDRixDQUFBO0FBcENVO0lBQVIsS0FBSyxFQUFFOzsrQ0FBZTtBQUNkO0lBQVIsS0FBSyxFQUFFOzsyREFBMEI7QUFDekI7SUFBUixLQUFLLEVBQUU7c0NBQU8sZUFBZTsrQ0FBQztBQUpwQixpQkFBaUI7SUFMN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsbTJCQUF3Qzs7S0FFekMsQ0FBQzs2Q0FVeUIsV0FBVztHQVR6QixpQkFBaUIsQ0FzQzdCO1NBdENZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWxlRGVzY3JpcHRpb24sIEZpbGVVdGlsfSBmcm9tIFwiLi4vZmlsZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi4vem9vbS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWRvY3VtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvY3VtZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZG9jdW1lbnQuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEb2N1bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBtb2RlOiBib29sZWFuO1xuICBASW5wdXQoKSBwcmVsb2FkUGFnZUNvdW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIGZpbGU6IEZpbGVEZXNjcmlwdGlvbjtcbiAgd2FpdCA9IGZhbHNlO1xuICByZWZyZXNoVmlldzogYm9vbGVhbjtcbiAgem9vbTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHpvb21TZXJ2aWNlOiBab29tU2VydmljZSkge1xuXG4gICAgem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHZhbDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLnpvb20gPSB2YWw7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGlmUGRmKCkge1xuICAgIHJldHVybiBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkuZm9ybWF0ID09PSBcIlBvcnRhYmxlIERvY3VtZW50IEZvcm1hdFwiO1xuICB9XG5cbiAgaWZJbWFnZSgpIHtcbiAgICByZXR1cm4gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLmZvcm1hdCA9PT0gXCJKb2ludCBQaG90b2dyYXBoaWMgRXhwZXJ0cyBHcm91cFwiO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMucmVmcmVzaFZpZXcgPSAhdGhpcy5yZWZyZXNoVmlldztcbiAgfVxuXG4gIGlmQ2hyb21lT3JGaXJlZm94KCkge1xuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignY2hyb21lJykgPiAtMSB8fCB0aGlzLmlmRmlyZWZveCgpO1xuICB9XG5cbiAgaWZGaXJlZm94KCkge1xuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpID4gLTE7XG4gIH1cbn1cbiJdfQ==