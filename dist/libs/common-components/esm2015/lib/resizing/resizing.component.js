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
            const width = elSE.offset().left - elNW.offset().left;
            /** @type {?} */
            const height = elSE.offset().top - elNW.offset().top;
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
        $event.dataTransfer.setData('text', 'foo');
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
                template: "<div class=\"ui-resizable-handle se-resize\" id=\"se-{{id}}\" *ngIf=\"se\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, SE)\" (dragend)=\"end($event, SE)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"></div>\n\n<div class=\"ui-resizable-handle ne-resize\" id=\"ne-{{id}}\" *ngIf=\"ne\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, NE)\" (dragend)=\"end($event, NE)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"></div>\n\n<div class=\"ui-resizable-handle sw-resize\" id=\"sw-{{id}}\" *ngIf=\"sw\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, SW)\" (dragend)=\"end($event, SW)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"></div>\n\n<div class=\"ui-resizable-handle nw-resize\" id=\"nw-{{id}}\" *ngIf=\"nw\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, NW)\" (dragend)=\"end($event, NW)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"></div>\n",
                styles: [".ui-resizable-handle{background-color:#679ffa;width:8px;height:8px;border-radius:100%;position:absolute;font-size:.1px;display:block}.se-resize{bottom:-5px;right:-5px;cursor:se-resize}.ne-resize{top:-5px;right:-5px;cursor:ne-resize}.sw-resize{bottom:-5px;left:-5px;cursor:sw-resize}.nw-resize{top:-5px;left:-5px;cursor:nw-resize}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXppbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Jlc2l6aW5nL3Jlc2l6aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGlCQUFpQixDQUFDOztNQUVoQyxDQUFDLEdBQUcsTUFBTTtBQU9oQixNQUFNLE9BQU8saUJBQWlCO0lBc0I1QjtRQWxCUyxPQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ1gsT0FBRSxHQUFHLEtBQUssQ0FBQztRQUNYLE9BQUUsR0FBRyxLQUFLLENBQUM7UUFDWCxPQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLE9BQUUsR0FBRyxJQUFJLENBQUM7UUFDVixPQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ1YsT0FBRSxHQUFHLElBQUksQ0FBQztRQUNWLE9BQUUsR0FBRyxJQUFJLENBQUM7UUFFQSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNyQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNyQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN2QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN4QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUV4QyxTQUFJLEdBQUcsS0FBSyxDQUFDO0lBSXJCLENBQUM7Ozs7SUFFRCxlQUFlOztjQUNQLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7O2NBQ3BDLElB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SUFDL0Msc0NBQWlEOztJQUNqRCx1Q0FBa0Q7O0lBQ2xELG9DQUFnRDs7Ozs7SUFFaEQsaUNBQXFCOzs7OztJQUNyQix3Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi9maWxlLnNlcnZpY2VcIjtcblxuY29uc3QgJCA9IGpxdWVyeTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtcmVzaXppbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzaXppbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXNpemluZy5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlc2l6aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBASW5wdXQoKSBpbml0OiBib29sZWFuO1xuICBASW5wdXQoKSBpZDogbnVtYmVyO1xuICBASW5wdXQoKSBzZSA9IGZhbHNlO1xuICBASW5wdXQoKSBuZSA9IGZhbHNlO1xuICBASW5wdXQoKSBzdyA9IGZhbHNlO1xuICBASW5wdXQoKSBudyA9IGZhbHNlO1xuICBTRSA9ICdzZSc7XG4gIE5FID0gJ25lJztcbiAgU1cgPSAnc3cnO1xuICBOVyA9ICdudyc7XG5cbiAgQE91dHB1dCgpIG9mZnNldFggPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIG9mZnNldFkgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIG9mZnNldFRvcCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgb2Zmc2V0TGVmdCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgcmVsZWFzZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBwcml2YXRlIGdyYWIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBvbGRQb3NpdGlvbjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IGVsU0UgPSAkKHRoaXMuZ2V0RWxlbWVudElkKHRoaXMuU0UpKTtcbiAgICBjb25zdCBlbE5XID0gJCh0aGlzLmdldEVsZW1lbnRJZCh0aGlzLk5XKSk7XG4gICAgaWYgKHRoaXMuaW5pdCAmJiBlbFNFICYmIGVsTlcgJiYgZWxTRS5vZmZzZXQoKSAmJiBlbE5XLm9mZnNldCgpKSB7XG4gICAgICBjb25zdCB3aWR0aCA9IGVsU0Uub2Zmc2V0KCkubGVmdCAtIGVsTlcub2Zmc2V0KCkubGVmdDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGVsU0Uub2Zmc2V0KCkudG9wIC0gZWxOVy5vZmZzZXQoKS50b3A7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5vZmZzZXRYLmVtaXQod2lkdGgpO1xuICAgICAgICB0aGlzLm9mZnNldFkuZW1pdChoZWlnaHQpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGNhdGNoVXAoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAvLyBmZlxuICAgICRldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdmb28nKTtcbiAgICB0aGlzLmdyYWIgPSB0cnVlO1xuICAgIHRoaXMub2xkUG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG4gIH1cblxuICByZXNpemUoJGV2ZW50OiBEcmFnRXZlbnQsIGVsOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuZ3JhYikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcbiAgICBpZiAocG9zaXRpb24ueCA9PT0gMCAmJiBwb3NpdGlvbi55ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5vdFNXID0gdGhpcy5ORSA9PT0gZWwgfHwgdGhpcy5OVyA9PT0gZWw7XG4gICAgY29uc3Qgbm90TkUgPSB0aGlzLlNXID09PSBlbCB8fCB0aGlzLk5XID09PSBlbDtcbiAgICB0aGlzLnNldE9mZnNldHMocG9zaXRpb24sIG5vdE5FLCBub3RTVyk7XG4gICAgaWYgKG5vdFNXKSB7XG4gICAgICB0aGlzLm9mZnNldFRvcC5lbWl0KHBvc2l0aW9uLnkgLSB0aGlzLm9sZFBvc2l0aW9uLnkpO1xuICAgIH1cbiAgICBpZiAobm90TkUpIHtcbiAgICAgIHRoaXMub2Zmc2V0TGVmdC5lbWl0KHBvc2l0aW9uLnggLSB0aGlzLm9sZFBvc2l0aW9uLngpO1xuICAgIH1cbiAgICB0aGlzLm9sZFBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBwcml2YXRlIHNldE9mZnNldHMocG9zaXRpb24sIHg6IGJvb2xlYW4sIHk6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBvZmZzZXRYID0geCA/IHRoaXMub2xkUG9zaXRpb24ueCAtIHBvc2l0aW9uLnggOiBwb3NpdGlvbi54IC0gdGhpcy5vbGRQb3NpdGlvbi54O1xuICAgIGNvbnN0IG9mZnNldFkgPSB5ID8gdGhpcy5vbGRQb3NpdGlvbi55IC0gcG9zaXRpb24ueSA6IHBvc2l0aW9uLnkgLSB0aGlzLm9sZFBvc2l0aW9uLnk7XG4gICAgdGhpcy5vZmZzZXRYLmVtaXQob2Zmc2V0WCk7XG4gICAgdGhpcy5vZmZzZXRZLmVtaXQob2Zmc2V0WSk7XG4gIH1cblxuICBlbmQoJGV2ZW50OiBEcmFnRXZlbnQsIGVsOiBzdHJpbmcpIHtcbiAgICAvLyBmZlxuICAgIHRoaXMucmVzaXplKCRldmVudCwgZWwpO1xuICAgIHRoaXMucmVsZWFzZS5lbWl0KHRydWUpO1xuICAgIHRoaXMuZ3JhYiA9IGZhbHNlO1xuICB9XG5cbiAgc3RhcnQoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICB0aGlzLmRyb3AoJGV2ZW50KTtcbiAgfVxuXG4gIGRyb3AoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBwcml2YXRlIGdldEVsZW1lbnRJZChlbDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIFwiI1wiICsgZWwgKyBcIi1cIiArIHRoaXMuaWQ7XG4gIH1cbn1cbiJdfQ==