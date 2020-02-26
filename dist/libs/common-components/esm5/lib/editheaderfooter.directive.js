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
        this.headerRef = this.el.nativeElement.querySelectorAll('.header')[0];
        if (this.headerRef) {
            this.headerRef.setAttribute("contenteditable", false);
            this.headerRef.className += " disabled";
        }
        this.footerRef = this.el.nativeElement.querySelectorAll('.footer')[0];
        if (this.footerRef) {
            this.footerRef.setAttribute("contenteditable", false);
            this.footerRef.className += " disabled";
        }
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
        var headerTitle = document.createElement("div");
        headerTitle.className = "header-title";
        headerTitle.append('Header');
        /** @type {?} */
        var footerTitle = document.createElement("div");
        footerTitle.className = "footer-title";
        footerTitle.append('Footer');
        /** @type {?} */
        var closestHeader = event.target.closest('.header');
        if (closestHeader && closestHeader.classList.contains('disabled')) {
            closestHeader.classList.remove('disabled');
            closestHeader.setAttribute("contenteditable", true);
            closestHeader.after(headerTitle);
        }
        /** @type {?} */
        var closestFooter = event.target.closest('.footer');
        if (closestFooter && closestFooter.classList.contains('disabled')) {
            closestFooter.classList.remove('disabled');
            closestFooter.setAttribute("contenteditable", true);
            closestFooter.before(footerTitle);
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
        /** @type {?} */
        var closestHeader = event.target.closest('.header');
        if (!closestHeader) {
            this.headerRef.setAttribute("contenteditable", false);
            if (!this.headerRef.classList.contains('disabled')) {
                this.headerRef.className += " disabled";
            }
            /** @type {?} */
            var section = this.el.nativeElement.querySelectorAll('.section')[0];
            /** @type {?} */
            var headerTitle = this.el.nativeElement.querySelectorAll('.header-title')[0];
            if (section && headerTitle) {
                section.removeChild(headerTitle);
            }
        }
        /** @type {?} */
        var closestFooter = event.target.closest('.footer');
        if (!closestFooter) {
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
    /** @type {?} */
    EditHeaderFooterDirective.prototype.headerRef;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGhlYWRlcmZvb3Rlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZWRpdGhlYWRlcmZvb3Rlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUF5QyxVQUFVLEVBQWEsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25JLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQ7SUFTRSxtQ0FBb0IsWUFBeUIsRUFBVSxjQUE2QixFQUFFLEVBQWM7UUFBaEYsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUNsRixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCxtREFBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxXQUFXLENBQUM7U0FDekM7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxD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LElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQ2xEO2dCQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLFdBQVcsQ0FBQzthQUN6Qzs7Z0JBRUssT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Z0JBQy9ELFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUUsSUFBSSxPQUFPLElBQUksV0FBVyxFQUFFO2dCQUMxQixPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0Y7SUFDSCxDQUFDOztnQkEvRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7aUJBQ2pDOzs7O2dCQU5PLFdBQVc7Z0JBRVYsYUFBYTtnQkFIbUQsVUFBVTs7O2dDQXlDaEYsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs2QkE0Qm5DLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBZ0NuQyxnQ0FBQztDQUFBLEFBaEdELElBZ0dDO1NBN0ZZLHlCQUF5Qjs7O0lBRXBDLHVDQUFvQjs7SUFDcEIsOENBQWU7O0lBQ2YsOENBQWU7Ozs7O0lBRUgsaURBQWlDOzs7OztJQUFFLG1EQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIEhvc3RMaXN0ZW5lcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xyXG5pbXBvcnQge0ZpbGVVdGlsfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gJy4vd2luZG93LnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZ2RFZGl0SGVhZGVyRm9vdGVyXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRIZWFkZXJGb290ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgZWw6IEVsZW1lbnRSZWY8YW55PjtcclxuICBmb290ZXJSZWY6IGFueTtcclxuICBoZWFkZXJSZWY6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLCBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLCBlbDogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5lbCA9IGVsO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5oZWFkZXJSZWYgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcicpWzBdO1xyXG4gICAgaWYgKHRoaXMuaGVhZGVyUmVmKSB7XHJcbiAgICAgIHRoaXMuaGVhZGVyUmVmLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuaGVhZGVyUmVmLmNsYXNzTmFtZSArPSBcIiBkaXNhYmxlZFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZm9vdGVyUmVmID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb290ZXInKVswXTtcclxuICAgIGlmICh0aGlzLmZvb3RlclJlZikge1xyXG4gICAgICB0aGlzLmZvb3RlclJlZi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmZvb3RlclJlZi5jbGFzc05hbWUgKz0gXCIgZGlzYWJsZWRcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RibGNsaWNrJywgWyckZXZlbnQnXSlcclxuICBkYmxjbGlja0V2ZW50KGV2ZW50KSB7XHJcbiAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBoZWFkZXJUaXRsZS5jbGFzc05hbWUgPSBcImhlYWRlci10aXRsZVwiO1xyXG4gICAgaGVhZGVyVGl0bGUuYXBwZW5kKCdIZWFkZXInKTtcclxuXHJcbiAgICBjb25zdCBmb290ZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmb290ZXJUaXRsZS5jbGFzc05hbWUgPSBcImZvb3Rlci10aXRsZVwiO1xyXG4gICAgZm9vdGVyVGl0bGUuYXBwZW5kKCdGb290ZXInKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZXN0SGVhZGVyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5oZWFkZXInKTtcclxuICAgIGlmIChjbG9zZXN0SGVhZGVyICYmIGNsb3Nlc3RIZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XHJcbiAgICAgIGNsb3Nlc3RIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgY2xvc2VzdEhlYWRlci5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XHJcbiAgICAgIGNsb3Nlc3RIZWFkZXIuYWZ0ZXIoaGVhZGVyVGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3Nlc3RGb290ZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmZvb3RlcicpO1xyXG4gICAgaWYgKGNsb3Nlc3RGb290ZXIgJiYgY2xvc2VzdEZvb3Rlci5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcclxuICAgICAgY2xvc2VzdEZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgICBjbG9zZXN0Rm9vdGVyLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcclxuICAgICAgY2xvc2VzdEZvb3Rlci5iZWZvcmUoZm9vdGVyVGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICBjbGlja0V2ZW50KGV2ZW50KSB7XHJcbiAgICBjb25zdCBjbG9zZXN0SGVhZGVyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5oZWFkZXInKTtcclxuICAgIGlmICghY2xvc2VzdEhlYWRlcikge1xyXG4gICAgICB0aGlzLmhlYWRlclJlZi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xyXG4gICAgICBpZiAoIXRoaXMuaGVhZGVyUmVmLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSlcclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuaGVhZGVyUmVmLmNsYXNzTmFtZSArPSBcIiBkaXNhYmxlZFwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzZWN0aW9uID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWN0aW9uJylbMF07XHJcbiAgICAgIGNvbnN0IGhlYWRlclRpdGxlID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXItdGl0bGUnKVswXTtcclxuICAgICAgaWYgKHNlY3Rpb24gJiYgaGVhZGVyVGl0bGUpIHtcclxuICAgICAgICBzZWN0aW9uLnJlbW92ZUNoaWxkKGhlYWRlclRpdGxlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3Nlc3RGb290ZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmZvb3RlcicpO1xyXG4gICAgaWYgKCFjbG9zZXN0Rm9vdGVyKSB7XHJcbiAgICAgIHRoaXMuZm9vdGVyUmVmLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5mb290ZXJSZWYuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKVxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5mb290ZXJSZWYuY2xhc3NOYW1lICs9IFwiIGRpc2FibGVkXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHNlY3Rpb24gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24nKVswXTtcclxuICAgICAgY29uc3QgZm9vdGVyVGl0bGUgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvb3Rlci10aXRsZScpWzBdO1xyXG4gICAgICBpZiAoc2VjdGlvbiAmJiBmb290ZXJUaXRsZSkge1xyXG4gICAgICAgIHNlY3Rpb24ucmVtb3ZlQ2hpbGQoZm9vdGVyVGl0bGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==