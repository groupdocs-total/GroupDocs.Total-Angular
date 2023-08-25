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
        const bottom = rect.bottom - parentRect.top;
        /** @type {?} */
        const screenCenter = viewHeight / 2;
        /** @type {?} */
        const elemCenter = rect.height / 2;
        /** @type {?} */
        const isBelowCenterOfTheScreen = bottom > screenCenter && top - screenCenter < 0;
        /** @type {?} */
        const isMoreThanHalfVisible = (viewHeight - top) > elemCenter;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3BvcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi92aWV3cG9ydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7TUFDM0IsQ0FBQyxHQUFHLE1BQU07QUFLaEIsTUFBTSxPQUFPLGVBQWU7SUFFMUI7SUFDQSxDQUFDOzs7Ozs7SUFFRCx3QkFBd0IsQ0FBQyxJQUFpQixFQUFFLE1BQW9COztjQUN4RCxJQUFJLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFOztjQUNuQyxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFOztjQUNqRSxVQUFVLEdBQUcsTUFBTTtZQUN2QixDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUM7WUFDckYsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7Y0FFakUsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUc7O2NBQy9CLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxHQUFHOztjQUVyQyxZQUFZLEdBQUcsVUFBVSxHQUFHLENBQUM7O2NBQzdCLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7O2NBRTVCLHdCQUF3QixHQUFHLE1BQU0s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LEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RSxLQUFLLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlGO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRixDQUFDOzs7WUExRUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tIFwianF1ZXJ5XCI7XG5jb25zdCAkID0ganF1ZXJ5O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBWaWV3cG9ydFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgaXNCZWxvd0NlbnRlck9mVGhlU2NyZWVuKGVsZW06IEhUTUxFbGVtZW50LCBwYXJlbnQ/OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHBhcmVudFJlY3QgPSBwYXJlbnQgPyBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiB7IHRvcDogMCB9O1xuICAgIGNvbnN0IHZpZXdIZWlnaHQgPSBwYXJlbnRcbiAgICAgID8gcGFyZW50Lm9mZnNldEhlaWdodCAtIHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KS5wYWRkaW5nVG9wIHx8ICcwJylcbiAgICAgIDogTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0KTtcblxuICAgIGNvbnN0IHRvcCA9IHJlY3QudG9wIC0gcGFyZW50UmVjdC50b3A7XG4gICAgY29uc3QgYm90dG9tID0gcmVjdC5ib3R0b20gLSBwYXJlbnRSZWN0LnRvcDtcblxuICAgIGNvbnN0IHNjcmVlbkNlbnRlciA9IHZpZXdIZWlnaHQgLyAyO1xuICAgIGNvbnN0IGVsZW1DZW50ZXIgPSByZWN0LmhlaWdodCAvIDI7XG5cbiAgICBjb25zdCBpc0JlbG93Q2VudGVyT2ZUaGVTY3JlZW4gPSBib3R0b20gPiBzY3JlZW5DZW50ZXIgJiYgdG9wIC0gc2NyZWVuQ2VudGVyIDwgMDtcbiAgICBjb25zdCBpc01vcmVUaGFuSGFsZlZpc2libGUgPSAodmlld0hlaWdodCAtIHRvcCkgPiBlbGVtQ2VudGVyO1xuXG4gICAgcmV0dXJuIGlzQmVsb3dDZW50ZXJPZlRoZVNjcmVlbiB8fCBpc01vcmVUaGFuSGFsZlZpc2libGU7XG4gIH07XG5cbiAgY2hlY2tJblZpZXdwb3J0KGVsLCB6b29tOiBudW1iZXIgPSAxMDAsIGxlZnRPZmZzZXQ6IG51bWJlciA9IDAsIGRlbHRhWDogbnVtYmVyID0gMC41KSB7XG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB4ID0gZGVsdGFYO1xuICAgIGNvbnN0IHkgPSAwLjU7XG5cbiAgICBjb25zdCB3aW4gPSAkKHdpbmRvdyk7XG5cbiAgICBjb25zdCB2aWV3cG9ydCA9IHtcbiAgICAgIHRvcDogd2luLnNjcm9sbFRvcCgpLFxuICAgICAgbGVmdDogd2luLnNjcm9sbExlZnQoKSArIGxlZnRPZmZzZXQsXG4gICAgICByaWdodDogd2luLnNjcm9sbExlZnQoKSArIHdpbi53aWR0aCgpIC0gMTAsXG4gICAgICBib3R0b206IHdpbi5zY3JvbGxUb3AoKSArIHdpbi5oZWlnaHQoKVxuICAgIH07XG5cblxuICAgIGlmIChpc05hTih6b29tKSkge1xuICAgICAgem9vbSA9IDEwMDtcbiAgICB9XG5cbiAgICBjb25zdCB6b29tTiA9IHpvb20gLyAxMDA7XG4gICAgY29uc3QgaGVpZ2h0ID0gJChlbCkub3V0ZXJIZWlnaHQoKSAqICh6b29tTik7XG4gICAgY29uc3Qgd2lkdGggPSAkKGVsKS5vdXRlcldpZHRoKCkgKiAoem9vbU4pO1xuXG4gICAgaWYgKCF3aWR0aCB8fCAhaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgYm91bmRzID0gJChlbCkub2Zmc2V0KCk7XG4gICAgY29uc3QgcmlnaHQgPSAoYm91bmRzLmxlZnQgKiAoem9vbU4pKSArIHdpZHRoO1xuICAgIGNvbnN0IGJvdHRvbSA9IChib3VuZHMudG9wICogKHpvb21OKSkgKyBoZWlnaHQ7XG5cbiAgICBjb25zdCB2aXNpYmxlID0gKCEodmlld3BvcnQucmlnaHQgPCAoYm91bmRzLmxlZnQgKiAoem9vbU4pKSB8fCB2aWV3cG9ydC5sZWZ0ID4gcmlnaHQgfHwgdmlld3BvcnQuYm90dG9tIDwgKGJvdW5kcy50b3AgKiAoem9vbU4pKSB8fCB2aWV3cG9ydC50b3AgPiBib3R0b20pKTtcblxuICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbHRhcyA9IHtcbiAgICAgIHRvcDogcGFyc2VGbG9hdChNYXRoLm1pbigxLCAoYm90dG9tIC0gdmlld3BvcnQudG9wKSAvIGhlaWdodCkudG9GaXhlZCgyKSksXG4gICAgICBib3R0b206IHBhcnNlRmxvYXQoTWF0aC5taW4oMSwgKHZpZXdwb3J0LmJvdHRvbSAtIChib3VuZHMudG9wICogKHpvb21OKSkpIC8gaGVpZ2h0KS50b0ZpeGVkKDIpKSxcbiAgICAgIGxlZnQ6IHBhcnNlRmxvYXQoTWF0aC5taW4oMSwgKHJpZ2h0IC0gdmlld3BvcnQubGVmdCkgLyB3aWR0aCkudG9GaXhlZCgyKSksXG4gICAgICByaWdodDogcGFyc2VGbG9hdChNYXRoLm1pbigxLCAodmlld3BvcnQucmlnaHQgLSAoYm91bmRzLmxlZnQgKiAoem9vbU4pKSkgLyB3aWR0aCkudG9GaXhlZCgyKSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIChkZWx0YXMubGVmdCAqIGRlbHRhcy5yaWdodCkgPj0geCAmJiAoZGVsdGFzLnRvcCAqIGRlbHRhcy5ib3R0b20pID49IHk7XG4gIH1cbn1cbiJdfQ==