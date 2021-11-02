/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { TableValue } from './app-models';
import * as i0 from "@angular/core";
export class UtilsService {
    constructor() { }
    /**
     * @param {?} results
     * @return {?}
     */
    generateCsvForParseResults(results) {
        /** @type {?} */
        let r = "field, value";
        for (let i = 0; i < results.length; i++) {
            r += "\r\n";
            if (Array.isArray(results[i].value)) {
                /** @type {?} */
                const table = new TableValue(results[i].value);
                for (let row = 0; row < table.rows.length; row++) {
                    r += this.prepareCsvItem(results[i].name) + ",";
                    for (let col = 0; col < table.rows[row].length; col++) {
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
    }
    /**
     * @param {?} item
     * @return {?}
     */
    prepareCsvItem(item) {
        if (!item) {
            return "";
        }
        /** @type {?} */
        const ci = item.replace(/"/g, '""');
        if (ci.indexOf(',') > -1
            || ci.indexOf('\r') > -1
            || ci.indexOf('"') > -1
            || ci.indexOf("'") > -1) {
            return '"' + ci + '"';
        }
        else {
            return ci;
        }
    }
}
UtilsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UtilsService.ctorParameters = () => [];
/** @nocollapse */ UtilsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UtilsService_Factory() { return new UtilsService(); }, token: UtilsService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvdXRpbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUt2RCxNQUFNLE9BQU8sWUFBWTtJQUV2QixnQkFBZ0IsQ0FBQzs7Ozs7SUFFakIsMEJBQTBCLENBQUMsT0FBc0I7O1lBQzNDLENBQUMsR0FBRyxjQUFjO1FBRXRCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLENBQUMsSUFBSSxNQUFNLENBQUM7WUFFWixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFOztzQkFDN0IsS0FBSyxHQUFHLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQzlDLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDaEQsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDaEQsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO3dCQUNyRCxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7NEJBQ1gsQ0FBQyxJQUFJLEdBQUcsQ0FBQzt5QkFDVjt3QkFFRCxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQ2hEO29CQUVELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDL0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQztxQkFDYjtpQkFDRjthQUNGO2lCQUNJO2dCQUNILENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekY7U0FDRjtRQUVELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsSUFBWTtRQUN6QixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxFQUFFLENBQUM7U0FDWDs7Y0FFSyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1FBRW5DLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7ZUFDbkIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7ZUFDckIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7ZUFDcEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDdkI7WUFDQSxPQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1NBQ3ZCO2FBQ0k7WUFDSCxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQzs7O1lBdkRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhcnNlUmVzdWx0LCBUYWJsZVZhbHVlIH0gZnJvbSAnLi9hcHAtbW9kZWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVXRpbHNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGdlbmVyYXRlQ3N2Rm9yUGFyc2VSZXN1bHRzKHJlc3VsdHM6IFBhcnNlUmVzdWx0W10pOiBzdHJpbmcge1xuICAgIGxldCByID0gXCJmaWVsZCwgdmFsdWVcIjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgciArPSBcIlxcclxcblwiO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHRzW2ldLnZhbHVlKSkge1xuICAgICAgICBjb25zdCB0YWJsZSA9IG5ldyBUYWJsZVZhbHVlKHJlc3VsdHNbaV0udmFsdWUpO1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0YWJsZS5yb3dzLmxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgICByICs9IHRoaXMucHJlcGFyZUNzdkl0ZW0ocmVzdWx0c1tpXS5uYW1lKSArIFwiLFwiO1xuICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRhYmxlLnJvd3Nbcm93XS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgICAgICBpZiAoY29sID4gMCkge1xuICAgICAgICAgICAgICByICs9IFwiLFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByICs9IHRoaXMucHJlcGFyZUNzdkl0ZW0odGFibGUucm93c1tyb3ddW2NvbF0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyb3cgPCB0YWJsZS5yb3dzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHIgKz0gXCJcXHJcXG5cIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByICs9IHRoaXMucHJlcGFyZUNzdkl0ZW0ocmVzdWx0c1tpXS5uYW1lKSArIFwiLFwiICsgdGhpcy5wcmVwYXJlQ3N2SXRlbShyZXN1bHRzW2ldLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcjtcbiAgfVxuXG4gIHByZXBhcmVDc3ZJdGVtKGl0ZW06IHN0cmluZykge1xuICAgIGlmICghaXRlbSkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgY29uc3QgY2kgPSBpdGVtLnJlcGxhY2UoL1wiL2csICdcIlwiJyk7XG5cbiAgICBpZiAoY2kuaW5kZXhPZignLCcpID4gLTFcbiAgICAgIHx8IGNpLmluZGV4T2YoJ1xccicpID4gLTFcbiAgICAgIHx8IGNpLmluZGV4T2YoJ1wiJykgPiAtMVxuICAgICAgfHwgY2kuaW5kZXhPZihcIidcIikgPiAtMVxuICAgICkge1xuICAgICAgcmV0dXJuICdcIicgKyBjaSArICdcIic7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGNpO1xuICAgIH1cbiAgfVxufVxuIl19