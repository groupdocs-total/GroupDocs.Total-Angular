/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from '../annotation-models';
import * as jquery from 'jquery';
/** @type {?} */
const $ = jquery;
export class CreateCommentComponent {
    constructor() {
        this.addComment = new EventEmitter();
        this.removeComment = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const element = $("#name");
            if (element) {
                element.focus();
            }
        }), 100);
    }
    /**
     * @return {?}
     */
    onAddComment() {
        this.addComment.emit(this.comment);
    }
    /**
     * @return {?}
     */
    clearComment() {
        this.removeComment.emit(true);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    saveText(value) {
        this.comment.text = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    saveName(value) {
        this.comment.userName = value;
    }
}
CreateCommentComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-create-comment',
                template: "<div class=\"gd-new-comment\">\r\n  <input type=\"text\" class=\"gd-name\" id=\"name\" [value]=\"comment.userName\" #name autofocus (keyup)=\"saveName(name.value)\" placeholder=\"Name\"/>\r\n  <textarea class=\"gd-text\" [value]=\"comment.text\" #text (keyup)=\"saveText(text.value)\" placeholder=\"Message\"></textarea>\r\n  <div class=\"gd-buttons\">\r\n    <gd-button (click)=\"clearComment()\" [iconOnly]=\"false\" class=\"gd-cancel-comment\">\r\n      Cancel\r\n    </gd-button>\r\n    <gd-button (click)=\"onAddComment()\" [icon]=\"'share'\" class=\"gd-add-comment\" [iconOnly]=\"false\">\r\n      Reply\r\n    </gd-button>\r\n  </div>\r\n</div>\r\n",
                styles: [".gd-new-comment{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;padding-top:20px;width:294px;font-size:14px}.gd-new-comment ::ng-deep .button{padding:0!important;width:96px}.gd-new-comment ::ng-deep .button .text{font-size:12px!important}.gd-new-comment ::ng-deep .button fa-icon{font-size:14px}.gd-new-comment .gd-buttons{display:-webkit-box;display:flex;margin-top:20px;width:294px;-webkit-box-pack:end;justify-content:flex-end}.gd-new-comment .gd-buttons .gd-add-comment{background-color:#4b566c!important;margin-left:10px;border:1px solid #707070}.gd-new-comment .gd-buttons .gd-add-comment ::ng-deep .button{color:#fff!important;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:start;justify-content:flex-start}.gd-new-comment .gd-buttons .gd-add-comment ::ng-deep .button fa-icon{padding:0 11px}.gd-new-comment .gd-buttons .gd-cancel-comment{background-color:transparent;border:1px solid #707070}.gd-new-comment .gd-buttons .gd-cancel-comment ::ng-deep .button{color:#acacac!important}.gd-new-comment .gd-name{width:100%;height:37px;border:1px solid #6e6e6e;box-sizing:border-box}.gd-new-comment .gd-text{width:100%;height:100px;border:1px solid #6e6e6e;margin-top:20px;box-sizing:border-box}@media (max-width:1037px){.gd-new-comment{width:100%;padding-bottom:20px}.gd-new-comment .gd-buttons{width:100%}}"]
            }] }
];
/** @nocollapse */
CreateCommentComponent.ctorParameters = () => [];
CreateCommentComponent.propDecorators = {
    comment: [{ type: Input }],
    addComment: [{ type: Output }],
    removeComment: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CreateCommentComponent.prototype.comment;
    /** @type {?} */
    CreateCommentComponent.prototype.addComment;
    /** @type {?} */
    CreateCommentComponent.prototype.removeComment;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNvbW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2Fubm90YXRpb24vIiwic291cmNlcyI6WyJsaWIvY3JlYXRlLWNvbW1lbnQvY3JlYXRlLWNvbW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQTtBQUM1QyxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7TUFFM0IsQ0FBQyxHQUFHLE1BQU07QUFPaEIsTUFBTSxPQUFPLHNCQUFzQjtJQU1qQztRQUhVLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3pDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUd0RCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLFVBQVU7OztRQUFDLEdBQUcsRUFBRTs7a0JBQ1IsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDMUIsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2pCO1FBQ0gsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDOzs7WUFyQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLDJwQkFBOEM7O2FBRS9DOzs7OztzQkFFRSxLQUFLO3lCQUVMLE1BQU07NEJBQ04sTUFBTTs7OztJQUhQLHlDQUEwQjs7SUFFMUIsNENBQW1EOztJQUNuRCwrQ0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbW1lbnR9IGZyb20gJy4uL2Fubm90YXRpb24tbW9kZWxzJ1xyXG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmNvbnN0ICQgPSBqcXVlcnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWNyZWF0ZS1jb21tZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY3JlYXRlLWNvbW1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NyZWF0ZS1jb21tZW50LmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENyZWF0ZUNvbW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGNvbW1lbnQ6IENvbW1lbnQ7XHJcblxyXG4gIEBPdXRwdXQoKSBhZGRDb21tZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxDb21tZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZW1vdmVDb21tZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSAkKFwiI25hbWVcIik7XHJcbiAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMDApO1xyXG4gIH1cclxuXHJcbiAgb25BZGRDb21tZW50KCkge1xyXG4gICAgdGhpcy5hZGRDb21tZW50LmVtaXQodGhpcy5jb21tZW50KTtcclxuICB9XHJcblxyXG4gIGNsZWFyQ29tbWVudCgpIHtcclxuICAgIHRoaXMucmVtb3ZlQ29tbWVudC5lbWl0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5jb21tZW50LnRleHQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHNhdmVOYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY29tbWVudC51c2VyTmFtZSA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG4iXX0=