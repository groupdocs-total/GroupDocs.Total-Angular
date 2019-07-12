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
            top: Math.min(1, (bottom - viewport.top) / height),
            bottom: Math.min(1, (viewport.bottom - (bounds.top * (zoomN))) / height),
            left: Math.min(1, (right - viewport.left) / width),
            right: Math.min(1, (viewport.right - (bounds.left * (zoomN))) / width)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3BvcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi92aWV3cG9ydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7SUFDM0IsQ0FBQyxHQUFHLE1BQU07QUFFaEI7SUFLRTtJQUNBLENBQUM7Ozs7Ozs7O0lBRUQseUNBQWU7Ozs7Ozs7SUFBZixVQUFnQixFQUFFLEVBQUUsSUFBa0IsRUFBRSxVQUFzQixFQUFFLE1BQW9CO1FBQWhFLHFCQUFBLEVBQUEsVUFBa0I7UUFBRSwyQkFBQSxFQUFBLGNBQXNCO1FBQUUsdUJBQUEsRUFBQSxZQUFvQjtRQUNsRixJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1AsT0FBTyxLQUFLLENBQUM7U0FDZDs7WUFDSyxDQUFDLEdBQUcsTUFBTTs7WUFDVixDQUFDLEdBQUcsR0FBRzs7WUFFUCxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7WUFFZixRQUFRLEdBQUc7WUFDZixHQUFHLEVBQUUsR0FBRyxDQUFDLFNBQVMsRUFBRTtZQUNwQixJQUFJLEVBQUUsR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFHLFVBQVU7WUFDbkMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtZQUMxQyxNQUFNLEVBQUUsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUU7U0FDdkM7UUFHRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNmLElBQUksR0FBRyxHQUFHLENBQUM7U0FDWjs7WUFFSyxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUc7O1lBQ2xCLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUM7O1lBQ3RDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFFMUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNyQixPQUFPLEtBQUssQ0FBQztTQUNkOztZQUVLLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFOztZQUN2QixLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLOztZQUN2QyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNOztZQUV4QyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBRTNKLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPLEtBQUssQ0FBQztTQUNkOztZQUVLLE1BQU0sR0FBRztZQUNiLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQ2xELE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUN4RSxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNsRCxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDdkU7UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7O2dCQXZERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzswQkFORDtDQTREQyxBQXhERCxJQXdEQztTQXJEWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tIFwianF1ZXJ5XCI7XG5jb25zdCAkID0ganF1ZXJ5O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBWaWV3cG9ydFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgY2hlY2tJblZpZXdwb3J0KGVsLCB6b29tOiBudW1iZXIgPSAxMDAsIGxlZnRPZmZzZXQ6IG51bWJlciA9IDAsIGRlbHRhWDogbnVtYmVyID0gMC41KSB7XG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB4ID0gZGVsdGFYO1xuICAgIGNvbnN0IHkgPSAwLjU7XG5cbiAgICBjb25zdCB3aW4gPSAkKHdpbmRvdyk7XG5cbiAgICBjb25zdCB2aWV3cG9ydCA9IHtcbiAgICAgIHRvcDogd2luLnNjcm9sbFRvcCgpLFxuICAgICAgbGVmdDogd2luLnNjcm9sbExlZnQoKSArIGxlZnRPZmZzZXQsXG4gICAgICByaWdodDogd2luLnNjcm9sbExlZnQoKSArIHdpbi53aWR0aCgpIC0gMTAsXG4gICAgICBib3R0b206IHdpbi5zY3JvbGxUb3AoKSArIHdpbi5oZWlnaHQoKVxuICAgIH07XG5cblxuICAgIGlmIChpc05hTih6b29tKSkge1xuICAgICAgem9vbSA9IDEwMDtcbiAgICB9XG5cbiAgICBjb25zdCB6b29tTiA9IHpvb20gLyAxMDA7XG4gICAgY29uc3QgaGVpZ2h0ID0gJChlbCkub3V0ZXJIZWlnaHQoKSAqICh6b29tTik7XG4gICAgY29uc3Qgd2lkdGggPSAkKGVsKS5vdXRlcldpZHRoKCkgKiAoem9vbU4pO1xuXG4gICAgaWYgKCF3aWR0aCB8fCAhaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgYm91bmRzID0gJChlbCkub2Zmc2V0KCk7XG4gICAgY29uc3QgcmlnaHQgPSAoYm91bmRzLmxlZnQgKiAoem9vbU4pKSArIHdpZHRoO1xuICAgIGNvbnN0IGJvdHRvbSA9IChib3VuZHMudG9wICogKHpvb21OKSkgKyBoZWlnaHQ7XG5cbiAgICBjb25zdCB2aXNpYmxlID0gKCEodmlld3BvcnQucmlnaHQgPCAoYm91bmRzLmxlZnQgKiAoem9vbU4pKSB8fCB2aWV3cG9ydC5sZWZ0ID4gcmlnaHQgfHwgdmlld3BvcnQuYm90dG9tIDwgKGJvdW5kcy50b3AgKiAoem9vbU4pKSB8fCB2aWV3cG9ydC50b3AgPiBib3R0b20pKTtcblxuICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbHRhcyA9IHtcbiAgICAgIHRvcDogTWF0aC5taW4oMSwgKGJvdHRvbSAtIHZpZXdwb3J0LnRvcCkgLyBoZWlnaHQpLFxuICAgICAgYm90dG9tOiBNYXRoLm1pbigxLCAodmlld3BvcnQuYm90dG9tIC0gKGJvdW5kcy50b3AgKiAoem9vbU4pKSkgLyBoZWlnaHQpLFxuICAgICAgbGVmdDogTWF0aC5taW4oMSwgKHJpZ2h0IC0gdmlld3BvcnQubGVmdCkgLyB3aWR0aCksXG4gICAgICByaWdodDogTWF0aC5taW4oMSwgKHZpZXdwb3J0LnJpZ2h0IC0gKGJvdW5kcy5sZWZ0ICogKHpvb21OKSkpIC8gd2lkdGgpXG4gICAgfTtcblxuICAgIHJldHVybiAoZGVsdGFzLmxlZnQgKiBkZWx0YXMucmlnaHQpID49IHggJiYgKGRlbHRhcy50b3AgKiBkZWx0YXMuYm90dG9tKSA+PSB5O1xuICB9XG59XG4iXX0=