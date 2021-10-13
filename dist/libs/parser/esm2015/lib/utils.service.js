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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvdXRpbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUt2RCxNQUFNLE9BQU8sWUFBWTtJQUV2QixnQkFBZ0IsQ0FBQzs7Ozs7SUFFakIsMEJBQTBCLENBQUMsT0FBc0I7O1lBQzNDLENBQUMsR0FBRyxjQUFjO1FBRXRCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLENBQUMsSUFBSSxNQUFNLENBQUM7WUFFWixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFOztzQkFDN0IsS0FBSyxHQUFHLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQzlDLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDaEQsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDaEQsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO3dCQUNyRCxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7NEJBQ1gsQ0FBQyxJQUFJLEdBQUcsQ0FBQzt5QkFDVjt3QkFFRCxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQ2hEO29CQUVELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDL0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQztxQkFDYjtpQkFDRjthQUNGO2lCQUNJO2dCQUNILENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekY7U0FDRjtRQUVELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsSUFBWTtRQUN6QixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxFQUFFLENBQUM7U0FDWDs7Y0FFSyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1FBRW5DLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7ZUFDbkIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7ZUFDckIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7ZUFDcEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDdkI7WUFDQSxPQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1NBQ3ZCO2FBQ0k7WUFDSCxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQzs7O1lBdkRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGFyc2VSZXN1bHQsIFRhYmxlVmFsdWUgfSBmcm9tICcuL2FwcC1tb2RlbHMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVXRpbHNTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgZ2VuZXJhdGVDc3ZGb3JQYXJzZVJlc3VsdHMocmVzdWx0czogUGFyc2VSZXN1bHRbXSk6IHN0cmluZyB7XHJcbiAgICBsZXQgciA9IFwiZmllbGQsIHZhbHVlXCI7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHIgKz0gXCJcXHJcXG5cIjtcclxuXHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdHNbaV0udmFsdWUpKSB7XHJcbiAgICAgICAgY29uc3QgdGFibGUgPSBuZXcgVGFibGVWYWx1ZShyZXN1bHRzW2ldLnZhbHVlKTtcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0YWJsZS5yb3dzLmxlbmd0aDsgcm93KyspIHtcclxuICAgICAgICAgIHIgKz0gdGhpcy5wcmVwYXJlQ3N2SXRlbShyZXN1bHRzW2ldLm5hbWUpICsgXCIsXCI7XHJcbiAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0YWJsZS5yb3dzW3Jvd10ubGVuZ3RoOyBjb2wrKykge1xyXG4gICAgICAgICAgICBpZiAoY29sID4gMCkge1xyXG4gICAgICAgICAgICAgIHIgKz0gXCIsXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHIgKz0gdGhpcy5wcmVwYXJlQ3N2SXRlbSh0YWJsZS5yb3dzW3Jvd11bY29sXSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHJvdyA8IHRhYmxlLnJvd3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICByICs9IFwiXFxyXFxuXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHIgKz0gdGhpcy5wcmVwYXJlQ3N2SXRlbShyZXN1bHRzW2ldLm5hbWUpICsgXCIsXCIgKyB0aGlzLnByZXBhcmVDc3ZJdGVtKHJlc3VsdHNbaV0udmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHI7XHJcbiAgfVxyXG5cclxuICBwcmVwYXJlQ3N2SXRlbShpdGVtOiBzdHJpbmcpIHtcclxuICAgIGlmICghaXRlbSkge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaSA9IGl0ZW0ucmVwbGFjZSgvXCIvZywgJ1wiXCInKTtcclxuXHJcbiAgICBpZiAoY2kuaW5kZXhPZignLCcpID4gLTFcclxuICAgICAgfHwgY2kuaW5kZXhPZignXFxyJykgPiAtMVxyXG4gICAgICB8fCBjaS5pbmRleE9mKCdcIicpID4gLTFcclxuICAgICAgfHwgY2kuaW5kZXhPZihcIidcIikgPiAtMVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiAnXCInICsgY2kgKyAnXCInO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBjaTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19