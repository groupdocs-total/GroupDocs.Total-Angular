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
                    template: "<div class=\"field\" (clickOutside)=\"isActive = false\" (contextmenu)=\"rightClick($event)\"\r\n    [clickOutsideEvents]=\"'mousedown'\" [clickOutsideEnabled]=\"isActive\" [style.left.px]=\"left\" [style.top.px]=\"top\"\r\n    [style.width.px]=\"width\" [style.height.px]=\"height\">\r\n\r\n    <div class=\"field-text\" (dblclick)=\"renameFieldClick()\" (mousedown)=\"mouseDown($event, 'Move')\"\r\n        (panstart)=\"mouseDown($event, 'Move')\">\r\n        <div *ngIf=\"!isActive\">{{ field.name }}</div>\r\n    </div>\r\n    <div class=\"resizable-handle ne-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'NE')\"\r\n        (panstart)=\"mouseDown($event, 'NE')\"></div>\r\n    <div class=\"resizable-handle se-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'SE')\"\r\n        (panstart)=\"mouseDown($event, 'SE')\"></div>\r\n    <div class=\"resizable-handle sw-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'SW')\"\r\n        (panstart)=\"mouseDown($event, 'SW')\"></div>\r\n    <div class=\"resizable-handle nw-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'NW')\"\r\n        (panstart)=\"mouseDown($event, 'NW')\"></div>\r\n\r\n    <div class=\"resizable-v-edge w-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'W')\"\r\n        (panstart)=\"mouseDown($event, 'W')\"></div>\r\n    <div class=\"resizable-v-edge e-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'E')\"\r\n        (panstart)=\"mouseDown($event, 'E')\"></div>\r\n    <div class=\"resizable-h-edge n-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'N')\"\r\n        (panstart)=\"mouseDown($event, 'N')\"></div>        \r\n    <div class=\"resizable-h-edge s-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'S')\"\r\n        (panstart)=\"mouseDown($event, 'S')\"></div>\r\n\r\n    <div *ngIf=\"isTable && isActive\">\r\n        <div *ngFor=\"let column of field.columns\" class=\"tc-top resizable-handle\" [style.left.px]=\"column.value\"></div>\r\n        <div *ngFor=\"let column of field.columns\" class=\"tc-bottom resizable-handle\" [style.left.px]=\"column.value\"></div>\r\n        <div *ngFor=\"let column of field.columns\" class=\"tc\" [style.left.px]=\"column.value\"\r\n            (mousedown)=\"mouseDown($event, column.name)\">\r\n            <div class=\"tc-background\"></div>\r\n            <div class=\"tc-remove image-btn\" title=\"Remove column separator\" (click)=\"removeColumn(column)\">\r\n                <fa-icon [icon]=\"'trash'\"></fa-icon>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"isTable && !isActive\">\r\n        <div *ngFor=\"let column of field.columns\" class=\"tc-deactived\" [style.left.px]=\"column.value\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"tc-add-left image-btn\" *ngIf=\"isTable && isActive\" title=\"Add new column separator\" (click)=\"addColumnLeft()\">\r\n        <fa-icon [icon]=\"'plus'\"></fa-icon>\r\n    </div>\r\n\r\n    <div class=\"tc-add-right image-btn\" *ngIf=\"isTable && isActive\" title=\"Add new column separator\" (click)=\"addColumnRight()\">\r\n        <fa-icon [icon]=\"'plus'\"></fa-icon>\r\n    </div>\r\n\r\n    <div class=\"context-menu\" *ngIf=\"isActive\">\r\n        <div class=\"image-btn\" (click)=\"renameFieldClick()\" title=\"Rename the field\">\r\n            <fa-icon [icon]=\"'edit'\"></fa-icon>\r\n        </div>\r\n        <div class=\"image-btn\" (click)=\"deleteFieldClick()\" title=\"Remove the field\">\r\n            <fa-icon [icon]=\"'trash'\"></fa-icon>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"field-name\" *ngIf=\"isActive\">\r\n        {{ field.name }}\r\n    </div>\r\n\r\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3BhcnNlci8iLCJzb3VyY2VzIjpbImxpYi9maWVsZC9maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQTBDLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQVMsV0FBVyxFQUFnQixNQUFNLCtDQUErQyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUE4QyxrQkFBa0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RyxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFRLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUM1QyxPQUFPLEVBQVUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBRTdDLENBQUMsR0FBRyxNQUFNO0FBRWhCO0lBQ0UsK0JBQW1CLFNBQWlCLEVBQVMsTUFBYztRQUF4QyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUUzRCxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhhLDBDQUF3Qjs7SUFBRSx1Q0FBcUI7O0FBSzdEO0lBb0JFLHdCQUNVLGFBQTJCLEVBQzNCLFlBQXlCO1FBRm5DLGlCQU9DO1FBTlMsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsaUJBQVksR0FBWixZQUFZLENBQWE7UUFSM0IsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFJdkIscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUE7UUFLcEUsYUFBYSxDQUFD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QUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBRS9CLElBQUksS0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLEVBQUU7d0JBQ3pCLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7cUJBQ25DO29CQUVELElBQUksS0FBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUU7d0JBQzNCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7cUJBQ3BDO29CQUVELE1BQU07Z0JBRVIsS0FBSyxJQUFJO29CQUNQLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBRXpCLElBQUksS0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLEVBQUU7d0JBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7cUJBQ25DO29CQUVELElBQUksS0FBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUU7d0JBQzNCLEtBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7cUJBQ3BDO29CQUVELE1BQU07Z0JBRVIsS0FBSyxJQUFJO29CQUNQLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBRS9CLElBQUksS0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLEVBQUU7d0JBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7cUJBQ25DO29CQUVELElBQUksS0FBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUU7d0JBQzNCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7cUJBQ3BDO29CQUVELE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFFRCxtQ0FBVTs7OztJQUFWLFVBQVcsTUFBTTtRQUNmLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDOztnQkEvU0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixtcEhBQXFDOztpQkFFdEM7Ozs7Z0JBakJRLFlBQVk7Z0JBSkwsV0FBVzs7O21DQW1DeEIsTUFBTTs7SUE4UlQscUJBQUM7Q0FBQSxBQWhURCxJQWdUQztTQTNTWSxjQUFjOzs7SUFDekIsa0NBQWU7Ozs7O0lBRWYsK0JBQXNCOzs7OztJQUN0Qiw4QkFBcUI7Ozs7O0lBQ3JCLGdDQUF1Qjs7Ozs7SUFDdkIsaUNBQXdCOzs7OztJQUV4QixnQ0FBNkI7Ozs7O0lBQzdCLGtDQUFpQzs7SUFFakMsa0NBQWtCOztJQUVsQiwwQ0FBc0U7Ozs7O0lBR3BFLHVDQUFtQzs7Ozs7SUFDbkMsc0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFV0aWxzLCBab29tU2VydmljZSwgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgUG9pbnQsIFNpemUsIFRlbXBsYXRlRmllbGQsIFRlbXBsYXRlRmllbGRUYWJsZVNlcGFyYXRvciwgVGVtcGxhdGVGaWVsZFR5cGVzIH0gZnJvbSAnLi4vYXBwLW1vZGVscyc7XHJcblxyXG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHsgRmllbGRTZXJ2aWNlIH0gZnJvbSAnLi4vZmllbGQuc2VydmljZSc7XHJcbmltcG9ydCB7IGZyb20sIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmNvbnN0ICQgPSBqcXVlcnk7XHJcblxyXG5leHBvcnQgY2xhc3MgRmllbGRDb250ZXh0TWVudUNsaWNrIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmllbGROYW1lOiBzdHJpbmcsIHB1YmxpYyBhY3Rpb246IHN0cmluZykge1xyXG5cclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtZmllbGQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWVsZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmllbGQuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcGFnZVNpemU6IFNpemU7XHJcblxyXG4gIHByaXZhdGUgX2xlZnQ6IG51bWJlcjtcclxuICBwcml2YXRlIF90b3A6IG51bWJlcjtcclxuICBwcml2YXRlIF9yaWdodDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2JvdHRvbTogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIF9maWVsZDogVGVtcGxhdGVGaWVsZFxyXG4gIHByaXZhdGUgX2Rlc3Ryb3kgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBpc0FjdGl2ZTogYm9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpIGNvbnRleHRNZW51Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPEZpZWxkQ29udGV4dE1lbnVDbGljaz4oKVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2ZpZWxkU2VydmljZTogRmllbGRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlKSB7XHJcbiAgICBfZmllbGRTZXJ2aWNlLmFjdGl2ZUNoYW5nZWQucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpXHJcbiAgICAgIC5zdWJzY3JpYmUobmFtZSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRoaXMuX2ZpZWxkICYmIHRoaXMuX2ZpZWxkLm5hbWUgPT09IG5hbWU7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2Rlc3Ryb3kubmV4dCgpO1xyXG4gICAgdGhpcy5fZGVzdHJveS5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzRml4ZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC5maWVsZFR5cGUgPT09IFRlbXBsYXRlRmllbGRUeXBlcy5GSVhFRDtcclxuICB9XHJcblxyXG4gIGdldCBpc1RhYmxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQuZmllbGRUeXBlID09PSBUZW1wbGF0ZUZpZWxkVHlwZXMuVEFCTEU7XHJcbiAgfVxyXG5cclxuICBnZXQgbGVmdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xlZnQ7XHJcbiAgfVxyXG5cclxuICBzZXQgbGVmdChsZWZ0OiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5wYWdlU2l6ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fbGVmdCA9IE1hdGgubWluKHRoaXMucGFnZVNpemUud2lkdGgsIE1hdGgubWF4KDAsIGxlZnQpKTtcclxuICB9XHJcblxyXG4gIGdldCB0b3AoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl90b3A7XHJcbiAgfVxyXG5cclxuICBzZXQgdG9wKHRvcDogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMucGFnZVNpemUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3RvcCA9IE1hdGgubWluKHRoaXMucGFnZVNpemUuaGVpZ2h0LCBNYXRoLm1heCgwLCB0b3ApKTtcclxuICB9XHJcblxyXG4gIGdldCByaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JpZ2h0O1xyXG4gIH1cclxuXHJcbiAgc2V0IHJpZ2h0KHJpZ2h0OiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5wYWdlU2l6ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcmlnaHQgPSBNYXRoLm1pbihNYXRoLm1heCgwLCByaWdodCksIHRoaXMucGFnZVNpemUud2lkdGgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJvdHRvbSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2JvdHRvbTtcclxuICB9XHJcblxyXG4gIHNldCBib3R0b20oYm90dG9tOiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5wYWdlU2l6ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fYm90dG9tID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgYm90dG9tKSwgdGhpcy5wYWdlU2l6ZS5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHdpZHRoKCkge1xyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLnJpZ2h0IC0gdGhpcy5sZWZ0O1xyXG5cclxuICAgIHJldHVybiB3aWR0aCA/IHdpZHRoIDogMDtcclxuICB9XHJcblxyXG4gIGdldCBoZWlnaHQoKSB7XHJcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmJvdHRvbSAtIHRoaXMudG9wO1xyXG5cclxuICAgIHJldHVybiBoZWlnaHQgPyBoZWlnaHQgOiAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNjYWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3pvb21TZXJ2aWNlLnpvb20gLyAxMDA7XHJcbiAgfVxyXG5cclxuICByZW5hbWVGaWVsZENsaWNrKCkge1xyXG4gICAgdGhpcy5jb250ZXh0TWVudUNsaWNrLmVtaXQobmV3IEZpZWxkQ29udGV4dE1lbnVDbGljayh0aGlzLmZpZWxkLm5hbWUsIFwicmVuYW1lXCIpKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUZpZWxkQ2xpY2soKSB7XHJcbiAgICB0aGlzLmNvbnRleHRNZW51Q2xpY2suZW1pdChuZXcgRmllbGRDb250ZXh0TWVudUNsaWNrKHRoaXMuZmllbGQubmFtZSwgXCJyZW1vdmVcIikpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ29sdW1uTGVmdCgpIHtcclxuICAgIHRoaXMuZmllbGQuYWRkQ29sdW1uKG51bGwsIHRoaXMud2lkdGggKiAwLjEpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ29sdW1uUmlnaHQoKSB7XHJcbiAgICB0aGlzLmZpZWxkLmFkZENvbHVtbihudWxsLCB0aGlzLndpZHRoICogMC45KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNvbHVtbihjb2x1bW46IFRlbXBsYXRlRmllbGRUYWJsZVNlcGFyYXRvcikge1xyXG4gICAgdGhpcy5maWVsZC5yZW1vdmVDb2x1bW4oY29sdW1uKTtcclxuICB9XHJcblxyXG4gIHNldCBmaWVsZChmaWVsZDogVGVtcGxhdGVGaWVsZCkge1xyXG4gICAgdGhpcy5fZmllbGQgPSBmaWVsZDtcclxuXHJcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmZpZWxkLnBvc2l0aW9uLng7XHJcbiAgICB0aGlzLnRvcCA9IHRoaXMuZmllbGQucG9zaXRpb24ueTtcclxuXHJcbiAgICB0aGlzLnJpZ2h0ID0gdGhpcy5maWVsZC5wb3NpdGlvbi54ICsgdGhpcy5maWVsZC5zaXplLndpZHRoO1xyXG4gICAgdGhpcy5ib3R0b20gPSB0aGlzLmZpZWxkLnBvc2l0aW9uLnkgKyB0aGlzLmZpZWxkLnNpemUuaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZpZWxkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkO1xyXG4gIH1cclxuXHJcbiAgbW91c2VEb3duKCRldmVudDogTW91c2VFdmVudCwgbW9kZTogc3RyaW5nKSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLl9maWVsZFNlcnZpY2Uuc2V0QWN0aXZlKHRoaXMuZmllbGQubmFtZSk7XHJcbiAgICBjb25zdCBzdGFydE1vdXNlUG9zID0gdGhpcy5fZmllbGRTZXJ2aWNlLmJlZ2luTW92ZSgkZXZlbnQpO1xyXG5cclxuICAgIGNvbnN0IGxlZnQgPSB0aGlzLmxlZnQ7XHJcbiAgICBjb25zdCB0b3AgPSB0aGlzLnRvcDtcclxuICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5yaWdodDtcclxuICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMuYm90dG9tO1xyXG5cclxuICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuZmllbGQuZ2V0Q29sdW1uQnlOYW1lKG1vZGUpO1xyXG4gICAgY29uc3QgY29sdW1uSW5pdGlhbFBvcyA9IGNvbHVtbiA/IGNvbHVtbi52YWx1ZSA6IG51bGw7XHJcblxyXG4gICAgLy8gIGxldCBwcGEgPSBtb2RlLnN0YXJ0c1dpdGgoJ1RDOicpO1xyXG5cclxuICAgIGNvbnN0IG1vdXNlVXBTdWJzY3JpcHRpb24gPSB0aGlzLl9maWVsZFNlcnZpY2UubW91c2VVcFxyXG4gICAgICAuc3Vic2NyaWJlKG1vdXNlUG9zID0+IHtcclxuICAgICAgICB0aGlzLl9maWVsZC5wb3NpdGlvbiA9IG5ldyBQb2ludCh0aGlzLmxlZnQsIHRoaXMudG9wKTtcclxuICAgICAgICB0aGlzLl9maWVsZC5zaXplID0gbmV3IFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyAgICBwcGEgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbW91c2VVcFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9maWVsZFNlcnZpY2UubW91c2VNb3ZlXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9maWVsZFNlcnZpY2UubW91c2VVcCkpXHJcbiAgICAgIC5zdWJzY3JpYmUobW91c2VQb3MgPT4ge1xyXG4gICAgICAgIGlmICghbW91c2VQb3MgfHwgIXRoaXMucGFnZVNpemUpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1pbldpZHRoID0gNDA7XHJcbiAgICAgICAgY29uc3QgbWluSGVpZ2h0ID0gMTU7XHJcblxyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuXHJcbiAgICAgICAgY29uc3QgZGVsdGEgPSBuZXcgUG9pbnQoXHJcbiAgICAgICAgICAobW91c2VQb3MueCAtIHN0YXJ0TW91c2VQb3MueCkgLyB0aGlzLnNjYWxlLFxyXG4gICAgICAgICAgKG1vdXNlUG9zLnkgLSBzdGFydE1vdXNlUG9zLnkpIC8gdGhpcy5zY2FsZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChjb2x1bW5Jbml0aWFsUG9zKSB7XHJcbiAgICAgICAgICBjb25zdCB2ID0gY29sdW1uSW5pdGlhbFBvcyArIGRlbHRhLng7XHJcbiAgICAgICAgICBjb2x1bW4udmFsdWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLndpZHRoLCB2KSk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoIChtb2RlKSB7XHJcbiAgICAgICAgICBjYXNlICdNb3ZlJzpcclxuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gTWF0aC5taW4obGVmdCArIGRlbHRhLngsIHRoaXMucGFnZVNpemUud2lkdGggLSB0aGlzLndpZHRoKTtcclxuICAgICAgICAgICAgdGhpcy50b3AgPSBNYXRoLm1pbih0b3AgKyBkZWx0YS55LCB0aGlzLnBhZ2VTaXplLmhlaWdodCAtIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5yaWdodCA9IHRoaXMubGVmdCArIHdpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmJvdHRvbSA9IHRoaXMudG9wICsgaGVpZ2h0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAvLyBFZGdlc1xyXG5cclxuICAgICAgICAgIGNhc2UgJ1cnOlxyXG4gICAgICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0ICsgZGVsdGEueDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLndpZHRoIDwgbWluV2lkdGgpIHtcclxuICAgICAgICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLnJpZ2h0IC0gbWluV2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIGNhc2UgJ0UnOlxyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQgKyBkZWx0YS54O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMud2lkdGggPCBtaW5XaWR0aCkge1xyXG4gICAgICAgICAgICAgIHRoaXMucmlnaHQgPSB0aGlzLmxlZnQgKyBtaW5XaWR0aDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgY2FzZSAnTic6XHJcbiAgICAgICAgICAgIHRoaXMudG9wID0gdG9wICsgZGVsdGEueTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhlaWdodCA8IG1pbldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy50b3AgPSB0aGlzLmJvdHRvbSAtIG1pbkhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgY2FzZSAnUyc6XHJcbiAgICAgICAgICAgIHRoaXMuYm90dG9tID0gYm90dG9tICsgZGVsdGEueTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhlaWdodCA8IG1pbkhlaWdodCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuYm90dG9tID0gdGhpcy50b3AgKyBtaW5IZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIC8vIENvcm5lcnNcclxuXHJcbiAgICAgICAgICBjYXNlICdOVyc6XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IGxlZnQgKyBkZWx0YS54O1xyXG4gICAgICAgICAgICB0aGlzLnRvcCA9IHRvcCArIGRlbHRhLnk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy53aWR0aCA8IG1pbldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5yaWdodCAtIG1pbldpZHRoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5oZWlnaHQgPCBtaW5XaWR0aCkge1xyXG4gICAgICAgICAgICAgIHRoaXMudG9wID0gdGhpcy5ib3R0b20gLSBtaW5IZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIGNhc2UgJ1NXJzpcclxuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdCArIGRlbHRhLng7XHJcbiAgICAgICAgICAgIHRoaXMuYm90dG9tID0gYm90dG9tICsgZGVsdGEueTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLndpZHRoIDwgbWluV2lkdGgpIHtcclxuICAgICAgICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLnJpZ2h0IC0gbWluV2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhlaWdodCA8IG1pbkhlaWdodCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuYm90dG9tID0gdGhpcy50b3AgKyBtaW5IZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIGNhc2UgJ05FJzpcclxuICAgICAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0ICsgZGVsdGEueDtcclxuICAgICAgICAgICAgdGhpcy50b3AgPSB0b3AgKyBkZWx0YS55O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMud2lkdGggPCBtaW5XaWR0aCkge1xyXG4gICAgICAgICAgICAgIHRoaXMucmlnaHQgPSB0aGlzLmxlZnQgKyBtaW5XaWR0aDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaGVpZ2h0IDwgbWluSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy50b3AgPSB0aGlzLmJvdHRvbSAtIG1pbkhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgY2FzZSAnU0UnOlxyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQgKyBkZWx0YS54O1xyXG4gICAgICAgICAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbSArIGRlbHRhLnk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy53aWR0aCA8IG1pbldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yaWdodCA9IHRoaXMubGVmdCArIG1pbldpZHRoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5oZWlnaHQgPCBtaW5IZWlnaHQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmJvdHRvbSA9IHRoaXMudG9wICsgbWluSGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmlnaHRDbGljaygkZXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxufSJdfQ==