import {Injectable} from '@angular/core';
import * as jquery from "jquery";
const $ = jquery;

@Injectable({
  providedIn: 'root'
})
export class ViewportService {

  constructor() {
  }

  isBelowCenterOfTheScreen(elem: HTMLElement, parent?: HTMLElement) {
    const rect = elem.getBoundingClientRect();
    const parentRect = parent ? parent.getBoundingClientRect() : { top: 0 };
    const viewHeight = parent
      ? parent.offsetHeight - parseFloat(window.getComputedStyle(parent).paddingTop || '0')
      : Math.max(document.documentElement.clientHeight, window.innerHeight);

    const top = rect.top - parentRect.top;
    const bottom = rect.bottom - parentRect.top;

    const screenCenter = viewHeight / 2;
    const elemCenter = rect.height / 2;

    const isBelowCenterOfTheScreen = bottom > screenCenter && top - screenCenter < 0;
    const isMoreThanHalfVisible = (viewHeight - top) > elemCenter;

    return isBelowCenterOfTheScreen || isMoreThanHalfVisible;
  };

  checkInViewport(el, zoom: number = 100, leftOffset: number = 0, deltaX: number = 0.5) {
    if (!el) {
      return false;
    }
    const x = deltaX;
    const y = 0.5;

    const win = $(window);

    const viewport = {
      top: win.scrollTop(),
      left: win.scrollLeft() + leftOffset,
      right: win.scrollLeft() + win.width() - 10,
      bottom: win.scrollTop() + win.height()
    };


    if (isNaN(zoom)) {
      zoom = 100;
    }

    const zoomN = zoom / 100;
    const height = $(el).outerHeight() * (zoomN);
    const width = $(el).outerWidth() * (zoomN);

    if (!width || !height) {
      return false;
    }

    const bounds = $(el).offset();
    const right = (bounds.left * (zoomN)) + width;
    const bottom = (bounds.top * (zoomN)) + height;

    const visible = (!(viewport.right < (bounds.left * (zoomN)) || viewport.left > right || viewport.bottom < (bounds.top * (zoomN)) || viewport.top > bottom));

    if (!visible) {
      return false;
    }

    const deltas = {
      top: parseFloat(Math.min(1, (bottom - viewport.top) / height).toFixed(2)),
      bottom: parseFloat(Math.min(1, (viewport.bottom - (bounds.top * (zoomN))) / height).toFixed(2)),
      left: parseFloat(Math.min(1, (right - viewport.left) / width).toFixed(2)),
      right: parseFloat(Math.min(1, (viewport.right - (bounds.left * (zoomN))) / width).toFixed(2))
    };

    return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;
  }
}
