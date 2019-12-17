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
     * @param {?} data
     * @return {?}
     */
    getPageWithoutHeader(data) {
        /** @type {?} */
        const doc = new DOMParser().parseFromString(data, "text/html");
        doc.querySelector('colgroup').remove();
        /** @type {?} */
        const newTable = doc.querySelector('table');
        newTable.deleteRow(0);
        newTable.querySelectorAll('tr').forEach((/**
         * @param {?} row
         * @return {?}
         */
        row => {
            row.deleteCell(0);
        }));
        doc.querySelector('table').replaceWith(newTable);
        /** @type {?} */
        const resultData = new XMLSerializer().serializeToString(doc);
        return resultData;
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
            th.setAttribute("contenteditable", "false");
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
                div.setAttribute("contenteditable", "false");
                row.prepend(td);
            }
            else {
                /** @type {?} */
                const th = document.createElement('th');
                th.append(div);
                div.setAttribute("contenteditable", "false");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtcGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2V4Y2VsLXBhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFLekMsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQjtJQUNBLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLElBQUk7O2NBQ1gsR0FBRyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUM7O2NBQ3hELEtBQUssR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQzs7WUFDcEMsa0JBQWtCLEdBQUcsQ0FBQzs7Y0FDcEIsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDLG1DQUFtQyxDQUFDO1FBRW5GLGlCQUFpQixDQUFDLE9BQU87Ozs7UUFBQyxHQUFHLENBQUMsRUFBRTtZQUM5QixrQkFBa0IsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RyxDQUFDLEVBQUMsQ0FBQzs7Y0FFRyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUM7UUFDN0QsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7O2NBRTNDLFVBQVUsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQztRQUM3RCxxRUFBcUU7O1FBQXJFLHFFQUFx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Q3ZDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsR0FBRyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDN0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNqQjtZQUNELEdBQUcsRUFBRSxDQUFDO1FBQ1IsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLENBQUM7O2NBQ0QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOztjQUN4QixJQUFJLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7O2NBQ3hCLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUM7O1lBRXZCLENBQUMsR0FBRyxFQUFFO1FBQ1YsT0FBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1osQ0FBQyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7O1lBN0ZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeGNlbFBhZ2VTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIGdldFVwZGF0ZWRQYWdlKGRhdGEpIHtcclxuICAgIGNvbnN0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZGF0YSwgXCJ0ZXh0L2h0bWxcIik7XHJcbiAgICBjb25zdCB0YWJsZSA9IGRvYy5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xyXG4gICAgbGV0IG51bUNlbGxzSW5GaXJzdFJvdyA9IDA7XHJcbiAgICBjb25zdCBjZWxsc0Zyb21GaXJzdFJvdyA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKCd0YWJsZSA+IHRib2R5ID4gdHI6Zmlyc3QtY2hpbGQgdGQnKTtcclxuXHJcbiAgICBjZWxsc0Zyb21GaXJzdFJvdy5mb3JFYWNoKGVsbSA9PiB7XHJcbiAgICAgIG51bUNlbGxzSW5GaXJzdFJvdyArPSBlbG0uYXR0cmlidXRlc1snY29sc3BhbiddID8gcGFyc2VJbnQoZWxtLmF0dHJpYnV0ZXNbJ2NvbHNwYW4nXS52YWx1ZSwgMTApIDogMTtcclxuICAgIH0pO1xyXG4gXHJcbiAgICBjb25zdCBuZXdUYWJsZSA9IHRoaXMuY3JlYXRlSGVhZGVyKG51bUNlbGxzSW5GaXJzdFJvdywgdGFibGUpO1xyXG4gICAgZG9jLnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJykucmVwbGFjZVdpdGgobmV3VGFibGUpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdERhdGEgPSBuZXcgWE1MU2VyaWFsaXplcigpLnNlcmlhbGl6ZVRvU3RyaW5nKGRvYylcclxuICAgIC8vIHdvcmstYXJvdW5kIGZvciBGRiB3aGljaCBpcyBhZGRzIGEwIG5hbWVzcGFjZSBkdXJpbmcgc2VyaWFsaXphdGlvblxyXG4gICAgcmV0dXJuIHJlc3VsdERhdGEucmVwbGFjZSgvYTA6L2csXCJcIikucmVwbGFjZSgvOmEwL2csXCJcIik7XHJcbiAgfVxyXG5cclxuICBnZXRQYWdlV2l0aG91dEhlYWRlcihkYXRhKSB7XHJcbiAgICBjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGRhdGEsIFwidGV4dC9odG1sXCIpO1xyXG4gICAgZG9jLnF1ZXJ5U2VsZWN0b3IoJ2NvbGdyb3VwJykucmVtb3ZlKCk7XHJcbiAgICBjb25zdCBuZXdUYWJsZSA9IGRvYy5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xyXG4gICAgbmV3VGFibGUuZGVsZXRlUm93KDApO1xyXG5cclxuICAgIG5ld1RhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RyJykuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICByb3cuZGVsZXRlQ2VsbCgwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvYy5xdWVyeVNlbGVjdG9yKCd0YWJsZScpLnJlcGxhY2VXaXRoKG5ld1RhYmxlKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHREYXRhID0gbmV3IFhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyhkb2MpO1xyXG4gICAgcmV0dXJuIHJlc3VsdERhdGE7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVIZWFkZXIobnVtQ29scywgdGFibGUpe1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKTtcclxuICAgIGhlYWRlci5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKSk7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG51bUNvbHM7ICsraSl7XHJcbiAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgICAgdGguaW5uZXJUZXh0ID0gdGhpcy5jb2xOYW1lKGkpO1xyXG4gICAgICB0aC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgXCJmYWxzZVwiKTtcclxuICAgICAgaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoXCJ0clwiKS5hcHBlbmQodGgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBjb2xncm91cCA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3IoJ2NvbGdyb3VwJyk7XHJcbiAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb2wnKTtcclxuICAgIGNvbC53aWR0aCA9ICc4MHB4JztcclxuICAgIGNvbGdyb3VwLnByZXBlbmQoY29sKTtcclxuICAgIFxyXG4gICAgdGFibGUucHJlcGVuZChoZWFkZXIpO1xyXG5cclxuICAgIGxldCBjbnQgPSAwO1xyXG4gICAgdGFibGUucXVlcnlTZWxlY3RvckFsbCgndHInKS5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBpZiAoY250ICE9PSAwKSB7XHJcbiAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIHRkLmNsYXNzTmFtZSA9IFwiZXhjZWxcIlxyXG4gICAgICAgIHRkLmFwcGVuZChkaXYpO1xyXG4gICAgICAgIGRpdi5pbm5lclRleHQgPSBjbnQudG9TdHJpbmcoKTtcclxuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgcm93LnByZXBlbmQodGQpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgICAgICB0aC5hcHBlbmQoZGl2KTtcclxuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgcm93LnByZXBlbmQodGgpO1xyXG4gICAgICB9XHJcbiAgICAgIGNudCsrO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRhYmxlO1xyXG4gIH1cclxuXHJcbiAgY29sTmFtZShuKSB7XHJcbiAgICBjb25zdCBvcmRBID0gJ2EnLmNoYXJDb2RlQXQoMCk7XHJcbiAgICBjb25zdCBvcmRaID0gJ3onLmNoYXJDb2RlQXQoMCk7XHJcbiAgICBjb25zdCBsZW4gPSBvcmRaIC0gb3JkQSArIDE7XHJcblxyXG4gICAgbGV0IHMgPSBcIlwiO1xyXG4gICAgd2hpbGUobiA+PSAwKSB7XHJcbiAgICAgIHMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG4gJSBsZW4gKyBvcmRBKSArIHM7XHJcbiAgICAgIG4gPSBNYXRoLmZsb29yKG4gLyBsZW4pIC0gMTtcclxuICAgIH1cclxuICAgIHJldHVybiBzO1xyXG4gIH1cclxufVxyXG4iXX0=