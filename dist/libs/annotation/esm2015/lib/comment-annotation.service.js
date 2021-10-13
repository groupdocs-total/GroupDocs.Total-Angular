/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
export class CommentAnnotationService {
    constructor() {
        this._observer = new Subject();
        this._commentAnnotation = this._observer.asObservable();
        this._observerAddComment = new Subject();
        this._addCommentObserve = this._observerAddComment.asObservable();
    }
    /**
     * @return {?}
     */
    get commentAnnotation() {
        return this._commentAnnotation;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    comment(id) {
        this._observer.next(id);
    }
    /**
     * @return {?}
     */
    get addCommentObserve() {
        return this._addCommentObserve;
    }
    /**
     * @param {?} comment
     * @return {?}
     */
    addComment(comment) {
        this._observerAddComment.next(comment);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CommentAnnotationService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    CommentAnnotationService.prototype._commentAnnotation;
    /**
     * @type {?}
     * @private
     */
    CommentAnnotationService.prototype._observerAddComment;
    /**
     * @type {?}
     * @private
     */
    CommentAnnotationService.prototype._addCommentObserve;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC1hbm5vdGF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21tZW50LWFubm90YXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUd6QyxNQUFNLE9BQU8sd0JBQXdCO0lBTW5DO1FBTFEsY0FBUyxHQUErQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzdDLHVCQUFrQixHQUFrQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNGLHdCQUFtQixHQUFxQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzdDLHVCQUFrQixHQUF3QixJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHbkcsQ0FBQzs7OztJQUVELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEVBQXFCO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFnQjtRQUN6QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FFRjs7Ozs7O0lBeEJDLDZDQUE4RDs7Ozs7SUFDOUQsc0RBQW1HOzs7OztJQUNuRyx1REFBOEQ7Ozs7O0lBQzlELHNEQUFtRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7Q29tbWVudEFubm90YXRpb24sIENvbW1lbnR9IGZyb20gXCIuL2Fubm90YXRpb24tbW9kZWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBDb21tZW50QW5ub3RhdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIF9vYnNlcnZlcjogU3ViamVjdDxDb21tZW50QW5ub3RhdGlvbj4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9jb21tZW50QW5ub3RhdGlvbjogT2JzZXJ2YWJsZTxDb21tZW50QW5ub3RhdGlvbj4gPSB0aGlzLl9vYnNlcnZlci5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJBZGRDb21tZW50OiBTdWJqZWN0PENvbW1lbnQ+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfYWRkQ29tbWVudE9ic2VydmU6IE9ic2VydmFibGU8Q29tbWVudD4gPSB0aGlzLl9vYnNlcnZlckFkZENvbW1lbnQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBnZXQgY29tbWVudEFubm90YXRpb24oKTogT2JzZXJ2YWJsZTxDb21tZW50QW5ub3RhdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLl9jb21tZW50QW5ub3RhdGlvbjtcbiAgfVxuXG4gIGNvbW1lbnQoaWQ6IENvbW1lbnRBbm5vdGF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChpZCk7XG4gIH1cblxuICBnZXQgYWRkQ29tbWVudE9ic2VydmUoKTogT2JzZXJ2YWJsZTxDb21tZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuX2FkZENvbW1lbnRPYnNlcnZlO1xuICB9XG5cbiAgYWRkQ29tbWVudChjb21tZW50OiBDb21tZW50KSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJBZGRDb21tZW50Lm5leHQoY29tbWVudCk7XG4gIH1cblxufVxuIl19