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
        this.footerRef = this.el.nativeElement.querySelectorAll('.footer')[0];
        this.footerRef.setAttribute("contenteditable", false);
        this.footerRef.className += " disabled";
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
        const footerTitle = document.createElement("div");
        footerTitle.className = "footer-title";
        footerTitle.append('Footer');
        /** @type {?} */
        const footer = event.target.closest('.footer');
        if (footer && footer.classList.contains('disabled')) {
            console.log('dblclick in footer fired');
            footer.classList.remove('disabled');
            footer.setAttribute("contenteditable", true);
            footer.before(footerTitle);
        }
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickEvent(event) {
        console.log('click on el fired');
        /** @type {?} */
        const footer = event.target.closest('.footer');
        if (!footer) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGhlYWRlcmZvb3Rlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZWRpdGhlYWRlcmZvb3Rlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUF5QyxVQUFVLEVBQWEsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25JLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFLakQsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7O0lBS3BDLFlBQW9CLFlBQXlCLEVBQVUsY0FBNkIsRUFBRSxFQUFjO1FBQWhGLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDbEYsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLElBQUksV0FBVyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxXQUFXO0lBQ1gsQ0FBQzs7OztJQUVELFdBQVc7SUFDWCxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7O0lBR0QsYUFBYSxDQUFDLEtBQUs7O2NBQ1gsV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ2pELFdBQVcsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQ3ZDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7O2NBRXZCLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDOUMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM1QjtRQUVELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFHRCxVQUFVLENBQUMsS0FBSztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7Y0FDM0IsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDbEQ7Z0JBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLElBQUksV0FBVyxDQUFDO2FBQ3pDOztrQkFFSyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDOztrQkFDL0QsV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RSxJQUFJLE9BQU8sSUFBSSxXQUFXLEVBQUU7Z0JBQzFCLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDbEM7U0FDRjtJQUNILENBQUM7OztZQTlERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjthQUNqQzs7OztZQU5PLFdBQVc7WUFFVixhQUFhO1lBSG1ELFVBQVU7Ozs0QkFnQ2hGLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBa0JuQyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBeENqQyx1Q0FBb0I7O0lBQ3BCLDhDQUFlOzs7OztJQUVILGlEQUFpQzs7Ozs7SUFBRSxtREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBIb3N0TGlzdGVuZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtGaWxlVXRpbH0gZnJvbSBcIi4vZmlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tICcuL3dpbmRvdy5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2dkRWRpdEhlYWRlckZvb3Rlcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0SGVhZGVyRm9vdGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIGVsOiBFbGVtZW50UmVmPGFueT47XHJcbiAgZm9vdGVyUmVmOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSwgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSwgZWw6IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMuZWwgPSBlbDtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9vdGVyUmVmID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb290ZXInKVswXTtcclxuICAgIHRoaXMuZm9vdGVyUmVmLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBmYWxzZSk7XHJcbiAgICB0aGlzLmZvb3RlclJlZi5jbGFzc05hbWUgKz0gXCIgZGlzYWJsZWRcIjtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RibGNsaWNrJywgWyckZXZlbnQnXSlcclxuICBkYmxjbGlja0V2ZW50KGV2ZW50KSB7XHJcbiAgICBjb25zdCBmb290ZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmb290ZXJUaXRsZS5jbGFzc05hbWUgPSBcImZvb3Rlci10aXRsZVwiO1xyXG4gICAgZm9vdGVyVGl0bGUuYXBwZW5kKCdGb290ZXInKTtcclxuXHJcbiAgICBjb25zdCBmb290ZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmZvb3RlcicpO1xyXG4gICAgaWYgKGZvb3RlciAmJiBmb290ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdkYmxjbGljayBpbiBmb290ZXIgZmlyZWQnKTtcclxuICAgICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgIGZvb3Rlci5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XHJcbiAgICAgIGZvb3Rlci5iZWZvcmUoZm9vdGVyVGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICBjbGlja0V2ZW50KGV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2sgb24gZWwgZmlyZWQnKTtcclxuICAgIGNvbnN0IGZvb3RlciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZm9vdGVyJyk7XHJcbiAgICBpZiAoIWZvb3Rlcikge1xyXG4gICAgICB0aGlzLmZvb3RlclJlZi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xyXG4gICAgICBpZiAoIXRoaXMuZm9vdGVyUmVmLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSlcclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuZm9vdGVyUmVmLmNsYXNzTmFtZSArPSBcIiBkaXNhYmxlZFwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzZWN0aW9uID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWN0aW9uJylbMF07XHJcbiAgICAgIGNvbnN0IGZvb3RlclRpdGxlID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb290ZXItdGl0bGUnKVswXTtcclxuICAgICAgaWYgKHNlY3Rpb24gJiYgZm9vdGVyVGl0bGUpIHtcclxuICAgICAgICBzZWN0aW9uLnJlbW92ZUNoaWxkKGZvb3RlclRpdGxlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=