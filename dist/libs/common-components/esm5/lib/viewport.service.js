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
        var bottom = rect.bottom - parentRect.top + 40;
        /** @type {?} */
        var screenCenter = viewHeight / 2;
        /** @type {?} */
        var elemCenter = rect.height / 2;
        /** @type {?} */
        var isBelowCenterOfTheScreen = bottom >= screenCenter && top - screenCenter <= 0;
        /** @type {?} */
        var isMoreThanHalfVisible = rect.height - Math.abs(top) >= elemCenter;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3BvcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi92aWV3cG9ydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7SUFDM0IsQ0FBQyxHQUFHLE1BQU07QUFFaEI7SUFLRTtJQUNBLENBQUM7Ozs7OztJQUVELGtEQUF3Qjs7Ozs7SUFBeEIsVUFBeUIsSUFBaUIsRUFBRSxNQUFvQjs7WUFDeEQsSUFBSSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRTs7WUFDbkMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTs7WUFDakUsVUFBVSxHQUFHLE1BQU07WUFDdkIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDO1lBQ3JGLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUM7O1lBRWpFLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHOztZQUMvQixNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsR0FBRyxHQUFHLEVBQUU7O1lBRTFDLFlBQVksR0FBRyxVQUFVLEdBQUcsQ0FBQzs7WUFDN0IsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQzs7WUFFNUIsd0JBQXdCLEdBQUcsTUFBTSxJQUFJLFlBQVksSUFBSSxHQUFHLEdBQUcsWUFBWSxJQUFJLENBQUM7O1lBQzVFLHFCQUFxQixHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxVQUFVO1FBRXZFLE9BQU8sd0JBQXdCLElBQUkscUJBQXFCLENBQUM7SUFDM0QsQ0FBQztJQUFBLENBQUM7Ozs7Ozs7O0lBRUYseUNBQWU7Ozs7Ozs7SUFBZixVQUFnQixFQUFFLEVBQUUsSUFBa0IsRUFBRSxVQUFzQixFQUFFLE1BQW9CO1FBQWhFLHFCQUFBLEVBQUEsVUFBa0I7UUFBRSwyQkFBQSxFQUFBLGNBQXNCO1FBQUUsdUJBQUEsRUFBQSxZQUFvQjtRQUNsRixJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1AsT0FBTyxLQUFLLENBQUM7U0FDZDs7WUFDSyxDQUFDLEdBQUcsTUFBTTs7WUFDVixDQUFDLEdBQUcsR0FBRzs7WUFFUCxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7WUFFZixRQUFRLEdBQUc7WUFDZixHQUFHLEVBQUUsR0FBRyxDQUFDLFNBQVMsRUFBRTtZQUNwQixJQUFJLEVBQUUsR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFHLFVBQVU7WUFDbkMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtZQUMxQyxNQUFNLEVBQUUsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUU7U0FDdkM7UUFHRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNmLElBQUksR0FBRyxHQUFHLENBQUM7U0FDWjs7WUFFSyxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUc7O1lBQ2xCLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUM7O1lBQ3RDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFFMUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNyQixPQUFPLEtBQUssQ0FBQztTQUNkOztZQUVLLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFOztZQUN2QixLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLOztZQUN2QyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNOztZQUV4QyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBRTNKLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPLEtBQUssQ0FBQztTQUNkOztZQUVLLE1BQU0sR0FBRztZQUNiLEdBQUcsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RSxNQUFNLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9GLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RSxLQUFLLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlGO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRixDQUFDOztnQkExRUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7MEJBTkQ7Q0ErRUMsQUEzRUQsSUEyRUM7U0F4RVksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuY29uc3QgJCA9IGpxdWVyeTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVmlld3BvcnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGlzQmVsb3dDZW50ZXJPZlRoZVNjcmVlbihlbGVtOiBIVE1MRWxlbWVudCwgcGFyZW50PzogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBwYXJlbnRSZWN0ID0gcGFyZW50ID8gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogeyB0b3A6IDAgfTtcbiAgICBjb25zdCB2aWV3SGVpZ2h0ID0gcGFyZW50XG4gICAgICA/IHBhcmVudC5vZmZzZXRIZWlnaHQgLSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCkucGFkZGluZ1RvcCB8fCAnMCcpXG4gICAgICA6IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cbiAgICBjb25zdCB0b3AgPSByZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wO1xuICAgIGNvbnN0IGJvdHRvbSA9IHJlY3QuYm90dG9tIC0gcGFyZW50UmVjdC50b3AgKyA0MDtcblxuICAgIGNvbnN0IHNjcmVlbkNlbnRlciA9IHZpZXdIZWlnaHQgLyAyO1xuICAgIGNvbnN0IGVsZW1DZW50ZXIgPSByZWN0LmhlaWdodCAvIDI7XG5cbiAgICBjb25zdCBpc0JlbG93Q2VudGVyT2ZUaGVTY3JlZW4gPSBib3R0b20gPj0gc2NyZWVuQ2VudGVyICYmIHRvcCAtIHNjcmVlbkNlbnRlciA8PSAwO1xuICAgIGNvbnN0IGlzTW9yZVRoYW5IYWxmVmlzaWJsZSA9IHJlY3QuaGVpZ2h0IC0gTWF0aC5hYnModG9wKSA+PSBlbGVtQ2VudGVyO1xuXG4gICAgcmV0dXJuIGlzQmVsb3dDZW50ZXJPZlRoZVNjcmVlbiB8fCBpc01vcmVUaGFuSGFsZlZpc2libGU7XG4gIH07XG5cbiAgY2hlY2tJblZpZXdwb3J0KGVsLCB6b29tOiBudW1iZXIgPSAxMDAsIGxlZnRPZmZzZXQ6IG51bWJlciA9IDAsIGRlbHRhWDogbnVtYmVyID0gMC41KSB7XG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB4ID0gZGVsdGFYO1xuICAgIGNvbnN0IHkgPSAwLjU7XG5cbiAgICBjb25zdCB3aW4gPSAkKHdpbmRvdyk7XG5cbiAgICBjb25zdCB2aWV3cG9ydCA9IHtcbiAgICAgIHRvcDogd2luLnNjcm9sbFRvcCgpLFxuICAgICAgbGVmdDogd2luLnNjcm9sbExlZnQoKSArIGxlZnRPZmZzZXQsXG4gICAgICByaWdodDogd2luLnNjcm9sbExlZnQoKSArIHdpbi53aWR0aCgpIC0gMTAsXG4gICAgICBib3R0b206IHdpbi5zY3JvbGxUb3AoKSArIHdpbi5oZWlnaHQoKVxuICAgIH07XG5cblxuICAgIGlmIChpc05hTih6b29tKSkge1xuICAgICAgem9vbSA9IDEwMDtcbiAgICB9XG5cbiAgICBjb25zdCB6b29tTiA9IHpvb20gLyAxMDA7XG4gICAgY29uc3QgaGVpZ2h0ID0gJChlbCkub3V0ZXJIZWlnaHQoKSAqICh6b29tTik7XG4gICAgY29uc3Qgd2lkdGggPSAkKGVsKS5vdXRlcldpZHRoKCkgKiAoem9vbU4pO1xuXG4gICAgaWYgKCF3aWR0aCB8fCAhaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgYm91bmRzID0gJChlbCkub2Zmc2V0KCk7XG4gICAgY29uc3QgcmlnaHQgPSAoYm91bmRzLmxlZnQgKiAoem9vbU4pKSArIHdpZHRoO1xuICAgIGNvbnN0IGJvdHRvbSA9IChib3VuZHMudG9wICogKHpvb21OKSkgKyBoZWlnaHQ7XG5cbiAgICBjb25zdCB2aXNpYmxlID0gKCEodmlld3BvcnQucmlnaHQgPCAoYm91bmRzLmxlZnQgKiAoem9vbU4pKSB8fCB2aWV3cG9ydC5sZWZ0ID4gcmlnaHQgfHwgdmlld3BvcnQuYm90dG9tIDwgKGJvdW5kcy50b3AgKiAoem9vbU4pKSB8fCB2aWV3cG9ydC50b3AgPiBib3R0b20pKTtcblxuICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbHRhcyA9IHtcbiAgICAgIHRvcDogcGFyc2VGbG9hdChNYXRoLm1pbigxLCAoYm90dG9tIC0gdmlld3BvcnQudG9wKSAvIGhlaWdodCkudG9GaXhlZCgyKSksXG4gICAgICBib3R0b206IHBhcnNlRmxvYXQoTWF0aC5taW4oMSwgKHZpZXdwb3J0LmJvdHRvbSAtIChib3VuZHMudG9wICogKHpvb21OKSkpIC8gaGVpZ2h0KS50b0ZpeGVkKDIpKSxcbiAgICAgIGxlZnQ6IHBhcnNlRmxvYXQoTWF0aC5taW4oMSwgKHJpZ2h0IC0gdmlld3BvcnQubGVmdCkgLyB3aWR0aCkudG9GaXhlZCgyKSksXG4gICAgICByaWdodDogcGFyc2VGbG9hdChNYXRoLm1pbigxLCAodmlld3BvcnQucmlnaHQgLSAoYm91bmRzLmxlZnQgKiAoem9vbU4pKSkgLyB3aWR0aCkudG9GaXhlZCgyKSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIChkZWx0YXMubGVmdCAqIGRlbHRhcy5yaWdodCkgPj0geCAmJiAoZGVsdGFzLnRvcCAqIGRlbHRhcy5ib3R0b20pID49IHk7XG4gIH1cbn1cbiJdfQ==