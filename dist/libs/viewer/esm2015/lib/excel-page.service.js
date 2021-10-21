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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtcGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9leGNlbC1wYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBS3pDLE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0I7SUFDQSxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxJQUFJOztjQUNYLEdBQUcsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDOztjQUN4RCxLQUFLLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7O1lBQ3BDLGtCQUFrQixHQUFHLENBQUM7O2NBQ3BCLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxtQ0FBbUMsQ0FBQztRQUVuRixpQkFBaUIsQ0FBQyxPQUFPOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDOUIsa0JBQWtCLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEcsQ0FBQyxFQUFDLENBQUM7O2NBRUcsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDO1FBQzdELEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztjQUUzQyxVQUFVLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUM7UUFDN0QscUVBQXFFOztRQUFyRSxxRUFBcUU7UUFDckUsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSzs7Y0FDbkIsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTVDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUM7O2tCQUN4QixFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdkMsRUFBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZDOztjQUVLLFFBQVEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQzs7Y0FDMUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3pDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ25CLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFdEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzs7WUFFbEIsR0FBRyxHQUFHLENBQUM7UUFDWCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFOztrQkFDbkMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3pDLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTs7c0JBQ1AsRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUN2QyxFQUFFLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQTtnQkFDdEIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDL0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNqQjtpQkFDSTs7c0JBQ0csRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUN2QyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDakI7WUFDRCxHQUFHLEVBQUUsQ0FBQztRQUNSLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxDQUFDOztjQUNELElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs7Y0FDeEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOztjQUN4QixHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDOztZQUV2QixDQUFDLEdBQUcsRUFBRTtRQUNWLE9BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNaLENBQUMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0I7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7OztZQTFFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFeGNlbFBhZ2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBnZXRVcGRhdGVkUGFnZShkYXRhKSB7XG4gICAgY29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhkYXRhLCBcInRleHQvaHRtbFwiKTtcbiAgICBjb25zdCB0YWJsZSA9IGRvYy5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xuICAgIGxldCBudW1DZWxsc0luRmlyc3RSb3cgPSAwO1xuICAgIGNvbnN0IGNlbGxzRnJvbUZpcnN0Um93ID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlID4gdGJvZHkgPiB0cjpmaXJzdC1jaGlsZCB0ZCcpO1xuXG4gICAgY2VsbHNGcm9tRmlyc3RSb3cuZm9yRWFjaChlbG0gPT4ge1xuICAgICAgbnVtQ2VsbHNJbkZpcnN0Um93ICs9IGVsbS5hdHRyaWJ1dGVzWydjb2xzcGFuJ10gPyBwYXJzZUludChlbG0uYXR0cmlidXRlc1snY29sc3BhbiddLnZhbHVlLCAxMCkgOiAxO1xuICAgIH0pO1xuIFxuICAgIGNvbnN0IG5ld1RhYmxlID0gdGhpcy5jcmVhdGVIZWFkZXIobnVtQ2VsbHNJbkZpcnN0Um93LCB0YWJsZSk7XG4gICAgZG9jLnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJykucmVwbGFjZVdpdGgobmV3VGFibGUpO1xuXG4gICAgY29uc3QgcmVzdWx0RGF0YSA9IG5ldyBYTUxTZXJpYWxpemVyKCkuc2VyaWFsaXplVG9TdHJpbmcoZG9jKVxuICAgIC8vIHdvcmstYXJvdW5kIGZvciBGRiB3aGljaCBpcyBhZGRzIGEwIG5hbWVzcGFjZSBkdXJpbmcgc2VyaWFsaXphdGlvblxuICAgIHJldHVybiByZXN1bHREYXRhLnJlcGxhY2UoL2EwOi9nLFwiXCIpLnJlcGxhY2UoLzphMC9nLFwiXCIpO1xuICB9XG5cbiAgY3JlYXRlSGVhZGVyKG51bUNvbHMsIHRhYmxlKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xuICAgIGhlYWRlci5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKSk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtQ29sczsgKytpKXtcbiAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgIHRoLmlubmVyVGV4dCA9IHRoaXMuY29sTmFtZShpKTtcbiAgICAgIGhlYWRlci5xdWVyeVNlbGVjdG9yKFwidHJcIikuYXBwZW5kKHRoKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgY29sZ3JvdXAgPSB0YWJsZS5xdWVyeVNlbGVjdG9yKCdjb2xncm91cCcpO1xuICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvbCcpO1xuICAgIGNvbC53aWR0aCA9ICc4MHB4JztcbiAgICBjb2xncm91cC5wcmVwZW5kKGNvbCk7XG4gICAgXG4gICAgdGFibGUucHJlcGVuZChoZWFkZXIpO1xuXG4gICAgbGV0IGNudCA9IDA7XG4gICAgdGFibGUucXVlcnlTZWxlY3RvckFsbCgndHInKS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGlmIChjbnQgIT09IDApIHtcbiAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0ZC5jbGFzc05hbWUgPSBcImV4Y2VsXCJcbiAgICAgICAgdGQuYXBwZW5kKGRpdik7XG4gICAgICAgIGRpdi5pbm5lclRleHQgPSBjbnQudG9TdHJpbmcoKTtcbiAgICAgICAgcm93LnByZXBlbmQodGQpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgdGguYXBwZW5kKGRpdik7XG4gICAgICAgIHJvdy5wcmVwZW5kKHRoKTtcbiAgICAgIH1cbiAgICAgIGNudCsrO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRhYmxlO1xuICB9XG5cbiAgY29sTmFtZShuKSB7XG4gICAgY29uc3Qgb3JkQSA9ICdhJy5jaGFyQ29kZUF0KDApO1xuICAgIGNvbnN0IG9yZFogPSAneicuY2hhckNvZGVBdCgwKTtcbiAgICBjb25zdCBsZW4gPSBvcmRaIC0gb3JkQSArIDE7XG5cbiAgICBsZXQgcyA9IFwiXCI7XG4gICAgd2hpbGUobiA+PSAwKSB7XG4gICAgICBzID0gU3RyaW5nLmZyb21DaGFyQ29kZShuICUgbGVuICsgb3JkQSkgKyBzO1xuICAgICAgbiA9IE1hdGguZmxvb3IobiAvIGxlbikgLSAxO1xuICAgIH1cbiAgICByZXR1cm4gcztcbiAgfVxufVxuIl19