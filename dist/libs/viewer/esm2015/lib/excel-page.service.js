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
        return new XMLSerializer().serializeToString(doc);
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
        table.prepend(header);
        /** @type {?} */
        let cnt = 0;
        table.querySelectorAll('tr').forEach((/**
         * @param {?} row
         * @return {?}
         */
        row => {
            /** @type {?} */
            const td = document.createElement('td');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtcGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9leGNlbC1wYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBS3pDLE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0I7SUFDQSxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxJQUFJOztjQUNYLEdBQUcsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDOztjQUN4RCxLQUFLLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7O1lBQ3BDLGtCQUFrQixHQUFHLENBQUM7O2NBQ3BCLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxtQ0FBbUMsQ0FBQztRQUVuRixpQkFBaUIsQ0FBQyxPQUFPOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDOUIsa0JBQWtCLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEcsQ0FBQyxFQUFDLENBQUM7O2NBRUcsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDO1FBQzdELEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWpELE9BQU8sSUFBSSxhQUFhLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUs7O2NBQ25CLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUM5QyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUU1QyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFDOztrQkFDeEIsRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3ZDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN2QztRQUVELEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7O1lBRWxCLEdBQUcsR0FBRyxDQUFDO1FBQ1gsS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxHQUFHLENBQUMsRUFBRTs7a0JBQ25DLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztZQUN2QyxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ2IsRUFBRSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzlCLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDakI7aUJBQ0k7Z0JBQ0gsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNqQjtZQUNELEdBQUcsRUFBRSxDQUFDO1FBQ1IsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLENBQUM7O2NBQ0QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOztjQUN4QixJQUFJLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7O2NBQ3hCLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUM7O1lBRXZCLENBQUMsR0FBRyxFQUFFO1FBQ1YsT0FBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1osQ0FBQyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7O1lBOURGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEV4Y2VsUGFnZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGdldFVwZGF0ZWRQYWdlKGRhdGEpIHtcbiAgICBjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGRhdGEsIFwidGV4dC9odG1sXCIpO1xuICAgIGNvbnN0IHRhYmxlID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XG4gICAgbGV0IG51bUNlbGxzSW5GaXJzdFJvdyA9IDA7XG4gICAgY29uc3QgY2VsbHNGcm9tRmlyc3RSb3cgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgndGFibGUgPiB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkIHRkJyk7XG5cbiAgICBjZWxsc0Zyb21GaXJzdFJvdy5mb3JFYWNoKGVsbSA9PiB7XG4gICAgICBudW1DZWxsc0luRmlyc3RSb3cgKz0gZWxtLmF0dHJpYnV0ZXNbJ2NvbHNwYW4nXSA/IHBhcnNlSW50KGVsbS5hdHRyaWJ1dGVzWydjb2xzcGFuJ10udmFsdWUsIDEwKSA6IDE7XG4gICAgfSk7XG4gXG4gICAgY29uc3QgbmV3VGFibGUgPSB0aGlzLmNyZWF0ZUhlYWRlcihudW1DZWxsc0luRmlyc3RSb3csIHRhYmxlKTtcbiAgICBkb2MucXVlcnlTZWxlY3RvcigndGFibGUnKS5yZXBsYWNlV2l0aChuZXdUYWJsZSk7XG5cbiAgICByZXR1cm4gbmV3IFhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyhkb2MpO1xuICB9XG5cbiAgY3JlYXRlSGVhZGVyKG51bUNvbHMsIHRhYmxlKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xuICAgIGhlYWRlci5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKSk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtQ29sczsgKytpKXtcbiAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgIHRoLmlubmVyVGV4dCA9IHRoaXMuY29sTmFtZShpKTtcbiAgICAgIGhlYWRlci5xdWVyeVNlbGVjdG9yKFwidHJcIikuYXBwZW5kKHRoKTtcbiAgICB9XG4gICAgXG4gICAgdGFibGUucHJlcGVuZChoZWFkZXIpO1xuXG4gICAgbGV0IGNudCA9IDA7XG4gICAgdGFibGUucXVlcnlTZWxlY3RvckFsbCgndHInKS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICBpZiAoY250ICE9PSAwKSB7XG4gICAgICAgIHRkLmlubmVyVGV4dCA9IGNudC50b1N0cmluZygpO1xuICAgICAgICByb3cucHJlcGVuZCh0ZCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcm93LnByZXBlbmQodGQpO1xuICAgICAgfVxuICAgICAgY250Kys7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFibGU7XG4gIH1cblxuICBjb2xOYW1lKG4pIHtcbiAgICBjb25zdCBvcmRBID0gJ2EnLmNoYXJDb2RlQXQoMCk7XG4gICAgY29uc3Qgb3JkWiA9ICd6Jy5jaGFyQ29kZUF0KDApO1xuICAgIGNvbnN0IGxlbiA9IG9yZFogLSBvcmRBICsgMTtcblxuICAgIGxldCBzID0gXCJcIjtcbiAgICB3aGlsZShuID49IDApIHtcbiAgICAgIHMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG4gJSBsZW4gKyBvcmRBKSArIHM7XG4gICAgICBuID0gTWF0aC5mbG9vcihuIC8gbGVuKSAtIDE7XG4gICAgfVxuICAgIHJldHVybiBzO1xuICB9XG59XG4iXX0=