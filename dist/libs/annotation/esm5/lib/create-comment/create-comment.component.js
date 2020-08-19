/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from '../annotation-models';
import * as jquery from 'jquery';
/** @type {?} */
var $ = jquery;
var CreateCommentComponent = /** @class */ (function () {
    function CreateCommentComponent() {
        this.addComment = new EventEmitter();
        this.removeComment = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CreateCommentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var element = $("#name");
            if (element) {
                element.focus();
            }
        }), 100);
    };
    /**
     * @return {?}
     */
    CreateCommentComponent.prototype.onAddComment = /**
     * @return {?}
     */
    function () {
        this.addComment.emit(this.comment);
    };
    /**
     * @return {?}
     */
    CreateCommentComponent.prototype.clearComment = /**
     * @return {?}
     */
    function () {
        this.removeComment.emit(true);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CreateCommentComponent.prototype.saveText = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.comment.text = value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CreateCommentComponent.prototype.saveName = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.comment.userName = value;
    };
    CreateCommentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-create-comment',
                    template: "<div class=\"gd-new-comment\">\n  <input type=\"text\" class=\"gd-name\" id=\"name\" [value]=\"comment.userName\" #name autofocus (keyup)=\"saveName(name.value)\" placeholder=\"Name\"/>\n  <textarea class=\"gd-text\" [value]=\"comment.text\" #text (keyup)=\"saveText(text.value)\" placeholder=\"Message\"></textarea>\n  <div class=\"gd-buttons\">\n    <gd-button (click)=\"clearComment()\" [iconOnly]=\"false\" class=\"gd-cancel-comment\">\n      Cancel\n    </gd-button>\n    <gd-button (click)=\"onAddComment()\" [icon]=\"'share'\" class=\"gd-add-comment\" [iconOnly]=\"false\">\n      Reply\n    </gd-button>\n  </div>\n</div>\n",
                    styles: [".gd-new-comment{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;padding-top:20px;width:294px;font-size:14px}.gd-new-comment ::ng-deep .button{padding:0!important;width:96px}.gd-new-comment ::ng-deep .button .text{font-size:12px!important}.gd-new-comment ::ng-deep .button fa-icon{font-size:14px}.gd-new-comment .gd-buttons{display:-webkit-box;display:flex;margin-top:20px;width:294px;-webkit-box-pack:end;justify-content:flex-end}.gd-new-comment .gd-buttons .gd-add-comment{background-color:#4b566c!important;margin-left:10px;border:1px solid #707070}.gd-new-comment .gd-buttons .gd-add-comment ::ng-deep .button{color:#fff!important;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:start;justify-content:flex-start}.gd-new-comment .gd-buttons .gd-add-comment ::ng-deep .button fa-icon{padding:0 11px}.gd-new-comment .gd-buttons .gd-cancel-comment{background-color:transparent;border:1px solid #707070}.gd-new-comment .gd-buttons .gd-cancel-comment ::ng-deep .button{color:#acacac!important}.gd-new-comment .gd-name{width:100%;height:37px;border:1px solid #6e6e6e}.gd-new-comment .gd-text{width:100%;height:100px;border:1px solid #6e6e6e;margin-top:20px}@media (max-width:1037px){.gd-new-comment,.gd-new-comment .gd-buttons{width:339px}}"]
                }] }
    ];
    /** @nocollapse */
    CreateCommentComponent.ctorParameters = function () { return []; };
    CreateCommentComponent.propDecorators = {
        comment: [{ type: Input }],
        addComment: [{ type: Output }],
        removeComment: [{ type: Output }]
    };
    return CreateCommentComponent;
}());
export { CreateCommentComponent };
if (false) {
    /** @type {?} */
    CreateCommentComponent.prototype.comment;
    /** @type {?} */
    CreateCommentComponent.prototype.addComment;
    /** @type {?} */
    CreateCommentComponent.prototype.removeComment;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNvbW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2Fubm90YXRpb24vIiwic291cmNlcyI6WyJsaWIvY3JlYXRlLWNvbW1lbnQvY3JlYXRlLWNvbW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQTtBQUM1QyxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7SUFFM0IsQ0FBQyxHQUFHLE1BQU07QUFFaEI7SUFXRTtRQUhVLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3pDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUd0RCxDQUFDOzs7O0lBRUQseUNBQVE7OztJQUFSO1FBQ0UsVUFBVTs7O1FBQUM7O2dCQUNILE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzFCLElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNqQjtRQUNILENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7Ozs7SUFFRCw2Q0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELDZDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQseUNBQVE7Ozs7SUFBUixVQUFTLEtBQWE7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQseUNBQVE7Ozs7SUFBUixVQUFTLEtBQWE7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7O2dCQXJDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsbW9CQUE4Qzs7aUJBRS9DOzs7OzswQkFFRSxLQUFLOzZCQUVMLE1BQU07Z0NBQ04sTUFBTTs7SUE2QlQsNkJBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQWpDWSxzQkFBc0I7OztJQUNqQyx5Q0FBMEI7O0lBRTFCLDRDQUFtRDs7SUFDbkQsK0NBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbWVudH0gZnJvbSAnLi4vYW5ub3RhdGlvbi1tb2RlbHMnXG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgJCA9IGpxdWVyeTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtY3JlYXRlLWNvbW1lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3JlYXRlLWNvbW1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jcmVhdGUtY29tbWVudC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZUNvbW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb21tZW50OiBDb21tZW50O1xuXG4gIEBPdXRwdXQoKSBhZGRDb21tZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxDb21tZW50PigpO1xuICBAT3V0cHV0KCkgcmVtb3ZlQ29tbWVudCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9ICQoXCIjbmFtZVwiKTtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICB9XG5cbiAgb25BZGRDb21tZW50KCkge1xuICAgIHRoaXMuYWRkQ29tbWVudC5lbWl0KHRoaXMuY29tbWVudCk7XG4gIH1cblxuICBjbGVhckNvbW1lbnQoKSB7XG4gICAgdGhpcy5yZW1vdmVDb21tZW50LmVtaXQodHJ1ZSk7XG4gIH1cblxuICBzYXZlVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb21tZW50LnRleHQgPSB2YWx1ZTtcbiAgfVxuXG4gIHNhdmVOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbW1lbnQudXNlck5hbWUgPSB2YWx1ZTtcbiAgfVxufVxuIl19