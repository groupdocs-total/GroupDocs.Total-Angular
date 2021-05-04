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
     * @param {?} data
     * @return {?}
     */
    ExcelPageService.prototype.getPageWithoutHeader = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var doc = new DOMParser().parseFromString(data, "text/html");
        doc.querySelector('colgroup').remove();
        /** @type {?} */
        var newTable = doc.querySelector('table');
        newTable.deleteRow(0);
        newTable.querySelectorAll('tr').forEach((/**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            row.deleteCell(0);
        }));
        doc.querySelector('table').replaceWith(newTable);
        /** @type {?} */
        var resultData = new XMLSerializer().serializeToString(doc);
        return resultData;
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
            th.setAttribute("contenteditable", "false");
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
                div.setAttribute("contenteditable", "false");
                row.prepend(td);
            }
            else {
                /** @type {?} */
                var th = document.createElement('th');
                th.append(div);
                div.setAttribute("contenteditable", "false");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtcGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2V4Y2VsLXBhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFFekM7SUFJRTtJQUNBLENBQUM7Ozs7O0lBRUQseUNBQWM7Ozs7SUFBZCxVQUFlLElBQUk7O1lBQ1gsR0FBRyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUM7O1lBQ3hELEtBQUssR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQzs7WUFDcEMsa0JBQWtCLEdBQUcsQ0FBQzs7WUFDcEIsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDLG1DQUFtQyxDQUFDO1FBRW5GLGlCQUFpQixDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEdBQUc7WUFDM0Isa0JBQWtCLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEcsQ0FBQyxFQUFDLENBQUM7O1lBRUcsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDO1FBQzdELEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztZQUUzQyxVQUFVLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUM7UUFDN0QscUVBQXFFOztRQUFyRSxxRUFBcUU7UUFDckUsT0FBTyxV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RUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixHQUFHLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2pCO1lBQ0QsR0FBRyxFQUFFLENBQUM7UUFDUixDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCxrQ0FBTzs7OztJQUFQLFVBQVEsQ0FBQzs7WUFDRCxJQUFJLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7O1lBQ3hCLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs7WUFDeEIsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQzs7WUFFdkIsQ0FBQyxHQUFHLEVBQUU7UUFDVixPQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDWixDQUFDLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDOztnQkE3RkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7MkJBSkQ7Q0FnR0MsQUE5RkQsSUE4RkM7U0EzRlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEV4Y2VsUGFnZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgZ2V0VXBkYXRlZFBhZ2UoZGF0YSkge1xyXG4gICAgY29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhkYXRhLCBcInRleHQvaHRtbFwiKTtcclxuICAgIGNvbnN0IHRhYmxlID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XHJcbiAgICBsZXQgbnVtQ2VsbHNJbkZpcnN0Um93ID0gMDtcclxuICAgIGNvbnN0IGNlbGxzRnJvbUZpcnN0Um93ID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlID4gdGJvZHkgPiB0cjpmaXJzdC1jaGlsZCB0ZCcpO1xyXG5cclxuICAgIGNlbGxzRnJvbUZpcnN0Um93LmZvckVhY2goZWxtID0+IHtcclxuICAgICAgbnVtQ2VsbHNJbkZpcnN0Um93ICs9IGVsbS5hdHRyaWJ1dGVzWydjb2xzcGFuJ10gPyBwYXJzZUludChlbG0uYXR0cmlidXRlc1snY29sc3BhbiddLnZhbHVlLCAxMCkgOiAxO1xyXG4gICAgfSk7XHJcbiBcclxuICAgIGNvbnN0IG5ld1RhYmxlID0gdGhpcy5jcmVhdGVIZWFkZXIobnVtQ2VsbHNJbkZpcnN0Um93LCB0YWJsZSk7XHJcbiAgICBkb2MucXVlcnlTZWxlY3RvcigndGFibGUnKS5yZXBsYWNlV2l0aChuZXdUYWJsZSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0RGF0YSA9IG5ldyBYTUxTZXJpYWxpemVyKCkuc2VyaWFsaXplVG9TdHJpbmcoZG9jKVxyXG4gICAgLy8gd29yay1hcm91bmQgZm9yIEZGIHdoaWNoIGlzIGFkZHMgYTAgbmFtZXNwYWNlIGR1cmluZyBzZXJpYWxpemF0aW9uXHJcbiAgICByZXR1cm4gcmVzdWx0RGF0YS5yZXBsYWNlKC9hMDovZyxcIlwiKS5yZXBsYWNlKC86YTAvZyxcIlwiKTtcclxuICB9XHJcblxyXG4gIGdldFBhZ2VXaXRob3V0SGVhZGVyKGRhdGEpIHtcclxuICAgIGNvbnN0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZGF0YSwgXCJ0ZXh0L2h0bWxcIik7XHJcbiAgICBkb2MucXVlcnlTZWxlY3RvcignY29sZ3JvdXAnKS5yZW1vdmUoKTtcclxuICAgIGNvbnN0IG5ld1RhYmxlID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XHJcbiAgICBuZXdUYWJsZS5kZWxldGVSb3coMCk7XHJcblxyXG4gICAgbmV3VGFibGUucXVlcnlTZWxlY3RvckFsbCgndHInKS5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIHJvdy5kZWxldGVDZWxsKDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jLnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJykucmVwbGFjZVdpdGgobmV3VGFibGUpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdERhdGEgPSBuZXcgWE1MU2VyaWFsaXplcigpLnNlcmlhbGl6ZVRvU3RyaW5nKGRvYyk7XHJcbiAgICByZXR1cm4gcmVzdWx0RGF0YTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUhlYWRlcihudW1Db2xzLCB0YWJsZSl7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xyXG4gICAgaGVhZGVyLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpKTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtQ29sczsgKytpKXtcclxuICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgICB0aC5pbm5lclRleHQgPSB0aGlzLmNvbE5hbWUoaSk7XHJcbiAgICAgIHRoLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcImZhbHNlXCIpO1xyXG4gICAgICBoZWFkZXIucXVlcnlTZWxlY3RvcihcInRyXCIpLmFwcGVuZCh0aCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGNvbGdyb3VwID0gdGFibGUucXVlcnlTZWxlY3RvcignY29sZ3JvdXAnKTtcclxuICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvbCcpO1xyXG4gICAgY29sLndpZHRoID0gJzgwcHgnO1xyXG4gICAgY29sZ3JvdXAucHJlcGVuZChjb2wpO1xyXG4gICAgXHJcbiAgICB0YWJsZS5wcmVwZW5kKGhlYWRlcik7XHJcblxyXG4gICAgbGV0IGNudCA9IDA7XHJcbiAgICB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0cicpLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGlmIChjbnQgIT09IDApIHtcclxuICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgdGQuY2xhc3NOYW1lID0gXCJleGNlbFwiXHJcbiAgICAgICAgdGQuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgZGl2LmlubmVyVGV4dCA9IGNudC50b1N0cmluZygpO1xyXG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgXCJmYWxzZVwiKTtcclxuICAgICAgICByb3cucHJlcGVuZCh0ZCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgICAgIHRoLmFwcGVuZChkaXYpO1xyXG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgXCJmYWxzZVwiKTtcclxuICAgICAgICByb3cucHJlcGVuZCh0aCk7XHJcbiAgICAgIH1cclxuICAgICAgY250Kys7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGFibGU7XHJcbiAgfVxyXG5cclxuICBjb2xOYW1lKG4pIHtcclxuICAgIGNvbnN0IG9yZEEgPSAnYScuY2hhckNvZGVBdCgwKTtcclxuICAgIGNvbnN0IG9yZFogPSAneicuY2hhckNvZGVBdCgwKTtcclxuICAgIGNvbnN0IGxlbiA9IG9yZFogLSBvcmRBICsgMTtcclxuXHJcbiAgICBsZXQgcyA9IFwiXCI7XHJcbiAgICB3aGlsZShuID49IDApIHtcclxuICAgICAgcyA9IFN0cmluZy5mcm9tQ2hhckNvZGUobiAlIGxlbiArIG9yZEEpICsgcztcclxuICAgICAgbiA9IE1hdGguZmxvb3IobiAvIGxlbikgLSAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHM7XHJcbiAgfVxyXG59XHJcbiJdfQ==