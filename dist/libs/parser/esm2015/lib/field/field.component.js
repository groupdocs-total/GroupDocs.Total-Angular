/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output } from '@angular/core';
import { ZoomService } from '@groupdocs.examples.angular/common-components';
import { Point, Size, TemplateFieldTypes } from '../app-models';
import * as jquery from 'jquery';
import { FieldService } from '../field.service';
import { Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
/** @type {?} */
const $ = jquery;
export class FieldContextMenuClick {
    /**
     * @param {?} fieldName
     * @param {?} action
     */
    constructor(fieldName, action) {
        this.fieldName = fieldName;
        this.action = action;
    }
}
if (false) {
    /** @type {?} */
    FieldContextMenuClick.prototype.fieldName;
    /** @type {?} */
    FieldContextMenuClick.prototype.action;
}
export class FieldComponent {
    /**
     * @param {?} _fieldService
     * @param {?} _zoomService
     */
    constructor(_fieldService, _zoomService) {
        this._fieldService = _fieldService;
        this._zoomService = _zoomService;
        this._destroy = new Subject();
        this.contextMenuClick = new EventEmitter();
        _fieldService.activeChanged.pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            this.isActive = this._field && this._field.name == name;
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
    }
    /**
     * @return {?}
     */
    get isFixed() {
        return this.field.fieldType === TemplateFieldTypes.FIXED;
    }
    /**
     * @return {?}
     */
    get isTable() {
        return this.field.fieldType === TemplateFieldTypes.TABLE;
    }
    /**
     * @return {?}
     */
    get left() {
        return this._left;
    }
    /**
     * @param {?} left
     * @return {?}
     */
    set left(left) {
        if (!this.pageSize) {
            return;
        }
        this._left = Math.min(this.pageSize.width, Math.max(0, left));
    }
    /**
     * @return {?}
     */
    get top() {
        return this._top;
    }
    /**
     * @param {?} top
     * @return {?}
     */
    set top(top) {
        if (!this.pageSize) {
            return;
        }
        this._top = Math.min(this.pageSize.height, Math.max(0, top));
    }
    /**
     * @return {?}
     */
    get right() {
        return this._right;
    }
    /**
     * @param {?} right
     * @return {?}
     */
    set right(right) {
        if (!this.pageSize) {
            return;
        }
        this._right = Math.min(Math.max(0, right), this.pageSize.width);
    }
    /**
     * @return {?}
     */
    get bottom() {
        return this._bottom;
    }
    /**
     * @param {?} bottom
     * @return {?}
     */
    set bottom(bottom) {
        if (!this.pageSize) {
            return;
        }
        this._bottom = Math.min(Math.max(0, bottom), this.pageSize.height);
    }
    /**
     * @return {?}
     */
    get width() {
        /** @type {?} */
        const width = this.right - this.left;
        return width ? width : 0;
    }
    /**
     * @return {?}
     */
    get height() {
        /** @type {?} */
        const height = this.bottom - this.top;
        return height ? height : 0;
    }
    /**
     * @return {?}
     */
    get scale() {
        return this._zoomService.zoom / 100;
    }
    /**
     * @return {?}
     */
    renameFieldClick() {
        this.contextMenuClick.emit(new FieldContextMenuClick(this.field.name, "rename"));
    }
    /**
     * @return {?}
     */
    deleteFieldClick() {
        this.contextMenuClick.emit(new FieldContextMenuClick(this.field.name, "remove"));
    }
    /**
     * @return {?}
     */
    addColumnLeft() {
        this.field.addColumn(null, this.width * 0.1);
    }
    /**
     * @return {?}
     */
    addColumnRight() {
        this.field.addColumn(null, this.width * 0.9);
    }
    /**
     * @param {?} column
     * @return {?}
     */
    removeColumn(column) {
        this.field.removeColumn(column);
    }
    /**
     * @param {?} field
     * @return {?}
     */
    set field(field) {
        this._field = field;
        this.left = this.field.position.x;
        this.top = this.field.position.y;
        this.right = this.field.position.x + this.field.size.width;
        this.bottom = this.field.position.y + this.field.size.height;
    }
    /**
     * @return {?}
     */
    get field() {
        return this._field;
    }
    /**
     * @param {?} $event
     * @param {?} mode
     * @return {?}
     */
    mouseDown($event, mode) {
        $event.preventDefault();
        this._fieldService.setActive(this.field.name);
        /** @type {?} */
        const startMousePos = this._fieldService.beginMove($event);
        /** @type {?} */
        const left = this.left;
        /** @type {?} */
        const top = this.top;
        /** @type {?} */
        const right = this.right;
        /** @type {?} */
        const bottom = this.bottom;
        /** @type {?} */
        const column = this.field.getColumnByName(mode);
        /** @type {?} */
        const columnInitialPos = column ? column.value : null;
        //  let ppa = mode.startsWith('TC:');
        /** @type {?} */
        const mouseUpSubscription = this._fieldService.mouseUp
            .subscribe((/**
         * @param {?} mousePos
         * @return {?}
         */
        mousePos => {
            this._field.position = new Point(this.left, this.top);
            this._field.size = new Size(this.width, this.height);
            //    ppa = false;
            mouseUpSubscription.unsubscribe();
        }));
        this._fieldService.mouseMove
            .pipe(takeUntil(this._fieldService.mouseUp))
            .subscribe((/**
         * @param {?} mousePos
         * @return {?}
         */
        mousePos => {
            if (!mousePos || !this.pageSize) {
                return;
            }
            /** @type {?} */
            const minWidth = 40;
            /** @type {?} */
            const minHeight = 15;
            /** @type {?} */
            const width = this.width;
            /** @type {?} */
            const height = this.height;
            /** @type {?} */
            const delta = new Point((mousePos.x - startMousePos.x) / this.scale, (mousePos.y - startMousePos.y) / this.scale);
            if (columnInitialPos) {
                /** @type {?} */
                const v = columnInitialPos + delta.x;
                column.value = Math.max(0, Math.min(this.width, v));
                return;
            }
            switch (mode) {
                case 'Move':
                    this.left = Math.min(left + delta.x, this.pageSize.width - this.width);
                    this.top = Math.min(top + delta.y, this.pageSize.height - this.height);
                    this.right = this.left + width;
                    this.bottom = this.top + height;
                    break;
                // Edges
                case 'W':
                    this.left = left + delta.x;
                    if (this.width < minWidth) {
                        this.left = this.right - minWidth;
                    }
                    break;
                case 'E':
                    this.right = right + delta.x;
                    if (this.width < minWidth) {
                        this.right = this.left + minWidth;
                    }
                    break;
                case 'N':
                    this.top = top + delta.y;
                    if (this.height < minWidth) {
                        this.top = this.bottom - minHeight;
                    }
                    break;
                case 'S':
                    this.bottom = bottom + delta.y;
                    if (this.height < minHeight) {
                        this.bottom = this.top + minHeight;
                    }
                    break;
                // Corners
                case 'NW':
                    this.left = left + delta.x;
                    this.top = top + delta.y;
                    if (this.width < minWidth) {
                        this.left = this.right - minWidth;
                    }
                    if (this.height < minWidth) {
                        this.top = this.bottom - minHeight;
                    }
                    break;
                case 'SW':
                    this.left = left + delta.x;
                    this.bottom = bottom + delta.y;
                    if (this.width < minWidth) {
                        this.left = this.right - minWidth;
                    }
                    if (this.height < minHeight) {
                        this.bottom = this.top + minHeight;
                    }
                    break;
                case 'NE':
                    this.right = right + delta.x;
                    this.top = top + delta.y;
                    if (this.width < minWidth) {
                        this.right = this.left + minWidth;
                    }
                    if (this.height < minHeight) {
                        this.top = this.bottom - minHeight;
                    }
                    break;
                case 'SE':
                    this.right = right + delta.x;
                    this.bottom = bottom + delta.y;
                    if (this.width < minWidth) {
                        this.right = this.left + minWidth;
                    }
                    if (this.height < minHeight) {
                        this.bottom = this.top + minHeight;
                    }
                    break;
            }
        }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    rightClick($event) {
        $event.preventDefault();
    }
}
FieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-field',
                template: "<div class=\"field\" (clickOutside)=\"isActive = false\" (contextmenu)=\"rightClick($event)\"\r\n    [clickOutsideEvents]=\"'mousedown'\" [clickOutsideEnabled]=\"isActive\" [style.left.px]=\"left\" [style.top.px]=\"top\"\r\n    [style.width.px]=\"width\" [style.height.px]=\"height\">\r\n\r\n    <div class=\"field-text\" (dblclick)=\"renameFieldClick()\" (mousedown)=\"mouseDown($event, 'Move')\"\r\n        (panstart)=\"mouseDown($event, 'Move')\">\r\n        <div *ngIf=\"!isActive\">{{ field.name }}</div>\r\n    </div>\r\n    <div class=\"resizable-handle ne-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'NE')\"\r\n        (panstart)=\"mouseDown($event, 'NE')\"></div>\r\n    <div class=\"resizable-handle se-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'SE')\"\r\n        (panstart)=\"mouseDown($event, 'SE')\"></div>\r\n    <div class=\"resizable-handle sw-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'SW')\"\r\n        (panstart)=\"mouseDown($event, 'SW')\"></div>\r\n    <div class=\"resizable-handle nw-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'NW')\"\r\n        (panstart)=\"mouseDown($event, 'NW')\"></div>\r\n\r\n    <div class=\"resizable-v-edge w-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'W')\"\r\n        (panstart)=\"mouseDown($event, 'W')\"></div>\r\n    <div class=\"resizable-v-edge e-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'E')\"\r\n        (panstart)=\"mouseDown($event, 'E')\"></div>\r\n    <div class=\"resizable-h-edge n-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'N')\"\r\n        (panstart)=\"mouseDown($event, 'N')\"></div>        \r\n    <div class=\"resizable-h-edge s-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'S')\"\r\n        (panstart)=\"mouseDown($event, 'S')\"></div>\r\n\r\n    <div *ngIf=\"isTable && isActive\">\r\n        <div *ngFor=\"let column of field.columns\" class=\"tc-top resizable-handle\" [style.left.px]=\"column.value\"></div>\r\n        <div *ngFor=\"let column of field.columns\" class=\"tc-bottom resizable-handle\" [style.left.px]=\"column.value\"></div>\r\n        <div *ngFor=\"let column of field.columns\" class=\"tc\" [style.left.px]=\"column.value\"\r\n            (mousedown)=\"mouseDown($event, column.name)\">\r\n            <div class=\"tc-background\"></div>\r\n            <div class=\"tc-remove image-btn\" title=\"Remove column separator\" (click)=\"removeColumn(column)\">\r\n                <fa-icon [icon]=\"'trash'\"></fa-icon>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"isTable && !isActive\">\r\n        <div *ngFor=\"let column of field.columns\" class=\"tc-deactived\" [style.left.px]=\"column.value\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"tc-add-left image-btn\" *ngIf=\"isTable && isActive\" title=\"Add new column separator\" (click)=\"addColumnLeft()\">\r\n        <fa-icon [icon]=\"'plus'\"></fa-icon>\r\n    </div>\r\n\r\n    <div class=\"tc-add-right image-btn\" *ngIf=\"isTable && isActive\" title=\"Add new column separator\" (click)=\"addColumnRight()\">\r\n        <fa-icon [icon]=\"'plus'\"></fa-icon>\r\n    </div>\r\n\r\n    <div class=\"context-menu\" *ngIf=\"isActive\">\r\n        <div class=\"image-btn\" (click)=\"renameFieldClick()\" title=\"Rename the field\">\r\n            <fa-icon [icon]=\"'edit'\"></fa-icon>\r\n        </div>\r\n        <div class=\"image-btn\" (click)=\"deleteFieldClick()\" title=\"Remove the field\">\r\n            <fa-icon [icon]=\"'trash'\"></fa-icon>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"field-name\" *ngIf=\"isActive\">\r\n        {{ field.name }}\r\n    </div>\r\n\r\n</div>",
                styles: [".btn{padding:5px 20px;background-color:#25c2d4;cursor:pointer;color:#fff!important}.btn:hover{background-color:#688296;color:#ccd0d4!important}.image-btn{text-align:center;cursor:pointer;margin:1px;color:#c4c4c4}.image-btn:hover{color:#688296!important}.image-btn>fa-icon{padding:5px;font-size:16px}.list-item:nth-of-type(even){background-color:#f4f4f4}.list-item:hover{background-color:#e5e5e5}.tc{position:absolute;display:block;border-left:4px solid #679ffa;width:4px;top:-5px;bottom:-5px;cursor:col-resize;z-index:1000}.tc-deactived{position:absolute;display:block;border-left:4px solid #738a9cc9;width:4px;top:0;bottom:0;cursor:col-resize;z-index:1000}.tc-background{-webkit-transform:translatex(-9px);transform:translatex(-9px);background-color:#fffFFF01;width:15px;height:100%}.tc-top{top:-5px;-webkit-transform:translatex(-3px);transform:translatex(-3px);cursor:col-resize}.tc-bottom{bottom:-5px;-webkit-transform:translatex(-3px);transform:translatex(-3px);cursor:col-resize}.tc-remove{background:#fff;display:none;position:absolute;top:15px}.tc:hover>.tc-remove{display:block}.tc-add-left{position:absolute;left:-5px;top:50%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.tc-add-right{position:absolute;right:-5px;top:50%;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}.resizable-v-edge{background-color:#fffFFF01;position:absolute;font-size:.1px;display:block;width:10px;top:5px;bottom:5px}.resizable-h-edge{background-color:#fffFFF01;position:absolute;font-size:.1px;display:block;height:10px;left:5px;right:5px}.w-resize{cursor:w-resize;left:-5px}.e-resize{cursor:e-resize;right:-5px}.n-resize{cursor:n-resize;top:-5px}.s-resize{cursor:s-resize;bottom:-5px}.resizable-handle{background-color:#679ffa;width:10px;height:10px;position:absolute;font-size:.1px;display:block}.se-resize{bottom:-5px;right:-5px;cursor:se-resize}.ne-resize{top:-5px;right:-5px;cursor:ne-resize}.sw-resize{bottom:-5px;left:-5px;cursor:sw-resize}.nw-resize{top:-5px;left:-5px;cursor:nw-resize}.field{position:absolute}.field-text{background-color:#99b1c440;cursor:move;color:#000;width:inherit;height:inherit}.field-text>div{background-color:#99b1c4DD;box-sizing:border-box;width:100%;height:100%;padding:1px 5px;font-size:10px;overflow:hidden;text-overflow:ellipsis;pointer-events:none}.field-name{position:absolute;width:auto;left:50%;top:0;-webkit-transform:translate(-50%,calc(-100% - 5px));transform:translate(-50%,calc(-100% - 5px));padding:2px 5px;background-color:#fff;border:#688296;box-shadow:rgba(0,0,0,.52) 0 0 5px;font-size:8px;color:#688296;cursor:context-menu}.context-menu{position:absolute;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;width:auto;left:50%;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);margin-top:5px;background-color:#fff;border:#688296;box-shadow:rgba(0,0,0,.52) 0 0 5px}"]
            }] }
];
/** @nocollapse */
FieldComponent.ctorParameters = () => [
    { type: FieldService },
    { type: ZoomService }
];
FieldComponent.propDecorators = {
    contextMenuClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FieldComponent.prototype.pageSize;
    /**
     * @type {?}
     * @private
     */
    FieldComponent.prototype._left;
    /**
     * @type {?}
     * @private
     */
    FieldComponent.prototype._top;
    /**
     * @type {?}
     * @private
     */
    FieldComponent.prototype._right;
    /**
     * @type {?}
     * @private
     */
    FieldComponent.prototype._bottom;
    /**
     * @type {?}
     * @private
     */
    FieldComponent.prototype._field;
    /**
     * @type {?}
     * @private
     */
    FieldComponent.prototype._destroy;
    /** @type {?} */
    FieldComponent.prototype.contextMenuClick;
    /** @type {?} */
    FieldComponent.prototype.isActive;
    /**
     * @type {?}
     * @private
     */
    FieldComponent.prototype._fieldService;
    /**
     * @type {?}
     * @private
     */
    FieldComponent.prototype._zoomService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3BhcnNlci8iLCJzb3VyY2VzIjpbImxpYi9maWVsZC9maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQTBDLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQVMsV0FBVyxFQUFnQixNQUFNLCtDQUErQyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUE4QyxrQkFBa0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RyxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFRLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUM1QyxPQUFPLEVBQVUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O01BRTdDLENBQUMsR0FBRyxNQUFNO0FBRWhCLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBQ2hDLFlBQW1CLFNBQWlCLEVBQVMsTUFBYztRQUF4QyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUUzRCxDQUFDO0NBQ0Y7OztJQUhhLDBDQUF3Qjs7SUFBRSx1Q0FBcUI7O0FBVTdELE1BQU0sT0FBTyxjQUFjOzs7OztJQWF6QixZQUNVLGFBQTJCLEVBQzNCLFlBQXlCO1FBRHpCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBTjNCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRXZCLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUF5QixDQUFBO1FBS3BFLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDdkQsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7UUFDMUQsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFJRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLGtCQUFrQixDQUFDLEtBQUssQ0FBQztJQUMzRCxDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7SUFDM0QsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELElBQUksSUFBSSxDQUFDLElBQVk7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELElBQUksR0FBRyxDQUFDLEdBQVc7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELElBQUksS0FBSyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELElBQUksTUFBTSxDQUFDLE1BQWM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7OztJQUVELElBQUksS0FBSzs7Y0FDRCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSTtRQUVwQyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELElBQUksTUFBTTs7Y0FDRixNQUFNLEdBQUcsSUFB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UyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixtcEhBQXFDOzthQUV0Qzs7OztZQWpCUSxZQUFZO1lBSkwsV0FBVzs7OytCQWlDeEIsTUFBTTs7OztJQVZQLGtDQUFlOzs7OztJQUVmLCtCQUFzQjs7Ozs7SUFDdEIsOEJBQXFCOzs7OztJQUNyQixnQ0FBdUI7Ozs7O0lBQ3ZCLGlDQUF3Qjs7Ozs7SUFFeEIsZ0NBQTZCOzs7OztJQUM3QixrQ0FBaUM7O0lBRWpDLDBDQUFzRTs7SUFtQnRFLGtDQUFrQjs7Ozs7SUFoQmhCLHVDQUFtQzs7Ozs7SUFDbkMsc0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFV0aWxzLCBab29tU2VydmljZSwgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgUG9pbnQsIFNpemUsIFRlbXBsYXRlRmllbGQsIFRlbXBsYXRlRmllbGRUYWJsZVNlcGFyYXRvciwgVGVtcGxhdGVGaWVsZFR5cGVzIH0gZnJvbSAnLi4vYXBwLW1vZGVscyc7XHJcblxyXG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHsgRmllbGRTZXJ2aWNlIH0gZnJvbSAnLi4vZmllbGQuc2VydmljZSc7XHJcbmltcG9ydCB7IGZyb20sIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmNvbnN0ICQgPSBqcXVlcnk7XHJcblxyXG5leHBvcnQgY2xhc3MgRmllbGRDb250ZXh0TWVudUNsaWNrIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmllbGROYW1lOiBzdHJpbmcsIHB1YmxpYyBhY3Rpb246IHN0cmluZykge1xyXG5cclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWZpZWxkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmllbGQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZpZWxkLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHBhZ2VTaXplOiBTaXplO1xyXG5cclxuICBwcml2YXRlIF9sZWZ0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfdG9wOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfcmlnaHQ6IG51bWJlcjtcclxuICBwcml2YXRlIF9ib3R0b206IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBfZmllbGQ6IFRlbXBsYXRlRmllbGRcclxuICBwcml2YXRlIF9kZXN0cm95ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgQE91dHB1dCgpIGNvbnRleHRNZW51Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPEZpZWxkQ29udGV4dE1lbnVDbGljaz4oKVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2ZpZWxkU2VydmljZTogRmllbGRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlKSB7XHJcbiAgICBfZmllbGRTZXJ2aWNlLmFjdGl2ZUNoYW5nZWQucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpXHJcbiAgICAgIC5zdWJzY3JpYmUobmFtZSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRoaXMuX2ZpZWxkICYmIHRoaXMuX2ZpZWxkLm5hbWUgPT0gbmFtZTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fZGVzdHJveS5uZXh0KCk7XHJcbiAgICB0aGlzLl9kZXN0cm95LmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBpc0FjdGl2ZTogYm9vbGVhbjtcclxuXHJcbiAgZ2V0IGlzRml4ZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC5maWVsZFR5cGUgPT09IFRlbXBsYXRlRmllbGRUeXBlcy5GSVhFRDtcclxuICB9XHJcblxyXG4gIGdldCBpc1RhYmxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQuZmllbGRUeXBlID09PSBUZW1wbGF0ZUZpZWxkVHlwZXMuVEFCTEU7XHJcbiAgfVxyXG5cclxuICBnZXQgbGVmdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xlZnQ7XHJcbiAgfVxyXG5cclxuICBzZXQgbGVmdChsZWZ0OiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5wYWdlU2l6ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fbGVmdCA9IE1hdGgubWluKHRoaXMucGFnZVNpemUud2lkdGgsIE1hdGgubWF4KDAsIGxlZnQpKTtcclxuICB9XHJcblxyXG4gIGdldCB0b3AoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl90b3A7XHJcbiAgfVxyXG5cclxuICBzZXQgdG9wKHRvcDogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMucGFnZVNpemUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3RvcCA9IE1hdGgubWluKHRoaXMucGFnZVNpemUuaGVpZ2h0LCBNYXRoLm1heCgwLCB0b3ApKTtcclxuICB9XHJcblxyXG4gIGdldCByaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JpZ2h0O1xyXG4gIH1cclxuXHJcbiAgc2V0IHJpZ2h0KHJpZ2h0OiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5wYWdlU2l6ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcmlnaHQgPSBNYXRoLm1pbihNYXRoLm1heCgwLCByaWdodCksIHRoaXMucGFnZVNpemUud2lkdGgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJvdHRvbSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2JvdHRvbTtcclxuICB9XHJcblxyXG4gIHNldCBib3R0b20oYm90dG9tOiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5wYWdlU2l6ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fYm90dG9tID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgYm90dG9tKSwgdGhpcy5wYWdlU2l6ZS5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHdpZHRoKCkge1xyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLnJpZ2h0IC0gdGhpcy5sZWZ0O1xyXG5cclxuICAgIHJldHVybiB3aWR0aCA/IHdpZHRoIDogMDtcclxuICB9XHJcblxyXG4gIGdldCBoZWlnaHQoKSB7XHJcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmJvdHRvbSAtIHRoaXMudG9wO1xyXG5cclxuICAgIHJldHVybiBoZWlnaHQgPyBoZWlnaHQgOiAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNjYWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3pvb21TZXJ2aWNlLnpvb20gLyAxMDA7XHJcbiAgfVxyXG5cclxuICByZW5hbWVGaWVsZENsaWNrKCkge1xyXG4gICAgdGhpcy5jb250ZXh0TWVudUNsaWNrLmVtaXQobmV3IEZpZWxkQ29udGV4dE1lbnVDbGljayh0aGlzLmZpZWxkLm5hbWUsIFwicmVuYW1lXCIpKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUZpZWxkQ2xpY2soKSB7XHJcbiAgICB0aGlzLmNvbnRleHRNZW51Q2xpY2suZW1pdChuZXcgRmllbGRDb250ZXh0TWVudUNsaWNrKHRoaXMuZmllbGQubmFtZSwgXCJyZW1vdmVcIikpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ29sdW1uTGVmdCgpIHtcclxuICAgIHRoaXMuZmllbGQuYWRkQ29sdW1uKG51bGwsIHRoaXMud2lkdGggKiAwLjEpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ29sdW1uUmlnaHQoKSB7XHJcbiAgICB0aGlzLmZpZWxkLmFkZENvbHVtbihudWxsLCB0aGlzLndpZHRoICogMC45KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNvbHVtbihjb2x1bW46IFRlbXBsYXRlRmllbGRUYWJsZVNlcGFyYXRvcikge1xyXG4gICAgdGhpcy5maWVsZC5yZW1vdmVDb2x1bW4oY29sdW1uKTtcclxuICB9XHJcblxyXG4gIHNldCBmaWVsZChmaWVsZDogVGVtcGxhdGVGaWVsZCkge1xyXG4gICAgdGhpcy5fZmllbGQgPSBmaWVsZDtcclxuXHJcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmZpZWxkLnBvc2l0aW9uLng7XHJcbiAgICB0aGlzLnRvcCA9IHRoaXMuZmllbGQucG9zaXRpb24ueTtcclxuXHJcbiAgICB0aGlzLnJpZ2h0ID0gdGhpcy5maWVsZC5wb3NpdGlvbi54ICsgdGhpcy5maWVsZC5zaXplLndpZHRoO1xyXG4gICAgdGhpcy5ib3R0b20gPSB0aGlzLmZpZWxkLnBvc2l0aW9uLnkgKyB0aGlzLmZpZWxkLnNpemUuaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZpZWxkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkO1xyXG4gIH1cclxuXHJcbiAgbW91c2VEb3duKCRldmVudDogTW91c2VFdmVudCwgbW9kZTogc3RyaW5nKSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLl9maWVsZFNlcnZpY2Uuc2V0QWN0aXZlKHRoaXMuZmllbGQubmFtZSk7XHJcbiAgICBjb25zdCBzdGFydE1vdXNlUG9zID0gdGhpcy5fZmllbGRTZXJ2aWNlLmJlZ2luTW92ZSgkZXZlbnQpO1xyXG5cclxuICAgIGNvbnN0IGxlZnQgPSB0aGlzLmxlZnQ7XHJcbiAgICBjb25zdCB0b3AgPSB0aGlzLnRvcDtcclxuICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5yaWdodDtcclxuICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMuYm90dG9tO1xyXG5cclxuICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuZmllbGQuZ2V0Q29sdW1uQnlOYW1lKG1vZGUpO1xyXG4gICAgY29uc3QgY29sdW1uSW5pdGlhbFBvcyA9IGNvbHVtbiA/IGNvbHVtbi52YWx1ZSA6IG51bGw7XHJcblxyXG4gICAgLy8gIGxldCBwcGEgPSBtb2RlLnN0YXJ0c1dpdGgoJ1RDOicpO1xyXG5cclxuICAgIGNvbnN0IG1vdXNlVXBTdWJzY3JpcHRpb24gPSB0aGlzLl9maWVsZFNlcnZpY2UubW91c2VVcFxyXG4gICAgICAuc3Vic2NyaWJlKG1vdXNlUG9zID0+IHtcclxuICAgICAgICB0aGlzLl9maWVsZC5wb3NpdGlvbiA9IG5ldyBQb2ludCh0aGlzLmxlZnQsIHRoaXMudG9wKTtcclxuICAgICAgICB0aGlzLl9maWVsZC5zaXplID0gbmV3IFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyAgICBwcGEgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbW91c2VVcFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9maWVsZFNlcnZpY2UubW91c2VNb3ZlXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9maWVsZFNlcnZpY2UubW91c2VVcCkpXHJcbiAgICAgIC5zdWJzY3JpYmUobW91c2VQb3MgPT4ge1xyXG4gICAgICAgIGlmICghbW91c2VQb3MgfHwgIXRoaXMucGFnZVNpemUpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1pbldpZHRoID0gNDA7XHJcbiAgICAgICAgY29uc3QgbWluSGVpZ2h0ID0gMTU7XHJcblxyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuXHJcbiAgICAgICAgY29uc3QgZGVsdGEgPSBuZXcgUG9pbnQoXHJcbiAgICAgICAgICAobW91c2VQb3MueCAtIHN0YXJ0TW91c2VQb3MueCkgLyB0aGlzLnNjYWxlLFxyXG4gICAgICAgICAgKG1vdXNlUG9zLnkgLSBzdGFydE1vdXNlUG9zLnkpIC8gdGhpcy5zY2FsZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChjb2x1bW5Jbml0aWFsUG9zKSB7XHJcbiAgICAgICAgICBjb25zdCB2ID0gY29sdW1uSW5pdGlhbFBvcyArIGRlbHRhLng7XHJcbiAgICAgICAgICBjb2x1bW4udmFsdWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLndpZHRoLCB2KSk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoIChtb2RlKSB7XHJcbiAgICAgICAgICBjYXNlICdNb3ZlJzpcclxuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gTWF0aC5taW4obGVmdCArIGRlbHRhLngsIHRoaXMucGFnZVNpemUud2lkdGggLSB0aGlzLndpZHRoKTtcclxuICAgICAgICAgICAgdGhpcy50b3AgPSBNYXRoLm1pbih0b3AgKyBkZWx0YS55LCB0aGlzLnBhZ2VTaXplLmhlaWdodCAtIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5yaWdodCA9IHRoaXMubGVmdCArIHdpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmJvdHRvbSA9IHRoaXMudG9wICsgaGVpZ2h0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAvLyBFZGdlc1xyXG5cclxuICAgICAgICAgIGNhc2UgJ1cnOlxyXG4gICAgICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0ICsgZGVsdGEueDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLndpZHRoIDwgbWluV2lkdGgpIHtcclxuICAgICAgICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLnJpZ2h0IC0gbWluV2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIGNhc2UgJ0UnOlxyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQgKyBkZWx0YS54O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMud2lkdGggPCBtaW5XaWR0aCkge1xyXG4gICAgICAgICAgICAgIHRoaXMucmlnaHQgPSB0aGlzLmxlZnQgKyBtaW5XaWR0aDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgY2FzZSAnTic6XHJcbiAgICAgICAgICAgIHRoaXMudG9wID0gdG9wICsgZGVsdGEueTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhlaWdodCA8IG1pbldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy50b3AgPSB0aGlzLmJvdHRvbSAtIG1pbkhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgY2FzZSAnUyc6XHJcbiAgICAgICAgICAgIHRoaXMuYm90dG9tID0gYm90dG9tICsgZGVsdGEueTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhlaWdodCA8IG1pbkhlaWdodCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuYm90dG9tID0gdGhpcy50b3AgKyBtaW5IZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIC8vIENvcm5lcnNcclxuXHJcbiAgICAgICAgICBjYXNlICdOVyc6XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IGxlZnQgKyBkZWx0YS54O1xyXG4gICAgICAgICAgICB0aGlzLnRvcCA9IHRvcCArIGRlbHRhLnk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy53aWR0aCA8IG1pbldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5yaWdodCAtIG1pbldpZHRoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5oZWlnaHQgPCBtaW5XaWR0aCkge1xyXG4gICAgICAgICAgICAgIHRoaXMudG9wID0gdGhpcy5ib3R0b20gLSBtaW5IZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIGNhc2UgJ1NXJzpcclxuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdCArIGRlbHRhLng7XHJcbiAgICAgICAgICAgIHRoaXMuYm90dG9tID0gYm90dG9tICsgZGVsdGEueTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLndpZHRoIDwgbWluV2lkdGgpIHtcclxuICAgICAgICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLnJpZ2h0IC0gbWluV2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhlaWdodCA8IG1pbkhlaWdodCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuYm90dG9tID0gdGhpcy50b3AgKyBtaW5IZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIGNhc2UgJ05FJzpcclxuICAgICAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0ICsgZGVsdGEueDtcclxuICAgICAgICAgICAgdGhpcy50b3AgPSB0b3AgKyBkZWx0YS55O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMud2lkdGggPCBtaW5XaWR0aCkge1xyXG4gICAgICAgICAgICAgIHRoaXMucmlnaHQgPSB0aGlzLmxlZnQgKyBtaW5XaWR0aDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaGVpZ2h0IDwgbWluSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy50b3AgPSB0aGlzLmJvdHRvbSAtIG1pbkhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgY2FzZSAnU0UnOlxyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQgKyBkZWx0YS54O1xyXG4gICAgICAgICAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbSArIGRlbHRhLnk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy53aWR0aCA8IG1pbldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yaWdodCA9IHRoaXMubGVmdCArIG1pbldpZHRoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5oZWlnaHQgPCBtaW5IZWlnaHQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmJvdHRvbSA9IHRoaXMudG9wICsgbWluSGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmlnaHRDbGljaygkZXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxufSJdfQ==