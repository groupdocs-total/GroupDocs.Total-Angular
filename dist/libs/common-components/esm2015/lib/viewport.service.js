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
            top: parseFloat(Math.min(1, (bottom - viewport.top) / height).toFixed(2)),
            bottom: parseFloat(Math.min(1, (viewport.bottom - (bounds.top * (zoomN))) / height).toFixed(2)),
            left: parseFloat(Math.min(1, (right - viewport.left) / width).toFixed(2)),
            right: parseFloat(Math.min(1, (viewport.right - (bounds.left * (zoomN))) / width).toFixed(2))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3BvcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi92aWV3cG9ydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7TUFDM0IsQ0FBQyxHQUFHLE1BQU07QUFLaEIsTUFBTSxPQUFPLGVBQWU7SUFFMUI7SUFDQSxDQUFDOzs7Ozs7OztJQUVELGVBQWUsQ0FBQyxFQUFFLEVBQUUsT0FBZSxHQUFHLEVBQUUsYUFBcUIsQ0FBQyxFQUFFLFNBQWlCLEdBQUc7UUFDbEYsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNQLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O2NBQ0ssQ0FBQyxHQUFHLE1BQU07O2NBQ1YsQ0FBQyxHQUFHLEdBQUc7O2NBRVAsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7O2NBRWYsUUFBUSxHQUFHO1lBQ2YsR0FBRyxFQUFFLEdBQUcsQ0FBQyxTQUFTLEVBQUU7WUFDcEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxVQUFVO1lBQ25DLEtBQUssRUFBRSxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7WUFDMUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFO1NBQ3ZDO1FBR0QsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDZixJQUFJLEdBQUcsR0FBRyxDQUFDO1NBQ1o7O2NBRUssS0FBSyxHQUFHLElBQUksR0FBRyxHQUFHOztjQUNsQixNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDOztjQUN0QyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDO1FBRTFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDckIsT0FBTyxLQUFLLENBQUM7U0FDZDs7Y0FFSyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTs7Y0FDdkIsS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSzs7Y0FDdkMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsTUFBTTs7Y0FFeEMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxHQUFHLEtBQUssSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUUzSixJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTyxLQUFLLENBQUM7U0FDZDs7Y0FFSyxNQUFNLEdBQUc7WUFDYixHQUFHLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvRixJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5RjtRQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7O1lBdkRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuY29uc3QgJCA9IGpxdWVyeTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVmlld3BvcnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGNoZWNrSW5WaWV3cG9ydChlbCwgem9vbTogbnVtYmVyID0gMTAwLCBsZWZ0T2Zmc2V0OiBudW1iZXIgPSAwLCBkZWx0YVg6IG51bWJlciA9IDAuNSkge1xuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgeCA9IGRlbHRhWDtcbiAgICBjb25zdCB5ID0gMC41O1xuXG4gICAgY29uc3Qgd2luID0gJCh3aW5kb3cpO1xuXG4gICAgY29uc3Qgdmlld3BvcnQgPSB7XG4gICAgICB0b3A6IHdpbi5zY3JvbGxUb3AoKSxcbiAgICAgIGxlZnQ6IHdpbi5zY3JvbGxMZWZ0KCkgKyBsZWZ0T2Zmc2V0LFxuICAgICAgcmlnaHQ6IHdpbi5zY3JvbGxMZWZ0KCkgKyB3aW4ud2lkdGgoKSAtIDEwLFxuICAgICAgYm90dG9tOiB3aW4uc2Nyb2xsVG9wKCkgKyB3aW4uaGVpZ2h0KClcbiAgICB9O1xuXG5cbiAgICBpZiAoaXNOYU4oem9vbSkpIHtcbiAgICAgIHpvb20gPSAxMDA7XG4gICAgfVxuXG4gICAgY29uc3Qgem9vbU4gPSB6b29tIC8gMTAwO1xuICAgIGNvbnN0IGhlaWdodCA9ICQoZWwpLm91dGVySGVpZ2h0KCkgKiAoem9vbU4pO1xuICAgIGNvbnN0IHdpZHRoID0gJChlbCkub3V0ZXJXaWR0aCgpICogKHpvb21OKTtcblxuICAgIGlmICghd2lkdGggfHwgIWhlaWdodCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGJvdW5kcyA9ICQoZWwpLm9mZnNldCgpO1xuICAgIGNvbnN0IHJpZ2h0ID0gKGJvdW5kcy5sZWZ0ICogKHpvb21OKSkgKyB3aWR0aDtcbiAgICBjb25zdCBib3R0b20gPSAoYm91bmRzLnRvcCAqICh6b29tTikpICsgaGVpZ2h0O1xuXG4gICAgY29uc3QgdmlzaWJsZSA9ICghKHZpZXdwb3J0LnJpZ2h0IDwgKGJvdW5kcy5sZWZ0ICogKHpvb21OKSkgfHwgdmlld3BvcnQubGVmdCA+IHJpZ2h0IHx8IHZpZXdwb3J0LmJvdHRvbSA8IChib3VuZHMudG9wICogKHpvb21OKSkgfHwgdmlld3BvcnQudG9wID4gYm90dG9tKSk7XG5cbiAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWx0YXMgPSB7XG4gICAgICB0b3A6IHBhcnNlRmxvYXQoTWF0aC5taW4oMSwgKGJvdHRvbSAtIHZpZXdwb3J0LnRvcCkgLyBoZWlnaHQpLnRvRml4ZWQoMikpLFxuICAgICAgYm90dG9tOiBwYXJzZUZsb2F0KE1hdGgubWluKDEsICh2aWV3cG9ydC5ib3R0b20gLSAoYm91bmRzLnRvcCAqICh6b29tTikpKSAvIGhlaWdodCkudG9GaXhlZCgyKSksXG4gICAgICBsZWZ0OiBwYXJzZUZsb2F0KE1hdGgubWluKDEsIChyaWdodCAtIHZpZXdwb3J0LmxlZnQpIC8gd2lkdGgpLnRvRml4ZWQoMikpLFxuICAgICAgcmlnaHQ6IHBhcnNlRmxvYXQoTWF0aC5taW4oMSwgKHZpZXdwb3J0LnJpZ2h0IC0gKGJvdW5kcy5sZWZ0ICogKHpvb21OKSkpIC8gd2lkdGgpLnRvRml4ZWQoMikpXG4gICAgfTtcblxuICAgIHJldHVybiAoZGVsdGFzLmxlZnQgKiBkZWx0YXMucmlnaHQpID49IHggJiYgKGRlbHRhcy50b3AgKiBkZWx0YXMuYm90dG9tKSA+PSB5O1xuICB9XG59XG4iXX0=