/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as jquery from "jquery";
import { Utils } from "../file.service";
/** @type {?} */
var $ = jquery;
var ResizingComponent = /** @class */ (function () {
    function ResizingComponent() {
        this.se = false;
        this.ne = false;
        this.sw = false;
        this.nw = false;
        this.SE = 'se';
        this.NE = 'ne';
        this.SW = 'sw';
        this.NW = 'nw';
        this.offsetX = new EventEmitter();
        this.offsetY = new EventEmitter();
        this.offsetTop = new EventEmitter();
        this.offsetLeft = new EventEmitter();
        this.release = new EventEmitter();
        this.grab = false;
    }
    /**
     * @return {?}
     */
    ResizingComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var width = $(this.getElementId(this.SE)).offset().left - $(this.getElementId(this.NW)).offset().left;
        /** @type {?} */
        var height = $(this.getElementId(this.SE)).offset().top - $(this.getElementId(this.NW)).offset().top;
        this.offsetX.emit(width);
        this.offsetY.emit(height);
    };
    /**
     * @return {?}
     */
    ResizingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ResizingComponent.prototype.catchUp = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        // ff
        $event.dataTransfer.setData('text', 'foo');
        this.grab = true;
        this.oldPosition = Utils.getMousePosition($event);
    };
    /**
     * @param {?} $event
     * @param {?} el
     * @return {?}
     */
    ResizingComponent.prototype.resize = /**
     * @param {?} $event
     * @param {?} el
     * @return {?}
     */
    function ($event, el) {
        if (!this.grab) {
            return;
        }
        /** @type {?} */
        var position = Utils.getMousePosition($event);
        if (position.x === 0 && position.y === 0) {
            return;
        }
        /** @type {?} */
        var notSW = this.NE === el || this.NW === el;
        /** @type {?} */
        var notNE = this.SW === el || this.NW === el;
        this.setOffsets(position, notNE, notSW);
        if (notSW) {
            this.offsetTop.emit(position.y - this.oldPosition.y);
        }
        if (notNE) {
            this.offsetLeft.emit(position.x - this.oldPosition.x);
        }
        this.oldPosition = position;
    };
    /**
     * @private
     * @param {?} position
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    ResizingComponent.prototype.setOffsets = /**
     * @private
     * @param {?} position
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    function (position, x, y) {
        /** @type {?} */
        var offsetX = x ? this.oldPosition.x - position.x : position.x - this.oldPosition.x;
        /** @type {?} */
        var offsetY = y ? this.oldPosition.y - position.y : position.y - this.oldPosition.y;
        this.offsetX.emit(offsetX);
        this.offsetY.emit(offsetY);
    };
    /**
     * @param {?} $event
     * @param {?} el
     * @return {?}
     */
    ResizingComponent.prototype.end = /**
     * @param {?} $event
     * @param {?} el
     * @return {?}
     */
    function ($event, el) {
        // ff
        this.resize($event, el);
        this.release.emit(true);
        this.grab = false;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ResizingComponent.prototype.start = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.drop($event);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ResizingComponent.prototype.drop = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
    };
    /*private getPosition($event: DragEvent, el: string) {
      let left = $event.clientX;
      let top = $event.clientY;
      if (!left || !top) {// ff
        const event1: DragEvent = <DragEvent>window.event;
        left = event1.screenX;
        top = event1.screenY;
      }
      return {x: left, y: top};
    }*/
    /*private getPosition($event: DragEvent, el: string) {
        let left = $event.clientX;
        let top = $event.clientY;
        if (!left || !top) {// ff
          const event1: DragEvent = <DragEvent>window.event;
          left = event1.screenX;
          top = event1.screenY;
        }
        return {x: left, y: top};
      }*/
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    ResizingComponent.prototype.getElementId = /*private getPosition($event: DragEvent, el: string) {
        let left = $event.clientX;
        let top = $event.clientY;
        if (!left || !top) {// ff
          const event1: DragEvent = <DragEvent>window.event;
          left = event1.screenX;
          top = event1.screenY;
        }
        return {x: left, y: top};
      }*/
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    function (el) {
        return "#" + el + "-" + this.id;
    };
    ResizingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-resizing',
                    template: "<div class=\"ui-resizable-handle se-resize\" id=\"se-{{id}}\" *ngIf=\"se\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, SE)\" (dragend)=\"end($event, SE)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"></div>\n\n<div class=\"ui-resizable-handle ne-resize\" id=\"ne-{{id}}\" *ngIf=\"ne\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, NE)\" (dragend)=\"end($event, NE)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"></div>\n\n<div class=\"ui-resizable-handle sw-resize\" id=\"sw-{{id}}\" *ngIf=\"sw\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, SW)\" (dragend)=\"end($event, SW)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"></div>\n\n<div class=\"ui-resizable-handle nw-resize\" id=\"nw-{{id}}\" *ngIf=\"nw\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, NW)\" (dragend)=\"end($event, NW)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"></div>\n",
                    styles: [".ui-resizable-handle{background-color:#679ffa;width:8px;height:8px;border-radius:100%;position:absolute;font-size:.1px;display:block}.se-resize{bottom:-5px;right:-5px;cursor:se-resize}.ne-resize{top:-5px;right:-5px;cursor:ne-resize}.sw-resize{bottom:-5px;left:-5px;cursor:sw-resize}.nw-resize{top:-5px;left:-5px;cursor:nw-resize}"]
                }] }
    ];
    /** @nocollapse */
    ResizingComponent.ctorParameters = function () { return []; };
    ResizingComponent.propDecorators = {
        id: [{ type: Input }],
        se: [{ type: Input }],
        ne: [{ type: Input }],
        sw: [{ type: Input }],
        nw: [{ type: Input }],
        offsetX: [{ type: Output }],
        offsetY: [{ type: Output }],
        offsetTop: [{ type: Output }],
        offsetLeft: [{ type: Output }],
        release: [{ type: Output }]
    };
    return ResizingComponent;
}());
export { ResizingComponent };
if (false) {
    /** @type {?} */
    ResizingComponent.prototype.id;
    /** @type {?} */
    ResizingComponent.prototype.se;
    /** @type {?} */
    ResizingComponent.prototype.ne;
    /** @type {?} */
    ResizingComponent.prototype.sw;
    /** @type {?} */
    ResizingComponent.prototype.nw;
    /** @type {?} */
    ResizingComponent.prototype.SE;
    /** @type {?} */
    ResizingComponent.prototype.NE;
    /** @type {?} */
    ResizingComponent.prototype.SW;
    /** @type {?} */
    ResizingComponent.prototype.NW;
    /** @type {?} */
    ResizingComponent.prototype.offsetX;
    /** @type {?} */
    ResizingComponent.prototype.offsetY;
    /** @type {?} */
    ResizingComponent.prototype.offsetTop;
    /** @type {?} */
    ResizingComponent.prototype.offsetLeft;
    /** @type {?} */
    ResizingComponent.prototype.release;
    /**
     * @type {?}
     * @private
     */
    ResizingComponent.prototype.grab;
    /**
     * @type {?}
     * @private
     */
    ResizingComponent.prototype.oldPosition;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXppbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Jlc2l6aW5nL3Jlc2l6aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGlCQUFpQixDQUFDOztJQUVoQyxDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQTBCRTtRQWxCUyxPQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ1gsT0FBRSxHQUFHLEtBQUssQ0FBQztRQUNYLE9BQUUsR0FBRyxLQUFLLENBQUM7UUFDWCxPQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLE9BQUUsR0FBRyxJQUFJLENBQUM7UUFDVixPQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ1YsT0FBRSxHQUFHLElBQUksQ0FBQztRQUNWLE9BQUUsR0FBRyxJQUFJLENBQUM7UUFFQSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNyQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNyQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN2QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN4QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUV4QyxTQUFJLEdBQUcsS0FBSyxDQUFDO0lBSXJCLENBQUM7Ozs7SUFFRCwyQ0FBZTs7O0lBQWY7O1lBQ1EsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFD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Qzs7SUFDL0Msb0NBQStDOztJQUMvQyxzQ0FBaUQ7O0lBQ2pELHVDQUFrRDs7SUFDbEQsb0NBQWdEOzs7OztJQUVoRCxpQ0FBcUI7Ozs7O0lBQ3JCLHdDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IHtVdGlsc30gZnJvbSBcIi4uL2ZpbGUuc2VydmljZVwiO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1yZXNpemluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXNpemluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jlc2l6aW5nLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVzaXppbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIEBJbnB1dCgpIGlkOiBudW1iZXI7XG4gIEBJbnB1dCgpIHNlID0gZmFsc2U7XG4gIEBJbnB1dCgpIG5lID0gZmFsc2U7XG4gIEBJbnB1dCgpIHN3ID0gZmFsc2U7XG4gIEBJbnB1dCgpIG53ID0gZmFsc2U7XG4gIFNFID0gJ3NlJztcbiAgTkUgPSAnbmUnO1xuICBTVyA9ICdzdyc7XG4gIE5XID0gJ253JztcblxuICBAT3V0cHV0KCkgb2Zmc2V0WCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgb2Zmc2V0WSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgb2Zmc2V0VG9wID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBvZmZzZXRMZWZ0ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSByZWxlYXNlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHByaXZhdGUgZ3JhYiA9IGZhbHNlO1xuICBwcml2YXRlIG9sZFBvc2l0aW9uOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgd2lkdGggPSAkKHRoaXMuZ2V0RWxlbWVudElkKHRoaXMuU0UpKS5vZmZzZXQoKS5sZWZ0IC0gJCh0aGlzLmdldEVsZW1lbnRJZCh0aGlzLk5XKSkub2Zmc2V0KCkubGVmdDtcbiAgICBjb25zdCBoZWlnaHQgPSAkKHRoaXMuZ2V0RWxlbWVudElkKHRoaXMuU0UpKS5vZmZzZXQoKS50b3AgLSAkKHRoaXMuZ2V0RWxlbWVudElkKHRoaXMuTlcpKS5vZmZzZXQoKS50b3A7XG4gICAgdGhpcy5vZmZzZXRYLmVtaXQod2lkdGgpO1xuICAgIHRoaXMub2Zmc2V0WS5lbWl0KGhlaWdodCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGNhdGNoVXAoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAvLyBmZlxuICAgICRldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdmb28nKTtcbiAgICB0aGlzLmdyYWIgPSB0cnVlO1xuICAgIHRoaXMub2xkUG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG4gIH1cblxuICByZXNpemUoJGV2ZW50OiBEcmFnRXZlbnQsIGVsOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuZ3JhYikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcbiAgICBpZiAocG9zaXRpb24ueCA9PT0gMCAmJiBwb3NpdGlvbi55ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5vdFNXID0gdGhpcy5ORSA9PT0gZWwgfHwgdGhpcy5OVyA9PT0gZWw7XG4gICAgY29uc3Qgbm90TkUgPSB0aGlzLlNXID09PSBlbCB8fCB0aGlzLk5XID09PSBlbDtcbiAgICB0aGlzLnNldE9mZnNldHMocG9zaXRpb24sIG5vdE5FLCBub3RTVyk7XG4gICAgaWYgKG5vdFNXKSB7XG4gICAgICB0aGlzLm9mZnNldFRvcC5lbWl0KHBvc2l0aW9uLnkgLSB0aGlzLm9sZFBvc2l0aW9uLnkpO1xuICAgIH1cbiAgICBpZiAobm90TkUpIHtcbiAgICAgIHRoaXMub2Zmc2V0TGVmdC5lbWl0KHBvc2l0aW9uLnggLSB0aGlzLm9sZFBvc2l0aW9uLngpO1xuICAgIH1cbiAgICB0aGlzLm9sZFBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBwcml2YXRlIHNldE9mZnNldHMocG9zaXRpb24sIHg6IGJvb2xlYW4sIHk6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBvZmZzZXRYID0geCA/IHRoaXMub2xkUG9zaXRpb24ueCAtIHBvc2l0aW9uLnggOiBwb3NpdGlvbi54IC0gdGhpcy5vbGRQb3NpdGlvbi54O1xuICAgIGNvbnN0IG9mZnNldFkgPSB5ID8gdGhpcy5vbGRQb3NpdGlvbi55IC0gcG9zaXRpb24ueSA6IHBvc2l0aW9uLnkgLSB0aGlzLm9sZFBvc2l0aW9uLnk7XG4gICAgdGhpcy5vZmZzZXRYLmVtaXQob2Zmc2V0WCk7XG4gICAgdGhpcy5vZmZzZXRZLmVtaXQob2Zmc2V0WSk7XG4gIH1cblxuICBlbmQoJGV2ZW50OiBEcmFnRXZlbnQsIGVsOiBzdHJpbmcpIHtcbiAgICAvLyBmZlxuICAgIHRoaXMucmVzaXplKCRldmVudCwgZWwpO1xuICAgIHRoaXMucmVsZWFzZS5lbWl0KHRydWUpO1xuICAgIHRoaXMuZ3JhYiA9IGZhbHNlO1xuICB9XG5cbiAgc3RhcnQoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICB0aGlzLmRyb3AoJGV2ZW50KTtcbiAgfVxuXG4gIGRyb3AoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICAvKnByaXZhdGUgZ2V0UG9zaXRpb24oJGV2ZW50OiBEcmFnRXZlbnQsIGVsOiBzdHJpbmcpIHtcbiAgICBsZXQgbGVmdCA9ICRldmVudC5jbGllbnRYO1xuICAgIGxldCB0b3AgPSAkZXZlbnQuY2xpZW50WTtcbiAgICBpZiAoIWxlZnQgfHwgIXRvcCkgey8vIGZmXG4gICAgICBjb25zdCBldmVudDE6IERyYWdFdmVudCA9IDxEcmFnRXZlbnQ+d2luZG93LmV2ZW50O1xuICAgICAgbGVmdCA9IGV2ZW50MS5zY3JlZW5YO1xuICAgICAgdG9wID0gZXZlbnQxLnNjcmVlblk7XG4gICAgfVxuICAgIHJldHVybiB7eDogbGVmdCwgeTogdG9wfTtcbiAgfSovXG5cbiAgcHJpdmF0ZSBnZXRFbGVtZW50SWQoZWw6IHN0cmluZykge1xuICAgIHJldHVybiBcIiNcIiArIGVsICsgXCItXCIgKyB0aGlzLmlkO1xuICB9XG59XG4iXX0=