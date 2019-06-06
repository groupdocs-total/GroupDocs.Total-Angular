import {Injectable} from '@angular/core';
import * as $ from "jquery";

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
    let x = deltaX;
    let y = 0.5;

    var win = $(window);

    var viewport = {
      top: win.scrollTop(),
      left: win.scrollLeft() + leftOffset,
      right: win.scrollLeft() + win.width() - 10,
      bottom: win.scrollTop() + win.height()
    };


    if (isNaN(zoom)) {
      zoom = 100;
    }

    const zoomN = zoom / 100;
    var height = $(el).outerHeight() * (zoomN);
    var width = $(el).outerWidth() * (zoomN);

    if (!width || !height) {
      return false;
    }

    var bounds = $(el).offset();
    var right = (bounds.left * (zoomN)) + width;
    var bottom = (bounds.top * (zoomN)) + height;

    var visible = (!(viewport.right < (bounds.left * (zoomN)) || viewport.left > right || viewport.bottom < (bounds.top * (zoomN)) || viewport.top > bottom));

    if (!visible) {
      return false;
    }

    var deltas = {
      top: Math.min(1, (bottom - viewport.top) / height),
      bottom: Math.min(1, (viewport.bottom - (bounds.top * (zoomN))) / height),
      left: Math.min(1, (right - viewport.left) / width),
      right: Math.min(1, (viewport.right - (bounds.left * (zoomN))) / width)
    };

    return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;
  }
}
