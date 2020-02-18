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
                template: "<div class=\"gd-new-comment\">\n  <input type=\"text\" class=\"gd-name\" id=\"name\" [value]=\"comment.userName\" #name autofocus (keyup)=\"saveName(name.value)\" placeholder=\"Name\"/>\n  <textarea class=\"gd-text\" [value]=\"comment.text\" #text (keyup)=\"saveText(text.value)\" placeholder=\"Message\"></textarea>\n  <div class=\"gd-buttons\">\n    <gd-button (click)=\"clearComment()\" [iconOnly]=\"false\" class=\"gd-cancel-comment\">\n      Cancel\n    </gd-button>\n    <gd-button (click)=\"onAddComment()\" [icon]=\"'share'\" class=\"gd-add-comment\" [iconOnly]=\"false\">\n      Reply\n    </gd-button>\n  </div>\n</div>\n",
                styles: [".gd-new-comment{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;padding-top:20px;width:294px;font-size:14px}.gd-new-comment .gd-buttons{display:-webkit-box;display:flex;margin-top:20px;width:294px;-webkit-box-pack:end;justify-content:flex-end}.gd-new-comment .gd-buttons .gd-add-comment{background-color:#4b566c!important;margin-left:10px;border:1px solid #707070}.gd-new-comment .gd-buttons .gd-add-comment ::ng-deep .button{color:#fff!important}.gd-new-comment .gd-buttons .gd-cancel-comment{background-color:transparent;border:1px solid #707070}.gd-new-comment .gd-buttons .gd-cancel-comment ::ng-deep .button{color:#acacac!important}.gd-new-comment .gd-name{width:100%;height:37px;border:1px solid #6e6e6e}.gd-new-comment .gd-text{width:100%;height:100px;border:1px solid #6e6e6e;margin-top:20px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNvbW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2Fubm90YXRpb24vIiwic291cmNlcyI6WyJsaWIvY3JlYXRlLWNvbW1lbnQvY3JlYXRlLWNvbW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQTtBQUM1QyxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7TUFFM0IsQ0FBQyxHQUFHLE1BQU07QUFPaEIsTUFBTSxPQUFPLHNCQUFzQjtJQU1qQztRQUhVLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3pDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUd0RCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLFVBQVU7OztRQUFDLEdBQUcsRUFBRTs7a0JBQ1IsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDMUIsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2pCO1FBQ0gsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDOzs7WUFyQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLG1vQkFBOEM7O2FBRS9DOzs7OztzQkFFRSxLQUFLO3lCQUVMLE1BQU07NEJBQ04sTUFBTTs7OztJQUhQLHlDQUEwQjs7SUFFMUIsNENBQW1EOztJQUNuRCwrQ0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tZW50fSBmcm9tICcuLi9hbm5vdGF0aW9uLW1vZGVscydcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1jcmVhdGUtY29tbWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jcmVhdGUtY29tbWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NyZWF0ZS1jb21tZW50LmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ29tbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbW1lbnQ6IENvbW1lbnQ7XG5cbiAgQE91dHB1dCgpIGFkZENvbW1lbnQgPSBuZXcgRXZlbnRFbWl0dGVyPENvbW1lbnQ+KCk7XG4gIEBPdXRwdXQoKSByZW1vdmVDb21tZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gJChcIiNuYW1lXCIpO1xuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gIH1cblxuICBvbkFkZENvbW1lbnQoKSB7XG4gICAgdGhpcy5hZGRDb21tZW50LmVtaXQodGhpcy5jb21tZW50KTtcbiAgfVxuXG4gIGNsZWFyQ29tbWVudCgpIHtcbiAgICB0aGlzLnJlbW92ZUNvbW1lbnQuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIHNhdmVUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbW1lbnQudGV4dCA9IHZhbHVlO1xuICB9XG5cbiAgc2F2ZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuY29tbWVudC51c2VyTmFtZSA9IHZhbHVlO1xuICB9XG59XG4iXX0=