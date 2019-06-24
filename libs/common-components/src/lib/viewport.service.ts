import {Injectable} from '@angular/core';
import * as jquery from "jquery";
const $ = jquery;

@Injectable({
  providedIn: 'root'
})
export class ViewportService {

  constructor() {
  }

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
      top: Math.min(1, (bottom - viewport.top) / height),
      bottom: Math.min(1, (viewport.bottom - (bounds.top * (zoomN))) / height),
      left: Math.min(1, (right - viewport.left) / width),
      right: Math.min(1, (viewport.right - (bounds.left * (zoomN))) / width)
    };

    return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;
  }
}
