/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Comment } from '../annotation-models';
export class CommentComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    getTime() {
        /** @type {?} */
        const time = Date.now() - this.comment.time;
        /** @type {?} */
        const hours = Math.round(time / (60 * 60 * 1000));
        if (hours > 1) {
            return 'about ' + hours + ' hours ago';
        }
        /** @type {?} */
        const min = Math.round(time / (60 * 1000));
        if (min > 1) {
            return 'about ' + min + ' minutes ago';
        }
        /** @type {?} */
        const sec = Math.round(time / 1000);
        if (sec > 1) {
            return 'about ' + sec + ' seconds ago';
        }
        return this.comment.time;
    }
}
CommentComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-comment',
                template: "<div class=\"gd-comment\">\r\n  <div class=\"gd-comment-head\">\r\n    <fa-icon [icon]=\"['fas', 'user-circle']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n    <span class=\"gd-name\">{{comment.userName}}</span>\r\n  </div>\r\n  <span class=\"gd-message\">{{comment.text}}</span>\r\n  <span class=\"gd-time\">{{getTime()}}</span>\r\n</div>\r\n",
                styles: [".gd-comment{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:294px;font-size:13px;color:#3e4e5a;padding-top:20px}.gd-comment .gd-comment-head{display:-webkit-box;display:flex}.gd-comment .gd-comment-head .icon{-webkit-box-flex:0;flex:0 0 30px;font-size:18px}.gd-comment .gd-comment-head .gd-name{font-weight:700;line-height:21px}.gd-comment .gd-message{padding-top:5px;overflow:hidden;text-overflow:ellipsis}.gd-comment .gd-time{color:#acacac;padding-top:5px}@media (max-width:1037px){.gd-comment{width:100%}}"]
            }] }
];
/** @nocollapse */
CommentComponent.ctorParameters = () => [];
CommentComponent.propDecorators = {
    comment: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CommentComponent.prototype.comment;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sc0JBQXNCLENBQUE7QUFPNUMsTUFBTSxPQUFPLGdCQUFnQjtJQUkzQjtJQUNBLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELE9BQU87O2NBQ0MsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7O2NBQ3JDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsT0FBTyxRQUFRLEdBQUcsS0FBSyxHQUFHLFlBQVksQ0FBQztTQUN4Qzs7Y0FDSyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ1gsT0FBTyxRQUFRLEdBQUcsR0FBRyxHQUFHLGNBQWMsQ0FBQztTQUN4Qzs7Y0FDSyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ25DLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNYLE9BQU8sUUFBUSxHQUFHLEdBQUcsR0FBRyxjQUFjLENBQUM7U0FDeEM7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQzNCLENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLHFXQUF1Qzs7YUFFeEM7Ozs7O3NCQUdFLEtBQUs7Ozs7SUFBTixtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbWVudH0gZnJvbSAnLi4vYW5ub3RhdGlvbi1tb2RlbHMnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWNvbW1lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21tZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb21tZW50LmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBjb21tZW50OiBDb21tZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgZ2V0VGltZSgpIHtcclxuICAgIGNvbnN0IHRpbWUgPSBEYXRlLm5vdygpIC0gdGhpcy5jb21tZW50LnRpbWU7XHJcbiAgICBjb25zdCBob3VycyA9IE1hdGgucm91bmQodGltZSAvICg2MCAqIDYwICogMTAwMCkpO1xyXG4gICAgaWYgKGhvdXJzID4gMSkge1xyXG4gICAgICByZXR1cm4gJ2Fib3V0ICcgKyBob3VycyArICcgaG91cnMgYWdvJztcclxuICAgIH1cclxuICAgIGNvbnN0IG1pbiA9IE1hdGgucm91bmQodGltZSAvICg2MCAqIDEwMDApKTtcclxuICAgIGlmIChtaW4gPiAxKSB7XHJcbiAgICAgIHJldHVybiAnYWJvdXQgJyArIG1pbiArICcgbWludXRlcyBhZ28nO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VjID0gTWF0aC5yb3VuZCh0aW1lIC8gMTAwMCk7XHJcbiAgICBpZiAoc2VjID4gMSkge1xyXG4gICAgICByZXR1cm4gJ2Fib3V0ICcgKyBzZWMgKyAnIHNlY29uZHMgYWdvJztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbW1lbnQudGltZTtcclxuICB9XHJcbn1cclxuIl19