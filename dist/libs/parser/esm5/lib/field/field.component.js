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
var $ = jquery;
var FieldContextMenuClick = /** @class */ (function () {
    function FieldContextMenuClick(fieldName, action) {
        this.fieldName = fieldName;
        this.action = action;
    }
    return FieldContextMenuClick;
}());
export { FieldContextMenuClick };
if (false) {
    /** @type {?} */
    FieldContextMenuClick.prototype.fieldName;
    /** @type {?} */
    FieldContextMenuClick.prototype.action;
}
var FieldComponent = /** @class */ (function () {
    function FieldComponent(_fieldService, _zoomService) {
        var _this = this;
        this._fieldService = _fieldService;
        this._zoomService = _zoomService;
        this._destroy = new Subject();
        this.contextMenuClick = new EventEmitter();
        _fieldService.activeChanged.pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            _this.isActive = _this._field && _this._field.name === name;
        }));
    }
    /**
     * @return {?}
     */
    FieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FieldComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy.next();
        this._destroy.complete();
    };
    Object.defineProperty(FieldComponent.prototype, "isFixed", {
        get: /**
         * @return {?}
         */
        function () {
            return this.field.fieldType === TemplateFieldTypes.FIXED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldComponent.prototype, "isTable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.field.fieldType === TemplateFieldTypes.TABLE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldComponent.prototype, "left", {
        get: /**
         * @return {?}
         */
        function () {
            return this._left;
        },
        set: /**
         * @param {?} left
         * @return {?}
         */
        function (left) {
            if (!this.pageSize) {
                return;
            }
            this._left = Math.min(this.pageSize.width, Math.max(0, left));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldComponent.prototype, "top", {
        get: /**
         * @return {?}
         */
        function () {
            return this._top;
        },
        set: /**
         * @param {?} top
         * @return {?}
         */
        function (top) {
            if (!this.pageSize) {
                return;
            }
            this._top = Math.min(this.pageSize.height, Math.max(0, top));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldComponent.prototype, "right", {
        get: /**
         * @return {?}
         */
        function () {
            return this._right;
        },
        set: /**
         * @param {?} right
         * @return {?}
         */
        function (right) {
            if (!this.pageSize) {
                return;
            }
            this._right = Math.min(Math.max(0, right), this.pageSize.width);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldComponent.prototype, "bottom", {
        get: /**
         * @return {?}
         */
        function () {
            return this._bottom;
        },
        set: /**
         * @param {?} bottom
         * @return {?}
         */
        function (bottom) {
            if (!this.pageSize) {
                return;
            }
            this._bottom = Math.min(Math.max(0, bottom), this.pageSize.height);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldComponent.prototype, "width", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var width = this.right - this.left;
            return width ? width : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldComponent.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var height = this.bottom - this.top;
            return height ? height : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldComponent.prototype, "scale", {
        get: /**
         * @return {?}
         */
        function () {
            return this._zoomService.zoom / 100;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FieldComponent.prototype.renameFieldClick = /**
     * @return {?}
     */
    function () {
        this.contextMenuClick.emit(new FieldContextMenuClick(this.field.name, "rename"));
    };
    /**
     * @return {?}
     */
    FieldComponent.prototype.deleteFieldClick = /**
     * @return {?}
     */
    function () {
        this.contextMenuClick.emit(new FieldContextMenuClick(this.field.name, "remove"));
    };
    /**
     * @return {?}
     */
    FieldComponent.prototype.addColumnLeft = /**
     * @return {?}
     */
    function () {
        this.field.addColumn(null, this.width * 0.1);
    };
    /**
     * @return {?}
     */
    FieldComponent.prototype.addColumnRight = /**
     * @return {?}
     */
    function () {
        this.field.addColumn(null, this.width * 0.9);
    };
    /**
     * @param {?} column
     * @return {?}
     */
    FieldComponent.prototype.removeColumn = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        this.field.removeColumn(column);
    };
    Object.defineProperty(FieldComponent.prototype, "field", {
        get: /**
         * @return {?}
         */
        function () {
            return this._field;
        },
        set: /**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            this._field = field;
            this.left = this.field.position.x;
            this.top = this.field.position.y;
            this.right = this.field.position.x + this.field.size.width;
            this.bottom = this.field.position.y + this.field.size.height;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} $event
     * @param {?} mode
     * @return {?}
     */
    FieldComponent.prototype.mouseDown = /**
     * @param {?} $event
     * @param {?} mode
     * @return {?}
     */
    function ($event, mode) {
        var _this = this;
        $event.preventDefault();
        this._fieldService.setActive(this.field.name);
        /** @type {?} */
        var startMousePos = this._fieldService.beginMove($event);
        /** @type {?} */
        var left = this.left;
        /** @type {?} */
        var top = this.top;
        /** @type {?} */
        var right = this.right;
        /** @type {?} */
        var bottom = this.bottom;
        /** @type {?} */
        var column = this.field.getColumnByName(mode);
        /** @type {?} */
        var columnInitialPos = column ? column.value : null;
        //  let ppa = mode.startsWith('TC:');
        /** @type {?} */
        var mouseUpSubscription = this._fieldService.mouseUp
            .subscribe((/**
         * @param {?} mousePos
         * @return {?}
         */
        function (mousePos) {
            _this._field.position = new Point(_this.left, _this.top);
            _this._field.size = new Size(_this.width, _this.height);
            //    ppa = false;
            mouseUpSubscription.unsubscribe();
        }));
        this._fieldService.mouseMove
            .pipe(takeUntil(this._fieldService.mouseUp))
            .subscribe((/**
         * @param {?} mousePos
         * @return {?}
         */
        function (mousePos) {
            if (!mousePos || !_this.pageSize) {
                return;
            }
            /** @type {?} */
            var minWidth = 40;
            /** @type {?} */
            var minHeight = 15;
            /** @type {?} */
            var width = _this.width;
            /** @type {?} */
            var height = _this.height;
            /** @type {?} */
            var delta = new Point((mousePos.x - startMousePos.x) / _this.scale, (mousePos.y - startMousePos.y) / _this.scale);
            if (columnInitialPos) {
                /** @type {?} */
                var v = columnInitialPos + delta.x;
                column.value = Math.max(0, Math.min(_this.width, v));
                return;
            }
            switch (mode) {
                case 'Move':
                    _this.left = Math.min(left + delta.x, _this.pageSize.width - _this.width);
                    _this.top = Math.min(top + delta.y, _this.pageSize.height - _this.height);
                    _this.right = _this.left + width;
                    _this.bottom = _this.top + height;
                    break;
                // Edges
                case 'W':
                    _this.left = left + delta.x;
                    if (_this.width < minWidth) {
                        _this.left = _this.right - minWidth;
                    }
                    break;
                case 'E':
                    _this.right = right + delta.x;
                    if (_this.width < minWidth) {
                        _this.right = _this.left + minWidth;
                    }
                    break;
                case 'N':
                    _this.top = top + delta.y;
                    if (_this.height < minWidth) {
                        _this.top = _this.bottom - minHeight;
                    }
                    break;
                case 'S':
                    _this.bottom = bottom + delta.y;
                    if (_this.height < minHeight) {
                        _this.bottom = _this.top + minHeight;
                    }
                    break;
                // Corners
                case 'NW':
                    _this.left = left + delta.x;
                    _this.top = top + delta.y;
                    if (_this.width < minWidth) {
                        _this.left = _this.right - minWidth;
                    }
                    if (_this.height < minWidth) {
                        _this.top = _this.bottom - minHeight;
                    }
                    break;
                case 'SW':
                    _this.left = left + delta.x;
                    _this.bottom = bottom + delta.y;
                    if (_this.width < minWidth) {
                        _this.left = _this.right - minWidth;
                    }
                    if (_this.height < minHeight) {
                        _this.bottom = _this.top + minHeight;
                    }
                    break;
                case 'NE':
                    _this.right = right + delta.x;
                    _this.top = top + delta.y;
                    if (_this.width < minWidth) {
                        _this.right = _this.left + minWidth;
                    }
                    if (_this.height < minHeight) {
                        _this.top = _this.bottom - minHeight;
                    }
                    break;
                case 'SE':
                    _this.right = right + delta.x;
                    _this.bottom = bottom + delta.y;
                    if (_this.width < minWidth) {
                        _this.right = _this.left + minWidth;
                    }
                    if (_this.height < minHeight) {
                        _this.bottom = _this.top + minHeight;
                    }
                    break;
            }
        }));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    FieldComponent.prototype.rightClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
    };
    FieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-field',
                    template: "<div class=\"field\" (clickOutside)=\"isActive = false\" (contextmenu)=\"rightClick($event)\"\n    [clickOutsideEvents]=\"'mousedown'\" [clickOutsideEnabled]=\"isActive\" [style.left.px]=\"left\" [style.top.px]=\"top\"\n    [style.width.px]=\"width\" [style.height.px]=\"height\">\n\n    <div class=\"field-text\" (dblclick)=\"renameFieldClick()\" (mousedown)=\"mouseDown($event, 'Move')\"\n        (panstart)=\"mouseDown($event, 'Move')\">\n        <div *ngIf=\"!isActive\">{{ field.name }}</div>\n    </div>\n    <div class=\"resizable-handle ne-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'NE')\"\n        (panstart)=\"mouseDown($event, 'NE')\"></div>\n    <div class=\"resizable-handle se-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'SE')\"\n        (panstart)=\"mouseDown($event, 'SE')\"></div>\n    <div class=\"resizable-handle sw-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'SW')\"\n        (panstart)=\"mouseDown($event, 'SW')\"></div>\n    <div class=\"resizable-handle nw-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'NW')\"\n        (panstart)=\"mouseDown($event, 'NW')\"></div>\n\n    <div class=\"resizable-v-edge w-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'W')\"\n        (panstart)=\"mouseDown($event, 'W')\"></div>\n    <div class=\"resizable-v-edge e-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'E')\"\n        (panstart)=\"mouseDown($event, 'E')\"></div>\n    <div class=\"resizable-h-edge n-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'N')\"\n        (panstart)=\"mouseDown($event, 'N')\"></div>        \n    <div class=\"resizable-h-edge s-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'S')\"\n        (panstart)=\"mouseDown($event, 'S')\"></div>\n\n    <div *ngIf=\"isTable && isActive\">\n        <div *ngFor=\"let column of field.columns\" class=\"tc-top resizable-handle\" [style.left.px]=\"column.value\"></div>\n        <div *ngFor=\"let column of field.columns\" class=\"tc-bottom resizable-handle\" [style.left.px]=\"column.value\"></div>\n        <div *ngFor=\"let column of field.columns\" class=\"tc\" [style.left.px]=\"column.value\"\n            (mousedown)=\"mouseDown($event, column.name)\">\n            <div class=\"tc-background\"></div>\n            <div class=\"tc-remove image-btn\" title=\"Remove column separator\" (click)=\"removeColumn(column)\">\n                <fa-icon [icon]=\"'trash'\"></fa-icon>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"isTable && !isActive\">\n        <div *ngFor=\"let column of field.columns\" class=\"tc-deactived\" [style.left.px]=\"column.value\">\n        </div>\n    </div>\n\n    <div class=\"tc-add-left image-btn\" *ngIf=\"isTable && isActive\" title=\"Add new column separator\" (click)=\"addColumnLeft()\">\n        <fa-icon [icon]=\"'plus'\"></fa-icon>\n    </div>\n\n    <div class=\"tc-add-right image-btn\" *ngIf=\"isTable && isActive\" title=\"Add new column separator\" (click)=\"addColumnRight()\">\n        <fa-icon [icon]=\"'plus'\"></fa-icon>\n    </div>\n\n    <div class=\"context-menu\" *ngIf=\"isActive\">\n        <div class=\"image-btn\" (click)=\"renameFieldClick()\" title=\"Rename the field\">\n            <fa-icon [icon]=\"'edit'\"></fa-icon>\n        </div>\n        <div class=\"image-btn\" (click)=\"deleteFieldClick()\" title=\"Remove the field\">\n            <fa-icon [icon]=\"'trash'\"></fa-icon>\n        </div>\n    </div>\n\n    <div class=\"field-name\" *ngIf=\"isActive\">\n        {{ field.name }}\n    </div>\n\n</div>",
                    styles: [".btn{padding:5px 20px;background-color:#25c2d4;cursor:pointer;color:#fff!important}.btn:hover{background-color:#688296;color:#ccd0d4!important}.image-btn{text-align:center;cursor:pointer;margin:1px;color:#c4c4c4}.image-btn:hover{color:#688296!important}.image-btn>fa-icon{padding:5px;font-size:16px}.list-item:nth-of-type(even){background-color:#f4f4f4}.list-item:hover{background-color:#e5e5e5}.tc{position:absolute;display:block;border-left:4px solid #679ffa;width:4px;top:-5px;bottom:-5px;cursor:col-resize;z-index:1000}.tc-deactived{position:absolute;display:block;border-left:4px solid #738a9cc9;width:4px;top:0;bottom:0;cursor:col-resize;z-index:1000}.tc-background{-webkit-transform:translatex(-9px);transform:translatex(-9px);background-color:#fffFFF01;width:15px;height:100%}.tc-top{top:-5px;-webkit-transform:translatex(-3px);transform:translatex(-3px);cursor:col-resize}.tc-bottom{bottom:-5px;-webkit-transform:translatex(-3px);transform:translatex(-3px);cursor:col-resize}.tc-remove{background:#fff;display:none;position:absolute;top:15px}.tc:hover>.tc-remove{display:block}.tc-add-left{position:absolute;left:-5px;top:50%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.tc-add-right{position:absolute;right:-5px;top:50%;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}.resizable-v-edge{background-color:#fffFFF01;position:absolute;font-size:.1px;display:block;width:10px;top:5px;bottom:5px}.resizable-h-edge{background-color:#fffFFF01;position:absolute;font-size:.1px;display:block;height:10px;left:5px;right:5px}.w-resize{cursor:w-resize;left:-5px}.e-resize{cursor:e-resize;right:-5px}.n-resize{cursor:n-resize;top:-5px}.s-resize{cursor:s-resize;bottom:-5px}.resizable-handle{background-color:#679ffa;width:10px;height:10px;position:absolute;font-size:.1px;display:block}.se-resize{bottom:-5px;right:-5px;cursor:se-resize}.ne-resize{top:-5px;right:-5px;cursor:ne-resize}.sw-resize{bottom:-5px;left:-5px;cursor:sw-resize}.nw-resize{top:-5px;left:-5px;cursor:nw-resize}.field{position:absolute}.field-text{background-color:#99b1c440;cursor:move;color:#000;width:inherit;height:inherit}.field-text>div{background-color:#99b1c4DD;box-sizing:border-box;width:100%;height:100%;padding:1px 5px;font-size:10px;overflow:hidden;text-overflow:ellipsis;pointer-events:none}.field-name{position:absolute;width:auto;left:50%;top:0;-webkit-transform:translate(-50%,calc(-100% - 5px));transform:translate(-50%,calc(-100% - 5px));padding:2px 5px;background-color:#fff;border:#688296;box-shadow:rgba(0,0,0,.52) 0 0 5px;font-size:8px;color:#688296;cursor:context-menu}.context-menu{position:absolute;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;width:auto;left:50%;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);margin-top:5px;background-color:#fff;border:#688296;box-shadow:rgba(0,0,0,.52) 0 0 5px}"]
                }] }
    ];
    /** @nocollapse */
    FieldComponent.ctorParameters = function () { return [
        { type: FieldService },
        { type: ZoomService }
    ]; };
    FieldComponent.propDecorators = {
        contextMenuClick: [{ type: Output }]
    };
    return FieldComponent;
}());
export { FieldComponent };
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
    FieldComponent.prototype.isActive;
    /** @type {?} */
    FieldComponent.prototype.contextMenuClick;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3BhcnNlci8iLCJzb3VyY2VzIjpbImxpYi9maWVsZC9maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQTBDLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQVMsV0FBVyxFQUFnQixNQUFNLCtDQUErQyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUE4QyxrQkFBa0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RyxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFRLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUM1QyxPQUFPLEVBQVUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBRTdDLENBQUMsR0FBRyxNQUFNO0FBRWhCO0lBQ0UsK0JBQW1CLFNBQWlCLEVBQVMsTUFBYztRQUF4QyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUUzRCxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhhLDBDQUF3Qjs7SUFBRSx1Q0FBcUI7O0FBSzdEO0lBb0JFLHdCQUNVLGFBQTJCLEVBQzNCLFlBQXlCO1FBRm5DLGlCQU9DO1FBTlMsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsaUJBQVksR0FBWixZQUFZLENBQWE7UUFSM0IsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFJdkIscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUE7UUFLcEUsYUFBYSxDQUFD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QUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBRS9CLElBQUksS0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLEVBQUU7d0JBQ3pCLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7cUJBQ25DO29CQUVELElBQUksS0FBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUU7d0JBQzNCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7cUJBQ3BDO29CQUVELE1BQU07Z0JBRVIsS0FBSyxJQUFJO29CQUNQLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBRXpCLElBQUksS0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLEVBQUU7d0JBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7cUJBQ25DO29CQUVELElBQUksS0FBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUU7d0JBQzNCLEtBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7cUJBQ3BDO29CQUVELE1BQU07Z0JBRVIsS0FBSyxJQUFJO29CQUNQLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBRS9CLElBQUksS0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLEVBQUU7d0JBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7cUJBQ25DO29CQUVELElBQUksS0FBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUU7d0JBQzNCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7cUJBQ3BDO29CQUVELE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFFRCxtQ0FBVTs7OztJQUFWLFVBQVcsTUFBTTtRQUNmLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDOztnQkEvU0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixtaEhBQXFDOztpQkFFdEM7Ozs7Z0JBakJRLFlBQVk7Z0JBSkwsV0FBVzs7O21DQW1DeEIsTUFBTTs7SUE4UlQscUJBQUM7Q0FBQSxBQWhURCxJQWdUQztTQTNTWSxjQUFjOzs7SUFDekIsa0NBQWU7Ozs7O0lBRWYsK0JBQXNCOzs7OztJQUN0Qiw4QkFBcUI7Ozs7O0lBQ3JCLGdDQUF1Qjs7Ozs7SUFDdkIsaUNBQXdCOzs7OztJQUV4QixnQ0FBNkI7Ozs7O0lBQzdCLGtDQUFpQzs7SUFFakMsa0NBQWtCOztJQUVsQiwwQ0FBc0U7Ozs7O0lBR3BFLHVDQUFtQzs7Ozs7SUFDbkMsc0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVdGlscywgWm9vbVNlcnZpY2UsIE1vZGFsU2VydmljZSB9IGZyb20gJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XG5pbXBvcnQgeyBQb2ludCwgU2l6ZSwgVGVtcGxhdGVGaWVsZCwgVGVtcGxhdGVGaWVsZFRhYmxlU2VwYXJhdG9yLCBUZW1wbGF0ZUZpZWxkVHlwZXMgfSBmcm9tICcuLi9hcHAtbW9kZWxzJztcblxuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBGaWVsZFNlcnZpY2UgfSBmcm9tICcuLi9maWVsZC5zZXJ2aWNlJztcbmltcG9ydCB7IGZyb20sIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5leHBvcnQgY2xhc3MgRmllbGRDb250ZXh0TWVudUNsaWNrIHtcbiAgY29uc3RydWN0b3IocHVibGljIGZpZWxkTmFtZTogc3RyaW5nLCBwdWJsaWMgYWN0aW9uOiBzdHJpbmcpIHtcblxuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWZpZWxkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpZWxkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmllbGQuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcGFnZVNpemU6IFNpemU7XG5cbiAgcHJpdmF0ZSBfbGVmdDogbnVtYmVyO1xuICBwcml2YXRlIF90b3A6IG51bWJlcjtcbiAgcHJpdmF0ZSBfcmlnaHQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBfYm90dG9tOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBfZmllbGQ6IFRlbXBsYXRlRmllbGRcbiAgcHJpdmF0ZSBfZGVzdHJveSA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgaXNBY3RpdmU6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIGNvbnRleHRNZW51Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPEZpZWxkQ29udGV4dE1lbnVDbGljaz4oKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2ZpZWxkU2VydmljZTogRmllbGRTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSkge1xuICAgIF9maWVsZFNlcnZpY2UuYWN0aXZlQ2hhbmdlZC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcbiAgICAgIC5zdWJzY3JpYmUobmFtZSA9PiB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0aGlzLl9maWVsZCAmJiB0aGlzLl9maWVsZC5uYW1lID09PSBuYW1lO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2Rlc3Ryb3kubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3kuY29tcGxldGUoKTtcbiAgfVxuXG4gIGdldCBpc0ZpeGVkKCkge1xuICAgIHJldHVybiB0aGlzLmZpZWxkLmZpZWxkVHlwZSA9PT0gVGVtcGxhdGVGaWVsZFR5cGVzLkZJWEVEO1xuICB9XG5cbiAgZ2V0IGlzVGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmllbGQuZmllbGRUeXBlID09PSBUZW1wbGF0ZUZpZWxkVHlwZXMuVEFCTEU7XG4gIH1cblxuICBnZXQgbGVmdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sZWZ0O1xuICB9XG5cbiAgc2V0IGxlZnQobGVmdDogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLnBhZ2VTaXplKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbGVmdCA9IE1hdGgubWluKHRoaXMucGFnZVNpemUud2lkdGgsIE1hdGgubWF4KDAsIGxlZnQpKTtcbiAgfVxuXG4gIGdldCB0b3AoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG9wO1xuICB9XG5cbiAgc2V0IHRvcCh0b3A6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5wYWdlU2l6ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3RvcCA9IE1hdGgubWluKHRoaXMucGFnZVNpemUuaGVpZ2h0LCBNYXRoLm1heCgwLCB0b3ApKTtcbiAgfVxuXG4gIGdldCByaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yaWdodDtcbiAgfVxuXG4gIHNldCByaWdodChyaWdodDogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLnBhZ2VTaXplKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcmlnaHQgPSBNYXRoLm1pbihNYXRoLm1heCgwLCByaWdodCksIHRoaXMucGFnZVNpemUud2lkdGgpO1xuICB9XG5cbiAgZ2V0IGJvdHRvbSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9ib3R0b207XG4gIH1cblxuICBzZXQgYm90dG9tKGJvdHRvbTogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLnBhZ2VTaXplKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fYm90dG9tID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgYm90dG9tKSwgdGhpcy5wYWdlU2l6ZS5oZWlnaHQpO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5yaWdodCAtIHRoaXMubGVmdDtcblxuICAgIHJldHVybiB3aWR0aCA/IHdpZHRoIDogMDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5ib3R0b20gLSB0aGlzLnRvcDtcblxuICAgIHJldHVybiBoZWlnaHQgPyBoZWlnaHQgOiAwO1xuICB9XG5cbiAgZ2V0IHNjYWxlKCkge1xuICAgIHJldHVybiB0aGlzLl96b29tU2VydmljZS56b29tIC8gMTAwO1xuICB9XG5cbiAgcmVuYW1lRmllbGRDbGljaygpIHtcbiAgICB0aGlzLmNvbnRleHRNZW51Q2xpY2suZW1pdChuZXcgRmllbGRDb250ZXh0TWVudUNsaWNrKHRoaXMuZmllbGQubmFtZSwgXCJyZW5hbWVcIikpO1xuICB9XG5cbiAgZGVsZXRlRmllbGRDbGljaygpIHtcbiAgICB0aGlzLmNvbnRleHRNZW51Q2xpY2suZW1pdChuZXcgRmllbGRDb250ZXh0TWVudUNsaWNrKHRoaXMuZmllbGQubmFtZSwgXCJyZW1vdmVcIikpO1xuICB9XG5cbiAgYWRkQ29sdW1uTGVmdCgpIHtcbiAgICB0aGlzLmZpZWxkLmFkZENvbHVtbihudWxsLCB0aGlzLndpZHRoICogMC4xKTtcbiAgfVxuXG4gIGFkZENvbHVtblJpZ2h0KCkge1xuICAgIHRoaXMuZmllbGQuYWRkQ29sdW1uKG51bGwsIHRoaXMud2lkdGggKiAwLjkpO1xuICB9XG5cbiAgcmVtb3ZlQ29sdW1uKGNvbHVtbjogVGVtcGxhdGVGaWVsZFRhYmxlU2VwYXJhdG9yKSB7XG4gICAgdGhpcy5maWVsZC5yZW1vdmVDb2x1bW4oY29sdW1uKTtcbiAgfVxuXG4gIHNldCBmaWVsZChmaWVsZDogVGVtcGxhdGVGaWVsZCkge1xuICAgIHRoaXMuX2ZpZWxkID0gZmllbGQ7XG5cbiAgICB0aGlzLmxlZnQgPSB0aGlzLmZpZWxkLnBvc2l0aW9uLng7XG4gICAgdGhpcy50b3AgPSB0aGlzLmZpZWxkLnBvc2l0aW9uLnk7XG5cbiAgICB0aGlzLnJpZ2h0ID0gdGhpcy5maWVsZC5wb3NpdGlvbi54ICsgdGhpcy5maWVsZC5zaXplLndpZHRoO1xuICAgIHRoaXMuYm90dG9tID0gdGhpcy5maWVsZC5wb3NpdGlvbi55ICsgdGhpcy5maWVsZC5zaXplLmhlaWdodDtcbiAgfVxuXG4gIGdldCBmaWVsZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGQ7XG4gIH1cblxuICBtb3VzZURvd24oJGV2ZW50OiBNb3VzZUV2ZW50LCBtb2RlOiBzdHJpbmcpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuX2ZpZWxkU2VydmljZS5zZXRBY3RpdmUodGhpcy5maWVsZC5uYW1lKTtcbiAgICBjb25zdCBzdGFydE1vdXNlUG9zID0gdGhpcy5fZmllbGRTZXJ2aWNlLmJlZ2luTW92ZSgkZXZlbnQpO1xuXG4gICAgY29uc3QgbGVmdCA9IHRoaXMubGVmdDtcbiAgICBjb25zdCB0b3AgPSB0aGlzLnRvcDtcbiAgICBjb25zdCByaWdodCA9IHRoaXMucmlnaHQ7XG4gICAgY29uc3QgYm90dG9tID0gdGhpcy5ib3R0b207XG5cbiAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmZpZWxkLmdldENvbHVtbkJ5TmFtZShtb2RlKTtcbiAgICBjb25zdCBjb2x1bW5Jbml0aWFsUG9zID0gY29sdW1uID8gY29sdW1uLnZhbHVlIDogbnVsbDtcblxuICAgIC8vICBsZXQgcHBhID0gbW9kZS5zdGFydHNXaXRoKCdUQzonKTtcblxuICAgIGNvbnN0IG1vdXNlVXBTdWJzY3JpcHRpb24gPSB0aGlzLl9maWVsZFNlcnZpY2UubW91c2VVcFxuICAgICAgLnN1YnNjcmliZShtb3VzZVBvcyA9PiB7XG4gICAgICAgIHRoaXMuX2ZpZWxkLnBvc2l0aW9uID0gbmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy50b3ApO1xuICAgICAgICB0aGlzLl9maWVsZC5zaXplID0gbmV3IFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vICAgIHBwYSA9IGZhbHNlO1xuXG4gICAgICAgIG1vdXNlVXBTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5fZmllbGRTZXJ2aWNlLm1vdXNlTW92ZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2ZpZWxkU2VydmljZS5tb3VzZVVwKSlcbiAgICAgIC5zdWJzY3JpYmUobW91c2VQb3MgPT4ge1xuICAgICAgICBpZiAoIW1vdXNlUG9zIHx8ICF0aGlzLnBhZ2VTaXplKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWluV2lkdGggPSA0MDtcbiAgICAgICAgY29uc3QgbWluSGVpZ2h0ID0gMTU7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmhlaWdodDtcblxuICAgICAgICBjb25zdCBkZWx0YSA9IG5ldyBQb2ludChcbiAgICAgICAgICAobW91c2VQb3MueCAtIHN0YXJ0TW91c2VQb3MueCkgLyB0aGlzLnNjYWxlLFxuICAgICAgICAgIChtb3VzZVBvcy55IC0gc3RhcnRNb3VzZVBvcy55KSAvIHRoaXMuc2NhbGVcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoY29sdW1uSW5pdGlhbFBvcykge1xuICAgICAgICAgIGNvbnN0IHYgPSBjb2x1bW5Jbml0aWFsUG9zICsgZGVsdGEueDtcbiAgICAgICAgICBjb2x1bW4udmFsdWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLndpZHRoLCB2KSk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgICBjYXNlICdNb3ZlJzpcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IE1hdGgubWluKGxlZnQgKyBkZWx0YS54LCB0aGlzLnBhZ2VTaXplLndpZHRoIC0gdGhpcy53aWR0aCk7XG4gICAgICAgICAgICB0aGlzLnRvcCA9IE1hdGgubWluKHRvcCArIGRlbHRhLnksIHRoaXMucGFnZVNpemUuaGVpZ2h0IC0gdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5yaWdodCA9IHRoaXMubGVmdCArIHdpZHRoO1xuICAgICAgICAgICAgdGhpcy5ib3R0b20gPSB0aGlzLnRvcCArIGhlaWdodDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gRWRnZXNcblxuICAgICAgICAgIGNhc2UgJ1cnOlxuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdCArIGRlbHRhLng7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLndpZHRoIDwgbWluV2lkdGgpIHtcbiAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5yaWdodCAtIG1pbldpZHRoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ0UnOlxuICAgICAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0ICsgZGVsdGEueDtcblxuICAgICAgICAgICAgaWYgKHRoaXMud2lkdGggPCBtaW5XaWR0aCkge1xuICAgICAgICAgICAgICB0aGlzLnJpZ2h0ID0gdGhpcy5sZWZ0ICsgbWluV2lkdGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgICB0aGlzLnRvcCA9IHRvcCArIGRlbHRhLnk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmhlaWdodCA8IG1pbldpZHRoKSB7XG4gICAgICAgICAgICAgIHRoaXMudG9wID0gdGhpcy5ib3R0b20gLSBtaW5IZWlnaHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbSArIGRlbHRhLnk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmhlaWdodCA8IG1pbkhlaWdodCkge1xuICAgICAgICAgICAgICB0aGlzLmJvdHRvbSA9IHRoaXMudG9wICsgbWluSGVpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vIENvcm5lcnNcblxuICAgICAgICAgIGNhc2UgJ05XJzpcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IGxlZnQgKyBkZWx0YS54O1xuICAgICAgICAgICAgdGhpcy50b3AgPSB0b3AgKyBkZWx0YS55O1xuXG4gICAgICAgICAgICBpZiAodGhpcy53aWR0aCA8IG1pbldpZHRoKSB7XG4gICAgICAgICAgICAgIHRoaXMubGVmdCA9IHRoaXMucmlnaHQgLSBtaW5XaWR0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaGVpZ2h0IDwgbWluV2lkdGgpIHtcbiAgICAgICAgICAgICAgdGhpcy50b3AgPSB0aGlzLmJvdHRvbSAtIG1pbkhlaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdTVyc6XG4gICAgICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0ICsgZGVsdGEueDtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tID0gYm90dG9tICsgZGVsdGEueTtcblxuICAgICAgICAgICAgaWYgKHRoaXMud2lkdGggPCBtaW5XaWR0aCkge1xuICAgICAgICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLnJpZ2h0IC0gbWluV2lkdGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmhlaWdodCA8IG1pbkhlaWdodCkge1xuICAgICAgICAgICAgICB0aGlzLmJvdHRvbSA9IHRoaXMudG9wICsgbWluSGVpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ05FJzpcbiAgICAgICAgICAgIHRoaXMucmlnaHQgPSByaWdodCArIGRlbHRhLng7XG4gICAgICAgICAgICB0aGlzLnRvcCA9IHRvcCArIGRlbHRhLnk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLndpZHRoIDwgbWluV2lkdGgpIHtcbiAgICAgICAgICAgICAgdGhpcy5yaWdodCA9IHRoaXMubGVmdCArIG1pbldpZHRoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5oZWlnaHQgPCBtaW5IZWlnaHQpIHtcbiAgICAgICAgICAgICAgdGhpcy50b3AgPSB0aGlzLmJvdHRvbSAtIG1pbkhlaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdTRSc6XG4gICAgICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQgKyBkZWx0YS54O1xuICAgICAgICAgICAgdGhpcy5ib3R0b20gPSBib3R0b20gKyBkZWx0YS55O1xuXG4gICAgICAgICAgICBpZiAodGhpcy53aWR0aCA8IG1pbldpZHRoKSB7XG4gICAgICAgICAgICAgIHRoaXMucmlnaHQgPSB0aGlzLmxlZnQgKyBtaW5XaWR0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaGVpZ2h0IDwgbWluSGVpZ2h0KSB7XG4gICAgICAgICAgICAgIHRoaXMuYm90dG9tID0gdGhpcy50b3AgKyBtaW5IZWlnaHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHJpZ2h0Q2xpY2soJGV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn0iXX0=