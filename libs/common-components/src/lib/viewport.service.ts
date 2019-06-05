import {Injectable} from '@angular/core';
import * as $ from "jquery";

@Injectable({
  providedIn: 'root'
})
export class ViewportService {

  constructor() {
  }

  checkInViewport(el, zoom: number = 100, leftOffset: number = 0) {
    if (!el) {
      return false;
    }
    let x = 0.5;
    let y = 0.5;

    var win = $(window);

    var viewport = {
      top: win.scrollTop(),
      left: win.scrollLeft() + leftOffset,
      right: win.scrollLeft() + win.width() - leftOffset,
      bottom: win.scrollTop() + win.height()
    };


    if (isNaN(zoom)) {
      zoom = 1;
    }

    var height = $(el).outerHeight() * (zoom / 100);
    var width = $(el).outerWidth() * (zoom / 100);

    if (!width || !height) {
      return false;
    }

    var bounds = $(el).offset();
    var right = (bounds.left * (zoom / 100)) + width;
    var bottom = (bounds.top * (zoom / 100)) + height;

    var visible = (!(viewport.right < (bounds.left * (zoom / 100)) || viewport.left > right || viewport.bottom < (bounds.top * (zoom / 100)) || viewport.top > bottom));

    if (!visible) {
      return false;
    }

    var deltas = {
      top: Math.min(1, (bottom - viewport.top) / height),
      bottom: Math.min(1, (viewport.bottom - (bounds.top * (zoom / 100))) / height),
      left: Math.min(1, (right - viewport.left) / width),
      right: Math.min(1, (viewport.right - (bounds.left * (zoom / 100))) / width)
    };

    return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;
  }
}
