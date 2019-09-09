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
        const width = $(this.getElementId(this.SE)).offset().left - $(this.getElementId(this.NW)).offset().left;
        /** @type {?} */
        const height = $(this.getElementId(this.SE)).offset().top - $(this.getElementId(this.NW)).offset().top;
        this.offsetX.emit(width);
        this.offsetY.emit(height);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXppbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Jlc2l6aW5nL3Jlc2l6aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGlCQUFpQixDQUFDOztNQUVoQyxDQUFDLEdBQUcsTUFBTTtBQU9oQixNQUFNLE9BQU8saUJBQWlCO0lBcUI1QjtRQWxCUyxPQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ1gsT0FBRSxHQUFHLEtBQUssQ0FBQztRQUNYLE9BQUUsR0FBRyxLQUFLLENBQUM7UUFDWCxPQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLE9BQUUsR0FBRyxJQUFJLENBQUM7UUFDVixPQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ1YsT0FBRSxHQUFHLElBQUksQ0FBQztRQUNWLE9BQUUsR0FBRyxJQUFJLENBQUM7UUFFQSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNyQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNyQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN2QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN4QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUV4QyxTQUFJLEdBQUcsS0FBSyxDQUFDO0lBSXJCLENBQUM7Ozs7SUFFRCxlQUFlOztjQUNQLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFN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dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi9maWxlLnNlcnZpY2VcIjtcblxuY29uc3QgJCA9IGpxdWVyeTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtcmVzaXppbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzaXppbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXNpemluZy5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlc2l6aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBASW5wdXQoKSBpZDogbnVtYmVyO1xuICBASW5wdXQoKSBzZSA9IGZhbHNlO1xuICBASW5wdXQoKSBuZSA9IGZhbHNlO1xuICBASW5wdXQoKSBzdyA9IGZhbHNlO1xuICBASW5wdXQoKSBudyA9IGZhbHNlO1xuICBTRSA9ICdzZSc7XG4gIE5FID0gJ25lJztcbiAgU1cgPSAnc3cnO1xuICBOVyA9ICdudyc7XG5cbiAgQE91dHB1dCgpIG9mZnNldFggPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIG9mZnNldFkgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIG9mZnNldFRvcCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgb2Zmc2V0TGVmdCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgcmVsZWFzZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBwcml2YXRlIGdyYWIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBvbGRQb3NpdGlvbjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHdpZHRoID0gJCh0aGlzLmdldEVsZW1lbnRJZCh0aGlzLlNFKSkub2Zmc2V0KCkubGVmdCAtICQodGhpcy5nZXRFbGVtZW50SWQodGhpcy5OVykpLm9mZnNldCgpLmxlZnQ7XG4gICAgY29uc3QgaGVpZ2h0ID0gJCh0aGlzLmdldEVsZW1lbnRJZCh0aGlzLlNFKSkub2Zmc2V0KCkudG9wIC0gJCh0aGlzLmdldEVsZW1lbnRJZCh0aGlzLk5XKSkub2Zmc2V0KCkudG9wO1xuICAgIHRoaXMub2Zmc2V0WC5lbWl0KHdpZHRoKTtcbiAgICB0aGlzLm9mZnNldFkuZW1pdChoZWlnaHQpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBjYXRjaFVwKCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgLy8gZmZcbiAgICAkZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnZm9vJyk7XG4gICAgdGhpcy5ncmFiID0gdHJ1ZTtcbiAgICB0aGlzLm9sZFBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xuICB9XG5cbiAgcmVzaXplKCRldmVudDogRHJhZ0V2ZW50LCBlbDogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmdyYWIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG4gICAgaWYgKHBvc2l0aW9uLnggPT09IDAgJiYgcG9zaXRpb24ueSA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBub3RTVyA9IHRoaXMuTkUgPT09IGVsIHx8IHRoaXMuTlcgPT09IGVsO1xuICAgIGNvbnN0IG5vdE5FID0gdGhpcy5TVyA9PT0gZWwgfHwgdGhpcy5OVyA9PT0gZWw7XG4gICAgdGhpcy5zZXRPZmZzZXRzKHBvc2l0aW9uLCBub3RORSwgbm90U1cpO1xuICAgIGlmIChub3RTVykge1xuICAgICAgdGhpcy5vZmZzZXRUb3AuZW1pdChwb3NpdGlvbi55IC0gdGhpcy5vbGRQb3NpdGlvbi55KTtcbiAgICB9XG4gICAgaWYgKG5vdE5FKSB7XG4gICAgICB0aGlzLm9mZnNldExlZnQuZW1pdChwb3NpdGlvbi54IC0gdGhpcy5vbGRQb3NpdGlvbi54KTtcbiAgICB9XG4gICAgdGhpcy5vbGRQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRPZmZzZXRzKHBvc2l0aW9uLCB4OiBib29sZWFuLCB5OiBib29sZWFuKSB7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IHggPyB0aGlzLm9sZFBvc2l0aW9uLnggLSBwb3NpdGlvbi54IDogcG9zaXRpb24ueCAtIHRoaXMub2xkUG9zaXRpb24ueDtcbiAgICBjb25zdCBvZmZzZXRZID0geSA/IHRoaXMub2xkUG9zaXRpb24ueSAtIHBvc2l0aW9uLnkgOiBwb3NpdGlvbi55IC0gdGhpcy5vbGRQb3NpdGlvbi55O1xuICAgIHRoaXMub2Zmc2V0WC5lbWl0KG9mZnNldFgpO1xuICAgIHRoaXMub2Zmc2V0WS5lbWl0KG9mZnNldFkpO1xuICB9XG5cbiAgZW5kKCRldmVudDogRHJhZ0V2ZW50LCBlbDogc3RyaW5nKSB7XG4gICAgLy8gZmZcbiAgICB0aGlzLnJlc2l6ZSgkZXZlbnQsIGVsKTtcbiAgICB0aGlzLnJlbGVhc2UuZW1pdCh0cnVlKTtcbiAgICB0aGlzLmdyYWIgPSBmYWxzZTtcbiAgfVxuXG4gIHN0YXJ0KCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgdGhpcy5kcm9wKCRldmVudCk7XG4gIH1cblxuICBkcm9wKCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgLypwcml2YXRlIGdldFBvc2l0aW9uKCRldmVudDogRHJhZ0V2ZW50LCBlbDogc3RyaW5nKSB7XG4gICAgbGV0IGxlZnQgPSAkZXZlbnQuY2xpZW50WDtcbiAgICBsZXQgdG9wID0gJGV2ZW50LmNsaWVudFk7XG4gICAgaWYgKCFsZWZ0IHx8ICF0b3ApIHsvLyBmZlxuICAgICAgY29uc3QgZXZlbnQxOiBEcmFnRXZlbnQgPSA8RHJhZ0V2ZW50PndpbmRvdy5ldmVudDtcbiAgICAgIGxlZnQgPSBldmVudDEuc2NyZWVuWDtcbiAgICAgIHRvcCA9IGV2ZW50MS5zY3JlZW5ZO1xuICAgIH1cbiAgICByZXR1cm4ge3g6IGxlZnQsIHk6IHRvcH07XG4gIH0qL1xuXG4gIHByaXZhdGUgZ2V0RWxlbWVudElkKGVsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gXCIjXCIgKyBlbCArIFwiLVwiICsgdGhpcy5pZDtcbiAgfVxufVxuIl19