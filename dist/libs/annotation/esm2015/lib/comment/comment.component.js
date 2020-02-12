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
                template: "<div class=\"gd-comment\">\n  <div class=\"gd-comment-head\">\n    <fa-icon [icon]=\"['fas', 'user-circle']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n    <span class=\"gd-name\">{{comment.userName}}</span>\n  </div>\n  <span class=\"gd-message\">{{comment.text}}</span>\n  <span class=\"gd-time\">{{getTime()}}</span>\n</div>\n",
                styles: [".gd-comment{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:294px;font-size:13px;color:#3e4e5a;padding-top:20px}.gd-comment .gd-comment-head{display:-webkit-box;display:flex}.gd-comment .gd-comment-head .icon{-webkit-box-flex:0;flex:0 0 30px}.gd-comment .gd-comment-head .gd-name{font-weight:700}.gd-comment .gd-message{padding-top:5px}.gd-comment .gd-time{color:#acacac;padding-top:5px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sc0JBQXNCLENBQUE7QUFPNUMsTUFBTSxPQUFPLGdCQUFnQjtJQUkzQjtJQUNBLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELE9BQU87O2NBQ0MsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7O2NBQ3JDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsT0FBTyxRQUFRLEdBQUcsS0FBSyxHQUFHLFlBQVksQ0FBQztTQUN4Qzs7Y0FDSyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ1gsT0FBTyxRQUFRLEdBQUcsR0FBRyxHQUFHLGNBQWMsQ0FBQztTQUN4Qzs7Y0FDSyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ25DLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNYLE9BQU8sUUFBUSxHQUFHLEdBQUcsR0FBRyxjQUFjLENBQUM7U0FDeEM7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQzNCLENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLHFWQUF1Qzs7YUFFeEM7Ozs7O3NCQUdFLEtBQUs7Ozs7SUFBTixtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1lbnR9IGZyb20gJy4uL2Fubm90YXRpb24tbW9kZWxzJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1jb21tZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbW1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb21tZW50LmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgY29tbWVudDogQ29tbWVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZ2V0VGltZSgpIHtcbiAgICBjb25zdCB0aW1lID0gRGF0ZS5ub3coKSAtIHRoaXMuY29tbWVudC50aW1lO1xuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5yb3VuZCh0aW1lIC8gKDYwICogNjAgKiAxMDAwKSk7XG4gICAgaWYgKGhvdXJzID4gMSkge1xuICAgICAgcmV0dXJuICdhYm91dCAnICsgaG91cnMgKyAnIGhvdXJzIGFnbyc7XG4gICAgfVxuICAgIGNvbnN0IG1pbiA9IE1hdGgucm91bmQodGltZSAvICg2MCAqIDEwMDApKTtcbiAgICBpZiAobWluID4gMSkge1xuICAgICAgcmV0dXJuICdhYm91dCAnICsgbWluICsgJyBtaW51dGVzIGFnbyc7XG4gICAgfVxuICAgIGNvbnN0IHNlYyA9IE1hdGgucm91bmQodGltZSAvIDEwMDApO1xuICAgIGlmIChzZWMgPiAxKSB7XG4gICAgICByZXR1cm4gJ2Fib3V0ICcgKyBzZWMgKyAnIHNlY29uZHMgYWdvJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29tbWVudC50aW1lO1xuICB9XG59XG4iXX0=