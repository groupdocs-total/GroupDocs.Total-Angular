/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Comment } from '../annotation-models';
var CommentComponent = /** @class */ (function () {
    function CommentComponent() {
    }
    /**
     * @return {?}
     */
    CommentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CommentComponent.prototype.getTime = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var time = Date.now() - this.comment.time;
        /** @type {?} */
        var hours = Math.round(time / (60 * 60 * 1000));
        if (hours > 1) {
            return 'about ' + hours + ' hours ago';
        }
        /** @type {?} */
        var min = Math.round(time / (60 * 1000));
        if (min > 1) {
            return 'about ' + min + ' minutes ago';
        }
        /** @type {?} */
        var sec = Math.round(time / 1000);
        if (sec > 1) {
            return 'about ' + sec + ' seconds ago';
        }
        return this.comment.time;
    };
    CommentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-comment',
                    template: "<div class=\"gd-comment\">\n  <div class=\"gd-comment-head\">\n    <fa-icon [icon]=\"['fas', 'user-circle']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n    <span class=\"gd-name\">{{comment.userName}}</span>\n  </div>\n  <span class=\"gd-message\">{{comment.text}}</span>\n  <span class=\"gd-time\">{{getTime()}}</span>\n</div>\n",
                    styles: [".gd-comment{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:294px;font-size:13px;color:#3e4e5a;padding-top:20px}.gd-comment .gd-comment-head{display:-webkit-box;display:flex}.gd-comment .gd-comment-head .icon{-webkit-box-flex:0;flex:0 0 30px;font-size:18px}.gd-comment .gd-comment-head .gd-name{font-weight:700;line-height:21px}.gd-comment .gd-message{padding-top:5px}.gd-comment .gd-time{color:#acacac;padding-top:5px}@media (max-width:1037px){.gd-comment{width:339px}}"]
                }] }
    ];
    /** @nocollapse */
    CommentComponent.ctorParameters = function () { return []; };
    CommentComponent.propDecorators = {
        comment: [{ type: Input }]
    };
    return CommentComponent;
}());
export { CommentComponent };
if (false) {
    /** @type {?} */
    CommentComponent.prototype.comment;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sc0JBQXNCLENBQUE7QUFFNUM7SUFTRTtJQUNBLENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsa0NBQU87OztJQUFQOztZQUNRLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJOztZQUNyQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNiLE9BQU8sUUFBUSxHQUFHLEtBQUssR0FBRyxZQUFZLENBQUM7U0FDeEM7O1lBQ0ssR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNYLE9BQU8sUUFBUSxHQUFHLEdBQUcsR0FBRyxjQUFjLENBQUM7U0FDeEM7O1lBQ0ssR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDWCxPQUFPLFFBQVEsR0FBRyxHQUFHLEdBQUcsY0FBYyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztJQUMzQixDQUFDOztnQkE5QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixxVkFBdUM7O2lCQUV4Qzs7Ozs7MEJBR0UsS0FBSzs7SUF3QlIsdUJBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTFCWSxnQkFBZ0I7OztJQUUzQixtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1lbnR9IGZyb20gJy4uL2Fubm90YXRpb24tbW9kZWxzJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1jb21tZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbW1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb21tZW50LmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgY29tbWVudDogQ29tbWVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZ2V0VGltZSgpIHtcbiAgICBjb25zdCB0aW1lID0gRGF0ZS5ub3coKSAtIHRoaXMuY29tbWVudC50aW1lO1xuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5yb3VuZCh0aW1lIC8gKDYwICogNjAgKiAxMDAwKSk7XG4gICAgaWYgKGhvdXJzID4gMSkge1xuICAgICAgcmV0dXJuICdhYm91dCAnICsgaG91cnMgKyAnIGhvdXJzIGFnbyc7XG4gICAgfVxuICAgIGNvbnN0IG1pbiA9IE1hdGgucm91bmQodGltZSAvICg2MCAqIDEwMDApKTtcbiAgICBpZiAobWluID4gMSkge1xuICAgICAgcmV0dXJuICdhYm91dCAnICsgbWluICsgJyBtaW51dGVzIGFnbyc7XG4gICAgfVxuICAgIGNvbnN0IHNlYyA9IE1hdGgucm91bmQodGltZSAvIDEwMDApO1xuICAgIGlmIChzZWMgPiAxKSB7XG4gICAgICByZXR1cm4gJ2Fib3V0ICcgKyBzZWMgKyAnIHNlY29uZHMgYWdvJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29tbWVudC50aW1lO1xuICB9XG59XG4iXX0=