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
            _this.isActive = _this._field && _this._field.name == name;
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
                    selector: 'app-field',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3BhcnNlci8iLCJzb3VyY2VzIjpbImxpYi9maWVsZC9maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQTBDLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQVMsV0FBVyxFQUFnQixNQUFNLCtDQUErQyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUE4QyxrQkFBa0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RyxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFRLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUM1QyxPQUFPLEVBQVUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBRTdDLENBQUMsR0FBRyxNQUFNO0FBRWhCO0lBQ0UsK0JBQW1CLFNBQWlCLEVBQVMsTUFBYztRQUF4QyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUUzRCxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhhLDBDQUF3Qjs7SUFBRSx1Q0FBcUI7O0FBSzdEO0lBa0JFLHdCQUNVLGFBQTJCLEVBQzNCLFlBQXlCO1FBRm5DLGlCQU9DO1FBTlMsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsaUJBQVksR0FBWixZQUFZLENBQWE7UUFOM0IsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFFdkIscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUE7UUFLcEUsYUFBYSxDQUFD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QUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBRS9CLElBQUksS0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLEVBQUU7d0JBQ3pCLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7cUJBQ25DO29CQUVELElBQUksS0FBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUU7d0JBQzNCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7cUJBQ3BDO29CQUVELE1BQU07Z0JBRVIsS0FBSyxJQUFJO29CQUNQLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBRXpCLElBQUksS0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLEVBQUU7d0JBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7cUJBQ25DO29CQUVELElBQUksS0FBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUU7d0JBQzNCLEtBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7cUJBQ3BDO29CQUVELE1BQU07Z0JBRVIsS0FBSyxJQUFJO29CQUNQLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBRS9CLElBQUksS0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLEVBQUU7d0JBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7cUJBQ25DO29CQUVELElBQUksS0FBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUU7d0JBQzNCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7cUJBQ3BDO29CQUVELE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFFRCxtQ0FBVTs7OztJQUFWLFVBQVcsTUFBTTtRQUNmLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDOztnQkEvU0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixtcEhBQXFDOztpQkFFdEM7Ozs7Z0JBakJRLFlBQVk7Z0JBSkwsV0FBVzs7O21DQWlDeEIsTUFBTTs7SUFnU1QscUJBQUM7Q0FBQSxBQWhURCxJQWdUQztTQTNTWSxjQUFjOzs7SUFDekIsa0NBQWU7Ozs7O0lBRWYsK0JBQXNCOzs7OztJQUN0Qiw4QkFBcUI7Ozs7O0lBQ3JCLGdDQUF1Qjs7Ozs7SUFDdkIsaUNBQXdCOzs7OztJQUV4QixnQ0FBNkI7Ozs7O0lBQzdCLGtDQUFpQzs7SUFFakMsMENBQXNFOztJQW1CdEUsa0NBQWtCOzs7OztJQWhCaEIsdUNBQW1DOzs7OztJQUNuQyxzQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95LCBPbkluaXQsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXRpbHMsIFpvb21TZXJ2aWNlLCBNb2RhbFNlcnZpY2UgfSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBQb2ludCwgU2l6ZSwgVGVtcGxhdGVGaWVsZCwgVGVtcGxhdGVGaWVsZFRhYmxlU2VwYXJhdG9yLCBUZW1wbGF0ZUZpZWxkVHlwZXMgfSBmcm9tICcuLi9hcHAtbW9kZWxzJztcclxuXHJcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgeyBGaWVsZFNlcnZpY2UgfSBmcm9tICcuLi9maWVsZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZnJvbSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuY29uc3QgJCA9IGpxdWVyeTtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWVsZENvbnRleHRNZW51Q2xpY2sge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmaWVsZE5hbWU6IHN0cmluZywgcHVibGljIGFjdGlvbjogc3RyaW5nKSB7XHJcblxyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZmllbGQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWVsZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmllbGQuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcGFnZVNpemU6IFNpemU7XHJcblxyXG4gIHByaXZhdGUgX2xlZnQ6IG51bWJlcjtcclxuICBwcml2YXRlIF90b3A6IG51bWJlcjtcclxuICBwcml2YXRlIF9yaWdodDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2JvdHRvbTogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIF9maWVsZDogVGVtcGxhdGVGaWVsZFxyXG4gIHByaXZhdGUgX2Rlc3Ryb3kgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBAT3V0cHV0KCkgY29udGV4dE1lbnVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8RmllbGRDb250ZXh0TWVudUNsaWNrPigpXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZmllbGRTZXJ2aWNlOiBGaWVsZFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UpIHtcclxuICAgIF9maWVsZFNlcnZpY2UuYWN0aXZlQ2hhbmdlZC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcclxuICAgICAgLnN1YnNjcmliZShuYW1lID0+IHtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdGhpcy5fZmllbGQgJiYgdGhpcy5fZmllbGQubmFtZSA9PSBuYW1lO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9kZXN0cm95Lm5leHQoKTtcclxuICAgIHRoaXMuX2Rlc3Ryb3kuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIGlzQWN0aXZlOiBib29sZWFuO1xyXG5cclxuICBnZXQgaXNGaXhlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmZpZWxkLmZpZWxkVHlwZSA9PT0gVGVtcGxhdGVGaWVsZFR5cGVzLkZJWEVEO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzVGFibGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC5maWVsZFR5cGUgPT09IFRlbXBsYXRlRmllbGRUeXBlcy5UQUJMRTtcclxuICB9XHJcblxyXG4gIGdldCBsZWZ0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGVmdDtcclxuICB9XHJcblxyXG4gIHNldCBsZWZ0KGxlZnQ6IG51bWJlcikge1xyXG4gICAgaWYgKCF0aGlzLnBhZ2VTaXplKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9sZWZ0ID0gTWF0aC5taW4odGhpcy5wYWdlU2l6ZS53aWR0aCwgTWF0aC5tYXgoMCwgbGVmdCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRvcCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RvcDtcclxuICB9XHJcblxyXG4gIHNldCB0b3AodG9wOiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5wYWdlU2l6ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fdG9wID0gTWF0aC5taW4odGhpcy5wYWdlU2l6ZS5oZWlnaHQsIE1hdGgubWF4KDAsIHRvcCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmlnaHQ7XHJcbiAgfVxyXG5cclxuICBzZXQgcmlnaHQocmlnaHQ6IG51bWJlcikge1xyXG4gICAgaWYgKCF0aGlzLnBhZ2VTaXplKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9yaWdodCA9IE1hdGgubWluKE1hdGgubWF4KDAsIHJpZ2h0KSwgdGhpcy5wYWdlU2l6ZS53aWR0aCk7XHJcbiAgfVxyXG5cclxuICBnZXQgYm90dG9tKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fYm90dG9tO1xyXG4gIH1cclxuXHJcbiAgc2V0IGJvdHRvbShib3R0b206IG51bWJlcikge1xyXG4gICAgaWYgKCF0aGlzLnBhZ2VTaXplKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9ib3R0b20gPSBNYXRoLm1pbihNYXRoLm1heCgwLCBib3R0b20pLCB0aGlzLnBhZ2VTaXplLmhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBnZXQgd2lkdGgoKSB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMucmlnaHQgLSB0aGlzLmxlZnQ7XHJcblxyXG4gICAgcmV0dXJuIHdpZHRoID8gd2lkdGggOiAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhlaWdodCgpIHtcclxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuYm90dG9tIC0gdGhpcy50b3A7XHJcblxyXG4gICAgcmV0dXJuIGhlaWdodCA/IGhlaWdodCA6IDA7XHJcbiAgfVxyXG5cclxuICBnZXQgc2NhbGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fem9vbVNlcnZpY2Uuem9vbSAvIDEwMDtcclxuICB9XHJcblxyXG4gIHJlbmFtZUZpZWxkQ2xpY2soKSB7XHJcbiAgICB0aGlzLmNvbnRleHRNZW51Q2xpY2suZW1pdChuZXcgRmllbGRDb250ZXh0TWVudUNsaWNrKHRoaXMuZmllbGQubmFtZSwgXCJyZW5hbWVcIikpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlRmllbGRDbGljaygpIHtcclxuICAgIHRoaXMuY29udGV4dE1lbnVDbGljay5lbWl0KG5ldyBGaWVsZENvbnRleHRNZW51Q2xpY2sodGhpcy5maWVsZC5uYW1lLCBcInJlbW92ZVwiKSk7XHJcbiAgfVxyXG5cclxuICBhZGRDb2x1bW5MZWZ0KCkge1xyXG4gICAgdGhpcy5maWVsZC5hZGRDb2x1bW4obnVsbCwgdGhpcy53aWR0aCAqIDAuMSk7XHJcbiAgfVxyXG5cclxuICBhZGRDb2x1bW5SaWdodCgpIHtcclxuICAgIHRoaXMuZmllbGQuYWRkQ29sdW1uKG51bGwsIHRoaXMud2lkdGggKiAwLjkpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQ29sdW1uKGNvbHVtbjogVGVtcGxhdGVGaWVsZFRhYmxlU2VwYXJhdG9yKSB7XHJcbiAgICB0aGlzLmZpZWxkLnJlbW92ZUNvbHVtbihjb2x1bW4pO1xyXG4gIH1cclxuXHJcbiAgc2V0IGZpZWxkKGZpZWxkOiBUZW1wbGF0ZUZpZWxkKSB7XHJcbiAgICB0aGlzLl9maWVsZCA9IGZpZWxkO1xyXG5cclxuICAgIHRoaXMubGVmdCA9IHRoaXMuZmllbGQucG9zaXRpb24ueDtcclxuICAgIHRoaXMudG9wID0gdGhpcy5maWVsZC5wb3NpdGlvbi55O1xyXG5cclxuICAgIHRoaXMucmlnaHQgPSB0aGlzLmZpZWxkLnBvc2l0aW9uLnggKyB0aGlzLmZpZWxkLnNpemUud2lkdGg7XHJcbiAgICB0aGlzLmJvdHRvbSA9IHRoaXMuZmllbGQucG9zaXRpb24ueSArIHRoaXMuZmllbGQuc2l6ZS5oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBnZXQgZmllbGQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmllbGQ7XHJcbiAgfVxyXG5cclxuICBtb3VzZURvd24oJGV2ZW50OiBNb3VzZUV2ZW50LCBtb2RlOiBzdHJpbmcpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuX2ZpZWxkU2VydmljZS5zZXRBY3RpdmUodGhpcy5maWVsZC5uYW1lKTtcclxuICAgIGNvbnN0IHN0YXJ0TW91c2VQb3MgPSB0aGlzLl9maWVsZFNlcnZpY2UuYmVnaW5Nb3ZlKCRldmVudCk7XHJcblxyXG4gICAgY29uc3QgbGVmdCA9IHRoaXMubGVmdDtcclxuICAgIGNvbnN0IHRvcCA9IHRoaXMudG9wO1xyXG4gICAgY29uc3QgcmlnaHQgPSB0aGlzLnJpZ2h0O1xyXG4gICAgY29uc3QgYm90dG9tID0gdGhpcy5ib3R0b207XHJcblxyXG4gICAgY29uc3QgY29sdW1uID0gdGhpcy5maWVsZC5nZXRDb2x1bW5CeU5hbWUobW9kZSk7XHJcbiAgICBjb25zdCBjb2x1bW5Jbml0aWFsUG9zID0gY29sdW1uID8gY29sdW1uLnZhbHVlIDogbnVsbDtcclxuXHJcbiAgICAvLyAgbGV0IHBwYSA9IG1vZGUuc3RhcnRzV2l0aCgnVEM6Jyk7XHJcblxyXG4gICAgY29uc3QgbW91c2VVcFN1YnNjcmlwdGlvbiA9IHRoaXMuX2ZpZWxkU2VydmljZS5tb3VzZVVwXHJcbiAgICAgIC5zdWJzY3JpYmUobW91c2VQb3MgPT4ge1xyXG4gICAgICAgIHRoaXMuX2ZpZWxkLnBvc2l0aW9uID0gbmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy50b3ApO1xyXG4gICAgICAgIHRoaXMuX2ZpZWxkLnNpemUgPSBuZXcgU2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vICAgIHBwYSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBtb3VzZVVwU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2ZpZWxkU2VydmljZS5tb3VzZU1vdmVcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2ZpZWxkU2VydmljZS5tb3VzZVVwKSlcclxuICAgICAgLnN1YnNjcmliZShtb3VzZVBvcyA9PiB7XHJcbiAgICAgICAgaWYgKCFtb3VzZVBvcyB8fCAhdGhpcy5wYWdlU2l6ZSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWluV2lkdGggPSA0MDtcclxuICAgICAgICBjb25zdCBtaW5IZWlnaHQgPSAxNTtcclxuXHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG5cclxuICAgICAgICBjb25zdCBkZWx0YSA9IG5ldyBQb2ludChcclxuICAgICAgICAgIChtb3VzZVBvcy54IC0gc3RhcnRNb3VzZVBvcy54KSAvIHRoaXMuc2NhbGUsXHJcbiAgICAgICAgICAobW91c2VQb3MueSAtIHN0YXJ0TW91c2VQb3MueSkgLyB0aGlzLnNjYWxlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbHVtbkluaXRpYWxQb3MpIHtcclxuICAgICAgICAgIGNvbnN0IHYgPSBjb2x1bW5Jbml0aWFsUG9zICsgZGVsdGEueDtcclxuICAgICAgICAgIGNvbHVtbi52YWx1ZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMud2lkdGgsIHYpKTtcclxuXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICAgIGNhc2UgJ01vdmUnOlxyXG4gICAgICAgICAgICB0aGlzLmxlZnQgPSBNYXRoLm1pbihsZWZ0ICsgZGVsdGEueCwgdGhpcy5wYWdlU2l6ZS53aWR0aCAtIHRoaXMud2lkdGgpO1xyXG4gICAgICAgICAgICB0aGlzLnRvcCA9IE1hdGgubWluKHRvcCArIGRlbHRhLnksIHRoaXMucGFnZVNpemUuaGVpZ2h0IC0gdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0ID0gdGhpcy5sZWZ0ICsgd2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuYm90dG9tID0gdGhpcy50b3AgKyBoZWlnaHQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIC8vIEVkZ2VzXHJcblxyXG4gICAgICAgICAgY2FzZSAnVyc6XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IGxlZnQgKyBkZWx0YS54O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMud2lkdGggPCBtaW5XaWR0aCkge1xyXG4gICAgICAgICAgICAgIHRoaXMubGVmdCA9IHRoaXMucmlnaHQgLSBtaW5XaWR0aDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgY2FzZSAnRSc6XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHQgPSByaWdodCArIGRlbHRhLng7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy53aWR0aCA8IG1pbldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yaWdodCA9IHRoaXMubGVmdCArIG1pbldpZHRoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICBjYXNlICdOJzpcclxuICAgICAgICAgICAgdGhpcy50b3AgPSB0b3AgKyBkZWx0YS55O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaGVpZ2h0IDwgbWluV2lkdGgpIHtcclxuICAgICAgICAgICAgICB0aGlzLnRvcCA9IHRoaXMuYm90dG9tIC0gbWluSGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICBjYXNlICdTJzpcclxuICAgICAgICAgICAgdGhpcy5ib3R0b20gPSBib3R0b20gKyBkZWx0YS55O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaGVpZ2h0IDwgbWluSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5ib3R0b20gPSB0aGlzLnRvcCArIG1pbkhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgLy8gQ29ybmVyc1xyXG5cclxuICAgICAgICAgIGNhc2UgJ05XJzpcclxuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdCArIGRlbHRhLng7XHJcbiAgICAgICAgICAgIHRoaXMudG9wID0gdG9wICsgZGVsdGEueTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLndpZHRoIDwgbWluV2lkdGgpIHtcclxuICAgICAgICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLnJpZ2h0IC0gbWluV2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhlaWdodCA8IG1pbldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy50b3AgPSB0aGlzLmJvdHRvbSAtIG1pbkhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgY2FzZSAnU1cnOlxyXG4gICAgICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0ICsgZGVsdGEueDtcclxuICAgICAgICAgICAgdGhpcy5ib3R0b20gPSBib3R0b20gKyBkZWx0YS55O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMud2lkdGggPCBtaW5XaWR0aCkge1xyXG4gICAgICAgICAgICAgIHRoaXMubGVmdCA9IHRoaXMucmlnaHQgLSBtaW5XaWR0aDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaGVpZ2h0IDwgbWluSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5ib3R0b20gPSB0aGlzLnRvcCArIG1pbkhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgY2FzZSAnTkUnOlxyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQgKyBkZWx0YS54O1xyXG4gICAgICAgICAgICB0aGlzLnRvcCA9IHRvcCArIGRlbHRhLnk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy53aWR0aCA8IG1pbldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yaWdodCA9IHRoaXMubGVmdCArIG1pbldpZHRoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5oZWlnaHQgPCBtaW5IZWlnaHQpIHtcclxuICAgICAgICAgICAgICB0aGlzLnRvcCA9IHRoaXMuYm90dG9tIC0gbWluSGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICBjYXNlICdTRSc6XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHQgPSByaWdodCArIGRlbHRhLng7XHJcbiAgICAgICAgICAgIHRoaXMuYm90dG9tID0gYm90dG9tICsgZGVsdGEueTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLndpZHRoIDwgbWluV2lkdGgpIHtcclxuICAgICAgICAgICAgICB0aGlzLnJpZ2h0ID0gdGhpcy5sZWZ0ICsgbWluV2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhlaWdodCA8IG1pbkhlaWdodCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuYm90dG9tID0gdGhpcy50b3AgKyBtaW5IZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByaWdodENsaWNrKCRldmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG59Il19