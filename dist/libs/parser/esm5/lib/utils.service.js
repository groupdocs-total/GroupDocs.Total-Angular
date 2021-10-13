/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { TableValue } from './app-models';
import * as i0 from "@angular/core";
var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    /**
     * @param {?} results
     * @return {?}
     */
    UtilsService.prototype.generateCsvForParseResults = /**
     * @param {?} results
     * @return {?}
     */
    function (results) {
        /** @type {?} */
        var r = "field, value";
        for (var i = 0; i < results.length; i++) {
            r += "\r\n";
            if (Array.isArray(results[i].value)) {
                /** @type {?} */
                var table = new TableValue(results[i].value);
                for (var row = 0; row < table.rows.length; row++) {
                    r += this.prepareCsvItem(results[i].name) + ",";
                    for (var col = 0; col < table.rows[row].length; col++) {
                        if (col > 0) {
                            r += ",";
                        }
                        r += this.prepareCsvItem(table.rows[row][col]);
                    }
                    if (row < table.rows.length - 1) {
                        r += "\r\n";
                    }
                }
            }
            else {
                r += this.prepareCsvItem(results[i].name) + "," + this.prepareCsvItem(results[i].value);
            }
        }
        return r;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    UtilsService.prototype.prepareCsvItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item) {
            return "";
        }
        /** @type {?} */
        var ci = item.replace(/"/g, '""');
        if (ci.indexOf(',') > -1
            || ci.indexOf('\r') > -1
            || ci.indexOf('"') > -1
            || ci.indexOf("'") > -1) {
            return '"' + ci + '"';
        }
        else {
            return ci;
        }
    };
    UtilsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UtilsService.ctorParameters = function () { return []; };
    /** @nocollapse */ UtilsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UtilsService_Factory() { return new UtilsService(); }, token: UtilsService, providedIn: "root" });
    return UtilsService;
}());
export { UtilsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvdXRpbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUV2RDtJQUtFO0lBQWdCLENBQUM7Ozs7O0lBRWpCLGlEQUEwQjs7OztJQUExQixVQUEyQixPQUFzQjs7WUFDM0MsQ0FBQyxHQUFHLGNBQWM7UUFFdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztZQUVaLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7O29CQUM3QixLQUFLLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDOUMsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO29CQUNoRCxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUNoRCxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7d0JBQ3JELElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTs0QkFDWCxDQUFDLElBQUksR0FBRyxDQUFDO3lCQUNWO3dCQUVELENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDaEQ7b0JBRUQsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUMvQixDQUFDLElBQUksTUFBTSxDQUFDO3FCQUNiO2lCQUNGO2FBQ0Y7aUJBQ0k7Z0JBQ0gsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6RjtTQUNGO1FBRUQsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDOzs7OztJQUVELHFDQUFjOzs7O0lBQWQsVUFBZSxJQUFZO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLEVBQUUsQ0FBQztTQUNYOztZQUVLLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7UUFFbkMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztlQUNuQixFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztlQUNyQixFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztlQUNwQixFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUN2QjtZQUNBLE9BQU8sR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7U0FDdkI7YUFDSTtZQUNILE9BQU8sRUFBRSxDQUFDO1NBQ1g7SUFDSCxDQUFDOztnQkF2REYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7dUJBTEQ7Q0EyREMsQUF4REQsSUF3REM7U0FyRFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGFyc2VSZXN1bHQsIFRhYmxlVmFsdWUgfSBmcm9tICcuL2FwcC1tb2RlbHMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVXRpbHNTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgZ2VuZXJhdGVDc3ZGb3JQYXJzZVJlc3VsdHMocmVzdWx0czogUGFyc2VSZXN1bHRbXSk6IHN0cmluZyB7XHJcbiAgICBsZXQgciA9IFwiZmllbGQsIHZhbHVlXCI7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHIgKz0gXCJcXHJcXG5cIjtcclxuXHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdHNbaV0udmFsdWUpKSB7XHJcbiAgICAgICAgY29uc3QgdGFibGUgPSBuZXcgVGFibGVWYWx1ZShyZXN1bHRzW2ldLnZhbHVlKTtcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0YWJsZS5yb3dzLmxlbmd0aDsgcm93KyspIHtcclxuICAgICAgICAgIHIgKz0gdGhpcy5wcmVwYXJlQ3N2SXRlbShyZXN1bHRzW2ldLm5hbWUpICsgXCIsXCI7XHJcbiAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0YWJsZS5yb3dzW3Jvd10ubGVuZ3RoOyBjb2wrKykge1xyXG4gICAgICAgICAgICBpZiAoY29sID4gMCkge1xyXG4gICAgICAgICAgICAgIHIgKz0gXCIsXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHIgKz0gdGhpcy5wcmVwYXJlQ3N2SXRlbSh0YWJsZS5yb3dzW3Jvd11bY29sXSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHJvdyA8IHRhYmxlLnJvd3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICByICs9IFwiXFxyXFxuXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHIgKz0gdGhpcy5wcmVwYXJlQ3N2SXRlbShyZXN1bHRzW2ldLm5hbWUpICsgXCIsXCIgKyB0aGlzLnByZXBhcmVDc3ZJdGVtKHJlc3VsdHNbaV0udmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHI7XHJcbiAgfVxyXG5cclxuICBwcmVwYXJlQ3N2SXRlbShpdGVtOiBzdHJpbmcpIHtcclxuICAgIGlmICghaXRlbSkge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaSA9IGl0ZW0ucmVwbGFjZSgvXCIvZywgJ1wiXCInKTtcclxuXHJcbiAgICBpZiAoY2kuaW5kZXhPZignLCcpID4gLTFcclxuICAgICAgfHwgY2kuaW5kZXhPZignXFxyJykgPiAtMVxyXG4gICAgICB8fCBjaS5pbmRleE9mKCdcIicpID4gLTFcclxuICAgICAgfHwgY2kuaW5kZXhPZihcIidcIikgPiAtMVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiAnXCInICsgY2kgKyAnXCInO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBjaTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19