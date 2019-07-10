import * as tslib_1 from "tslib";
import { Directive, HostListener, Input } from '@angular/core';
import { SelectionService } from './selection.service';
import { EditHtmlService } from "./edit-html.service";
let EditorDirective = class EditorDirective {
    constructor(_selectionService, _htmlService) {
        this._selectionService = _selectionService;
        this._htmlService = _htmlService;
        this.isIE = false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    }
    onInput(event) {
        this.text = event.target;
        if (this.isIE) {
            if (this.text.innerHTML) {
                const html = this.text.innerHTML.toString();
                this._htmlService.observer.next(html);
            }
        }
    }
    onMouseleave(event) {
        this._selectionService.captureSelection();
        // this code is required to fix IE11 issue - it doesn't trigger blur event, since that we need to save updated HTML here
        if (this.isIE) {
            this._htmlService.observer.next(event.target.innerHTML.toString());
        }
    }
    onBlur(event) {
        event.preventDefault();
        this._selectionService.restoreSelection();
        if (this.text.innerHTML) {
            const html = this.text.innerHTML.toString();
            this._htmlService.observer.next(html);
        }
        else {
            this._htmlService.observer.next(event.target.innerHTML.toString());
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], EditorDirective.prototype, "text", void 0);
tslib_1.__decorate([
    HostListener('keyup', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], EditorDirective.prototype, "onInput", null);
tslib_1.__decorate([
    HostListener('mouseleave', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], EditorDirective.prototype, "onMouseleave", null);
tslib_1.__decorate([
    HostListener('blur', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], EditorDirective.prototype, "onBlur", null);
EditorDirective = tslib_1.__decorate([
    Directive({
        selector: '[gdEditor]'
    }),
    tslib_1.__metadata("design:paramtypes", [SelectionService, EditHtmlService])
], EditorDirective);
export { EditorDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9lZGl0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBS3BELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFLMUIsWUFBb0IsaUJBQW1DLEVBQVUsWUFBNkI7UUFBMUUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQUZ0RixTQUFJLEdBQXdCLEtBQUssSUFBSSxDQUFDLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUdwRyxDQUFDO0lBR00sT0FBTyxDQUFDLEtBQUs7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3pCLElBQUcsSUFBSSxDQUFDLElBQUksRUFBQztZQUNYLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3ZCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkM7U0FDRjtJQUNILENBQUM7SUFHTSxZQUFZLENBQUMsS0FBSztRQUN2QixJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMxQyx3SEFBd0g7UUFDeEgsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFDO1lBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDO0lBR00sTUFBTSxDQUFDLEtBQUs7UUFDakIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNwRTtJQUNILENBQUM7Q0FDRixDQUFBO0FBdENVO0lBQVIsS0FBSyxFQUFFOzs2Q0FBVztBQVFuQjtJQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs4Q0FTakM7QUFHRDtJQURDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OzttREFPdEM7QUFHRDtJQURDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs2Q0FVaEM7QUF0Q1UsZUFBZTtJQUgzQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtLQUN2QixDQUFDOzZDQU11QyxnQkFBZ0IsRUFBd0IsZUFBZTtHQUxuRixlQUFlLENBdUMzQjtTQXZDWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTZWxlY3Rpb25TZXJ2aWNlfSBmcm9tICcuL3NlbGVjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7RWRpdEh0bWxTZXJ2aWNlfSBmcm9tIFwiLi9lZGl0LWh0bWwuc2VydmljZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2RFZGl0b3JdJ1xufSlcbmV4cG9ydCBjbGFzcyBFZGl0b3JEaXJlY3RpdmUge1xuICBASW5wdXQoKSB0ZXh0OiBhbnk7XG5cbiAgcHJpdmF0ZSBpc0lFOiBib29sZWFuID0gLypAY2Nfb24hQCovZmFsc2UgfHwgISEvKE1TSUV8VHJpZGVudFxcL3xFZGdlXFwvKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VsZWN0aW9uU2VydmljZTogU2VsZWN0aW9uU2VydmljZSwgcHJpdmF0ZSBfaHRtbFNlcnZpY2U6IEVkaXRIdG1sU2VydmljZSkge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25JbnB1dChldmVudCkge1xuICAgIHRoaXMudGV4dCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZih0aGlzLmlzSUUpe1xuICAgICAgaWYgKHRoaXMudGV4dC5pbm5lckhUTUwpIHtcbiAgICAgICAgY29uc3QgaHRtbCA9IHRoaXMudGV4dC5pbm5lckhUTUwudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5faHRtbFNlcnZpY2Uub2JzZXJ2ZXIubmV4dChodG1sKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uTW91c2VsZWF2ZShldmVudCkge1xuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpO1xuICAgIC8vIHRoaXMgY29kZSBpcyByZXF1aXJlZCB0byBmaXggSUUxMSBpc3N1ZSAtIGl0IGRvZXNuJ3QgdHJpZ2dlciBibHVyIGV2ZW50LCBzaW5jZSB0aGF0IHdlIG5lZWQgdG8gc2F2ZSB1cGRhdGVkIEhUTUwgaGVyZVxuICAgIGlmKHRoaXMuaXNJRSl7XG4gICAgICB0aGlzLl9odG1sU2VydmljZS5vYnNlcnZlci5uZXh0KGV2ZW50LnRhcmdldC5pbm5lckhUTUwudG9TdHJpbmcoKSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkJsdXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xuICAgIGlmICh0aGlzLnRleHQuaW5uZXJIVE1MKSB7XG4gICAgICBjb25zdCBodG1sID0gdGhpcy50ZXh0LmlubmVySFRNTC50b1N0cmluZygpO1xuICAgICAgdGhpcy5faHRtbFNlcnZpY2Uub2JzZXJ2ZXIubmV4dChodG1sKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faHRtbFNlcnZpY2Uub2JzZXJ2ZXIubmV4dChldmVudC50YXJnZXQuaW5uZXJIVE1MLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgfVxufVxuIl19