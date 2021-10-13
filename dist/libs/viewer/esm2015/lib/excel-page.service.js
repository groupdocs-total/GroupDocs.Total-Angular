/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ExcelPageService {
    constructor() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getUpdatedPage(data) {
        /** @type {?} */
        const doc = new DOMParser().parseFromString(data, "text/html");
        /** @type {?} */
        const table = doc.querySelector('table');
        /** @type {?} */
        let numCellsInFirstRow = 0;
        /** @type {?} */
        const cellsFromFirstRow = doc.querySelectorAll('table > tbody > tr:first-child td');
        cellsFromFirstRow.forEach((/**
         * @param {?} elm
         * @return {?}
         */
        elm => {
            numCellsInFirstRow += elm.attributes['colspan'] ? parseInt(elm.attributes['colspan'].value, 10) : 1;
        }));
        /** @type {?} */
        const newTable = this.createHeader(numCellsInFirstRow, table);
        doc.querySelector('table').replaceWith(newTable);
        /** @type {?} */
        const resultData = new XMLSerializer().serializeToString(doc)
        // work-around for FF which is adds a0 namespace during serialization
        ;
        // work-around for FF which is adds a0 namespace during serialization
        return resultData.replace(/a0:/g, "").replace(/:a0/g, "");
    }
    /**
     * @param {?} numCols
     * @param {?} table
     * @return {?}
     */
    createHeader(numCols, table) {
        /** @type {?} */
        const header = document.createElement('thead');
        header.append(document.createElement('tr'));
        for (let i = 0; i < numCols; ++i) {
            /** @type {?} */
            const th = document.createElement('th');
            th.innerText = this.colName(i);
            header.querySelector("tr").append(th);
        }
        /** @type {?} */
        const colgroup = table.querySelector('colgroup');
        /** @type {?} */
        const col = document.createElement('col');
        col.width = '80px';
        colgroup.prepend(col);
        table.prepend(header);
        /** @type {?} */
        let cnt = 0;
        table.querySelectorAll('tr').forEach((/**
         * @param {?} row
         * @return {?}
         */
        row => {
            /** @type {?} */
            const div = document.createElement('div');
            if (cnt !== 0) {
                /** @type {?} */
                const td = document.createElement('td');
                td.className = "excel";
                td.append(div);
                div.innerText = cnt.toString();
                row.prepend(td);
            }
            else {
                /** @type {?} */
                const th = document.createElement('th');
                th.append(div);
                row.prepend(th);
            }
            cnt++;
        }));
        return table;
    }
    /**
     * @param {?} n
     * @return {?}
     */
    colName(n) {
        /** @type {?} */
        const ordA = 'a'.charCodeAt(0);
        /** @type {?} */
        const ordZ = 'z'.charCodeAt(0);
        /** @type {?} */
        const len = ordZ - ordA + 1;
        /** @type {?} */
        let s = "";
        while (n >= 0) {
            s = String.fromCharCode(n % len + ordA) + s;
            n = Math.floor(n / len) - 1;
        }
        return s;
    }
}
ExcelPageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ExcelPageService.ctorParameters = () => [];
/** @nocollapse */ ExcelPageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ExcelPageService_Factory() { return new ExcelPageService(); }, token: ExcelPageService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtcGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9leGNlbC1wYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBS3pDLE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0I7SUFDQSxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxJQUFJOztjQUNYLEdBQUcsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDOztjQUN4RCxLQUFLLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7O1lBQ3BDLGtCQUFrQixHQUFHLENBQUM7O2NBQ3BCLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxtQ0FBbUMsQ0FBQztRQUVuRixpQkFBaUIsQ0FBQyxPQUFPOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDOUIsa0JBQWtCLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEcsQ0FBQyxFQUFDLENBQUM7O2NBRUcsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDO1FBQzdELEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztjQUUzQyxVQUFVLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUM7UUFDN0QscUVBQXFFOztRQUFyRSxxRUFBcUU7UUFDckUsT0FB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J0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhjZWxQYWdlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBnZXRVcGRhdGVkUGFnZShkYXRhKSB7XHJcbiAgICBjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGRhdGEsIFwidGV4dC9odG1sXCIpO1xyXG4gICAgY29uc3QgdGFibGUgPSBkb2MucXVlcnlTZWxlY3RvcigndGFibGUnKTtcclxuICAgIGxldCBudW1DZWxsc0luRmlyc3RSb3cgPSAwO1xyXG4gICAgY29uc3QgY2VsbHNGcm9tRmlyc3RSb3cgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgndGFibGUgPiB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkIHRkJyk7XHJcblxyXG4gICAgY2VsbHNGcm9tRmlyc3RSb3cuZm9yRWFjaChlbG0gPT4ge1xyXG4gICAgICBudW1DZWxsc0luRmlyc3RSb3cgKz0gZWxtLmF0dHJpYnV0ZXNbJ2NvbHNwYW4nXSA/IHBhcnNlSW50KGVsbS5hdHRyaWJ1dGVzWydjb2xzcGFuJ10udmFsdWUsIDEwKSA6IDE7XHJcbiAgICB9KTtcclxuIFxyXG4gICAgY29uc3QgbmV3VGFibGUgPSB0aGlzLmNyZWF0ZUhlYWRlcihudW1DZWxsc0luRmlyc3RSb3csIHRhYmxlKTtcclxuICAgIGRvYy5xdWVyeVNlbGVjdG9yKCd0YWJsZScpLnJlcGxhY2VXaXRoKG5ld1RhYmxlKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHREYXRhID0gbmV3IFhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyhkb2MpXHJcbiAgICAvLyB3b3JrLWFyb3VuZCBmb3IgRkYgd2hpY2ggaXMgYWRkcyBhMCBuYW1lc3BhY2UgZHVyaW5nIHNlcmlhbGl6YXRpb25cclxuICAgIHJldHVybiByZXN1bHREYXRhLnJlcGxhY2UoL2EwOi9nLFwiXCIpLnJlcGxhY2UoLzphMC9nLFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlSGVhZGVyKG51bUNvbHMsIHRhYmxlKXtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XHJcbiAgICBoZWFkZXIuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJykpO1xyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW1Db2xzOyArK2kpe1xyXG4gICAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAgIHRoLmlubmVyVGV4dCA9IHRoaXMuY29sTmFtZShpKTtcclxuICAgICAgaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoXCJ0clwiKS5hcHBlbmQodGgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBjb2xncm91cCA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3IoJ2NvbGdyb3VwJyk7XHJcbiAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb2wnKTtcclxuICAgIGNvbC53aWR0aCA9ICc4MHB4JztcclxuICAgIGNvbGdyb3VwLnByZXBlbmQoY29sKTtcclxuICAgIFxyXG4gICAgdGFibGUucHJlcGVuZChoZWFkZXIpO1xyXG5cclxuICAgIGxldCBjbnQgPSAwO1xyXG4gICAgdGFibGUucXVlcnlTZWxlY3RvckFsbCgndHInKS5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBpZiAoY250ICE9PSAwKSB7XHJcbiAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIHRkLmNsYXNzTmFtZSA9IFwiZXhjZWxcIlxyXG4gICAgICAgIHRkLmFwcGVuZChkaXYpO1xyXG4gICAgICAgIGRpdi5pbm5lclRleHQgPSBjbnQudG9TdHJpbmcoKTtcclxuICAgICAgICByb3cucHJlcGVuZCh0ZCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgICAgIHRoLmFwcGVuZChkaXYpO1xyXG4gICAgICAgIHJvdy5wcmVwZW5kKHRoKTtcclxuICAgICAgfVxyXG4gICAgICBjbnQrKztcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0YWJsZTtcclxuICB9XHJcblxyXG4gIGNvbE5hbWUobikge1xyXG4gICAgY29uc3Qgb3JkQSA9ICdhJy5jaGFyQ29kZUF0KDApO1xyXG4gICAgY29uc3Qgb3JkWiA9ICd6Jy5jaGFyQ29kZUF0KDApO1xyXG4gICAgY29uc3QgbGVuID0gb3JkWiAtIG9yZEEgKyAxO1xyXG5cclxuICAgIGxldCBzID0gXCJcIjtcclxuICAgIHdoaWxlKG4gPj0gMCkge1xyXG4gICAgICBzID0gU3RyaW5nLmZyb21DaGFyQ29kZShuICUgbGVuICsgb3JkQSkgKyBzO1xyXG4gICAgICBuID0gTWF0aC5mbG9vcihuIC8gbGVuKSAtIDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcztcclxuICB9XHJcbn1cclxuIl19