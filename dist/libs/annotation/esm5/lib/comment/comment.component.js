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
                    template: "<div class=\"gd-comment\">\r\n  <div class=\"gd-comment-head\">\r\n    <fa-icon [icon]=\"['fas', 'user-circle']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n    <span class=\"gd-name\">{{comment.userName}}</span>\r\n  </div>\r\n  <span class=\"gd-message\">{{comment.text}}</span>\r\n  <span class=\"gd-time\">{{getTime()}}</span>\r\n</div>\r\n",
                    styles: [".gd-comment{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:294px;font-size:13px;color:#3e4e5a;padding-top:20px}.gd-comment .gd-comment-head{display:-webkit-box;display:flex}.gd-comment .gd-comment-head .icon{-webkit-box-flex:0;flex:0 0 30px;font-size:18px}.gd-comment .gd-comment-head .gd-name{font-weight:700;line-height:21px}.gd-comment .gd-message{padding-top:5px;overflow:hidden;text-overflow:ellipsis}.gd-comment .gd-time{color:#acacac;padding-top:5px}@media (max-width:1037px){.gd-comment{width:100%}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sc0JBQXNCLENBQUE7QUFFNUM7SUFTRTtJQUNBLENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsa0NBQU87OztJQUFQOztZQUNRLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJOztZQUNyQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNiLE9BQU8sUUFBUSxHQUFHLEtBQUssR0FBRyxZQUFZLENBQUM7U0FDeEM7O1lBQ0ssR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNYLE9BQU8sUUFBUSxHQUFHLEdBQUcsR0FBRyxjQUFjLENBQUM7U0FDeEM7O1lBQ0ssR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDWCxPQUFPLFFBQVEsR0FBRyxHQUFHLEdBQUcsY0FBYyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztJQUMzQixDQUFDOztnQkE5QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixxV0FBdUM7O2lCQUV4Qzs7Ozs7MEJBR0UsS0FBSzs7SUF3QlIsdUJBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTFCWSxnQkFBZ0I7OztJQUUzQixtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbWVudH0gZnJvbSAnLi4vYW5ub3RhdGlvbi1tb2RlbHMnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWNvbW1lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21tZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb21tZW50LmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBjb21tZW50OiBDb21tZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgZ2V0VGltZSgpIHtcclxuICAgIGNvbnN0IHRpbWUgPSBEYXRlLm5vdygpIC0gdGhpcy5jb21tZW50LnRpbWU7XHJcbiAgICBjb25zdCBob3VycyA9IE1hdGgucm91bmQodGltZSAvICg2MCAqIDYwICogMTAwMCkpO1xyXG4gICAgaWYgKGhvdXJzID4gMSkge1xyXG4gICAgICByZXR1cm4gJ2Fib3V0ICcgKyBob3VycyArICcgaG91cnMgYWdvJztcclxuICAgIH1cclxuICAgIGNvbnN0IG1pbiA9IE1hdGgucm91bmQodGltZSAvICg2MCAqIDEwMDApKTtcclxuICAgIGlmIChtaW4gPiAxKSB7XHJcbiAgICAgIHJldHVybiAnYWJvdXQgJyArIG1pbiArICcgbWludXRlcyBhZ28nO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VjID0gTWF0aC5yb3VuZCh0aW1lIC8gMTAwMCk7XHJcbiAgICBpZiAoc2VjID4gMSkge1xyXG4gICAgICByZXR1cm4gJ2Fib3V0ICcgKyBzZWMgKyAnIHNlY29uZHMgYWdvJztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbW1lbnQudGltZTtcclxuICB9XHJcbn1cclxuIl19