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
            if (width_1 >= this.pageWidth) {
                width_1 = this.pageWidth / 2;
            }
            if (height_1 >= this.pageHeight) {
                height_1 = this.pageHeight / 2;
            }
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
        pageWidth: [{ type: Input }],
        pageHeight: [{ type: Input }],
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
    ResizingComponent.prototype.pageWidth;
    /** @type {?} */
    ResizingComponent.prototype.pageHeight;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXppbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Jlc2l6aW5nL3Jlc2l6aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGlCQUFpQixDQUFDOztJQUVoQyxDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQTZCRTtRQXBCUyxPQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ1gsT0FBRSxHQUFHLEtBQUssQ0FBQztRQUNYLE9BQUUsR0FBRyxLQUFLLENBQUM7UUFDWCxPQUFFLEdBQUcsS0FBSyxDQUFDO1FBR3BCLE9BQUUsR0FBRyxJQUFJLENBQUM7UUFDVixPQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ1YsT0FBRSxHQUFHLElBQUksQ0FBQztRQUNWLE9BQUUsR0FBRyxJQUFJLENBQUM7UUFFQSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNyQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNyQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN2QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN4QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUV4QyxTQUFJLEdBQUcsS0FBSyxDQUFDO0lBSXJCLENBQUM7Ozs7SUFFRCwyQ0FBZTs7O0lBQWY7UUFBQSxpQkFpQkM7O1lBaEJPLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7O1lBQ3BD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UyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QiwyNUNBQXdDOztpQkFFekM7Ozs7O3VCQUdFLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSzswQkFNTCxNQUFNOzBCQUNOLE1BQU07NEJBQ04sTUFBTTs2QkFDTixNQUFNOzBCQUNOLE1BQU07O0lBc0ZULHdCQUFDO0NBQUEsQUE5R0QsSUE4R0M7U0F6R1ksaUJBQWlCOzs7SUFFNUIsaUNBQXVCOztJQUN2QiwrQkFBb0I7O0lBQ3BCLCtCQUFvQjs7SUFDcEIsK0JBQW9COztJQUNwQiwrQkFBb0I7O0lBQ3BCLCtCQUFvQjs7SUFDcEIsc0NBQTJCOztJQUMzQix1Q0FBNEI7O0lBQzVCLCtCQUFVOztJQUNWLCtCQUFVOztJQUNWLCtCQUFVOztJQUNWLCtCQUFVOztJQUVWLG9DQUErQzs7SUFDL0Msb0NBQStDOztJQUMvQyxzQ0FBaUQ7O0lBQ2pELHVDQUFrRDs7SUFDbEQsb0NBQWdEOzs7OztJQUVoRCxpQ0FBcUI7Ozs7O0lBQ3JCLHdDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IHtVdGlsc30gZnJvbSBcIi4uL2ZpbGUuc2VydmljZVwiO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1yZXNpemluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXNpemluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jlc2l6aW5nLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVzaXppbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIEBJbnB1dCgpIGluaXQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlkOiBudW1iZXI7XG4gIEBJbnB1dCgpIHNlID0gZmFsc2U7XG4gIEBJbnB1dCgpIG5lID0gZmFsc2U7XG4gIEBJbnB1dCgpIHN3ID0gZmFsc2U7XG4gIEBJbnB1dCgpIG53ID0gZmFsc2U7XG4gIEBJbnB1dCgpIHBhZ2VXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBwYWdlSGVpZ2h0OiBudW1iZXI7XG4gIFNFID0gJ3NlJztcbiAgTkUgPSAnbmUnO1xuICBTVyA9ICdzdyc7XG4gIE5XID0gJ253JztcblxuICBAT3V0cHV0KCkgb2Zmc2V0WCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgb2Zmc2V0WSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgb2Zmc2V0VG9wID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBvZmZzZXRMZWZ0ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSByZWxlYXNlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHByaXZhdGUgZ3JhYiA9IGZhbHNlO1xuICBwcml2YXRlIG9sZFBvc2l0aW9uOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgZWxTRSA9ICQodGhpcy5nZXRFbGVtZW50SWQodGhpcy5TRSkpO1xuICAgIGNvbnN0IGVsTlcgPSAkKHRoaXMuZ2V0RWxlbWVudElkKHRoaXMuTlcpKTtcbiAgICBpZiAodGhpcy5pbml0ICYmIGVsU0UgJiYgZWxOVyAmJiBlbFNFLm9mZnNldCgpICYmIGVsTlcub2Zmc2V0KCkpIHtcbiAgICAgIGxldCB3aWR0aCA9IGVsU0Uub2Zmc2V0KCkubGVmdCAtIGVsTlcub2Zmc2V0KCkubGVmdDtcbiAgICAgIGxldCBoZWlnaHQgPSBlbFNFLm9mZnNldCgpLnRvcCAtIGVsTlcub2Zmc2V0KCkudG9wO1xuICAgICAgaWYgKHdpZHRoID49IHRoaXMucGFnZVdpZHRoKSB7XG4gICAgICAgIHdpZHRoID0gdGhpcy5wYWdlV2lkdGggLyAyO1xuICAgICAgfVxuICAgICAgaWYgKGhlaWdodCA+PSB0aGlzLnBhZ2VIZWlnaHQpIHtcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5wYWdlSGVpZ2h0IC8gMjtcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLm9mZnNldFguZW1pdCh3aWR0aCk7XG4gICAgICAgIHRoaXMub2Zmc2V0WS5lbWl0KGhlaWdodCk7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgY2F0Y2hVcCgkZXZlbnQ6IERyYWdFdmVudCkge1xuICAgIC8vIGZmXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCRldmVudC5kYXRhVHJhbnNmZXIpIHsgLy8gZmZcbiAgICAgICRldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdmb28nKTtcbiAgICB9XG4gICAgdGhpcy5ncmFiID0gdHJ1ZTtcbiAgICB0aGlzLm9sZFBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xuICB9XG5cbiAgcmVzaXplKCRldmVudDogRHJhZ0V2ZW50LCBlbDogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmdyYWIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG4gICAgaWYgKHBvc2l0aW9uLnggPT09IDAgJiYgcG9zaXRpb24ueSA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBub3RTVyA9IHRoaXMuTkUgPT09IGVsIHx8IHRoaXMuTlcgPT09IGVsO1xuICAgIGNvbnN0IG5vdE5FID0gdGhpcy5TVyA9PT0gZWwgfHwgdGhpcy5OVyA9PT0gZWw7XG4gICAgdGhpcy5zZXRPZmZzZXRzKHBvc2l0aW9uLCBub3RORSwgbm90U1cpO1xuICAgIGlmIChub3RTVykge1xuICAgICAgdGhpcy5vZmZzZXRUb3AuZW1pdChwb3NpdGlvbi55IC0gdGhpcy5vbGRQb3NpdGlvbi55KTtcbiAgICB9XG4gICAgaWYgKG5vdE5FKSB7XG4gICAgICB0aGlzLm9mZnNldExlZnQuZW1pdChwb3NpdGlvbi54IC0gdGhpcy5vbGRQb3NpdGlvbi54KTtcbiAgICB9XG4gICAgdGhpcy5vbGRQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRPZmZzZXRzKHBvc2l0aW9uLCB4OiBib29sZWFuLCB5OiBib29sZWFuKSB7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IHggPyB0aGlzLm9sZFBvc2l0aW9uLnggLSBwb3NpdGlvbi54IDogcG9zaXRpb24ueCAtIHRoaXMub2xkUG9zaXRpb24ueDtcbiAgICBjb25zdCBvZmZzZXRZID0geSA/IHRoaXMub2xkUG9zaXRpb24ueSAtIHBvc2l0aW9uLnkgOiBwb3NpdGlvbi55IC0gdGhpcy5vbGRQb3NpdGlvbi55O1xuICAgIHRoaXMub2Zmc2V0WC5lbWl0KG9mZnNldFgpO1xuICAgIHRoaXMub2Zmc2V0WS5lbWl0KG9mZnNldFkpO1xuICB9XG5cbiAgZW5kKCRldmVudDogRHJhZ0V2ZW50LCBlbDogc3RyaW5nKSB7XG4gICAgLy8gZmZcbiAgICB0aGlzLnJlc2l6ZSgkZXZlbnQsIGVsKTtcbiAgICB0aGlzLnJlbGVhc2UuZW1pdCh0cnVlKTtcbiAgICB0aGlzLmdyYWIgPSBmYWxzZTtcbiAgfVxuXG4gIHN0YXJ0KCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgdGhpcy5kcm9wKCRldmVudCk7XG4gIH1cblxuICBkcm9wKCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbGVtZW50SWQoZWw6IHN0cmluZykge1xuICAgIHJldHVybiBcIiNcIiArIGVsICsgXCItXCIgKyB0aGlzLmlkO1xuICB9XG59XG4iXX0=