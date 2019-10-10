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
        var _this = this;
        /** @type {?} */
        var elSE = $(this.getElementId(this.SE));
        /** @type {?} */
        var elNW = $(this.getElementId(this.NW));
        if (this.init && elSE && elNW && elSE.offset() && elNW.offset()) {
            /** @type {?} */
            var width_1 = elSE.offset().left - elNW.offset().left;
            /** @type {?} */
            var height_1 = elSE.offset().top - elNW.offset().top;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.offsetX.emit(width_1);
                _this.offsetY.emit(height_1);
            }), 100);
        }
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
        $event.preventDefault();
        if ($event.dataTransfer) { // ff
            $event.dataTransfer.setData('text', 'foo');
        }
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
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    ResizingComponent.prototype.getElementId = /**
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
                    template: "<div class=\"ui-resizable-handle se-resize\" id=\"se-{{id}}\" *ngIf=\"se\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, SE)\" (dragend)=\"end($event, SE)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\n      (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, SE)\" (panend)=\"end($event, SE)\"></div>\n\n<div class=\"ui-resizable-handle ne-resize\" id=\"ne-{{id}}\" *ngIf=\"ne\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, NE)\" (dragend)=\"end($event, NE)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\n     (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, NE)\" (panend)=\"end($event, NE)\"></div>\n\n<div class=\"ui-resizable-handle sw-resize\" id=\"sw-{{id}}\" *ngIf=\"sw\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, SW)\" (dragend)=\"end($event, SW)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\n     (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, SW)\" (panend)=\"end($event, SW)\"></div>\n\n<div class=\"ui-resizable-handle nw-resize\" id=\"nw-{{id}}\" *ngIf=\"nw\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, NW)\" (dragend)=\"end($event, NW)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\n     (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, NW)\" (panend)=\"end($event, NW)\"></div>\n",
                    styles: [".ui-resizable-handle{background-color:#679ffa;width:8px;height:8px;border-radius:100%;position:absolute;font-size:.1px;display:block}.se-resize{bottom:-5px;right:-5px;cursor:se-resize}.ne-resize{top:-5px;right:-5px;cursor:ne-resize}.sw-resize{bottom:-5px;left:-5px;cursor:sw-resize}.nw-resize{top:-5px;left:-5px;cursor:nw-resize}"]
                }] }
    ];
    /** @nocollapse */
    ResizingComponent.ctorParameters = function () { return []; };
    ResizingComponent.propDecorators = {
        init: [{ type: Input }],
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
    ResizingComponent.prototype.init;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXppbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Jlc2l6aW5nL3Jlc2l6aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGlCQUFpQixDQUFDOztJQUVoQyxDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQTJCRTtRQWxCUyxPQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ1gsT0FBRSxHQUFHLEtBQUssQ0FBQztRQUNYLE9BQUUsR0FBRyxLQUFLLENBQUM7UUFDWCxPQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLE9BQUUsR0FBRyxJQUFJLENBQUM7UUFDVixPQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ1YsT0FBRSxHQUFHLElBQUksQ0FBQztRQUNWLE9BQUUsR0FBRyxJQUFJLENBQUM7UUFFQSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNyQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNyQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN2QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN4QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUV4QyxTQUFJLEdBQUcsS0FBSyxDQUFDO0lBSXJCLENBQUM7Ozs7SUFFRCwyQ0FBZTs7O0lBQWY7UUFBQSxpQkFXQzs7WUFWTyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztZQUNwQyxJ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O0NBQUEsQUF0R0QsSUFzR0M7U0FqR1ksaUJBQWlCOzs7SUFFNUIsaUNBQXVCOztJQUN2QiwrQkFBb0I7O0lBQ3BCLCtCQUFvQjs7SUFDcEIsK0JBQW9COztJQUNwQiwrQkFBb0I7O0lBQ3BCLCtCQUFvQjs7SUFDcEIsK0JBQVU7O0lBQ1YsK0JBQVU7O0lBQ1YsK0JBQVU7O0lBQ1YsK0JBQVU7O0lBRVYsb0NBQStDOztJQUMvQyxvQ0FBK0M7O0lBQy9DLHNDQUFpRDs7SUFDakQsdUNBQWtEOztJQUNsRCxvQ0FBZ0Q7Ozs7O0lBRWhELGlDQUFxQjs7Ozs7SUFDckIsd0NBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi4vZmlsZS5zZXJ2aWNlXCI7XG5cbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXJlc2l6aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc2l6aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVzaXppbmcuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNpemluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgQElucHV0KCkgaW5pdDogYm9vbGVhbjtcbiAgQElucHV0KCkgaWQ6IG51bWJlcjtcbiAgQElucHV0KCkgc2UgPSBmYWxzZTtcbiAgQElucHV0KCkgbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgc3cgPSBmYWxzZTtcbiAgQElucHV0KCkgbncgPSBmYWxzZTtcbiAgU0UgPSAnc2UnO1xuICBORSA9ICduZSc7XG4gIFNXID0gJ3N3JztcbiAgTlcgPSAnbncnO1xuXG4gIEBPdXRwdXQoKSBvZmZzZXRYID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBvZmZzZXRZID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBvZmZzZXRUb3AgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIG9mZnNldExlZnQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHJlbGVhc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgcHJpdmF0ZSBncmFiID0gZmFsc2U7XG4gIHByaXZhdGUgb2xkUG9zaXRpb246IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBlbFNFID0gJCh0aGlzLmdldEVsZW1lbnRJZCh0aGlzLlNFKSk7XG4gICAgY29uc3QgZWxOVyA9ICQodGhpcy5nZXRFbGVtZW50SWQodGhpcy5OVykpO1xuICAgIGlmICh0aGlzLmluaXQgJiYgZWxTRSAmJiBlbE5XICYmIGVsU0Uub2Zmc2V0KCkgJiYgZWxOVy5vZmZzZXQoKSkge1xuICAgICAgY29uc3Qgd2lkdGggPSBlbFNFLm9mZnNldCgpLmxlZnQgLSBlbE5XLm9mZnNldCgpLmxlZnQ7XG4gICAgICBjb25zdCBoZWlnaHQgPSBlbFNFLm9mZnNldCgpLnRvcCAtIGVsTlcub2Zmc2V0KCkudG9wO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMub2Zmc2V0WC5lbWl0KHdpZHRoKTtcbiAgICAgICAgdGhpcy5vZmZzZXRZLmVtaXQoaGVpZ2h0KTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBjYXRjaFVwKCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgLy8gZmZcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoJGV2ZW50LmRhdGFUcmFuc2ZlcikgeyAvLyBmZlxuICAgICAgJGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ2ZvbycpO1xuICAgIH1cbiAgICB0aGlzLmdyYWIgPSB0cnVlO1xuICAgIHRoaXMub2xkUG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG4gIH1cblxuICByZXNpemUoJGV2ZW50OiBEcmFnRXZlbnQsIGVsOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuZ3JhYikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcbiAgICBpZiAocG9zaXRpb24ueCA9PT0gMCAmJiBwb3NpdGlvbi55ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5vdFNXID0gdGhpcy5ORSA9PT0gZWwgfHwgdGhpcy5OVyA9PT0gZWw7XG4gICAgY29uc3Qgbm90TkUgPSB0aGlzLlNXID09PSBlbCB8fCB0aGlzLk5XID09PSBlbDtcbiAgICB0aGlzLnNldE9mZnNldHMocG9zaXRpb24sIG5vdE5FLCBub3RTVyk7XG4gICAgaWYgKG5vdFNXKSB7XG4gICAgICB0aGlzLm9mZnNldFRvcC5lbWl0KHBvc2l0aW9uLnkgLSB0aGlzLm9sZFBvc2l0aW9uLnkpO1xuICAgIH1cbiAgICBpZiAobm90TkUpIHtcbiAgICAgIHRoaXMub2Zmc2V0TGVmdC5lbWl0KHBvc2l0aW9uLnggLSB0aGlzLm9sZFBvc2l0aW9uLngpO1xuICAgIH1cbiAgICB0aGlzLm9sZFBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBwcml2YXRlIHNldE9mZnNldHMocG9zaXRpb24sIHg6IGJvb2xlYW4sIHk6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBvZmZzZXRYID0geCA/IHRoaXMub2xkUG9zaXRpb24ueCAtIHBvc2l0aW9uLnggOiBwb3NpdGlvbi54IC0gdGhpcy5vbGRQb3NpdGlvbi54O1xuICAgIGNvbnN0IG9mZnNldFkgPSB5ID8gdGhpcy5vbGRQb3NpdGlvbi55IC0gcG9zaXRpb24ueSA6IHBvc2l0aW9uLnkgLSB0aGlzLm9sZFBvc2l0aW9uLnk7XG4gICAgdGhpcy5vZmZzZXRYLmVtaXQob2Zmc2V0WCk7XG4gICAgdGhpcy5vZmZzZXRZLmVtaXQob2Zmc2V0WSk7XG4gIH1cblxuICBlbmQoJGV2ZW50OiBEcmFnRXZlbnQsIGVsOiBzdHJpbmcpIHtcbiAgICAvLyBmZlxuICAgIHRoaXMucmVzaXplKCRldmVudCwgZWwpO1xuICAgIHRoaXMucmVsZWFzZS5lbWl0KHRydWUpO1xuICAgIHRoaXMuZ3JhYiA9IGZhbHNlO1xuICB9XG5cbiAgc3RhcnQoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICB0aGlzLmRyb3AoJGV2ZW50KTtcbiAgfVxuXG4gIGRyb3AoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBwcml2YXRlIGdldEVsZW1lbnRJZChlbDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIFwiI1wiICsgZWwgKyBcIi1cIiArIHRoaXMuaWQ7XG4gIH1cbn1cbiJdfQ==