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
                    template: "<div class=\"gd-new-comment\">\r\n  <input type=\"text\" class=\"gd-name\" id=\"name\" [value]=\"comment.userName\" #name autofocus (keyup)=\"saveName(name.value)\" placeholder=\"Name\"/>\r\n  <textarea class=\"gd-text\" [value]=\"comment.text\" #text (keyup)=\"saveText(text.value)\" placeholder=\"Message\"></textarea>\r\n  <div class=\"gd-buttons\">\r\n    <gd-button (click)=\"clearComment()\" [iconOnly]=\"false\" class=\"gd-cancel-comment\">\r\n      Cancel\r\n    </gd-button>\r\n    <gd-button (click)=\"onAddComment()\" [icon]=\"'share'\" class=\"gd-add-comment\" [iconOnly]=\"false\">\r\n      Reply\r\n    </gd-button>\r\n  </div>\r\n</div>\r\n",
                    styles: [".gd-new-comment{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;padding-top:20px;width:294px;font-size:14px}.gd-new-comment ::ng-deep .button{padding:0!important;width:96px}.gd-new-comment ::ng-deep .button .text{font-size:12px!important}.gd-new-comment ::ng-deep .button fa-icon{font-size:14px}.gd-new-comment .gd-buttons{display:-webkit-box;display:flex;margin-top:20px;width:294px;-webkit-box-pack:end;justify-content:flex-end}.gd-new-comment .gd-buttons .gd-add-comment{background-color:#4b566c!important;margin-left:10px;border:1px solid #707070}.gd-new-comment .gd-buttons .gd-add-comment ::ng-deep .button{color:#fff!important;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:start;justify-content:flex-start}.gd-new-comment .gd-buttons .gd-add-comment ::ng-deep .button fa-icon{padding:0 11px}.gd-new-comment .gd-buttons .gd-cancel-comment{background-color:transparent;border:1px solid #707070}.gd-new-comment .gd-buttons .gd-cancel-comment ::ng-deep .button{color:#acacac!important}.gd-new-comment .gd-name{width:100%;height:37px;border:1px solid #6e6e6e;box-sizing:border-box}.gd-new-comment .gd-text{width:100%;height:100px;border:1px solid #6e6e6e;margin-top:20px;box-sizing:border-box}@media (max-width:1037px){.gd-new-comment{width:100%;padding-bottom:20px}.gd-new-comment .gd-buttons{width:100%}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNvbW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2Fubm90YXRpb24vIiwic291cmNlcyI6WyJsaWIvY3JlYXRlLWNvbW1lbnQvY3JlYXRlLWNvbW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQTtBQUM1QyxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7SUFFM0IsQ0FBQyxHQUFHLE1BQU07QUFFaEI7SUFXRTtRQUhVLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3pDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUd0RCxDQUFDOzs7O0lBRUQseUNBQVE7OztJQUFSO1FBQ0UsVUFBVTs7O1FBQUM7O2dCQUNILE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzFCLElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNqQjtRQUNILENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7Ozs7SUFFRCw2Q0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELDZDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQseUNBQVE7Ozs7SUFBUixVQUFTLEtBQWE7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQseUNBQVE7Ozs7SUFBUixVQUFTLEtBQWE7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7O2dCQXJDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsMnBCQUE4Qzs7aUJBRS9DOzs7OzswQkFFRSxLQUFLOzZCQUVMLE1BQU07Z0NBQ04sTUFBTTs7SUE2QlQsNkJBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQWpDWSxzQkFBc0I7OztJQUNqQyx5Q0FBMEI7O0lBRTFCLDRDQUFtRDs7SUFDbkQsK0NBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb21tZW50fSBmcm9tICcuLi9hbm5vdGF0aW9uLW1vZGVscydcclxuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XHJcblxyXG5jb25zdCAkID0ganF1ZXJ5O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1jcmVhdGUtY29tbWVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NyZWF0ZS1jb21tZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jcmVhdGUtY29tbWVudC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVDb21tZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBjb21tZW50OiBDb21tZW50O1xyXG5cclxuICBAT3V0cHV0KCkgYWRkQ29tbWVudCA9IG5ldyBFdmVudEVtaXR0ZXI8Q29tbWVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVtb3ZlQ29tbWVudCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gJChcIiNuYW1lXCIpO1xyXG4gICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG4gIG9uQWRkQ29tbWVudCgpIHtcclxuICAgIHRoaXMuYWRkQ29tbWVudC5lbWl0KHRoaXMuY29tbWVudCk7XHJcbiAgfVxyXG5cclxuICBjbGVhckNvbW1lbnQoKSB7XHJcbiAgICB0aGlzLnJlbW92ZUNvbW1lbnQuZW1pdCh0cnVlKTtcclxuICB9XHJcblxyXG4gIHNhdmVUZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY29tbWVudC50ZXh0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzYXZlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNvbW1lbnQudXNlck5hbWUgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuIl19