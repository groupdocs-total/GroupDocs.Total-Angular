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
        /** @type {?} */
        var resultData = new XMLSerializer().serializeToString(doc)
        // work-around for FF which is adds a0 namespace during serialization
        ;
        // work-around for FF which is adds a0 namespace during serialization
        return resultData.replace(/a0:/g, "").replace(/:a0/g, "");
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
        /** @type {?} */
        var colgroup = table.querySelector('colgroup');
        /** @type {?} */
        var col = document.createElement('col');
        col.width = '80px';
        colgroup.prepend(col);
        table.prepend(header);
        /** @type {?} */
        var cnt = 0;
        table.querySelectorAll('tr').forEach((/**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            /** @type {?} */
            var div = document.createElement('div');
            if (cnt !== 0) {
                /** @type {?} */
                var td = document.createElement('td');
                td.className = "excel";
                td.append(div);
                div.innerText = cnt.toString();
                row.prepend(td);
            }
            else {
                /** @type {?} */
                var th = document.createElement('th');
                th.append(div);
                row.prepend(th);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtcGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9leGNlbC1wYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRXpDO0lBSUU7SUFDQSxDQUFDOzs7OztJQUVELHlDQUFjOzs7O0lBQWQsVUFBZSxJQUFJOztZQUNYLEdBQUcsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDOztZQUN4RCxLQUFLLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7O1lBQ3BDLGtCQUFrQixHQUFHLENBQUM7O1lBQ3BCLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxtQ0FBbUMsQ0FBQztRQUVuRixpQkFBaUIsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxHQUFHO1lBQzNCLGtCQUFrQixJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RHLENBQUMsRUFBQyxDQUFDOztZQUVHLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQztRQUM3RCxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7WUFFM0MsVUFBVSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDO1FBQzdELHFFQUFxRTs7UUFBckUscUVBQXFFO1FBQ3JFLE9BQU8sVUFBVSxDQUFDLE9B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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhjZWxQYWdlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBnZXRVcGRhdGVkUGFnZShkYXRhKSB7XHJcbiAgICBjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGRhdGEsIFwidGV4dC9odG1sXCIpO1xyXG4gICAgY29uc3QgdGFibGUgPSBkb2MucXVlcnlTZWxlY3RvcigndGFibGUnKTtcclxuICAgIGxldCBudW1DZWxsc0luRmlyc3RSb3cgPSAwO1xyXG4gICAgY29uc3QgY2VsbHNGcm9tRmlyc3RSb3cgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgndGFibGUgPiB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkIHRkJyk7XHJcblxyXG4gICAgY2VsbHNGcm9tRmlyc3RSb3cuZm9yRWFjaChlbG0gPT4ge1xyXG4gICAgICBudW1DZWxsc0luRmlyc3RSb3cgKz0gZWxtLmF0dHJpYnV0ZXNbJ2NvbHNwYW4nXSA/IHBhcnNlSW50KGVsbS5hdHRyaWJ1dGVzWydjb2xzcGFuJ10udmFsdWUsIDEwKSA6IDE7XHJcbiAgICB9KTtcclxuIFxyXG4gICAgY29uc3QgbmV3VGFibGUgPSB0aGlzLmNyZWF0ZUhlYWRlcihudW1DZWxsc0luRmlyc3RSb3csIHRhYmxlKTtcclxuICAgIGRvYy5xdWVyeVNlbGVjdG9yKCd0YWJsZScpLnJlcGxhY2VXaXRoKG5ld1RhYmxlKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHREYXRhID0gbmV3IFhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyhkb2MpXHJcbiAgICAvLyB3b3JrLWFyb3VuZCBmb3IgRkYgd2hpY2ggaXMgYWRkcyBhMCBuYW1lc3BhY2UgZHVyaW5nIHNlcmlhbGl6YXRpb25cclxuICAgIHJldHVybiByZXN1bHREYXRhLnJlcGxhY2UoL2EwOi9nLFwiXCIpLnJlcGxhY2UoLzphMC9nLFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlSGVhZGVyKG51bUNvbHMsIHRhYmxlKXtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XHJcbiAgICBoZWFkZXIuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJykpO1xyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW1Db2xzOyArK2kpe1xyXG4gICAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAgIHRoLmlubmVyVGV4dCA9IHRoaXMuY29sTmFtZShpKTtcclxuICAgICAgaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoXCJ0clwiKS5hcHBlbmQodGgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBjb2xncm91cCA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3IoJ2NvbGdyb3VwJyk7XHJcbiAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb2wnKTtcclxuICAgIGNvbC53aWR0aCA9ICc4MHB4JztcclxuICAgIGNvbGdyb3VwLnByZXBlbmQoY29sKTtcclxuICAgIFxyXG4gICAgdGFibGUucHJlcGVuZChoZWFkZXIpO1xyXG5cclxuICAgIGxldCBjbnQgPSAwO1xyXG4gICAgdGFibGUucXVlcnlTZWxlY3RvckFsbCgndHInKS5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBpZiAoY250ICE9PSAwKSB7XHJcbiAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIHRkLmNsYXNzTmFtZSA9IFwiZXhjZWxcIlxyXG4gICAgICAgIHRkLmFwcGVuZChkaXYpO1xyXG4gICAgICAgIGRpdi5pbm5lclRleHQgPSBjbnQudG9TdHJpbmcoKTtcclxuICAgICAgICByb3cucHJlcGVuZCh0ZCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgICAgIHRoLmFwcGVuZChkaXYpO1xyXG4gICAgICAgIHJvdy5wcmVwZW5kKHRoKTtcclxuICAgICAgfVxyXG4gICAgICBjbnQrKztcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0YWJsZTtcclxuICB9XHJcblxyXG4gIGNvbE5hbWUobikge1xyXG4gICAgY29uc3Qgb3JkQSA9ICdhJy5jaGFyQ29kZUF0KDApO1xyXG4gICAgY29uc3Qgb3JkWiA9ICd6Jy5jaGFyQ29kZUF0KDApO1xyXG4gICAgY29uc3QgbGVuID0gb3JkWiAtIG9yZEEgKyAxO1xyXG5cclxuICAgIGxldCBzID0gXCJcIjtcclxuICAgIHdoaWxlKG4gPj0gMCkge1xyXG4gICAgICBzID0gU3RyaW5nLmZyb21DaGFyQ29kZShuICUgbGVuICsgb3JkQSkgKyBzO1xyXG4gICAgICBuID0gTWF0aC5mbG9vcihuIC8gbGVuKSAtIDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcztcclxuICB9XHJcbn1cclxuIl19