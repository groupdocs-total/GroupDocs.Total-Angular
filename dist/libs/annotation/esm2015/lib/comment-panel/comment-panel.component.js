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
                template: "<div class=\"gd-comments-panel\">\r\n  <div class=\"gd-comments-head\">\r\n    <fa-icon [icon]=\"['fas', 'plus']\" [class]=\"'ng-fa-icon icon'\" (click)=\"newComment()\"></fa-icon>\r\n    <span class=\"gd-comments-title\">Comments</span>\r\n    <fa-icon [icon]=\"['fas', 'times']\" [class]=\"'ng-fa-icon icon'\" (click)=\"closePanel()\"></fa-icon>\r\n  </div>\r\n  <div class=\"gd-comments-body\">\r\n    <div *ngIf=\"comments.length != 0\">\r\n      <div *ngFor=\"let comment of comments\">\r\n        <gd-comment [comment]=\"comment\"></gd-comment>\r\n      </div>\r\n    </div>\r\n    <gd-create-comment *ngIf=\"currentComment\" [comment]=\"currentComment\" (addComment)=\"addComment()\"\r\n                       (removeComment)=\"clearComment()\"></gd-create-comment>\r\n    <div class=\"gd-empty-comments-list\" *ngIf=\"comments.length == 0 && !currentComment\">\r\n      <fa-icon [icon]=\"['fas','comments']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n      <span class=\"gd-empty-text\">No comments yet. Be the first one, <br/>\r\n        </span>\r\n      <span class=\"gd-empty-text gd-empty-bold-text\">add comment.</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21tZW50LXBhbmVsL2NvbW1lbnQtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQTtBQU81QyxNQUFNLE9BQU8scUJBQXFCOzs7O0lBUWhDLFlBQW9CLHlCQUFtRDtRQUFuRCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBSjdELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUt0RCxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsa3FDQUE2Qzs7YUFFOUM7Ozs7WUFQTyx3QkFBd0I7Ozt1QkFTN0IsS0FBSzsyQkFDTCxLQUFLOzRCQUVMLE1BQU07Ozs7SUFIUCx5Q0FBc0I7O0lBQ3RCLDZDQUE4Qjs7SUFFOUIsOENBQXNEOztJQUV0RCwrQ0FBd0I7Ozs7O0lBRVosMERBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb21tZW50QW5ub3RhdGlvblNlcnZpY2V9IGZyb20gXCIuLi9jb21tZW50LWFubm90YXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbW1lbnR9IGZyb20gJy4uL2Fubm90YXRpb24tbW9kZWxzJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1jb21tZW50LXBhbmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tbWVudC1wYW5lbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29tbWVudC1wYW5lbC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21tZW50UGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGNvbW1lbnRzOiBbXTtcclxuICBASW5wdXQoKSBhbm5vdGF0aW9uSWQ6IG51bWJlcjtcclxuXHJcbiAgQE91dHB1dCgpIGNsb3NlQ29tbWVudHMgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIGN1cnJlbnRDb21tZW50OiBDb21tZW50O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb21tZW50QW5ub3RhdGlvblNlcnZpY2U6IENvbW1lbnRBbm5vdGF0aW9uU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBjbG9zZVBhbmVsKCkge1xyXG4gICAgdGhpcy5jbG9zZUNvbW1lbnRzLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBuZXdDb21tZW50KCkge1xyXG4gICAgdGhpcy5jdXJyZW50Q29tbWVudCA9IG5ldyBDb21tZW50KHRoaXMuYW5ub3RhdGlvbklkKTtcclxuICB9XHJcblxyXG4gIGNsZWFyQ29tbWVudCgpIHtcclxuICAgIHRoaXMuY3VycmVudENvbW1lbnQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgYWRkQ29tbWVudCgpIHtcclxuICAgIHRoaXMuX2NvbW1lbnRBbm5vdGF0aW9uU2VydmljZS5hZGRDb21tZW50KENvbW1lbnQuY3JlYXRlKHRoaXMuY3VycmVudENvbW1lbnQpKTtcclxuICAgIHRoaXMuY3VycmVudENvbW1lbnQgPSBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=