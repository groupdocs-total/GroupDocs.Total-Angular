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
     * @param {?} elem
     * @param {?=} parent
     * @return {?}
     */
    isBelowCenterOfTheScreen(elem, parent) {
        /** @type {?} */
        const rect = elem.getBoundingClientRect();
        /** @type {?} */
        const parentRect = parent ? parent.getBoundingClientRect() : { top: 0 };
        /** @type {?} */
        const viewHeight = parent
            ? parent.offsetHeight - parseFloat(window.getComputedStyle(parent).paddingTop || '0')
            : Math.max(document.documentElement.clientHeight, window.innerHeight);
        /** @type {?} */
        const top = rect.top - parentRect.top;
        /** @type {?} */
        const bottom = rect.bottom - parentRect.top + 40;
        /** @type {?} */
        const screenCenter = viewHeight / 2;
        /** @type {?} */
        const elemCenter = rect.height / 2;
        /** @type {?} */
        const isBelowCenterOfTheScreen = bottom >= screenCenter && top - screenCenter <= 0;
        /** @type {?} */
        const isMoreThanHalfVisible = rect.height - Math.abs(top) >= elemCenter;
        return isBelowCenterOfTheScreen || isMoreThanHalfVisible;
    }
    ;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3BvcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi92aWV3cG9ydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7TUFDM0IsQ0FBQyxHQUFHLE1BQU07QUFLaEIsTUFBTSxPQUFPLGVBQWU7SUFFMUI7SUFDQSxDQUFDOzs7Ozs7SUFFRCx3QkFBd0IsQ0FBQyxJQUFpQixFQUFFLE1BQW9COztjQUN4RCxJQUFJLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFOztjQUNuQyxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFOztjQUNqRSxVQUFVLEdBQUcsTUFBTTtZQUN2QixDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUM7WUFDckYsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7Y0FFakUsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUc7O2NBQy9CLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsRUFBRTs7Y0FFMUMsWUFBWSxHQUFHLFVBQVUsR0FBRyxDQUFDOztjQUM3QixVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDOztjQUU1Qix3QkFBd0Is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LEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLEtBQUssRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUY7UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7OztZQTFFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdwb3J0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBpc0JlbG93Q2VudGVyT2ZUaGVTY3JlZW4oZWxlbTogSFRNTEVsZW1lbnQsIHBhcmVudD86IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudCA/IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IHsgdG9wOiAwIH07XG4gICAgY29uc3Qgdmlld0hlaWdodCA9IHBhcmVudFxuICAgICAgPyBwYXJlbnQub2Zmc2V0SGVpZ2h0IC0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpLnBhZGRpbmdUb3AgfHwgJzAnKVxuICAgICAgOiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXG4gICAgY29uc3QgdG9wID0gcmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcDtcbiAgICBjb25zdCBib3R0b20gPSByZWN0LmJvdHRvbSAtIHBhcmVudFJlY3QudG9wICsgNDA7XG5cbiAgICBjb25zdCBzY3JlZW5DZW50ZXIgPSB2aWV3SGVpZ2h0IC8gMjtcbiAgICBjb25zdCBlbGVtQ2VudGVyID0gcmVjdC5oZWlnaHQgLyAyO1xuXG4gICAgY29uc3QgaXNCZWxvd0NlbnRlck9mVGhlU2NyZWVuID0gYm90dG9tID49IHNjcmVlbkNlbnRlciAmJiB0b3AgLSBzY3JlZW5DZW50ZXIgPD0gMDtcbiAgICBjb25zdCBpc01vcmVUaGFuSGFsZlZpc2libGUgPSByZWN0LmhlaWdodCAtIE1hdGguYWJzKHRvcCkgPj0gZWxlbUNlbnRlcjtcblxuICAgIHJldHVybiBpc0JlbG93Q2VudGVyT2ZUaGVTY3JlZW4gfHwgaXNNb3JlVGhhbkhhbGZWaXNpYmxlO1xuICB9O1xuXG4gIGNoZWNrSW5WaWV3cG9ydChlbCwgem9vbTogbnVtYmVyID0gMTAwLCBsZWZ0T2Zmc2V0OiBudW1iZXIgPSAwLCBkZWx0YVg6IG51bWJlciA9IDAuNSkge1xuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgeCA9IGRlbHRhWDtcbiAgICBjb25zdCB5ID0gMC41O1xuXG4gICAgY29uc3Qgd2luID0gJCh3aW5kb3cpO1xuXG4gICAgY29uc3Qgdmlld3BvcnQgPSB7XG4gICAgICB0b3A6IHdpbi5zY3JvbGxUb3AoKSxcbiAgICAgIGxlZnQ6IHdpbi5zY3JvbGxMZWZ0KCkgKyBsZWZ0T2Zmc2V0LFxuICAgICAgcmlnaHQ6IHdpbi5zY3JvbGxMZWZ0KCkgKyB3aW4ud2lkdGgoKSAtIDEwLFxuICAgICAgYm90dG9tOiB3aW4uc2Nyb2xsVG9wKCkgKyB3aW4uaGVpZ2h0KClcbiAgICB9O1xuXG5cbiAgICBpZiAoaXNOYU4oem9vbSkpIHtcbiAgICAgIHpvb20gPSAxMDA7XG4gICAgfVxuXG4gICAgY29uc3Qgem9vbU4gPSB6b29tIC8gMTAwO1xuICAgIGNvbnN0IGhlaWdodCA9ICQoZWwpLm91dGVySGVpZ2h0KCkgKiAoem9vbU4pO1xuICAgIGNvbnN0IHdpZHRoID0gJChlbCkub3V0ZXJXaWR0aCgpICogKHpvb21OKTtcblxuICAgIGlmICghd2lkdGggfHwgIWhlaWdodCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGJvdW5kcyA9ICQoZWwpLm9mZnNldCgpO1xuICAgIGNvbnN0IHJpZ2h0ID0gKGJvdW5kcy5sZWZ0ICogKHpvb21OKSkgKyB3aWR0aDtcbiAgICBjb25zdCBib3R0b20gPSAoYm91bmRzLnRvcCAqICh6b29tTikpICsgaGVpZ2h0O1xuXG4gICAgY29uc3QgdmlzaWJsZSA9ICghKHZpZXdwb3J0LnJpZ2h0IDwgKGJvdW5kcy5sZWZ0ICogKHpvb21OKSkgfHwgdmlld3BvcnQubGVmdCA+IHJpZ2h0IHx8IHZpZXdwb3J0LmJvdHRvbSA8IChib3VuZHMudG9wICogKHpvb21OKSkgfHwgdmlld3BvcnQudG9wID4gYm90dG9tKSk7XG5cbiAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWx0YXMgPSB7XG4gICAgICB0b3A6IHBhcnNlRmxvYXQoTWF0aC5taW4oMSwgKGJvdHRvbSAtIHZpZXdwb3J0LnRvcCkgLyBoZWlnaHQpLnRvRml4ZWQoMikpLFxuICAgICAgYm90dG9tOiBwYXJzZUZsb2F0KE1hdGgubWluKDEsICh2aWV3cG9ydC5ib3R0b20gLSAoYm91bmRzLnRvcCAqICh6b29tTikpKSAvIGhlaWdodCkudG9GaXhlZCgyKSksXG4gICAgICBsZWZ0OiBwYXJzZUZsb2F0KE1hdGgubWluKDEsIChyaWdodCAtIHZpZXdwb3J0LmxlZnQpIC8gd2lkdGgpLnRvRml4ZWQoMikpLFxuICAgICAgcmlnaHQ6IHBhcnNlRmxvYXQoTWF0aC5taW4oMSwgKHZpZXdwb3J0LnJpZ2h0IC0gKGJvdW5kcy5sZWZ0ICogKHpvb21OKSkpIC8gd2lkdGgpLnRvRml4ZWQoMikpXG4gICAgfTtcblxuICAgIHJldHVybiAoZGVsdGFzLmxlZnQgKiBkZWx0YXMucmlnaHQpID49IHggJiYgKGRlbHRhcy50b3AgKiBkZWx0YXMuYm90dG9tKSA+PSB5O1xuICB9XG59XG4iXX0=