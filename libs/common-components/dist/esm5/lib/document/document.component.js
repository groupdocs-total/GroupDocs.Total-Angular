import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FileDescription, FileUtil } from "../file.service";
import { ZoomService } from "../zoom.service";
var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(zoomService) {
        var _this = this;
        this.wait = false;
        zoomService.zoomChange.subscribe(function (val) {
            _this.zoom = val;
        });
    }
    DocumentComponent.prototype.ngOnInit = function () {
    };
    DocumentComponent.prototype.ifPdf = function () {
        return FileUtil.find(this.file.guid, false).format === "Portable Document Format";
    };
    DocumentComponent.prototype.ifImage = function () {
        return FileUtil.find(this.file.guid, false).format === "Joint Photographic Experts Group";
    };
    DocumentComponent.prototype.ngOnChanges = function (changes) {
        this.refreshView = !this.refreshView;
    };
    DocumentComponent.prototype.ifChromeOrFirefox = function () {
        return navigator.userAgent.toLowerCase().indexOf('chrome') > -1 || this.ifFirefox();
    };
    DocumentComponent.prototype.ifFirefox = function () {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
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
    return DocumentComponent;
}());
export { DocumentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBTzVDO0lBU0UsMkJBQVksV0FBd0I7UUFBcEMsaUJBS0M7UUFURCxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBTVgsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFXO1lBQzNDLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsaUNBQUssR0FBTDtRQUNFLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssMEJBQTBCLENBQUM7SUFDcEYsQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFDRSxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLGtDQUFrQyxDQUFDO0lBQzVGLENBQUM7SUFFRCx1Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdkMsQ0FBQztJQUVELDZDQUFpQixHQUFqQjtRQUNFLE9BQU8sU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3RGLENBQUM7SUFFRCxxQ0FBUyxHQUFUO1FBQ0UsT0FBTyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBbkNRO1FBQVIsS0FBSyxFQUFFOzttREFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFOzsrREFBMEI7SUFDekI7UUFBUixLQUFLLEVBQUU7MENBQU8sZUFBZTttREFBQztJQUpwQixpQkFBaUI7UUFMN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsbTJCQUF3Qzs7U0FFekMsQ0FBQztpREFVeUIsV0FBVztPQVR6QixpQkFBaUIsQ0FzQzdCO0lBQUQsd0JBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQXRDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmlsZURlc2NyaXB0aW9uLCBGaWxlVXRpbH0gZnJvbSBcIi4uL2ZpbGUuc2VydmljZVwiO1xuaW1wb3J0IHtab29tU2VydmljZX0gZnJvbSBcIi4uL3pvb20uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1kb2N1bWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kb2N1bWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RvY3VtZW50LmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgbW9kZTogYm9vbGVhbjtcbiAgQElucHV0KCkgcHJlbG9hZFBhZ2VDb3VudDogbnVtYmVyO1xuICBASW5wdXQoKSBmaWxlOiBGaWxlRGVzY3JpcHRpb247XG4gIHdhaXQgPSBmYWxzZTtcbiAgcmVmcmVzaFZpZXc6IGJvb2xlYW47XG4gIHpvb206IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcih6b29tU2VydmljZTogWm9vbVNlcnZpY2UpIHtcblxuICAgIHpvb21TZXJ2aWNlLnpvb21DaGFuZ2Uuc3Vic2NyaWJlKCh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy56b29tID0gdmFsO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBpZlBkZigpIHtcbiAgICByZXR1cm4gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLmZvcm1hdCA9PT0gXCJQb3J0YWJsZSBEb2N1bWVudCBGb3JtYXRcIjtcbiAgfVxuXG4gIGlmSW1hZ2UoKSB7XG4gICAgcmV0dXJuIEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5mb3JtYXQgPT09IFwiSm9pbnQgUGhvdG9ncmFwaGljIEV4cGVydHMgR3JvdXBcIjtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2hWaWV3ID0gIXRoaXMucmVmcmVzaFZpZXc7XG4gIH1cblxuICBpZkNocm9tZU9yRmlyZWZveCgpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2Nocm9tZScpID4gLTEgfHwgdGhpcy5pZkZpcmVmb3goKTtcbiAgfVxuXG4gIGlmRmlyZWZveCgpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xO1xuICB9XG59XG4iXX0=