/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
var CommentAnnotationService = /** @class */ (function () {
    function CommentAnnotationService() {
        this._observer = new Subject();
        this._commentAnnotation = this._observer.asObservable();
        this._observerAddComment = new Subject();
        this._addCommentObserve = this._observerAddComment.asObservable();
    }
    Object.defineProperty(CommentAnnotationService.prototype, "commentAnnotation", {
        get: /**
         * @return {?}
         */
        function () {
            return this._commentAnnotation;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} id
     * @return {?}
     */
    CommentAnnotationService.prototype.comment = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this._observer.next(id);
    };
    Object.defineProperty(CommentAnnotationService.prototype, "addCommentObserve", {
        get: /**
         * @return {?}
         */
        function () {
            return this._addCommentObserve;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} comment
     * @return {?}
     */
    CommentAnnotationService.prototype.addComment = /**
     * @param {?} comment
     * @return {?}
     */
    function (comment) {
        this._observerAddComment.next(comment);
    };
    return CommentAnnotationService;
}());
export { CommentAnnotationService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC1hbm5vdGF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21tZW50LWFubm90YXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUd6QztJQU1FO1FBTFEsY0FBUyxHQUErQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzdDLHVCQUFrQixHQUFrQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNGLHdCQUFtQixHQUFxQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzdDLHVCQUFrQixHQUF3QixJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHbkcsQ0FBQztJQUVELHNCQUFJLHVEQUFpQjs7OztRQUFyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ2pDLENBQUM7OztPQUFBOzs7OztJQUVELDBDQUFPOzs7O0lBQVAsVUFBUSxFQUFxQjtRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsc0JBQUksdURBQWlCOzs7O1FBQXJCO1lBQ0UsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsNkNBQVU7Ozs7SUFBVixVQUFXLE9BQWdCO1FBQ3pCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVILCtCQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQzs7Ozs7OztJQXhCQyw2Q0FBOEQ7Ozs7O0lBQzlELHNEQUFtRzs7Ozs7SUFDbkcsdURBQThEOzs7OztJQUM5RCxzREFBbUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0NvbW1lbnRBbm5vdGF0aW9uLCBDb21tZW50fSBmcm9tIFwiLi9hbm5vdGF0aW9uLW1vZGVsc1wiO1xuXG5leHBvcnQgY2xhc3MgQ29tbWVudEFubm90YXRpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IFN1YmplY3Q8Q29tbWVudEFubm90YXRpb24+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfY29tbWVudEFubm90YXRpb246IE9ic2VydmFibGU8Q29tbWVudEFubm90YXRpb24+ID0gdGhpcy5fb2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgX29ic2VydmVyQWRkQ29tbWVudDogU3ViamVjdDxDb21tZW50PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2FkZENvbW1lbnRPYnNlcnZlOiBPYnNlcnZhYmxlPENvbW1lbnQ+ID0gdGhpcy5fb2JzZXJ2ZXJBZGRDb21tZW50LmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgZ2V0IGNvbW1lbnRBbm5vdGF0aW9uKCk6IE9ic2VydmFibGU8Q29tbWVudEFubm90YXRpb24+IHtcbiAgICByZXR1cm4gdGhpcy5fY29tbWVudEFubm90YXRpb247XG4gIH1cblxuICBjb21tZW50KGlkOiBDb21tZW50QW5ub3RhdGlvbik6IHZvaWQge1xuICAgIHRoaXMuX29ic2VydmVyLm5leHQoaWQpO1xuICB9XG5cbiAgZ2V0IGFkZENvbW1lbnRPYnNlcnZlKCk6IE9ic2VydmFibGU8Q29tbWVudD4ge1xuICAgIHJldHVybiB0aGlzLl9hZGRDb21tZW50T2JzZXJ2ZTtcbiAgfVxuXG4gIGFkZENvbW1lbnQoY29tbWVudDogQ29tbWVudCkge1xuICAgIHRoaXMuX29ic2VydmVyQWRkQ29tbWVudC5uZXh0KGNvbW1lbnQpO1xuICB9XG5cbn1cbiJdfQ==