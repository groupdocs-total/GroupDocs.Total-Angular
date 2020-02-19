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
                    template: "<div class=\"gd-comments-panel\">\n  <div class=\"gd-comments-head\">\n    <fa-icon [icon]=\"['fas', 'plus']\" [class]=\"'ng-fa-icon icon'\" (click)=\"newComment()\"></fa-icon>\n    <span class=\"gd-comments-title\">Comments</span>\n    <fa-icon [icon]=\"['fas', 'times']\" [class]=\"'ng-fa-icon icon'\" (click)=\"closePanel()\"></fa-icon>\n  </div>\n  <div class=\"gd-comments-body\">\n    <div *ngIf=\"comments.length != 0\">\n      <div *ngFor=\"let comment of comments\">\n        <gd-comment [comment]=\"comment\"></gd-comment>\n      </div>\n    </div>\n    <gd-create-comment *ngIf=\"currentComment\" [comment]=\"currentComment\" (addComment)=\"addComment()\"\n                       (removeComment)=\"clearComment()\"></gd-create-comment>\n    <div class=\"gd-empty-comments-list\" *ngIf=\"comments.length == 0 && !currentComment\">\n      <fa-icon [icon]=\"['fas','comments']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n      <span class=\"gd-empty-text\">No comments yet. Be the first one, <br/>\n        </span>\n      <span class=\"gd-empty-text gd-empty-bold-text\">add comment.</span>\n    </div>\n  </div>\n</div>\n",
                    styles: [".gd-comments-panel{position:absolute;right:0;top:30px;overflow:auto!important;width:334px;display:-webkit-box;display:flex;height:100%;z-index:9;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.gd-comments-panel .gd-comments-head{height:60px;width:334px;display:-webkit-box;display:flex;background-color:#222e35;color:#959da5;-webkit-box-align:center;align-items:center}.gd-comments-panel .gd-comments-head .icon{-webkit-box-flex:0;flex:0 0 40px;margin-left:20px;cursor:pointer}.gd-comments-panel .gd-comments-head .gd-comments-title{-webkit-box-flex:1;flex:1;font-size:13px;font-weight:700}.gd-comments-panel .gd-comments-body{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;background-color:#f4f4f4;height:calc(100% - 90px)}.gd-comments-panel .gd-comments-body .gd-empty-comments-list{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;color:#959da5;width:250px;height:250px;margin-top:40px}.gd-comments-panel .gd-comments-body .gd-empty-comments-list .icon{font-size:65px;margin-bottom:40px}.gd-comments-panel .gd-comments-body .gd-empty-comments-list .gd-empty-text{font-size:15px}.gd-comments-panel .gd-comments-body .gd-empty-comments-list .gd-empty-bold-text{font-weight:700}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21tZW50LXBhbmVsL2NvbW1lbnQtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQTtBQUU1QztJQWFFLCtCQUFvQix5QkFBbUQ7UUFBbkQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQUo3RCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFLdEQsQ0FBQzs7OztJQUVELHdDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCwwQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsMENBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELDRDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCwwQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQzs7Z0JBbENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixzbkNBQTZDOztpQkFFOUM7Ozs7Z0JBUE8sd0JBQXdCOzs7MkJBUzdCLEtBQUs7K0JBQ0wsS0FBSztnQ0FFTCxNQUFNOztJQTBCVCw0QkFBQztDQUFBLEFBbkNELElBbUNDO1NBOUJZLHFCQUFxQjs7O0lBQ2hDLHlDQUFzQjs7SUFDdEIsNkNBQThCOztJQUU5Qiw4Q0FBc0Q7O0lBRXRELCtDQUF3Qjs7Ozs7SUFFWiwwREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tZW50QW5ub3RhdGlvblNlcnZpY2V9IGZyb20gXCIuLi9jb21tZW50LWFubm90YXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHtDb21tZW50fSBmcm9tICcuLi9hbm5vdGF0aW9uLW1vZGVscydcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtY29tbWVudC1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21tZW50LXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tbWVudC1wYW5lbC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbW1lbnRQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbW1lbnRzOiBbXTtcbiAgQElucHV0KCkgYW5ub3RhdGlvbklkOiBudW1iZXI7XG5cbiAgQE91dHB1dCgpIGNsb3NlQ29tbWVudHMgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY3VycmVudENvbW1lbnQ6IENvbW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29tbWVudEFubm90YXRpb25TZXJ2aWNlOiBDb21tZW50QW5ub3RhdGlvblNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgY2xvc2VQYW5lbCgpIHtcbiAgICB0aGlzLmNsb3NlQ29tbWVudHMuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIG5ld0NvbW1lbnQoKSB7XG4gICAgdGhpcy5jdXJyZW50Q29tbWVudCA9IG5ldyBDb21tZW50KHRoaXMuYW5ub3RhdGlvbklkKTtcbiAgfVxuXG4gIGNsZWFyQ29tbWVudCgpIHtcbiAgICB0aGlzLmN1cnJlbnRDb21tZW50ID0gbnVsbDtcbiAgfVxuXG4gIGFkZENvbW1lbnQoKSB7XG4gICAgdGhpcy5fY29tbWVudEFubm90YXRpb25TZXJ2aWNlLmFkZENvbW1lbnQoQ29tbWVudC5jcmVhdGUodGhpcy5jdXJyZW50Q29tbWVudCkpO1xuICAgIHRoaXMuY3VycmVudENvbW1lbnQgPSBudWxsO1xuICB9XG59XG4iXX0=