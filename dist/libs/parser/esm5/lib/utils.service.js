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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvdXRpbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUV2RDtJQUtFO0lBQWdCLENBQUM7Ozs7O0lBRWpCLGlEQUEwQjs7OztJQUExQixVQUEyQixPQUFzQjs7WUFDM0MsQ0FBQyxHQUFHLGNBQWM7UUFFdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztZQUVaLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7O29CQUM3QixLQUFLLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDOUMsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO29CQUNoRCxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUNoRCxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7d0JBQ3JELElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTs0QkFDWCxDQUFDLElBQUksR0FBRyxDQUFDO3lCQUNWO3dCQUVELENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDaEQ7b0JBRUQsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUMvQixDQUFDLElBQUksTUFBTSxDQUFDO3FCQUNiO2lCQUNGO2FBQ0Y7aUJBQ0k7Z0JBQ0gsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6RjtTQUNGO1FBRUQsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDOzs7OztJQUVELHFDQUFjOzs7O0lBQWQsVUFBZSxJQUFZO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLEVBQUUsQ0FBQztTQUNYOztZQUVLLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7UUFFbkMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztlQUNuQixFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztlQUNyQixFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztlQUNwQixFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUN2QjtZQUNBLE9BQU8sR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7U0FDdkI7YUFDSTtZQUNILE9BQU8sRUFBRSxDQUFDO1NBQ1g7SUFDSCxDQUFDOztnQkF2REYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7dUJBTEQ7Q0EyREMsQUF4REQsSUF3REM7U0FyRFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhcnNlUmVzdWx0LCBUYWJsZVZhbHVlIH0gZnJvbSAnLi9hcHAtbW9kZWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVXRpbHNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGdlbmVyYXRlQ3N2Rm9yUGFyc2VSZXN1bHRzKHJlc3VsdHM6IFBhcnNlUmVzdWx0W10pOiBzdHJpbmcge1xuICAgIGxldCByID0gXCJmaWVsZCwgdmFsdWVcIjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgciArPSBcIlxcclxcblwiO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHRzW2ldLnZhbHVlKSkge1xuICAgICAgICBjb25zdCB0YWJsZSA9IG5ldyBUYWJsZVZhbHVlKHJlc3VsdHNbaV0udmFsdWUpO1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0YWJsZS5yb3dzLmxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgICByICs9IHRoaXMucHJlcGFyZUNzdkl0ZW0ocmVzdWx0c1tpXS5uYW1lKSArIFwiLFwiO1xuICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRhYmxlLnJvd3Nbcm93XS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgICAgICBpZiAoY29sID4gMCkge1xuICAgICAgICAgICAgICByICs9IFwiLFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByICs9IHRoaXMucHJlcGFyZUNzdkl0ZW0odGFibGUucm93c1tyb3ddW2NvbF0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyb3cgPCB0YWJsZS5yb3dzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHIgKz0gXCJcXHJcXG5cIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByICs9IHRoaXMucHJlcGFyZUNzdkl0ZW0ocmVzdWx0c1tpXS5uYW1lKSArIFwiLFwiICsgdGhpcy5wcmVwYXJlQ3N2SXRlbShyZXN1bHRzW2ldLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcjtcbiAgfVxuXG4gIHByZXBhcmVDc3ZJdGVtKGl0ZW06IHN0cmluZykge1xuICAgIGlmICghaXRlbSkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgY29uc3QgY2kgPSBpdGVtLnJlcGxhY2UoL1wiL2csICdcIlwiJyk7XG5cbiAgICBpZiAoY2kuaW5kZXhPZignLCcpID4gLTFcbiAgICAgIHx8IGNpLmluZGV4T2YoJ1xccicpID4gLTFcbiAgICAgIHx8IGNpLmluZGV4T2YoJ1wiJykgPiAtMVxuICAgICAgfHwgY2kuaW5kZXhPZihcIidcIikgPiAtMVxuICAgICkge1xuICAgICAgcmV0dXJuICdcIicgKyBjaSArICdcIic7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGNpO1xuICAgIH1cbiAgfVxufVxuIl19