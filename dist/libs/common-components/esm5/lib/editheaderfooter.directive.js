/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener } from '@angular/core';
import { ZoomService } from "./zoom.service";
import { WindowService } from './window.service';
var EditHeaderFooterDirective = /** @class */ (function () {
    function EditHeaderFooterDirective(_zoomService, _windowService, el) {
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this.el = el;
    }
    /**
     * @return {?}
     */
    EditHeaderFooterDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.footerRef = this.el.nativeElement.querySelectorAll('.footer')[0];
        this.footerRef.setAttribute("contenteditable", false);
        this.footerRef.className += " disabled";
    };
    /**
     * @return {?}
     */
    EditHeaderFooterDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    EditHeaderFooterDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    EditHeaderFooterDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} event
     * @return {?}
     */
    EditHeaderFooterDirective.prototype.dblclickEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var footerTitle = document.createElement("div");
        footerTitle.className = "footer-title";
        footerTitle.append('Footer');
        /** @type {?} */
        var footer = event.target.closest('.footer');
        if (footer && footer.classList.contains('disabled')) {
            console.log('dblclick in footer fired');
            footer.classList.remove('disabled');
            footer.setAttribute("contenteditable", true);
            footer.before(footerTitle);
        }
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    EditHeaderFooterDirective.prototype.clickEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log('click on el fired');
        /** @type {?} */
        var footer = event.target.closest('.footer');
        if (!footer) {
            this.footerRef.setAttribute("contenteditable", false);
            if (!this.footerRef.classList.contains('disabled')) {
                this.footerRef.className += " disabled";
            }
            /** @type {?} */
            var section = this.el.nativeElement.querySelectorAll('.section')[0];
            /** @type {?} */
            var footerTitle = this.el.nativeElement.querySelectorAll('.footer-title')[0];
            if (section && footerTitle) {
                section.removeChild(footerTitle);
            }
        }
    };
    EditHeaderFooterDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdEditHeaderFooter]'
                },] }
    ];
    /** @nocollapse */
    EditHeaderFooterDirective.ctorParameters = function () { return [
        { type: ZoomService },
        { type: WindowService },
        { type: ElementRef }
    ]; };
    EditHeaderFooterDirective.propDecorators = {
        dblclickEvent: [{ type: HostListener, args: ['dblclick', ['$event'],] }],
        clickEvent: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return EditHeaderFooterDirective;
}());
export { EditHeaderFooterDirective };
if (false) {
    /** @type {?} */
    EditHeaderFooterDirective.prototype.el;
    /** @type {?} */
    EditHeaderFooterDirective.prototype.footerRef;
    /**
     * @type {?}
     * @private
     */
    EditHeaderFooterDirective.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    EditHeaderFooterDirective.prototype._windowService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGhlYWRlcmZvb3Rlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZWRpdGhlYWRlcmZvb3Rlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUF5QyxVQUFVLEVBQWEsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25JLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQ7SUFRRSxtQ0FBb0IsWUFBeUIsRUFBVSxjQUE2QixFQUFFLEVBQWM7UUFBaEYsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUNsRixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCxtREFBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLFdBQVcsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsK0NBQVc7OztJQUFYO0lBQ0EsQ0FBQzs7OztJQUVELCtDQUFXOzs7SUFBWDtJQUNBLENBQUM7Ozs7SUFFRCw0Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUdELGlEQUFhOzs7O0lBRGIsVUFDYyxLQUFLOztZQUNYLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUNqRCxXQUFXLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUN2QyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztZQUV2QixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQzlDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNwQyxNQUFNLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDNUI7UUFFRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBR0QsOENBQVU7Ozs7SUFEVixVQUNXLEtBQUs7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7O1lBQzNCLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQ2xEO2dCQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLFdBQVcsQ0FBQzthQUN6Qzs7Z0JBRUssT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Z0JBQy9ELFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUUsSUFBSSxPQUFPLElBQUksV0FBVyxFQUFFO2dCQUMxQixPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0Y7SUFDSCxDQUFDOztnQkE5REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7aUJBQ2pDOzs7O2dCQU5PLFdBQVc7Z0JBRVYsYUFBYTtnQkFIbUQsVUFBVTs7O2dDQWdDaEYsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs2QkFrQm5DLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBa0JuQyxnQ0FBQztDQUFBLEFBL0RELElBK0RDO1NBNURZLHlCQUF5Qjs7O0lBRXBDLHVDQUFvQjs7SUFDcEIsOENBQWU7Ozs7O0lBRUgsaURBQWlDOzs7OztJQUFFLG1EQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIEhvc3RMaXN0ZW5lcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xyXG5pbXBvcnQge0ZpbGVVdGlsfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gJy4vd2luZG93LnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZ2RFZGl0SGVhZGVyRm9vdGVyXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRIZWFkZXJGb290ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgZWw6IEVsZW1lbnRSZWY8YW55PjtcclxuICBmb290ZXJSZWY6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLCBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLCBlbDogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5lbCA9IGVsO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb290ZXJSZWYgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvb3RlcicpWzBdO1xyXG4gICAgdGhpcy5mb290ZXJSZWYuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcclxuICAgIHRoaXMuZm9vdGVyUmVmLmNsYXNzTmFtZSArPSBcIiBkaXNhYmxlZFwiO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZGJsY2xpY2snLCBbJyRldmVudCddKVxyXG4gIGRibGNsaWNrRXZlbnQoZXZlbnQpIHtcclxuICAgIGNvbnN0IGZvb3RlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZvb3RlclRpdGxlLmNsYXNzTmFtZSA9IFwiZm9vdGVyLXRpdGxlXCI7XHJcbiAgICBmb290ZXJUaXRsZS5hcHBlbmQoJ0Zvb3RlcicpO1xyXG5cclxuICAgIGNvbnN0IGZvb3RlciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZm9vdGVyJyk7XHJcbiAgICBpZiAoZm9vdGVyICYmIGZvb3Rlci5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2RibGNsaWNrIGluIGZvb3RlciBmaXJlZCcpO1xyXG4gICAgICBmb290ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgZm9vdGVyLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcclxuICAgICAgZm9vdGVyLmJlZm9yZShmb290ZXJUaXRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIGNsaWNrRXZlbnQoZXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGljayBvbiBlbCBmaXJlZCcpO1xyXG4gICAgY29uc3QgZm9vdGVyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5mb290ZXInKTtcclxuICAgIGlmICghZm9vdGVyKSB7XHJcbiAgICAgIHRoaXMuZm9vdGVyUmVmLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5mb290ZXJSZWYuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKVxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5mb290ZXJSZWYuY2xhc3NOYW1lICs9IFwiIGRpc2FibGVkXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHNlY3Rpb24gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24nKVswXTtcclxuICAgICAgY29uc3QgZm9vdGVyVGl0bGUgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvb3Rlci10aXRsZScpWzBdO1xyXG4gICAgICBpZiAoc2VjdGlvbiAmJiBmb290ZXJUaXRsZSkge1xyXG4gICAgICAgIHNlY3Rpb24ucmVtb3ZlQ2hpbGQoZm9vdGVyVGl0bGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==