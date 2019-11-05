/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var ExcelPageService = /** @class */ (function () {
    function ExcelPageService() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    ExcelPageService.prototype.getUpdatedPage = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var doc = new DOMParser().parseFromString(data, "text/html");
        /** @type {?} */
        var table = doc.querySelector('table');
        /** @type {?} */
        var numCellsInFirstRow = 0;
        /** @type {?} */
        var cellsFromFirstRow = doc.querySelectorAll('table > tbody > tr:first-child td');
        cellsFromFirstRow.forEach((/**
         * @param {?} elm
         * @return {?}
         */
        function (elm) {
            numCellsInFirstRow += elm.attributes['colspan'] ? parseInt(elm.attributes['colspan'].value, 10) : 1;
        }));
        /** @type {?} */
        var newTable = this.createHeader(numCellsInFirstRow, table);
        doc.querySelector('table').replaceWith(newTable);
        return new XMLSerializer().serializeToString(doc);
    };
    /**
     * @param {?} numCols
     * @param {?} table
     * @return {?}
     */
    ExcelPageService.prototype.createHeader = /**
     * @param {?} numCols
     * @param {?} table
     * @return {?}
     */
    function (numCols, table) {
        /** @type {?} */
        var header = document.createElement('thead');
        header.append(document.createElement('tr'));
        for (var i = 0; i < numCols; ++i) {
            /** @type {?} */
            var th = document.createElement('th');
            th.innerText = this.colName(i);
            header.querySelector("tr").append(th);
        }
        table.prepend(header);
        /** @type {?} */
        var cnt = 0;
        table.querySelectorAll('tr').forEach((/**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            /** @type {?} */
            var td = document.createElement('td');
            if (cnt !== 0) {
                td.innerText = cnt.toString();
                row.prepend(td);
            }
            else {
                row.prepend(td);
            }
            cnt++;
        }));
        return table;
    };
    /**
     * @param {?} n
     * @return {?}
     */
    ExcelPageService.prototype.colName = /**
     * @param {?} n
     * @return {?}
     */
    function (n) {
        /** @type {?} */
        var ordA = 'a'.charCodeAt(0);
        /** @type {?} */
        var ordZ = 'z'.charCodeAt(0);
        /** @type {?} */
        var len = ordZ - ordA + 1;
        /** @type {?} */
        var s = "";
        while (n >= 0) {
            s = String.fromCharCode(n % len + ordA) + s;
            n = Math.floor(n / len) - 1;
        }
        return s;
    };
    ExcelPageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ExcelPageService.ctorParameters = function () { return []; };
    /** @nocollapse */ ExcelPageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ExcelPageService_Factory() { return new ExcelPageService(); }, token: ExcelPageService, providedIn: "root" });
    return ExcelPageService;
}());
export { ExcelPageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtcGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9leGNlbC1wYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRXpDO0lBSUU7SUFDQSxDQUFDOzs7OztJQUVELHlDQUFjOzs7O0lBQWQsVUFBZSxJQUFJOztZQUNYLEdBQUcsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDOztZQUN4RCxLQUFLLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7O1lBQ3BDLGtCQUFrQixHQUFHLENBQUM7O1lBQ3BCLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxtQ0FBbUMsQ0FBQztRQUVuRixpQkFBaUIsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxHQUFHO1lBQzNCLGtCQUFrQixJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RHLENBQUMsRUFBQyxDQUFDOztZQUVHLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQztRQUM3RCxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVqRCxPQUFPLElBQUksYUFBYSxFQUFFLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBRUQsdUNBQVk7Ozs7O0lBQVosVUFBYSxPQUFPLEVBQUUsS0FBSzs7WUFDbkIsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTVDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUM7O2dCQUN4QixFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdkMsRUFBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzs7WUFFbEIsR0FBRyxHQUFHLENBQUM7UUFDWCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsR0FBRzs7Z0JBQ2hDLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztZQUN2QyxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ2IsRUFBRSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzlCLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDakI7aUJBQ0k7Z0JBQ0gsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNqQjtZQUNELEdBQUcsRUFBRSxDQUFDO1FBQ1IsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBRUQsa0NBQU87Ozs7SUFBUCxVQUFRLENBQUM7O1lBQ0QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOztZQUN4QixJQUFJLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7O1lBQ3hCLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUM7O1lBRXZCLENBQUMsR0FBRyxFQUFFO1FBQ1YsT0FBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1osQ0FBQyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7Z0JBOURGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzJCQUpEO0NBaUVDLEFBL0RELElBK0RDO1NBNURZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEV4Y2VsUGFnZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGdldFVwZGF0ZWRQYWdlKGRhdGEpIHtcbiAgICBjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGRhdGEsIFwidGV4dC9odG1sXCIpO1xuICAgIGNvbnN0IHRhYmxlID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XG4gICAgbGV0IG51bUNlbGxzSW5GaXJzdFJvdyA9IDA7XG4gICAgY29uc3QgY2VsbHNGcm9tRmlyc3RSb3cgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgndGFibGUgPiB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkIHRkJyk7XG5cbiAgICBjZWxsc0Zyb21GaXJzdFJvdy5mb3JFYWNoKGVsbSA9PiB7XG4gICAgICBudW1DZWxsc0luRmlyc3RSb3cgKz0gZWxtLmF0dHJpYnV0ZXNbJ2NvbHNwYW4nXSA/IHBhcnNlSW50KGVsbS5hdHRyaWJ1dGVzWydjb2xzcGFuJ10udmFsdWUsIDEwKSA6IDE7XG4gICAgfSk7XG4gXG4gICAgY29uc3QgbmV3VGFibGUgPSB0aGlzLmNyZWF0ZUhlYWRlcihudW1DZWxsc0luRmlyc3RSb3csIHRhYmxlKTtcbiAgICBkb2MucXVlcnlTZWxlY3RvcigndGFibGUnKS5yZXBsYWNlV2l0aChuZXdUYWJsZSk7XG5cbiAgICByZXR1cm4gbmV3IFhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyhkb2MpO1xuICB9XG5cbiAgY3JlYXRlSGVhZGVyKG51bUNvbHMsIHRhYmxlKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xuICAgIGhlYWRlci5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKSk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtQ29sczsgKytpKXtcbiAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgIHRoLmlubmVyVGV4dCA9IHRoaXMuY29sTmFtZShpKTtcbiAgICAgIGhlYWRlci5xdWVyeVNlbGVjdG9yKFwidHJcIikuYXBwZW5kKHRoKTtcbiAgICB9XG4gICAgXG4gICAgdGFibGUucHJlcGVuZChoZWFkZXIpO1xuXG4gICAgbGV0IGNudCA9IDA7XG4gICAgdGFibGUucXVlcnlTZWxlY3RvckFsbCgndHInKS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICBpZiAoY250ICE9PSAwKSB7XG4gICAgICAgIHRkLmlubmVyVGV4dCA9IGNudC50b1N0cmluZygpO1xuICAgICAgICByb3cucHJlcGVuZCh0ZCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcm93LnByZXBlbmQodGQpO1xuICAgICAgfVxuICAgICAgY250Kys7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFibGU7XG4gIH1cblxuICBjb2xOYW1lKG4pIHtcbiAgICBjb25zdCBvcmRBID0gJ2EnLmNoYXJDb2RlQXQoMCk7XG4gICAgY29uc3Qgb3JkWiA9ICd6Jy5jaGFyQ29kZUF0KDApO1xuICAgIGNvbnN0IGxlbiA9IG9yZFogLSBvcmRBICsgMTtcblxuICAgIGxldCBzID0gXCJcIjtcbiAgICB3aGlsZShuID49IDApIHtcbiAgICAgIHMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG4gJSBsZW4gKyBvcmRBKSArIHM7XG4gICAgICBuID0gTWF0aC5mbG9vcihuIC8gbGVuKSAtIDE7XG4gICAgfVxuICAgIHJldHVybiBzO1xuICB9XG59XG4iXX0=