/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener } from '@angular/core';
import { ZoomService } from "./zoom.service";
import { WindowService } from './window.service';
export class EditHeaderFooterDirective {
    /**
     * @param {?} _zoomService
     * @param {?} _windowService
     * @param {?} el
     */
    constructor(_zoomService, _windowService, el) {
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dblclickEvent(event) {
        /** @type {?} */
        const headerTitle = document.createElement("div");
        headerTitle.className = "header-title";
        headerTitle.append('Header');
        /** @type {?} */
        const footerTitle = document.createElement("div");
        footerTitle.className = "footer-title";
        footerTitle.append('Footer');
        /** @type {?} */
        const closestHeader = event.target.closest('.header');
        if (closestHeader && closestHeader.classList.contains('disabled')) {
            closestHeader.classList.remove('disabled');
            closestHeader.setAttribute("contenteditable", true);
            closestHeader.after(headerTitle);
        }
        /** @type {?} */
        const closestFooter = event.target.closest('.footer');
        if (closestFooter && closestFooter.classList.contains('disabled')) {
            closestFooter.classList.remove('disabled');
            closestFooter.setAttribute("contenteditable", true);
            closestFooter.before(footerTitle);
        }
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickEvent(event) {
        /** @type {?} */
        const closestHeader = event.target.closest('.header');
        if (!closestHeader) {
            this.headerRef.setAttribute("contenteditable", false);
            if (!this.headerRef.classList.contains('disabled')) {
                this.headerRef.className += " disabled";
            }
            /** @type {?} */
            const section = this.el.nativeElement.querySelectorAll('.section')[0];
            /** @type {?} */
            const headerTitle = this.el.nativeElement.querySelectorAll('.header-title')[0];
            if (section && headerTitle) {
                section.removeChild(headerTitle);
            }
        }
        /** @type {?} */
        const closestFooter = event.target.closest('.footer');
        if (!closestFooter) {
            this.footerRef.setAttribute("contenteditable", false);
            if (!this.footerRef.classList.contains('disabled')) {
                this.footerRef.className += " disabled";
            }
            /** @type {?} */
            const section = this.el.nativeElement.querySelectorAll('.section')[0];
            /** @type {?} */
            const footerTitle = this.el.nativeElement.querySelectorAll('.footer-title')[0];
            if (section && footerTitle) {
                section.removeChild(footerTitle);
            }
        }
    }
}
EditHeaderFooterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gdEditHeaderFooter]'
            },] }
];
/** @nocollapse */
EditHeaderFooterDirective.ctorParameters = () => [
    { type: ZoomService },
    { type: WindowService },
    { type: ElementRef }
];
EditHeaderFooterDirective.propDecorators = {
    dblclickEvent: [{ type: HostListener, args: ['dblclick', ['$event'],] }],
    clickEvent: [{ type: HostListener, args: ['click', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGhlYWRlcmZvb3Rlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZWRpdGhlYWRlcmZvb3Rlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUF5QyxVQUFVLEVBQWEsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25JLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFLakQsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7O0lBTXBDLFlBQW9CLFlBQXlCLEVBQVUsY0FBNkIsRUFBRSxFQUFjO1FBQWhGLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDbEYsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLFdBQVcsQ0FBQztTQUN6QztRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElB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QUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDbEQ7Z0JBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLElBQUksV0FBVyxDQUFDO2FBQ3pDOztrQkFFSyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDOztrQkFDL0QsV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RSxJQUFJLE9BQU8sSUFBSSxXQUFXLEVBQUU7Z0JBQzFCLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDbEM7U0FDRjtJQUNILENBQUM7OztZQS9GRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjthQUNqQzs7OztZQU5PLFdBQVc7WUFFVixhQUFhO1lBSG1ELFVBQVU7Ozs0QkF5Q2hGLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBNEJuQyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBM0RqQyx1Q0FBb0I7O0lBQ3BCLDhDQUFlOztJQUNmLDhDQUFlOzs7OztJQUVILGlEQUFpQzs7Ozs7SUFBRSxtREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBIb3N0TGlzdGVuZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtGaWxlVXRpbH0gZnJvbSBcIi4vZmlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tICcuL3dpbmRvdy5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2dkRWRpdEhlYWRlckZvb3Rlcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0SGVhZGVyRm9vdGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIGVsOiBFbGVtZW50UmVmPGFueT47XHJcbiAgZm9vdGVyUmVmOiBhbnk7XHJcbiAgaGVhZGVyUmVmOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSwgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSwgZWw6IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMuZWwgPSBlbDtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaGVhZGVyUmVmID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXInKVswXTtcclxuICAgIGlmICh0aGlzLmhlYWRlclJlZikge1xyXG4gICAgICB0aGlzLmhlYWRlclJlZi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmhlYWRlclJlZi5jbGFzc05hbWUgKz0gXCIgZGlzYWJsZWRcIjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZvb3RlclJlZiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9vdGVyJylbMF07XHJcbiAgICBpZiAodGhpcy5mb290ZXJSZWYpIHtcclxuICAgICAgdGhpcy5mb290ZXJSZWYuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcclxuICAgICAgdGhpcy5mb290ZXJSZWYuY2xhc3NOYW1lICs9IFwiIGRpc2FibGVkXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkYmxjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgZGJsY2xpY2tFdmVudChldmVudCkge1xyXG4gICAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaGVhZGVyVGl0bGUuY2xhc3NOYW1lID0gXCJoZWFkZXItdGl0bGVcIjtcclxuICAgIGhlYWRlclRpdGxlLmFwcGVuZCgnSGVhZGVyJyk7XHJcblxyXG4gICAgY29uc3QgZm9vdGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZm9vdGVyVGl0bGUuY2xhc3NOYW1lID0gXCJmb290ZXItdGl0bGVcIjtcclxuICAgIGZvb3RlclRpdGxlLmFwcGVuZCgnRm9vdGVyJyk7XHJcblxyXG4gICAgY29uc3QgY2xvc2VzdEhlYWRlciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuaGVhZGVyJyk7XHJcbiAgICBpZiAoY2xvc2VzdEhlYWRlciAmJiBjbG9zZXN0SGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xyXG4gICAgICBjbG9zZXN0SGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgIGNsb3Nlc3RIZWFkZXIuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xyXG4gICAgICBjbG9zZXN0SGVhZGVyLmFmdGVyKGhlYWRlclRpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZXN0Rm9vdGVyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5mb290ZXInKTtcclxuICAgIGlmIChjbG9zZXN0Rm9vdGVyICYmIGNsb3Nlc3RGb290ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XHJcbiAgICAgIGNsb3Nlc3RGb290ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgY2xvc2VzdEZvb3Rlci5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XHJcbiAgICAgIGNsb3Nlc3RGb290ZXIuYmVmb3JlKGZvb3RlclRpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgY2xpY2tFdmVudChldmVudCkge1xyXG4gICAgY29uc3QgY2xvc2VzdEhlYWRlciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuaGVhZGVyJyk7XHJcbiAgICBpZiAoIWNsb3Nlc3RIZWFkZXIpIHtcclxuICAgICAgdGhpcy5oZWFkZXJSZWYuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcclxuICAgICAgaWYgKCF0aGlzLmhlYWRlclJlZi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLmhlYWRlclJlZi5jbGFzc05hbWUgKz0gXCIgZGlzYWJsZWRcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc2VjdGlvbiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbicpWzBdO1xyXG4gICAgICBjb25zdCBoZWFkZXJUaXRsZSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyLXRpdGxlJylbMF07XHJcbiAgICAgIGlmIChzZWN0aW9uICYmIGhlYWRlclRpdGxlKSB7XHJcbiAgICAgICAgc2VjdGlvbi5yZW1vdmVDaGlsZChoZWFkZXJUaXRsZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZXN0Rm9vdGVyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5mb290ZXInKTtcclxuICAgIGlmICghY2xvc2VzdEZvb3Rlcikge1xyXG4gICAgICB0aGlzLmZvb3RlclJlZi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xyXG4gICAgICBpZiAoIXRoaXMuZm9vdGVyUmVmLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSlcclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuZm9vdGVyUmVmLmNsYXNzTmFtZSArPSBcIiBkaXNhYmxlZFwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzZWN0aW9uID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWN0aW9uJylbMF07XHJcbiAgICAgIGNvbnN0IGZvb3RlclRpdGxlID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb290ZXItdGl0bGUnKVswXTtcclxuICAgICAgaWYgKHNlY3Rpb24gJiYgZm9vdGVyVGl0bGUpIHtcclxuICAgICAgICBzZWN0aW9uLnJlbW92ZUNoaWxkKGZvb3RlclRpdGxlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=