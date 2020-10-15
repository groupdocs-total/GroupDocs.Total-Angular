/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as jquery from "jquery";
import { Utils } from "../file.service";
/** @type {?} */
const $ = jquery;
export class ResizingComponent {
    constructor() {
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
    ngAfterViewInit() {
        /** @type {?} */
        const elSE = $(this.getElementId(this.SE));
        /** @type {?} */
        const elNW = $(this.getElementId(this.NW));
        if (this.init && elSE && elNW && elSE.offset() && elNW.offset()) {
            /** @type {?} */
            let width = elSE.offset().left - elNW.offset().left;
            /** @type {?} */
            let height = elSE.offset().top - elNW.offset().top;
            while (width >= this.pageWidth || height >= this.pageHeight) {
                width = width / 2;
                height = height / 2;
            }
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.offsetX.emit(width);
                this.offsetY.emit(height);
            }), 100);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    catchUp($event) {
        // ff
        $event.preventDefault();
        if ($event.dataTransfer) { // ff
            $event.dataTransfer.setData('text', 'foo');
        }
        this.grab = true;
        this.oldPosition = Utils.getMousePosition($event);
    }
    /**
     * @param {?} $event
     * @param {?} el
     * @return {?}
     */
    resize($event, el) {
        if (!this.grab) {
            return;
        }
        /** @type {?} */
        const position = Utils.getMousePosition($event);
        if (position.x === 0 && position.y === 0) {
            return;
        }
        /** @type {?} */
        const notSW = this.NE === el || this.NW === el;
        /** @type {?} */
        const notNE = this.SW === el || this.NW === el;
        this.setOffsets(position, notNE, notSW);
        if (notSW) {
            this.offsetTop.emit(position.y - this.oldPosition.y);
        }
        if (notNE) {
            this.offsetLeft.emit(position.x - this.oldPosition.x);
        }
        this.oldPosition = position;
    }
    /**
     * @private
     * @param {?} position
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    setOffsets(position, x, y) {
        /** @type {?} */
        const offsetX = x ? this.oldPosition.x - position.x : position.x - this.oldPosition.x;
        /** @type {?} */
        const offsetY = y ? this.oldPosition.y - position.y : position.y - this.oldPosition.y;
        this.offsetX.emit(offsetX);
        this.offsetY.emit(offsetY);
    }
    /**
     * @param {?} $event
     * @param {?} el
     * @return {?}
     */
    end($event, el) {
        // ff
        this.resize($event, el);
        this.release.emit(true);
        this.grab = false;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    start($event) {
        this.drop($event);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    drop($event) {
        $event.stopPropagation();
        $event.preventDefault();
    }
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    getElementId(el) {
        return "#" + el + "-" + this.id;
    }
}
ResizingComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-resizing',
                template: "<div class=\"ui-resizable-handle se-resize\" id=\"se-{{id}}\" *ngIf=\"se\" [draggable]=\"true\" (dragover)=\"start($event)\"\r\n     (drag)=\"resize($event, SE)\" (dragend)=\"end($event, SE)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\r\n      (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, SE)\" (panend)=\"end($event, SE)\"></div>\r\n\r\n<div class=\"ui-resizable-handle ne-resize\" id=\"ne-{{id}}\" *ngIf=\"ne\" [draggable]=\"true\" (dragover)=\"start($event)\"\r\n     (drag)=\"resize($event, NE)\" (dragend)=\"end($event, NE)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\r\n     (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, NE)\" (panend)=\"end($event, NE)\"></div>\r\n\r\n<div class=\"ui-resizable-handle sw-resize\" id=\"sw-{{id}}\" *ngIf=\"sw\" [draggable]=\"true\" (dragover)=\"start($event)\"\r\n     (drag)=\"resize($event, SW)\" (dragend)=\"end($event, SW)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\r\n     (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, SW)\" (panend)=\"end($event, SW)\"></div>\r\n\r\n<div class=\"ui-resizable-handle nw-resize\" id=\"nw-{{id}}\" *ngIf=\"nw\" [draggable]=\"true\" (dragover)=\"start($event)\"\r\n     (drag)=\"resize($event, NW)\" (dragend)=\"end($event, NW)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\r\n     (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, NW)\" (panend)=\"end($event, NW)\"></div>\r\n",
                styles: [".ui-resizable-handle{background-color:#679ffa;width:8px;height:8px;border-radius:100%;position:absolute;font-size:.1px;display:block}.se-resize{bottom:-5px;right:-5px;cursor:se-resize}.ne-resize{top:-5px;right:-5px;cursor:ne-resize}.sw-resize{bottom:-5px;left:-5px;cursor:sw-resize}.nw-resize{top:-5px;left:-5px;cursor:nw-resize}@media (max-width:1037px){.ui-resizable-handle{width:12px;height:12px}}"]
            }] }
];
/** @nocollapse */
ResizingComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXppbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Jlc2l6aW5nL3Jlc2l6aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGlCQUFpQixDQUFDOztNQUVoQyxDQUFDLEdBQUcsTUFBTTtBQU9oQixNQUFNLE9BQU8saUJBQWlCO0lBd0I1QjtRQXBCUyxPQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ1gsT0FBRSxHQUFHLEtBQUssQ0FBQztRQUNYLE9BQUUsR0FBRyxLQUFLLENBQUM7UUFDWCxPQUFFLEdBQUcsS0FBSyxDQUFDO1FBR3BCLE9BQUUsR0FBRyxJQUFJLENBQUM7UUFDVixPQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ1YsT0FBRSxHQUFHLElBQUksQ0FBQztRQUNWLE9BQUUsR0FBRyxJQUFJLENBQUM7UUFFQSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNyQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNyQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN2QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN4QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUV4QyxTQUFJLEdBQUcsS0FBSyxDQUFDO0lBSXJCLENBQUM7Ozs7SUFFRCxlQUFlOztjQUNQLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7O2NBQ3BDLElB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QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSztzQkFNTCxNQUFNO3NCQUNOLE1BQU07d0JBQ04sTUFBTTt5QkFDTixNQUFNO3NCQUNOLE1BQU07Ozs7SUFqQlAsaUNBQXVCOztJQUN2QiwrQkFBb0I7O0lBQ3BCLCtCQUFvQjs7SUFDcEIsK0JBQW9COztJQUNwQiwrQkFBb0I7O0lBQ3BCLCtCQUFvQjs7SUFDcEIsc0NBQTJCOztJQUMzQix1Q0FBNEI7O0lBQzVCLCtCQUFVOztJQUNWLCtCQUFVOztJQUNWLCtCQUFVOztJQUNWLCtCQUFVOztJQUVWLG9DQUErQzs7SUFDL0Msb0NBQStDOztJQUMvQyxzQ0FBaUQ7O0lBQ2pELHVDQUFrRDs7SUFDbEQsb0NBQWdEOzs7OztJQUVoRCxpQ0FBcUI7Ozs7O0lBQ3JCLHdDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi9maWxlLnNlcnZpY2VcIjtcclxuXHJcbmNvbnN0ICQgPSBqcXVlcnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXJlc2l6aW5nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmVzaXppbmcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Jlc2l6aW5nLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlc2l6aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQElucHV0KCkgaW5pdDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpZDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHNlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbmUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzdyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG53ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcGFnZVdpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcGFnZUhlaWdodDogbnVtYmVyO1xyXG4gIFNFID0gJ3NlJztcclxuICBORSA9ICduZSc7XHJcbiAgU1cgPSAnc3cnO1xyXG4gIE5XID0gJ253JztcclxuXHJcbiAgQE91dHB1dCgpIG9mZnNldFggPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgb2Zmc2V0WSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSBvZmZzZXRUb3AgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgb2Zmc2V0TGVmdCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSByZWxlYXNlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBwcml2YXRlIGdyYWIgPSBmYWxzZTtcclxuICBwcml2YXRlIG9sZFBvc2l0aW9uOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxTRSA9ICQodGhpcy5nZXRFbGVtZW50SWQodGhpcy5TRSkpO1xyXG4gICAgY29uc3QgZWxOVyA9ICQodGhpcy5nZXRFbGVtZW50SWQodGhpcy5OVykpO1xyXG4gICAgaWYgKHRoaXMuaW5pdCAmJiBlbFNFICYmIGVsTlcgJiYgZWxTRS5vZmZzZXQoKSAmJiBlbE5XLm9mZnNldCgpKSB7XHJcbiAgICAgIGxldCB3aWR0aCA9IGVsU0Uub2Zmc2V0KCkubGVmdCAtIGVsTlcub2Zmc2V0KCkubGVmdDtcclxuICAgICAgbGV0IGhlaWdodCA9IGVsU0Uub2Zmc2V0KCkudG9wIC0gZWxOVy5vZmZzZXQoKS50b3A7XHJcbiAgICAgIHdoaWxlICh3aWR0aCA+PSB0aGlzLnBhZ2VXaWR0aCB8fCBoZWlnaHQgPj0gdGhpcy5wYWdlSGVpZ2h0KSB7XHJcbiAgICAgICAgd2lkdGggPSB3aWR0aCAvIDI7XHJcbiAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IC8gMjtcclxuICAgICAgfVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLm9mZnNldFguZW1pdCh3aWR0aCk7XHJcbiAgICAgICAgdGhpcy5vZmZzZXRZLmVtaXQoaGVpZ2h0KTtcclxuICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgY2F0Y2hVcCgkZXZlbnQ6IERyYWdFdmVudCkge1xyXG4gICAgLy8gZmZcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCRldmVudC5kYXRhVHJhbnNmZXIpIHsgLy8gZmZcclxuICAgICAgJGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ2ZvbycpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ncmFiID0gdHJ1ZTtcclxuICAgIHRoaXMub2xkUG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XHJcbiAgfVxyXG5cclxuICByZXNpemUoJGV2ZW50OiBEcmFnRXZlbnQsIGVsOiBzdHJpbmcpIHtcclxuICAgIGlmICghdGhpcy5ncmFiKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xyXG4gICAgaWYgKHBvc2l0aW9uLnggPT09IDAgJiYgcG9zaXRpb24ueSA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBub3RTVyA9IHRoaXMuTkUgPT09IGVsIHx8IHRoaXMuTlcgPT09IGVsO1xyXG4gICAgY29uc3Qgbm90TkUgPSB0aGlzLlNXID09PSBlbCB8fCB0aGlzLk5XID09PSBlbDtcclxuICAgIHRoaXMuc2V0T2Zmc2V0cyhwb3NpdGlvbiwgbm90TkUsIG5vdFNXKTtcclxuICAgIGlmIChub3RTVykge1xyXG4gICAgICB0aGlzLm9mZnNldFRvcC5lbWl0KHBvc2l0aW9uLnkgLSB0aGlzLm9sZFBvc2l0aW9uLnkpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vdE5FKSB7XHJcbiAgICAgIHRoaXMub2Zmc2V0TGVmdC5lbWl0KHBvc2l0aW9uLnggLSB0aGlzLm9sZFBvc2l0aW9uLngpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbGRQb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRPZmZzZXRzKHBvc2l0aW9uLCB4OiBib29sZWFuLCB5OiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBvZmZzZXRYID0geCA/IHRoaXMub2xkUG9zaXRpb24ueCAtIHBvc2l0aW9uLnggOiBwb3NpdGlvbi54IC0gdGhpcy5vbGRQb3NpdGlvbi54O1xyXG4gICAgY29uc3Qgb2Zmc2V0WSA9IHkgPyB0aGlzLm9sZFBvc2l0aW9uLnkgLSBwb3NpdGlvbi55IDogcG9zaXRpb24ueSAtIHRoaXMub2xkUG9zaXRpb24ueTtcclxuICAgIHRoaXMub2Zmc2V0WC5lbWl0KG9mZnNldFgpO1xyXG4gICAgdGhpcy5vZmZzZXRZLmVtaXQob2Zmc2V0WSk7XHJcbiAgfVxyXG5cclxuICBlbmQoJGV2ZW50OiBEcmFnRXZlbnQsIGVsOiBzdHJpbmcpIHtcclxuICAgIC8vIGZmXHJcbiAgICB0aGlzLnJlc2l6ZSgkZXZlbnQsIGVsKTtcclxuICAgIHRoaXMucmVsZWFzZS5lbWl0KHRydWUpO1xyXG4gICAgdGhpcy5ncmFiID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzdGFydCgkZXZlbnQ6IERyYWdFdmVudCkge1xyXG4gICAgdGhpcy5kcm9wKCRldmVudCk7XHJcbiAgfVxyXG5cclxuICBkcm9wKCRldmVudDogRHJhZ0V2ZW50KSB7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RWxlbWVudElkKGVsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBcIiNcIiArIGVsICsgXCItXCIgKyB0aGlzLmlkO1xyXG4gIH1cclxufVxyXG4iXX0=