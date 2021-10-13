/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommentAnnotationService } from "../comment-annotation.service";
import { Comment } from '../annotation-models';
export class CommentPanelComponent {
    /**
     * @param {?} _commentAnnotationService
     */
    constructor(_commentAnnotationService) {
        this._commentAnnotationService = _commentAnnotationService;
        this.closeComments = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    closePanel() {
        this.closeComments.emit(true);
    }
    /**
     * @return {?}
     */
    newComment() {
        this.currentComment = new Comment(this.annotationId);
    }
    /**
     * @return {?}
     */
    clearComment() {
        this.currentComment = null;
    }
    /**
     * @return {?}
     */
    addComment() {
        this._commentAnnotationService.addComment(Comment.create(this.currentComment));
        this.currentComment = null;
    }
}
CommentPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-comment-panel',
                template: "<div class=\"gd-comments-panel\">\n  <div class=\"gd-comments-head\">\n    <fa-icon [icon]=\"['fas', 'plus']\" [class]=\"'ng-fa-icon icon'\" (click)=\"newComment()\"></fa-icon>\n    <span class=\"gd-comments-title\">Comments</span>\n    <fa-icon [icon]=\"['fas', 'times']\" [class]=\"'ng-fa-icon icon'\" (click)=\"closePanel()\"></fa-icon>\n  </div>\n  <div class=\"gd-comments-body\">\n    <div *ngIf=\"comments.length != 0\">\n      <div *ngFor=\"let comment of comments\">\n        <gd-comment [comment]=\"comment\"></gd-comment>\n      </div>\n    </div>\n    <gd-create-comment *ngIf=\"currentComment\" [comment]=\"currentComment\" (addComment)=\"addComment()\"\n                       (removeComment)=\"clearComment()\"></gd-create-comment>\n    <div class=\"gd-empty-comments-list\" *ngIf=\"comments.length == 0 && !currentComment\">\n      <fa-icon [icon]=\"['fas','comments']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n      <span class=\"gd-empty-text\">No comments yet. Be the first one, <br/>\n        </span>\n      <span class=\"gd-empty-text gd-empty-bold-text\">add comment.</span>\n    </div>\n  </div>\n</div>\n",
                styles: [".gd-comments-panel{position:absolute;right:0;top:30px;overflow:auto!important;width:334px;display:-webkit-box;display:flex;height:100%;z-index:9;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.gd-comments-panel .gd-comments-head{height:60px;width:334px;display:-webkit-box;display:flex;background-color:#222e35;color:#959da5;-webkit-box-align:center;align-items:center}.gd-comments-panel .gd-comments-head>fa-icon:nth-child(1){font-size:24px}.gd-comments-panel .gd-comments-head .icon{-webkit-box-flex:0;flex:0 0 40px;margin-left:20px;cursor:pointer}.gd-comments-panel .gd-comments-head .gd-comments-title{-webkit-box-flex:1;flex:1;font-size:13px;font-weight:700}.gd-comments-panel .gd-comments-body{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;background-color:#f4f4f4;height:calc(100% - 90px)}.gd-comments-panel .gd-comments-body .gd-empty-comments-list{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;color:#959da5;width:250px;height:250px;margin-top:40px}.gd-comments-panel .gd-comments-body .gd-empty-comments-list .icon{font-size:65px;margin-bottom:40px}.gd-comments-panel .gd-comments-body .gd-empty-comments-list .gd-empty-text{font-size:15px}.gd-comments-panel .gd-comments-body .gd-empty-comments-list .gd-empty-bold-text{font-weight:700}@media (max-width:1037px){.gd-comments-panel{top:0;width:100%}.gd-comments-panel .gd-comments-body{height:100%!important;-webkit-box-align:initial;align-items:initial;width:calc(100% - 40px);padding:0 20px}.gd-comments-panel .gd-comments-head{width:100%;line-height:60px}}"]
            }] }
];
/** @nocollapse */
CommentPanelComponent.ctorParameters = () => [
    { type: CommentAnnotationService }
];
CommentPanelComponent.propDecorators = {
    comments: [{ type: Input }],
    annotationId: [{ type: Input }],
    closeComments: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21tZW50LXBhbmVsL2NvbW1lbnQtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQTtBQU81QyxNQUFNLE9BQU8scUJBQXFCOzs7O0lBUWhDLFlBQW9CLHlCQUFtRDtRQUFuRCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBSjdELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUt0RCxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsc25DQUE2Qzs7YUFFOUM7Ozs7WUFQTyx3QkFBd0I7Ozt1QkFTN0IsS0FBSzsyQkFDTCxLQUFLOzRCQUVMLE1BQU07Ozs7SUFIUCx5Q0FBc0I7O0lBQ3RCLDZDQUE4Qjs7SUFFOUIsOENBQXNEOztJQUV0RCwrQ0FBd0I7Ozs7O0lBRVosMERBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbWVudEFubm90YXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vY29tbWVudC1hbm5vdGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29tbWVudH0gZnJvbSAnLi4vYW5ub3RhdGlvbi1tb2RlbHMnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWNvbW1lbnQtcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tbWVudC1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbW1lbnQtcGFuZWwuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tZW50UGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb21tZW50czogW107XG4gIEBJbnB1dCgpIGFubm90YXRpb25JZDogbnVtYmVyO1xuXG4gIEBPdXRwdXQoKSBjbG9zZUNvbW1lbnRzID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGN1cnJlbnRDb21tZW50OiBDb21tZW50O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbW1lbnRBbm5vdGF0aW9uU2VydmljZTogQ29tbWVudEFubm90YXRpb25TZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGNsb3NlUGFuZWwoKSB7XG4gICAgdGhpcy5jbG9zZUNvbW1lbnRzLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBuZXdDb21tZW50KCkge1xuICAgIHRoaXMuY3VycmVudENvbW1lbnQgPSBuZXcgQ29tbWVudCh0aGlzLmFubm90YXRpb25JZCk7XG4gIH1cblxuICBjbGVhckNvbW1lbnQoKSB7XG4gICAgdGhpcy5jdXJyZW50Q29tbWVudCA9IG51bGw7XG4gIH1cblxuICBhZGRDb21tZW50KCkge1xuICAgIHRoaXMuX2NvbW1lbnRBbm5vdGF0aW9uU2VydmljZS5hZGRDb21tZW50KENvbW1lbnQuY3JlYXRlKHRoaXMuY3VycmVudENvbW1lbnQpKTtcbiAgICB0aGlzLmN1cnJlbnRDb21tZW50ID0gbnVsbDtcbiAgfVxufVxuIl19