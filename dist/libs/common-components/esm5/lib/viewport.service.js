/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as jquery from "jquery";
import * as i0 from "@angular/core";
/** @type {?} */
var $ = jquery;
var ViewportService = /** @class */ (function () {
    function ViewportService() {
    }
    /**
     * @param {?} elem
     * @param {?=} parent
     * @return {?}
     */
    ViewportService.prototype.isBelowCenterOfTheScreen = /**
     * @param {?} elem
     * @param {?=} parent
     * @return {?}
     */
    function (elem, parent) {
        /** @type {?} */
        var rect = elem.getBoundingClientRect();
        /** @type {?} */
        var parentRect = parent ? parent.getBoundingClientRect() : { top: 0 };
        /** @type {?} */
        var viewHeight = parent
            ? parent.offsetHeight - parseFloat(window.getComputedStyle(parent).paddingTop || '0')
            : Math.max(document.documentElement.clientHeight, window.innerHeight);
        /** @type {?} */
        var top = rect.top - parentRect.top;
        /** @type {?} */
        var bottom = rect.bottom - parentRect.top;
        /** @type {?} */
        var screenCenter = viewHeight / 2;
        /** @type {?} */
        var elemCenter = rect.height / 2;
        /** @type {?} */
        var isBelowCenterOfTheScreen = bottom > screenCenter && top - screenCenter < 0;
        /** @type {?} */
        var isMoreThanHalfVisible = (viewHeight - top) > elemCenter;
        return isBelowCenterOfTheScreen || isMoreThanHalfVisible;
    };
    ;
    /**
     * @param {?} el
     * @param {?=} zoom
     * @param {?=} leftOffset
     * @param {?=} deltaX
     * @return {?}
     */
    ViewportService.prototype.checkInViewport = /**
     * @param {?} el
     * @param {?=} zoom
     * @param {?=} leftOffset
     * @param {?=} deltaX
     * @return {?}
     */
    function (el, zoom, leftOffset, deltaX) {
        if (zoom === void 0) { zoom = 100; }
        if (leftOffset === void 0) { leftOffset = 0; }
        if (deltaX === void 0) { deltaX = 0.5; }
        if (!el) {
            return false;
        }
        /** @type {?} */
        var x = deltaX;
        /** @type {?} */
        var y = 0.5;
        /** @type {?} */
        var win = $(window);
        /** @type {?} */
        var viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft() + leftOffset,
            right: win.scrollLeft() + win.width() - 10,
            bottom: win.scrollTop() + win.height()
        };
        if (isNaN(zoom)) {
            zoom = 100;
        }
        /** @type {?} */
        var zoomN = zoom / 100;
        /** @type {?} */
        var height = $(el).outerHeight() * (zoomN);
        /** @type {?} */
        var width = $(el).outerWidth() * (zoomN);
        if (!width || !height) {
            return false;
        }
        /** @type {?} */
        var bounds = $(el).offset();
        /** @type {?} */
        var right = (bounds.left * (zoomN)) + width;
        /** @type {?} */
        var bottom = (bounds.top * (zoomN)) + height;
        /** @type {?} */
        var visible = (!(viewport.right < (bounds.left * (zoomN)) || viewport.left > right || viewport.bottom < (bounds.top * (zoomN)) || viewport.top > bottom));
        if (!visible) {
            return false;
        }
        /** @type {?} */
        var deltas = {
            top: parseFloat(Math.min(1, (bottom - viewport.top) / height).toFixed(2)),
            bottom: parseFloat(Math.min(1, (viewport.bottom - (bounds.top * (zoomN))) / height).toFixed(2)),
            left: parseFloat(Math.min(1, (right - viewport.left) / width).toFixed(2)),
            right: parseFloat(Math.min(1, (viewport.right - (bounds.left * (zoomN))) / width).toFixed(2))
        };
        return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;
    };
    ViewportService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ViewportService.ctorParameters = function () { return []; };
    /** @nocollapse */ ViewportService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ViewportService_Factory() { return new ViewportService(); }, token: ViewportService, providedIn: "root" });
    return ViewportService;
}());
export { ViewportService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3BvcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi92aWV3cG9ydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7SUFDM0IsQ0FBQyxHQUFHLE1BQU07QUFFaEI7SUFLRTtJQUNBLENBQUM7Ozs7OztJQUVELGtEQUF3Qjs7Ozs7SUFBeEIsVUFBeUIsSUFBaUIsRUFBRSxNQUFvQjs7WUFDeEQsSUFBSSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRTs7WUFDbkMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTs7WUFDakUsVUFBVSxHQUFHLE1BQU07WUFDdkIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDO1lBQ3JGLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUM7O1lBRWpFLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHOztZQUMvQixNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsR0FBRzs7WUFFckMsWUFBWSxHQUFHLFVBQVUsR0FBRyxDQUFDOztZQUM3QixVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDOztZQUU1Qix3QkFBd0IsR0FBRyxNQUFNLEdBQUcsWUFBWSxJQUFJLEdBQUcsR0FBRyxZQUFZLEdBQUcsQ0FBQzs7WUFDMUUscUJBQXFCLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLEdBQUcsVUFBVTtRQUU3RCxPQUFPLHdCQUF3QixJQUFJLHFCQUFxQixDQUFDO0lBQzNELENBQUM7SUFBQSxDQUFDOzs7Ozs7OztJQUVGLHlDQUFlOzs7Ozs7O0lBQWYsVUFBZ0IsRUFBRSxFQUFFLElBQWtCLEVBQUUsVUFBc0IsRUFBRSxNQUFvQjtRQUFoRSxxQkFBQSxFQUFBLFVBQWtCO1FBQUUsMkJBQUEsRUFBQSxjQUFzQjtRQUFFLHVCQUFBLEVBQUEsWUFBb0I7UUFDbEYsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNQLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O1lBQ0ssQ0FBQyxHQUFHLE1BQU07O1lBQ1YsQ0FBQyxHQUFHLEdBQUc7O1lBRVAsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7O1lBRWYsUUFBUSxHQUFHO1lBQ2YsR0FBRyxFQUFFLEdBQUcsQ0FBQyxTQUFTLEVBQUU7WUFDcEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxVQUFVO1lBQ25DLEtBQUssRUFBRSxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7WUFDMUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFO1NBQ3ZDO1FBR0QsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDZixJQUFJLEdBQUcsR0FBRyxDQUFDO1NBQ1o7O1lBRUssS0FBSyxHQUFHLElBQUksR0FBRyxHQUFHOztZQUNsQixNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDOztZQUN0QyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDO1FBRTFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDckIsT0FBTyxLQUFLLENBQUM7U0FDZDs7WUFFSyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTs7WUFDdkIsS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSzs7WUFDdkMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsTUFBTTs7WUFFeEMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxHQUFHLEtBQUssSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUUzSixJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTyxLQUFLLENBQUM7U0FDZDs7WUFFSyxNQUFNLEdBQUc7WUFDYixHQUFHLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvRixJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5RjtRQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7Z0JBMUVGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzBCQU5EO0NBK0VDLEFBM0VELElBMkVDO1NBeEVZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdwb3J0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBpc0JlbG93Q2VudGVyT2ZUaGVTY3JlZW4oZWxlbTogSFRNTEVsZW1lbnQsIHBhcmVudD86IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudCA/IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IHsgdG9wOiAwIH07XG4gICAgY29uc3Qgdmlld0hlaWdodCA9IHBhcmVudFxuICAgICAgPyBwYXJlbnQub2Zmc2V0SGVpZ2h0IC0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpLnBhZGRpbmdUb3AgfHwgJzAnKVxuICAgICAgOiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXG4gICAgY29uc3QgdG9wID0gcmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcDtcbiAgICBjb25zdCBib3R0b20gPSByZWN0LmJvdHRvbSAtIHBhcmVudFJlY3QudG9wO1xuXG4gICAgY29uc3Qgc2NyZWVuQ2VudGVyID0gdmlld0hlaWdodCAvIDI7XG4gICAgY29uc3QgZWxlbUNlbnRlciA9IHJlY3QuaGVpZ2h0IC8gMjtcblxuICAgIGNvbnN0IGlzQmVsb3dDZW50ZXJPZlRoZVNjcmVlbiA9IGJvdHRvbSA+IHNjcmVlbkNlbnRlciAmJiB0b3AgLSBzY3JlZW5DZW50ZXIgPCAwO1xuICAgIGNvbnN0IGlzTW9yZVRoYW5IYWxmVmlzaWJsZSA9ICh2aWV3SGVpZ2h0IC0gdG9wKSA+IGVsZW1DZW50ZXI7XG5cbiAgICByZXR1cm4gaXNCZWxvd0NlbnRlck9mVGhlU2NyZWVuIHx8IGlzTW9yZVRoYW5IYWxmVmlzaWJsZTtcbiAgfTtcblxuICBjaGVja0luVmlld3BvcnQoZWwsIHpvb206IG51bWJlciA9IDEwMCwgbGVmdE9mZnNldDogbnVtYmVyID0gMCwgZGVsdGFYOiBudW1iZXIgPSAwLjUpIHtcbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHggPSBkZWx0YVg7XG4gICAgY29uc3QgeSA9IDAuNTtcblxuICAgIGNvbnN0IHdpbiA9ICQod2luZG93KTtcblxuICAgIGNvbnN0IHZpZXdwb3J0ID0ge1xuICAgICAgdG9wOiB3aW4uc2Nyb2xsVG9wKCksXG4gICAgICBsZWZ0OiB3aW4uc2Nyb2xsTGVmdCgpICsgbGVmdE9mZnNldCxcbiAgICAgIHJpZ2h0OiB3aW4uc2Nyb2xsTGVmdCgpICsgd2luLndpZHRoKCkgLSAxMCxcbiAgICAgIGJvdHRvbTogd2luLnNjcm9sbFRvcCgpICsgd2luLmhlaWdodCgpXG4gICAgfTtcblxuXG4gICAgaWYgKGlzTmFOKHpvb20pKSB7XG4gICAgICB6b29tID0gMTAwO1xuICAgIH1cblxuICAgIGNvbnN0IHpvb21OID0gem9vbSAvIDEwMDtcbiAgICBjb25zdCBoZWlnaHQgPSAkKGVsKS5vdXRlckhlaWdodCgpICogKHpvb21OKTtcbiAgICBjb25zdCB3aWR0aCA9ICQoZWwpLm91dGVyV2lkdGgoKSAqICh6b29tTik7XG5cbiAgICBpZiAoIXdpZHRoIHx8ICFoZWlnaHQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBib3VuZHMgPSAkKGVsKS5vZmZzZXQoKTtcbiAgICBjb25zdCByaWdodCA9IChib3VuZHMubGVmdCAqICh6b29tTikpICsgd2lkdGg7XG4gICAgY29uc3QgYm90dG9tID0gKGJvdW5kcy50b3AgKiAoem9vbU4pKSArIGhlaWdodDtcblxuICAgIGNvbnN0IHZpc2libGUgPSAoISh2aWV3cG9ydC5yaWdodCA8IChib3VuZHMubGVmdCAqICh6b29tTikpIHx8IHZpZXdwb3J0LmxlZnQgPiByaWdodCB8fCB2aWV3cG9ydC5ib3R0b20gPCAoYm91bmRzLnRvcCAqICh6b29tTikpIHx8IHZpZXdwb3J0LnRvcCA+IGJvdHRvbSkpO1xuXG4gICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsdGFzID0ge1xuICAgICAgdG9wOiBwYXJzZUZsb2F0KE1hdGgubWluKDEsIChib3R0b20gLSB2aWV3cG9ydC50b3ApIC8gaGVpZ2h0KS50b0ZpeGVkKDIpKSxcbiAgICAgIGJvdHRvbTogcGFyc2VGbG9hdChNYXRoLm1pbigxLCAodmlld3BvcnQuYm90dG9tIC0gKGJvdW5kcy50b3AgKiAoem9vbU4pKSkgLyBoZWlnaHQpLnRvRml4ZWQoMikpLFxuICAgICAgbGVmdDogcGFyc2VGbG9hdChNYXRoLm1pbigxLCAocmlnaHQgLSB2aWV3cG9ydC5sZWZ0KSAvIHdpZHRoKS50b0ZpeGVkKDIpKSxcbiAgICAgIHJpZ2h0OiBwYXJzZUZsb2F0KE1hdGgubWluKDEsICh2aWV3cG9ydC5yaWdodCAtIChib3VuZHMubGVmdCAqICh6b29tTikpKSAvIHdpZHRoKS50b0ZpeGVkKDIpKVxuICAgIH07XG5cbiAgICByZXR1cm4gKGRlbHRhcy5sZWZ0ICogZGVsdGFzLnJpZ2h0KSA+PSB4ICYmIChkZWx0YXMudG9wICogZGVsdGFzLmJvdHRvbSkgPj0geTtcbiAgfVxufVxuIl19