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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtcGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9leGNlbC1wYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRXpDO0lBSUU7SUFDQSxDQUFDOzs7OztJQUVELHlDQUFjOzs7O0lBQWQsVUFBZSxJQUFJOztZQUNYLEdBQUcsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDOztZQUN4RCxLQUFLLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7O1lBQ3BDLGtCQUFrQixHQUFHLENBQUM7O1lBQ3BCLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxtQ0FBbUMsQ0FBQztRQUVuRixpQkFBaUIsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxHQUFHO1lBQzNCLGtCQUFrQixJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RHLENBQUMsRUFBQyxDQUFDOztZQUVHLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQztRQUM3RCxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVqRCxPQUFPLElBQUksYUFBYSxFQUFFLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBRUQsdUNBQVk7Ozs7O0lBQVosVUFBYSxPQUFPLEVBQUUsS0FBSzs7WUFDbkIsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTVDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUM7O2dCQUN4QixFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdkMsRUFBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZDOztZQUVLLFFBQVEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQzs7WUFDMUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3pDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ25CLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFdEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzs7WUFFbEIsR0FBRyxHQUFHLENBQUM7UUFDWCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsR0FBRzs7Z0JBQ2hDLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUN6QyxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7O29CQUNQLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztnQkFDdkMsRUFBRSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUE7Z0JBQ3RCLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQy9CLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDakI7aUJBQ0k7O29CQUNHLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztnQkFDdkMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2pCO1lBQ0QsR0FBRyxFQUFFLENBQUM7UUFDUixDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCxrQ0FBTzs7OztJQUFQLFVBQVEsQ0FBQzs7WUFDRCxJQUFJLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7O1lBQ3hCLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs7WUFDeEIsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQzs7WUFFdkIsQ0FBQyxHQUFHLEVBQUU7UUFDVixPQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDWixDQUFDLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDOztnQkF4RUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7MkJBSkQ7Q0EyRUMsQUF6RUQsSUF5RUM7U0F0RVksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRXhjZWxQYWdlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgZ2V0VXBkYXRlZFBhZ2UoZGF0YSkge1xuICAgIGNvbnN0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZGF0YSwgXCJ0ZXh0L2h0bWxcIik7XG4gICAgY29uc3QgdGFibGUgPSBkb2MucXVlcnlTZWxlY3RvcigndGFibGUnKTtcbiAgICBsZXQgbnVtQ2VsbHNJbkZpcnN0Um93ID0gMDtcbiAgICBjb25zdCBjZWxsc0Zyb21GaXJzdFJvdyA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKCd0YWJsZSA+IHRib2R5ID4gdHI6Zmlyc3QtY2hpbGQgdGQnKTtcblxuICAgIGNlbGxzRnJvbUZpcnN0Um93LmZvckVhY2goZWxtID0+IHtcbiAgICAgIG51bUNlbGxzSW5GaXJzdFJvdyArPSBlbG0uYXR0cmlidXRlc1snY29sc3BhbiddID8gcGFyc2VJbnQoZWxtLmF0dHJpYnV0ZXNbJ2NvbHNwYW4nXS52YWx1ZSwgMTApIDogMTtcbiAgICB9KTtcbiBcbiAgICBjb25zdCBuZXdUYWJsZSA9IHRoaXMuY3JlYXRlSGVhZGVyKG51bUNlbGxzSW5GaXJzdFJvdywgdGFibGUpO1xuICAgIGRvYy5xdWVyeVNlbGVjdG9yKCd0YWJsZScpLnJlcGxhY2VXaXRoKG5ld1RhYmxlKTtcblxuICAgIHJldHVybiBuZXcgWE1MU2VyaWFsaXplcigpLnNlcmlhbGl6ZVRvU3RyaW5nKGRvYyk7XG4gIH1cblxuICBjcmVhdGVIZWFkZXIobnVtQ29scywgdGFibGUpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XG4gICAgaGVhZGVyLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW1Db2xzOyArK2kpe1xuICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgdGguaW5uZXJUZXh0ID0gdGhpcy5jb2xOYW1lKGkpO1xuICAgICAgaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoXCJ0clwiKS5hcHBlbmQodGgpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBjb2xncm91cCA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3IoJ2NvbGdyb3VwJyk7XG4gICAgY29uc3QgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY29sJyk7XG4gICAgY29sLndpZHRoID0gJzgwcHgnO1xuICAgIGNvbGdyb3VwLnByZXBlbmQoY29sKTtcbiAgICBcbiAgICB0YWJsZS5wcmVwZW5kKGhlYWRlcik7XG5cbiAgICBsZXQgY250ID0gMDtcbiAgICB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0cicpLmZvckVhY2gocm93ID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaWYgKGNudCAhPT0gMCkge1xuICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHRkLmNsYXNzTmFtZSA9IFwiZXhjZWxcIlxuICAgICAgICB0ZC5hcHBlbmQoZGl2KTtcbiAgICAgICAgZGl2LmlubmVyVGV4dCA9IGNudC50b1N0cmluZygpO1xuICAgICAgICByb3cucHJlcGVuZCh0ZCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICB0aC5hcHBlbmQoZGl2KTtcbiAgICAgICAgcm93LnByZXBlbmQodGgpO1xuICAgICAgfVxuICAgICAgY250Kys7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFibGU7XG4gIH1cblxuICBjb2xOYW1lKG4pIHtcbiAgICBjb25zdCBvcmRBID0gJ2EnLmNoYXJDb2RlQXQoMCk7XG4gICAgY29uc3Qgb3JkWiA9ICd6Jy5jaGFyQ29kZUF0KDApO1xuICAgIGNvbnN0IGxlbiA9IG9yZFogLSBvcmRBICsgMTtcblxuICAgIGxldCBzID0gXCJcIjtcbiAgICB3aGlsZShuID49IDApIHtcbiAgICAgIHMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG4gJSBsZW4gKyBvcmRBKSArIHM7XG4gICAgICBuID0gTWF0aC5mbG9vcihuIC8gbGVuKSAtIDE7XG4gICAgfVxuICAgIHJldHVybiBzO1xuICB9XG59XG4iXX0=