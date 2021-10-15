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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3BvcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi92aWV3cG9ydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7SUFDM0IsQ0FBQyxHQUFHLE1BQU07QUFFaEI7SUFLRTtJQUNBLENBQUM7Ozs7Ozs7O0lBRUQseUNBQWU7Ozs7Ozs7SUFBZixVQUFnQixFQUFFLEVBQUUsSUFBa0IsRUFBRSxVQUFzQixFQUFFLE1BQW9CO1FBQWhFLHFCQUFBLEVBQUEsVUFBa0I7UUFBRSwyQkFBQSxFQUFBLGNBQXNCO1FBQUUsdUJBQUEsRUFBQSxZQUFvQjtRQUNsRixJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1AsT0FBTyxLQUFLLENBQUM7U0FDZDs7WUFDSyxDQUFDLEdBQUcsTUFBTTs7WUFDVixDQUFDLEdBQUcsR0FBRzs7WUFFUCxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7WUFFZixRQUFRLEdBQUc7WUFDZixHQUFHLEVBQUUsR0FBRyxDQUFDLFNBQVMsRUFBRTtZQUNwQixJQUFJLEVBQUUsR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFHLFVBQVU7WUFDbkMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtZQUMxQyxNQUFNLEVBQUUsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUU7U0FDdkM7UUFHRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNmLElBQUksR0FBRyxHQUFHLENBQUM7U0FDWjs7WUFFSyxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUc7O1lBQ2xCLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUM7O1lBQ3RDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFFMUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNyQixPQUFPLEtBQUssQ0FBQztTQUNkOztZQUVLLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFOztZQUN2QixLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLOztZQUN2QyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNOztZQUV4QyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBRTNKLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPLEtBQUssQ0FBQztTQUNkOztZQUVLLE1BQU0sR0FBRztZQUNiLEdBQUcsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RSxNQUFNLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9GLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RSxLQUFLLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlGO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRixDQUFDOztnQkF2REYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7MEJBTkQ7Q0E0REMsQUF4REQsSUF3REM7U0FyRFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuY29uc3QgJCA9IGpxdWVyeTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVmlld3BvcnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGNoZWNrSW5WaWV3cG9ydChlbCwgem9vbTogbnVtYmVyID0gMTAwLCBsZWZ0T2Zmc2V0OiBudW1iZXIgPSAwLCBkZWx0YVg6IG51bWJlciA9IDAuNSkge1xuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgeCA9IGRlbHRhWDtcbiAgICBjb25zdCB5ID0gMC41O1xuXG4gICAgY29uc3Qgd2luID0gJCh3aW5kb3cpO1xuXG4gICAgY29uc3Qgdmlld3BvcnQgPSB7XG4gICAgICB0b3A6IHdpbi5zY3JvbGxUb3AoKSxcbiAgICAgIGxlZnQ6IHdpbi5zY3JvbGxMZWZ0KCkgKyBsZWZ0T2Zmc2V0LFxuICAgICAgcmlnaHQ6IHdpbi5zY3JvbGxMZWZ0KCkgKyB3aW4ud2lkdGgoKSAtIDEwLFxuICAgICAgYm90dG9tOiB3aW4uc2Nyb2xsVG9wKCkgKyB3aW4uaGVpZ2h0KClcbiAgICB9O1xuXG5cbiAgICBpZiAoaXNOYU4oem9vbSkpIHtcbiAgICAgIHpvb20gPSAxMDA7XG4gICAgfVxuXG4gICAgY29uc3Qgem9vbU4gPSB6b29tIC8gMTAwO1xuICAgIGNvbnN0IGhlaWdodCA9ICQoZWwpLm91dGVySGVpZ2h0KCkgKiAoem9vbU4pO1xuICAgIGNvbnN0IHdpZHRoID0gJChlbCkub3V0ZXJXaWR0aCgpICogKHpvb21OKTtcblxuICAgIGlmICghd2lkdGggfHwgIWhlaWdodCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGJvdW5kcyA9ICQoZWwpLm9mZnNldCgpO1xuICAgIGNvbnN0IHJpZ2h0ID0gKGJvdW5kcy5sZWZ0ICogKHpvb21OKSkgKyB3aWR0aDtcbiAgICBjb25zdCBib3R0b20gPSAoYm91bmRzLnRvcCAqICh6b29tTikpICsgaGVpZ2h0O1xuXG4gICAgY29uc3QgdmlzaWJsZSA9ICghKHZpZXdwb3J0LnJpZ2h0IDwgKGJvdW5kcy5sZWZ0ICogKHpvb21OKSkgfHwgdmlld3BvcnQubGVmdCA+IHJpZ2h0IHx8IHZpZXdwb3J0LmJvdHRvbSA8IChib3VuZHMudG9wICogKHpvb21OKSkgfHwgdmlld3BvcnQudG9wID4gYm90dG9tKSk7XG5cbiAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWx0YXMgPSB7XG4gICAgICB0b3A6IHBhcnNlRmxvYXQoTWF0aC5taW4oMSwgKGJvdHRvbSAtIHZpZXdwb3J0LnRvcCkgLyBoZWlnaHQpLnRvRml4ZWQoMikpLFxuICAgICAgYm90dG9tOiBwYXJzZUZsb2F0KE1hdGgubWluKDEsICh2aWV3cG9ydC5ib3R0b20gLSAoYm91bmRzLnRvcCAqICh6b29tTikpKSAvIGhlaWdodCkudG9GaXhlZCgyKSksXG4gICAgICBsZWZ0OiBwYXJzZUZsb2F0KE1hdGgubWluKDEsIChyaWdodCAtIHZpZXdwb3J0LmxlZnQpIC8gd2lkdGgpLnRvRml4ZWQoMikpLFxuICAgICAgcmlnaHQ6IHBhcnNlRmxvYXQoTWF0aC5taW4oMSwgKHZpZXdwb3J0LnJpZ2h0IC0gKGJvdW5kcy5sZWZ0ICogKHpvb21OKSkpIC8gd2lkdGgpLnRvRml4ZWQoMikpXG4gICAgfTtcblxuICAgIHJldHVybiAoZGVsdGFzLmxlZnQgKiBkZWx0YXMucmlnaHQpID49IHggJiYgKGRlbHRhcy50b3AgKiBkZWx0YXMuYm90dG9tKSA+PSB5O1xuICB9XG59XG4iXX0=