/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommentAnnotationService } from "../comment-annotation.service";
import { Comment } from '../annotation-models';
var CommentPanelComponent = /** @class */ (function () {
    function CommentPanelComponent(_commentAnnotationService) {
        this._commentAnnotationService = _commentAnnotationService;
        this.closeComments = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CommentPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CommentPanelComponent.prototype.closePanel = /**
     * @return {?}
     */
    function () {
        this.closeComments.emit(true);
    };
    /**
     * @return {?}
     */
    CommentPanelComponent.prototype.newComment = /**
     * @return {?}
     */
    function () {
        this.currentComment = new Comment(this.annotationId);
    };
    /**
     * @return {?}
     */
    CommentPanelComponent.prototype.clearComment = /**
     * @return {?}
     */
    function () {
        this.currentComment = null;
    };
    /**
     * @return {?}
     */
    CommentPanelComponent.prototype.addComment = /**
     * @return {?}
     */
    function () {
        this._commentAnnotationService.addComment(Comment.create(this.currentComment));
        this.currentComment = null;
    };
    CommentPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-comment-panel',
                    template: "<div class=\"gd-comments-panel\">\r\n  <div class=\"gd-comments-head\">\r\n    <fa-icon [icon]=\"['fas', 'plus']\" [class]=\"'ng-fa-icon icon'\" (click)=\"newComment()\"></fa-icon>\r\n    <span class=\"gd-comments-title\">Comments</span>\r\n    <fa-icon [icon]=\"['fas', 'times']\" [class]=\"'ng-fa-icon icon'\" (click)=\"closePanel()\"></fa-icon>\r\n  </div>\r\n  <div class=\"gd-comments-body\">\r\n    <div *ngIf=\"comments.length != 0\">\r\n      <div *ngFor=\"let comment of comments\">\r\n        <gd-comment [comment]=\"comment\"></gd-comment>\r\n      </div>\r\n    </div>\r\n    <gd-create-comment *ngIf=\"currentComment\" [comment]=\"currentComment\" (addComment)=\"addComment()\"\r\n                       (removeComment)=\"clearComment()\"></gd-create-comment>\r\n    <div class=\"gd-empty-comments-list\" *ngIf=\"comments.length == 0 && !currentComment\">\r\n      <fa-icon [icon]=\"['fas','comments']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n      <span class=\"gd-empty-text\">No comments yet. Be the first one, <br/>\r\n        </span>\r\n      <span class=\"gd-empty-text gd-empty-bold-text\">add comment.</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".gd-comments-panel{position:absolute;right:0;top:30px;overflow:auto!important;width:334px;display:-webkit-box;display:flex;height:100%;z-index:9;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.gd-comments-panel .gd-comments-head{height:60px;width:334px;display:-webkit-box;display:flex;background-color:#222e35;color:#959da5;-webkit-box-align:center;align-items:center}.gd-comments-panel .gd-comments-head>fa-icon:nth-child(1){font-size:24px}.gd-comments-panel .gd-comments-head .icon{-webkit-box-flex:0;flex:0 0 40px;margin-left:20px;cursor:pointer}.gd-comments-panel .gd-comments-head .gd-comments-title{-webkit-box-flex:1;flex:1;font-size:13px;font-weight:700}.gd-comments-panel .gd-comments-body{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;background-color:#f4f4f4;height:calc(100% - 90px)}.gd-comments-panel .gd-comments-body .gd-empty-comments-list{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;color:#959da5;width:250px;height:250px;margin-top:40px}.gd-comments-panel .gd-comments-body .gd-empty-comments-list .icon{font-size:65px;margin-bottom:40px}.gd-comments-panel .gd-comments-body .gd-empty-comments-list .gd-empty-text{font-size:15px}.gd-comments-panel .gd-comments-body .gd-empty-comments-list .gd-empty-bold-text{font-weight:700}@media (max-width:1037px){.gd-comments-panel{top:0;width:100%}.gd-comments-panel .gd-comments-body{height:100%!important;-webkit-box-align:initial;align-items:initial;width:calc(100% - 40px);padding:0 20px}.gd-comments-panel .gd-comments-head{width:100%;line-height:60px}}"]
                }] }
    ];
    /** @nocollapse */
    CommentPanelComponent.ctorParameters = function () { return [
        { type: CommentAnnotationService }
    ]; };
    CommentPanelComponent.propDecorators = {
        comments: [{ type: Input }],
        annotationId: [{ type: Input }],
        closeComments: [{ type: Output }]
    };
    return CommentPanelComponent;
}());
export { CommentPanelComponent };
if (false) {
    /** @type {?} */
    CommentPanelComponent.prototype.comments;
    /** @type {?} */
    CommentPanelComponent.prototype.annotationId;
    /** @type {?} */
    CommentPanelComponent.prototype.closeComments;
    /** @type {?} */
    CommentPanelComponent.prototype.currentComment;
    /**
     * @type {?}
     * @private
     */
    CommentPanelComponent.prototype._commentAnnotationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21tZW50LXBhbmVsL2NvbW1lbnQtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQTtBQUU1QztJQWFFLCtCQUFvQix5QkFBbUQ7UUFBbkQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQUo3RCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFLdEQsQ0FBQzs7OztJQUVELHdDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCwwQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsMENBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELDRDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCwwQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQzs7Z0JBbENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixrcUNBQTZDOztpQkFFOUM7Ozs7Z0JBUE8sd0JBQXdCOzs7MkJBUzdCLEtBQUs7K0JBQ0wsS0FBSztnQ0FFTCxNQUFNOztJQTBCVCw0QkFBQztDQUFBLEFBbkNELElBbUNDO1NBOUJZLHFCQUFxQjs7O0lBQ2hDLHlDQUFzQjs7SUFDdEIsNkNBQThCOztJQUU5Qiw4Q0FBc0Q7O0lBRXRELCtDQUF3Qjs7Ozs7SUFFWiwwREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbW1lbnRBbm5vdGF0aW9uU2VydmljZX0gZnJvbSBcIi4uL2NvbW1lbnQtYW5ub3RhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29tbWVudH0gZnJvbSAnLi4vYW5ub3RhdGlvbi1tb2RlbHMnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWNvbW1lbnQtcGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21tZW50LXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb21tZW50LXBhbmVsLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1lbnRQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgY29tbWVudHM6IFtdO1xyXG4gIEBJbnB1dCgpIGFubm90YXRpb25JZDogbnVtYmVyO1xyXG5cclxuICBAT3V0cHV0KCkgY2xvc2VDb21tZW50cyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY3VycmVudENvbW1lbnQ6IENvbW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbW1lbnRBbm5vdGF0aW9uU2VydmljZTogQ29tbWVudEFubm90YXRpb25TZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGNsb3NlUGFuZWwoKSB7XHJcbiAgICB0aGlzLmNsb3NlQ29tbWVudHMuZW1pdCh0cnVlKTtcclxuICB9XHJcblxyXG4gIG5ld0NvbW1lbnQoKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRDb21tZW50ID0gbmV3IENvbW1lbnQodGhpcy5hbm5vdGF0aW9uSWQpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJDb21tZW50KCkge1xyXG4gICAgdGhpcy5jdXJyZW50Q29tbWVudCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBhZGRDb21tZW50KCkge1xyXG4gICAgdGhpcy5fY29tbWVudEFubm90YXRpb25TZXJ2aWNlLmFkZENvbW1lbnQoQ29tbWVudC5jcmVhdGUodGhpcy5jdXJyZW50Q29tbWVudCkpO1xyXG4gICAgdGhpcy5jdXJyZW50Q29tbWVudCA9IG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==