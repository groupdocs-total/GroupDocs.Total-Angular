/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as jquery from "jquery";
import * as i0 from "@angular/core";
/** @type {?} */
const $ = jquery;
export class ViewportService {
    constructor() {
    }
    /**
     * @param {?} el
     * @param {?=} zoom
     * @param {?=} leftOffset
     * @param {?=} deltaX
     * @return {?}
     */
    checkInViewport(el, zoom = 100, leftOffset = 0, deltaX = 0.5) {
        if (!el) {
            return false;
        }
        /** @type {?} */
        const x = deltaX;
        /** @type {?} */
        const y = 0.5;
        /** @type {?} */
        const win = $(window);
        /** @type {?} */
        const viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft() + leftOffset,
            right: win.scrollLeft() + win.width() - 10,
            bottom: win.scrollTop() + win.height()
        };
        if (isNaN(zoom)) {
            zoom = 100;
        }
        /** @type {?} */
        const zoomN = zoom / 100;
        /** @type {?} */
        const height = $(el).outerHeight() * (zoomN);
        /** @type {?} */
        const width = $(el).outerWidth() * (zoomN);
        if (!width || !height) {
            return false;
        }
        /** @type {?} */
        const bounds = $(el).offset();
        /** @type {?} */
        const right = (bounds.left * (zoomN)) + width;
        /** @type {?} */
        const bottom = (bounds.top * (zoomN)) + height;
        /** @type {?} */
        const visible = (!(viewport.right < (bounds.left * (zoomN)) || viewport.left > right || viewport.bottom < (bounds.top * (zoomN)) || viewport.top > bottom));
        if (!visible) {
            return false;
        }
        /** @type {?} */
        const deltas = {
            top: Math.min(1, (bottom - viewport.top) / height),
            bottom: Math.min(1, (viewport.bottom - (bounds.top * (zoomN))) / height),
            left: Math.min(1, (right - viewport.left) / width),
            right: Math.min(1, (viewport.right - (bounds.left * (zoomN))) / width)
        };
        return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;
    }
}
ViewportService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ViewportService.ctorParameters = () => [];
/** @nocollapse */ ViewportService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ViewportService_Factory() { return new ViewportService(); }, token: ViewportService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3BvcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi92aWV3cG9ydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7TUFDM0IsQ0FBQyxHQUFHLE1BQU07QUFLaEIsTUFBTSxPQUFPLGVBQWU7SUFFMUI7SUFDQSxDQUFDOzs7Ozs7OztJQUVELGVBQWUsQ0FBQyxFQUFFLEVBQUUsT0FBZSxHQUFHLEVBQUUsYUFBcUIsQ0FBQyxFQUFFLFNBQWlCLEdBQUc7UUFDbEYsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNQLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O2NBQ0ssQ0FBQyxHQUFHLE1BQU07O2NBQ1YsQ0FBQyxHQUFHLEdBQUc7O2NBRVAsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7O2NBRWYsUUFBUSxHQUFHO1lBQ2YsR0FBRyxFQUFFLEdBQUcsQ0FBQyxTQUFTLEVBQUU7WUFDcEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxVQUFVO1lBQ25DLEtBQUssRUFBRSxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7WUFDMUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFO1NBQ3ZDO1FBR0QsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDZixJQUFJLEdBQUcsR0FBRyxDQUFDO1NBQ1o7O2NBRUssS0FBSyxHQUFHLElBQUksR0FBRyxHQUFHOztjQUNsQixNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDOztjQUN0QyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDO1FBRTFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDckIsT0FBTyxLQUFLLENBQUM7U0FDZDs7Y0FFSyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTs7Y0FDdkIsS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSzs7Y0FDdkMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsTUFBTTs7Y0FFeEMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxHQUFHLEtBQUssSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUUzSixJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTyxLQUFLLENBQUM7U0FDZDs7Y0FFSyxNQUFNLEdBQUc7WUFDYixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUNsRCxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDeEUsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDbEQsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ3ZFO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRixDQUFDOzs7WUF2REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tIFwianF1ZXJ5XCI7XG5jb25zdCAkID0ganF1ZXJ5O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBWaWV3cG9ydFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgY2hlY2tJblZpZXdwb3J0KGVsLCB6b29tOiBudW1iZXIgPSAxMDAsIGxlZnRPZmZzZXQ6IG51bWJlciA9IDAsIGRlbHRhWDogbnVtYmVyID0gMC41KSB7XG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB4ID0gZGVsdGFYO1xuICAgIGNvbnN0IHkgPSAwLjU7XG5cbiAgICBjb25zdCB3aW4gPSAkKHdpbmRvdyk7XG5cbiAgICBjb25zdCB2aWV3cG9ydCA9IHtcbiAgICAgIHRvcDogd2luLnNjcm9sbFRvcCgpLFxuICAgICAgbGVmdDogd2luLnNjcm9sbExlZnQoKSArIGxlZnRPZmZzZXQsXG4gICAgICByaWdodDogd2luLnNjcm9sbExlZnQoKSArIHdpbi53aWR0aCgpIC0gMTAsXG4gICAgICBib3R0b206IHdpbi5zY3JvbGxUb3AoKSArIHdpbi5oZWlnaHQoKVxuICAgIH07XG5cblxuICAgIGlmIChpc05hTih6b29tKSkge1xuICAgICAgem9vbSA9IDEwMDtcbiAgICB9XG5cbiAgICBjb25zdCB6b29tTiA9IHpvb20gLyAxMDA7XG4gICAgY29uc3QgaGVpZ2h0ID0gJChlbCkub3V0ZXJIZWlnaHQoKSAqICh6b29tTik7XG4gICAgY29uc3Qgd2lkdGggPSAkKGVsKS5vdXRlcldpZHRoKCkgKiAoem9vbU4pO1xuXG4gICAgaWYgKCF3aWR0aCB8fCAhaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgYm91bmRzID0gJChlbCkub2Zmc2V0KCk7XG4gICAgY29uc3QgcmlnaHQgPSAoYm91bmRzLmxlZnQgKiAoem9vbU4pKSArIHdpZHRoO1xuICAgIGNvbnN0IGJvdHRvbSA9IChib3VuZHMudG9wICogKHpvb21OKSkgKyBoZWlnaHQ7XG5cbiAgICBjb25zdCB2aXNpYmxlID0gKCEodmlld3BvcnQucmlnaHQgPCAoYm91bmRzLmxlZnQgKiAoem9vbU4pKSB8fCB2aWV3cG9ydC5sZWZ0ID4gcmlnaHQgfHwgdmlld3BvcnQuYm90dG9tIDwgKGJvdW5kcy50b3AgKiAoem9vbU4pKSB8fCB2aWV3cG9ydC50b3AgPiBib3R0b20pKTtcblxuICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbHRhcyA9IHtcbiAgICAgIHRvcDogTWF0aC5taW4oMSwgKGJvdHRvbSAtIHZpZXdwb3J0LnRvcCkgLyBoZWlnaHQpLFxuICAgICAgYm90dG9tOiBNYXRoLm1pbigxLCAodmlld3BvcnQuYm90dG9tIC0gKGJvdW5kcy50b3AgKiAoem9vbU4pKSkgLyBoZWlnaHQpLFxuICAgICAgbGVmdDogTWF0aC5taW4oMSwgKHJpZ2h0IC0gdmlld3BvcnQubGVmdCkgLyB3aWR0aCksXG4gICAgICByaWdodDogTWF0aC5taW4oMSwgKHZpZXdwb3J0LnJpZ2h0IC0gKGJvdW5kcy5sZWZ0ICogKHpvb21OKSkpIC8gd2lkdGgpXG4gICAgfTtcblxuICAgIHJldHVybiAoZGVsdGFzLmxlZnQgKiBkZWx0YXMucmlnaHQpID49IHggJiYgKGRlbHRhcy50b3AgKiBkZWx0YXMuYm90dG9tKSA+PSB5O1xuICB9XG59XG4iXX0=